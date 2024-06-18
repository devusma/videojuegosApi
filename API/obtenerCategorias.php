<?php 
    include '../DB/conexion.php';

    $consulta = $base_datos->query("SELECT * FROM categoria");
    $respuesta = $consulta->fetchALL(PDO::FETCH_ASSOC);

    $respuesta = mb_convert_encoding($respuesta,'UTF-8','ISO-8859-1');
    
    echo json_encode($respuesta);
?> 