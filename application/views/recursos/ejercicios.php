<?php
defined('BASEPATH') OR exit('No direct script access allowed');
?><!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<title>Ejercicios</title>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="css/estilos.css">
    <script src="js/script.js"></script>
    <script src="js/ejercicios.js"></script>
</head>
<body>

<header>
        <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
            <div class="container-fluid">
            <a href="#" class="navbar-brand">
                <img src="img/atomo.png" alt="Elevando">
            </a>
                <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse1">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse1">
                <div class="navbar-nav ms-auto">
                    <a href="#" class="nav-item nav-link active">INICIO</a>
                    <a href="#recursos" class="nav-item nav-link">RECURSOS</a>
                    <a href="#nosotros" class="nav-item nav-link">NOSOTROS</a>
                    <div class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            OPCIONES
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="switch-theme">
                            <li><a class="dropdown-item" href="#">Opción 1</a></li>
                            <li><a class="dropdown-item" href="#">Opción 2</a></li>
                            <li><hr class="dropdown-divider"></li>
                            <li>
                                <!-- Reemplaza el botón con un input de tipo checkbox -->
                                <input type="checkbox" id="switch-theme" class="custom-control-input">
                                <label class="custom-control-label" for="switch-theme">Tema</label>

                            </li>
                        </ul>
            </div>
        </div>
                    <!-- <form class="d-flex">
                        <input type="text" class="form-control me-sm-2" placeholder="Search">
                        <button type="submit" class="btn btn-outline-light">Search</button>
                    </form> -->
                </div>
            </div>
        </nav>
</header>

    <main>


            
    

    
    </main>


    <?php include('application/views/footer.html'); ?>
   
</body>
</html>
