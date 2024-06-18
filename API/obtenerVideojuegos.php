<?php 
    include '../DB/conexion.php';

    $consulta = $base_datos->query("SELECT videojuego.*,categoria.* FROM videojuego JOIN categoria on videojuego.id_categoria = categoria.id_categoria");
    $respuesta = $consulta->fetchALL(PDO::FETCH_ASSOC);

    $respuesta = mb_convert_encoding($respuesta,'UTF-8','iso-8859-1');
    
    echo json_encode($respuesta);
?> 