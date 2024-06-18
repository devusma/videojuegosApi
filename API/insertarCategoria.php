<?php
    include "../DB/conexion.php";

    if(!empty($_POST["descripcion_categoria"]) && !empty($_POST["nombre_categoria"]) ){
        $descripcion_categoria = $_POST["descripcion_categoria"];
        $nombre_categoria = $_POST["nombre_categoria"];

        try {
            $query_insertar_datos = $base_datos->prepare("INSERT INTO categoria ( nombre_categoria,descripcion_categoria) VALUES (:nombre, :descripcion)");
            $query_insertar_datos->bindParam(":nombre",$nombre_categoria);
            $query_insertar_datos->bindParam(":descripcion",$descripcion_categoria);

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