const contenedor_categorias = document.getElementById('categorias');
const modal_modificar_categoria = document.getElementById('modal_modificar_categoria');
const modal_insertar_categoria = document.getElementById('modal_insertar_categoria');
const cerrar_modal_modificar_categoria = document.getElementById('cerrar_modal_modificar_categoria');
const cerrar_modal_insertar_categoria = document.getElementById('cerrar_modal_insertar_categoria');

const input_id_categoria = document.getElementById('input_id_categoria');
const input_nombre_categoria = document.getElementById('input_nombre_categoria');
const input_descripcion_categoria = document.getElementById('input_descripcion_categoria');
const input_insertar_nombre_categoria = document.getElementById('input_insertar_nombre_categoria');
const input_insertar_descripcion_categoria = document.getElementById('input_insertar_descripcion_categoria');

const btn_eliminar_categoria = document.getElementById('btn_eliminar_categoria');
const btn_editar_categoria = document.getElementById('btn_editar_categoria');
const btn_cancelar_ingreso_categoria = document.getElementById('btn_cancelar_ingreso_categoria');
const btn_insertar_categoria = document.getElementById('btn_insertar_categoria');
const btn_abrir_ingresar_categoria = document.getElementById('btn_abrir_ingresar_categoria');

btn_abrir_ingresar_categoria.addEventListener("click",()=>{
    modal_insertar_categoria.style.display="block";
    input_insertar_nombre_categoria.value = "";
    input_insertar_descripcion_categoria.value = "";
});

cerrar_modal_modificar_categoria.addEventListener("click",()=>{
    modal_modificar_categoria.style.display="none";
});
cerrar_modal_insertar_categoria.addEventListener("click",()=>{
    modal_insertar_categoria.style.display="none";
});

// botones del CRUD
btn_insertar_categoria.addEventListener("click",()=>{
    insertarNuevaCategoria(input_insertar_nombre_categoria.value,input_insertar_descripcion_categoria.balue);
});
btn_cancelar_ingreso_categoria.addEventListener("click",()=>{
    modal_insertar_categoria.style.display="none";
});
btn_eliminar_categoria.addEventListener("click",()=>{
    eliminarCategoria();
});
btn_editar_categoria.addEventListener("click",()=>{
    actualizarCategoria();
});

function imprimirCategorias(){
    fetch("http://localhost/13-videojuegosAPI/API/obtenerCategorias.php")
    .then( respuesta => respuesta.json())
    .then(categorias =>{
        console.log(categorias);
        for(let i = 0;i < categorias.length;i++){
            const div_categoria_individual = document.createElement("div");
            div_categoria_individual.setAttribute("class","contenedor_categoria text-white");

            const nombre_categoria = document.createElement("p");
            nombre_categoria.setAttribute("class", "nombre_categoria fs-5");

            const icono_editar = document.createElement("i");
            icono_editar.setAttribute("class", " icon_editar_categoria fa-solid fa-pen-to-square text-white");
            const contenedor_texto_icono = document.createElement("span");
            contenedor_texto_icono.appendChild(document.createTextNode(`${categorias[i].id_categoria}. ${categorias[i].nombre_categoria}  `));
            
            contenedor_texto_icono.appendChild(icono_editar);
            nombre_categoria.appendChild(contenedor_texto_icono);
            div_categoria_individual.appendChild(nombre_categoria);
            contenedor_categorias.appendChild(div_categoria_individual);

            icono_editar.addEventListener("click",()=>{
                editarCategoria(categorias[i]);
            });

        }
    });
}
imprimirCategorias();


function insertarNuevaCategoria(nombre,descripcion){
    console.log(nombre);
    let nuevoCategoria = new FormData();
    nuevoCategoria.append("nombre_categoria",nombre);
    nuevoCategoria.append("descripcion_categoria",descripcion);

    let configuracion = {
        method: "POST",
        headers:{
            "Accept":"application/json",
        },
        body:nuevoCategoria,
    }

    fetch("http://localhost/13-videojuegosAPI/API/InsertarCategoria.php",configuracion)
    .then(respuesta => respuesta.json())
    .then(datos =>{
        console.log(datos);
        contenedor_categorias.innerHTML = "";
        imprimirCategorias();
        modal_insertar_categoria.style.display = "none";
    });
}

function editarCategoria(categoria){
    input_id_categoria.value = "";
    input_nombre_categoria.value = "";
    input_descripcion_categoria.value = "";

    console.log(categoria.nombre_categoria);
    modal_modificar_categoria.style.display = "block";
    input_id_categoria.value = categoria.id_categoria;
    input_nombre_categoria.value = categoria.nombre_categoria;
    input_descripcion_categoria.value = categoria.descripcion_categoria;
    
}

function actualizarCategoria(){
    
    id = input_id_categoria.value;
    nombre = input_nombre_categoria.value;
    descripcion = input_descripcion_categoria.value;

    let datosActualizarCategoria = new FormData();
    datosActualizarCategoria.append("id_categoria",id);
    datosActualizarCategoria.append("nombre_categoria",nombre);
    datosActualizarCategoria.append("descripcion_categoria",descripcion);

    console.log(id,nombre,descripcion);
    
    let configuracion = {
        method: "POST",
        headers:{
            "Accept":"application/json",
        },
        body:datosActualizarCategoria,
    }

    fetch("http://localhost/13-videojuegosAPI/API/actualizarCategoria.php",configuracion)
    .then(respuesta => respuesta.json())
    .then(datos => {
        contenedor_categorias.innerHTML = "";
        imprimirCategorias();
        modal_modificar_categoria.style.display = "none";
    });

}

function eliminarCategoria(){
    let id = input_id_categoria.value;
    let id_categoria_eliminar = new FormData();
    id_categoria_eliminar.append("id_categoria",id);

    let configuracion = {
        method: "POST",
        headers:{
            "Accept":"application/json",
        },
        body:id_categoria_eliminar,
    };

    let confirmacionEliminacion = confirm("¿Está seguro que desea eliminar ese juego?");
    if(confirmacionEliminacion){
        fetch("http://localhost/13-videojuegosAPI/API/eliminarCategoria.php",configuracion)
        .then(respuesta => respuesta.json())
        .then(datos =>{
            contenedor_categorias.innerHTML = "";
            imprimirCategorias();
            modal_modificar_categoria.style.display = "none";
        });
    }else{
        modal_modificar_categoria.style.display = "none";
    }
    
}