<!doctype html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Videojuegos API</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    </head>
    <body>
        <header class="bg-dark text-white text-center p-2">
            <h1>Videojuegos API</h1>
        </header>
        <div class="container bg-dark text-white mt-3 rounded py-3">
            <h3 class="text-center mb-1">OBTENER VIDEJUEGOS</h3><hr>
            <h4>Endpoint: <a href="http://localhost/13-videojuegosAPI/API/obtenerVideojuegos.php">videojuegosAPI/API/obtenerVideojuegos.php</a></h4>
            <h4>Respuesta:</h4>
            <pre>
                [
                    {
                    "id_juego": 1,
                    "nombre_videojuego": "Spiderman",
                    "desripcion_videojuego": "Prueba de spiderman 1",
                    "url_portada": "https://blog.latam.playstation.com/uploads/sites/3/2022/12/8db98132cfed8acc2c19d381bc34c17c80768e50.jpg",
                    "id_categoria": 1,
                    "nombre_categoria": "AcciÃ³n",
                    "descripcion_categoria": "Mucha acciÃ³n"
                    }
                ]
            </pre>
        </div>
        <div class="container bg-dark text-white mt-3 rounded py-3">
            <h3 class="text-center mb-1">INSERTAR VIDEOJUEGO </h3><hr>
            <h4>Endpoint: <a href="http://localhost/13-videojuegosAPI/API/insertarVideojuego.php">videojuegosAPI/API/insertarVideojuego.php</a></h4>
            <h4>Respuesta:</h4>
            <pre>
                EXITO: {
                        "Estado operacion": true,
                        "Mensaje": "Dato ingresado correctamente"
                        }

                ERROR: {
                        "Estado operacion": false,
                        "Razon": "ERROR EN DATOS AL INSERTAR"
                        }
            </pre>
        </div>
        <div class="container bg-dark text-white mt-3 rounded py-3">
            <h3 class="text-center mb-1">ACTUALIZAR VIDEOJUEGO</h3><hr>
            <h4>Endpoint: <a href="http://localhost/13-videojuegosAPI/API/actualizarVideojuego.php">videojuegosAPI/API/actualizarVideojuego.php</a></h4>
            <h4>Respuesta:</h4>
            <pre>
                EXITO: {
                        "Estado operacion": true,
                        "Mensaje": "Dato actualizado con exito"
                        }

                ERROR: {
                        "Estado operacion": false,
                        "Razon": "ERROR EN DATOS AL ACTUALIZAR"
                        }
            </pre>
        </div>
        <div class="container bg-dark text-white mt-3 rounded py-3">
            <h3 class="text-center mb-1">ELIMINAR VIDEOJUEGO</h3><hr>
            <h4>Endpoint: <a href="http://localhost/13-videojuegosAPI/API/eliminarVideojuego.php">videojuegosAPI/API/eliminarVideojuego.php</a></h4>
            <h4>Respuesta:</h4>
            <pre>
                EXITO: {
                        "Estado operacion": true,
                        "Mensaje": "Dato eliminado correctamente"
                        }

                ERROR: {
                        "Estado operacion": false,
                        "Razon": "ERROR EN DATOS AL ELIMINAR"
                        }
            </pre>
        </div>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
    </body>
</html>