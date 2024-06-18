<?php
    include "../DB/conexion.php";

    if(!empty($_POST['id_juego']) && !empty($_POST['nombre_videojuego']) && !empty($_POST['descripcion_videojuego']) && !empty($_POST['url_portada'])) {
        $id_juego = $_POST["id_juego"];
        $nombre_videojuego = $_POST["nombre_videojuego"];
        $descripcion_videojuego = $_POST["descripcion_videojuego"];
        $url_portada = $_POST["url_portada"];

        try {
            $query_actualizar_videojuego = $base_datos->prepare("UPDATE videojuego SET nombre_videojuego=:nombre, descripcion_videojuego=:descripcion, url_portada=:portada WHERE id_juego=:id");
            $query_actualizar_videojuego->bindParam(":nombre", $nombre_videojuego);
            $query_actualizar_videojuego->bindParam(":descripcion", $descripcion_videojuego);
            $query_actualizar_videojuego->bindParam(":portada", $url_portada);
            $query_actualizar_videojuego->bindParam(":id", $id_juego);
            
            $ejecucion = $query_actualizar_videojuego->execute();

            if($ejecucion) {
                $respuesta = [
                    "estado_operacion" => true,
                    "mensaje" => "Dato actualizado con éxito"
                ];
            } else {
                $respuesta = [
                    "estado_operacion" => false,
                    "mensaje" => "El dato no se ha podido actualizar"
                ];
            }
        } catch (Exception $e) {
            $respuesta = [
                "estado_operacion" => false,
                "mensaje" => "Error: " . $e->getMessage()
            ];
        }

        echo json_encode($respuesta);
    } else {
        $respuesta = [
            "estado_operacion" => false,
            "razon" => "ERROR EN DATOS AL ACTUALIZAR"
        ];
        echo json_encode($respuesta);
    }
?>
