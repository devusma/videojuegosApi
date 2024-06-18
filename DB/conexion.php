<?php
    header("Content-Type: application/json");
    header("Access-Control-Allow-Origin: * ");
    header("Access-Control-Allow-Methods: GET, POST");
    header("Access-Control-Allow-Headers: Content-Type");


    $host = "bt6gkvksebhgizvuuhhf-mysql.services.clever-cloud.com";
    $user = "ubzzx02ue36cldec";
    $password = "uYdnO3UdUKpxY6vu3klx";
    $database = "bt6gkvksebhgizvuuhhf";

    try {
        $base_datos = new PDO("mysql:host=$host; dbname=$database",$user,$password);
        
    } catch (Exception $e) {
        echo "ERROR!!!!!".$e;
    }
?>