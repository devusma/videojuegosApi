<?php 
    include "../DB/conexion.php";

    if(!empty($_POST["id_juego"])){
        $id_videojuego = $_POST["id_juego"];

        try {
            $query_actualizar_videojueo = $base_datos->prepare("DELETE FROM videojuego WHERE id_juego = :id");
            $query_actualizar_videojueo->bindParam(':id',$id_videojuego);
            $ejecucion = $query_actualizar_videojueo->execute();

            if($ejecucion && $query_actualizar_videojueo->rowCount() != 0){
                $respuesta = [
                    "Estado operacion"=> TRUE,
                    'Razon' => "Dato eliminado correctamente"
                ];
                echo json_encode($respuesta);
            }else{
                $respuesta = [
                    "Estado operacion"=> FALSE,
                    'Razon' => "No se ha podido eliminar el dato"
                ];
                echo json_encode($respuesta);
            }
        } catch (Exception $e) {
            echo "Error: " . $e->getMessage();
        }

    }else{
        $respuesta = [
            "Estado operacion"=> FALSE,
            'Razon' => "ERROR EN DATOS AL ELIMINAR"
        ];
        echo json_encode($respuesta);
    }

?>