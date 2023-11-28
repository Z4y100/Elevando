<?php
defined('BASEPATH') OR exit('No direct script access allowed');
?><!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<title>Elevando tu conocimiento</title>
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
                            <!-- <li><a class="dropdown-item" href="#">Opción 1</a></li>
                            <li><a class="dropdown-item" href="#">Opción 2</a></li> -->
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
                <a href="<?php echo base_url('elevando/ejercicios'); ?>">
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
                <a href="<?php echo base_url('elevando/material'); ?>">
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

    <div id="descripcion-nosotros">
        <p>
            Este es un sitio web dirigido a estudiantes de nivel secundaria que deseen conocer sobre las leyes de los exponentes y poner en práctica lo aprendido. Se busca llegar a los usuarios mediante el material de apoyo construido con base en las diferentes formas de recibir el conocimiento e interactuar con el contexto donde se aprende según el modelo VAK (Visual-Auditivo-Kinestésico), así como instruir sobre los siguientes tópicos:
        </p>
        <ul>
            <li>Definición de base, exponente y el proceso de potenciación.</li>
            <li>Exponentes con valor 0 ó 1.</li>
            <li>Exponentes negativos.</li>
            <li>Multiplicación o división de potencias con la misma base.</li>
            <li>Multiplicación o división de potencias con el mismo exponente y diferente base.</li>
            <li>Potencia de otra potencia.</li>
        </ul>
    </div>

    <div id="sobre-los-autores">
        <h2>Sobre los Autores</h2>
        <p>
            <strong>Ing. Luisa Reyna Beatriz Ayon Muñoz:</strong> Ingeniera en Computación por la Universidad Autónoma del Estado de México. Actualmente cursa la Maestría en Ciencias de la Computación en el CU Valle de Chalco dentro de la línea de investigación llamada Cómputo Aplicado a la Educación y a los Sistemas de Información. Ha impartido conferencias en instituciones educativas de nivel básico y medio superior para la difusión de la ciencia.
        </p>
        <p>
            <strong>Dr. Felipe de Jesús Matías Torres:</strong> Doctor en Ciencias en Matemática Educativa por el CINVESTAV. Actualmente realiza una estancia posdoctoral en el CU Valle de Chalco. Ha impartido clases a nivel superior y posgrado en distintas materias como Matemáticas Discretas, Geometría Analítica, Objetos de aprendizaje y recursos educativos abiertos, entre otras. Ha publicado diversos artículos en revistas nacionales e internacionales.
        </p>
    </div>
</section>


            
    

    
    </main>


    <?php include 'footer.html'; ?>
   
</body>
</html>
