let catalogo_juegos = document.getElementById('catalogo_juegos');

let modal_actualizar = document.getElementById('modal_actualizar');
let modal_insertar = document.getElementById("modal_insertar");

let cerrar_modal_insertar = document.getElementById('cerrar_modal_insertar');
let btn_eliminar_del_modal = document.getElementById('btn_eliminar_del_modal');
let btn_insertar_modal = document.getElementById('btn_insertar_modal');
let btn_editar_modal = document.getElementById('btn_editar_modal');
let btn_cancelar_del_modal_insertar = document.getElementById('btn_cancelar_del_modal_insertar');
let btn_ingresar_persona = document.getElementById('btn_ingresar_persona');
let btn_cerrar_modal = document.getElementById('cerrar_modal');

let portada_videojuego_modal = document.getElementById("portada_videojuego_modal");
let nombre_videojuego_modal = document.getElementById("nombre_videojuego_modal");
let descripcion_videojuego_modal = document.getElementById("descripcion_videojuego_modal");
let url_portada_videojuego_modal = document.getElementById('url_portada_videojuego_modal');
let id_videojuego_modal = document.getElementById('id_videojuego');

let portada_videojuego_modal_insertar = document.getElementById("portada_videojuego_modal_insertar");
let nombre_videojuego_modal_insertar = document.getElementById("nombre_videojuego_modal_insertar");
let descripcion_videojuego_modal_insertar = document.getElementById("descripcion_videojuego_modal_insertar");
let url_portada_videojuego_modal_insertar = document.getElementById('url_portada_videojuego_modal_insertar');
let categoria_videojuego_modal_insertar = document.getElementById('categoria_videojuego_modal_insertar');


btn_cerrar_modal.addEventListener("click",()=>{
    modal_actualizar.style.display = "none";
});
cerrar_modal_insertar.addEventListener("click",()=>{
    modal_insertar.style.display = "none";
});

btn_ingresar_persona.addEventListener("click",()=>{
    url_portada_videojuego_modal_insertar.value = "";
    nombre_videojuego_modal_insertar.value = "";
    descripcion_videojuego_modal_insertar.value = "";
    categoria_videojuego_modal_insertar.value = "";
    portada_videojuego_modal_insertar.src = "";
    
    btn_insertar_modal.addEventListener("click",()=>{
        insertarNuevoVideojuego(url_portada_videojuego_modal_insertar.value,nombre_videojuego_modal_insertar.value,descripcion_videojuego_modal_insertar.value,categoria_videojuego_modal_insertar.value );
    });
    btn_cancelar_del_modal_insertar.addEventListener("click",()=>{
        modal_insertar.style.display = "none";
    });
    url_portada_videojuego_modal_insertar.addEventListener("input", ()=> {
        portada_videojuego_modal_insertar.src = url_portada_videojuego_modal_insertar.value;
    });
    
    modal_insertar.style.display = "block";
});

function imprimirCatalogoJuegos(){
    fetch("http://localhost/13-videojuegosAPI/API/obtenerVideojuegos.php")
    .then( respuesta => respuesta.json())
    .then(datos =>{
        console.log(datos);
        for(let i = 0;i < datos.length;i++){
            const card_videojuego = document.createElement("div");
            card_videojuego.setAttribute("class","contenedor_videojuego");
            card_videojuego.addEventListener("click",()=>{
                modal_actualizar.style.display = "block";
                imprimir_datos_modal(datos[i]);
            });

            const nombre_videojuego = document.createElement("p");
            nombre_videojuego.setAttribute("class","nombre_videojuego juego_nombre fs-4 fw-bold");

            const portada_videojuego = document.createElement("img");
            portada_videojuego.setAttribute("class","portada_videojuego");

            const categoria_videojuego = document.createElement("span");
            categoria_videojuego.textContent = datos[i].nombre_categoria;
            categoria_videojuego.setAttribute("class","text-left");

            portada_videojuego.src = datos[i].url_portada
            nombre_videojuego.innerText = datos[i].nombre_videojuego;

            card_videojuego.appendChild(portada_videojuego);
            card_videojuego.appendChild(categoria_videojuego);
            card_videojuego.appendChild(nombre_videojuego);
            catalogo_juegos.appendChild(card_videojuego); 

        }
    });
}
imprimirCatalogoJuegos();

function imprimir_datos_modal(videojuegoActual){
    console.log(videojuegoActual);

    portada_videojuego_modal.src = videojuegoActual.url_portada;
    url_portada_videojuego_modal.value = videojuegoActual.url_portada;
    id_videojuego_modal.innerText = videojuegoActual.id_juego;
    nombre_videojuego_modal.value = videojuegoActual.nombre_videojuego;
    descripcion_videojuego_modal.value = videojuegoActual.descripcion_videojuego;

    btn_editar_modal.addEventListener("click",()=>{
        actualizarVideojuego(id_videojuego_modal.innerText);
    });

    btn_eliminar_del_modal.addEventListener("click",()=>{
        eliminarJuego(id_videojuego_modal.innerText);
    });
    url_portada_videojuego_modal.addEventListener("input", ()=> {
        portada_videojuego_modal.src = url_portada_videojuego_modal.value;
    });
}


function insertarNuevoVideojuego(portada,nombre,descripcion,categoria){
    console.log(nombre);
    let nuevoJuego = new FormData();
    nuevoJuego.append("nombre_videojuego",nombre);
    nuevoJuego.append("descripcion_videojuego",descripcion);
    nuevoJuego.append("url_portada",portada);
    nuevoJuego.append("id_categoria",categoria);

    let configuracion = {
        method: "POST",
        headers:{
            "Accept":"application/json",
        },
        body:nuevoJuego,
    }

    fetch("http://localhost/13-videojuegosAPI/API/insertarVideojuego.php",configuracion)
    .then(respuesta => respuesta.json())
    .then(datos =>{
        console.log(datos);
        window.location.reload();
    });
}

function actualizarVideojuego(id){
    
    portada = url_portada_videojuego_modal.value;
    nombre = nombre_videojuego_modal.value;
    descripcion = descripcion_videojuego_modal.value;

    let datosActualizarVideojuego = new FormData();
    datosActualizarVideojuego.append("id_juego",id);
    datosActualizarVideojuego.append("nombre_videojuego",nombre);
    datosActualizarVideojuego.append("descripcion_videojuego",descripcion);
    datosActualizarVideojuego.append("url_portada",portada);

    console.log(id,nombre,descripcion,portada);
    
    let configuracion = {
        method: "POST",
        headers:{
            "Accept":"application/json",
        },
        body:datosActualizarVideojuego,
    }

    fetch("http://localhost/13-videojuegosAPI/API/actualizarVideojuego.php",configuracion)
    .then(respuesta => respuesta.json())
    .then(datos => {
        window.location.reload();
        console.log(datos);
    });

}

function eliminarJuego(id){
    let id_juego_eliminar = new FormData();
    id_juego_eliminar.append("id_juego",id);

    let configuracion = {
        method: "POST",
        headers:{
            "Accept":"application/json",
        },
        body:id_juego_eliminar,
    };

    let confirmacionEliminacion = confirm("¿Está seguro que desea eliminar ese juego?");
    if(confirmacionEliminacion){
        fetch("http://localhost/13-videojuegosAPI/API/eliminarVideojuego.php",configuracion)
        .then(respuesta => respuesta.json())
        .then(datos =>{
            console.log(datos);
            window.location.reload();
        });
    }else{
        window.location.reload();
        console.log("Se ha cancelado la eliminacion del juego");
    }
    
}