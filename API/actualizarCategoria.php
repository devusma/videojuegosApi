<?php
    include "../DB/conexion.php";

    if(!empty($_POST['id_categoria']) && !empty($_POST['nombre_categoria']) && !empty($_POST['descripcion_categoria'])) {
        $id_categoria = $_POST["id_categoria"];
        $nombre_categoria = $_POST["nombre_categoria"];
        $descripcion_categoria = $_POST["descripcion_categoria"];

        try {
            $query_actualizar_categoria = $base_datos->prepare("UPDATE categoria SET nombre_categoria=:nombre, descripcion_categoria=:descripcion WHERE id_categoria=:id");
            $query_actualizar_categoria->bindParam(":nombre", $nombre_categoria);
            $query_actualizar_categoria->bindParam(":descripcion", $descripcion_categoria);
            $query_actualizar_categoria->bindParam(":id", $id_categoria);
            
            $ejecucion = $query_actualizar_categoria->execute();

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
