<?php
    include "../DB/conexion.php";

    if(!empty($_POST["nombre_videojuego"]) && !empty($_POST["descripcion_videojuego"]) && !empty($_POST["url_portada"]) && !empty($_POST["id_categoria"])){
        $nombre_videojuego = $_POST["nombre_videojuego"];
        $descripcion_videojuego = $_POST["descripcion_videojuego"];
        $url_portada = $_POST["url_portada"];
        $id_categoria = $_POST["id_categoria"];

        try {
            $query_insertar_datos = $base_datos->prepare("INSERT INTO videojuego (nombre_videojuego, descripcion_videojuego, url_portada, id_categoria) VALUES (:nombre, :descripcion,:portada,:categoria)");
            $query_insertar_datos->bindParam(":nombre",$nombre_videojuego);
            $query_insertar_datos->bindParam(":descripcion",$descripcion_videojuego);
            $query_insertar_datos->bindParam(":portada",$url_portada);
            $query_insertar_datos->bindParam(":categoria",$id_categoria);

            $ejecucion = $query_insertar_datos->execute();

            if($ejecucion && $query_insertar_datos->rowCount() != 0){
                $respuesta = [
                    "Estado operacion"=> TRUE,
                    'Mensaje' => "Dato ingresado correctamente"
                ];
                echo json_encode($respuesta);
            }else{
                $respuesta = [
                    "Estado operacion"=> FALSE,
                    'Razon' => "No se pudo ingresar el dato"
                ];
                echo json_encode($respuesta);
            }
        } catch (Exception $e) {
            echo "Error al realizar insercion".$e->getMessage();
        }
    }else{
        $respuesta = [
            "Estado operacion"=> FALSE,
            'Razon' => "ERROR EN DATOS AL INSERTAR"
        ];
        echo json_encode($respuesta);
    }
?>