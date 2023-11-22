<?php
defined('BASEPATH') OR exit('No direct script access allowed');
?><!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<title>Welcome to CodeIgniter</title>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="css/estilos.css">
    <script src="js/script.js"></script>
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
<section id="inicio">
    <h1 class="boujee-text">Elevando tu conocimiento</h1>
    <div class="estudiando"><img src="img/estudiando.png" alt="Elevando"></div>
</section>

<section id="recursos">
    <h1>Recursos</h1>
    <div class="container">
    <div class="row">
        <div class="col-md-6 mb-4">
            <div class="card text-center pt-4 border-0">
                <h4 class="mb-0">EJERCICIOS PRÁCTICOS</h4>
                <small class="text-muted mb-3"></small>
                <p class="large-font small-font">Pon a prueba tus conocimientos con la serie de ejercicios que tenemos para ti.
                    &#176;</p>
                <div class="text-center mt-3 mb-4">
                <a href="<?php echo base_url('recursos/ejercicios'); ?>">
                    <img class="city-symbol" src="img/material.png" alt="City">
                </div>
            </div>
            </a>
        </div>
        <div class="col-md-6 mb-4">
            <div class="card text-center pt-4 border-0">
                <h4 class="mb-0">MATERIAL DE APOYO</h4>
                <small class="text-muted mb-3"></small>
                <p class="large-font small-font">Ingresa a nuestro material de apoyo 
                        que te ayudará a conocer sobre las leyes de los exponentes.
                    &#176;</p>
                <div class="text-center mt-3 mb-4">
                <a href="<?php echo base_url('controlador/nueva_vista'); ?>">
                    <img class="city-symbol" src="img/ideas.png" alt="City">
                </div>
            </div>
            </a>
        </div>
    </div>
</div>
</section>
<section id="nosotros">
    <h1>Nosotros</h1>
   

</section>

            
    

    
    </main>


    <?php include 'footer.html'; ?>
   
</body>
</html>
