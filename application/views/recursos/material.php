<?php
defined('BASEPATH') OR exit('No direct script access allowed');
?><!DOCTYPE html>
<html lang="en">
<head>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
    <link rel="stylesheet" href="css/estilos.css">

    <title>¡Elevando tu conocimiento! Las leyes de los exponentes</title>
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
                    <a href="<?php echo base_url('elevando/index'); ?>">INICIO</a>
                    <a href="#recursos" class="nav-item nav-link"></a>
                    <a href="#nosotros" class="nav-item nav-link"></a>
                    <div class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            
                        </a>
                        
            </div>
        </div>
                </div>
            </div>
        </nav>
</header>
    <div class="tittle" id="tituloPrincipal">
      <h1>¡Elevando tu conocimiento!</h1>
        <h2>Las leyes de los exponentes</h2>
    
   </div>
   <div class="indicaciones" id="tituloPrincipal">
    <h2>Bienvenido(a) a nuestra sección que te proporcionará material de apoyo según tu preferencia.</h2> 
 </div>
   <div class="accordion accordion-flush" id="accordionFlushExample">
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
              <p class="h2">Aprende el tema observado las siguientes imagenes.</p>
            </button>
          </h2>
          <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body"><p class="h3">Te invitamos a revisar los siguientes elementos en forma de <code>imagenes</code> para conocer sobre las leyes de los exponentes.</p>
                <div id="carouselExample" class="carousel carousel-dark slide">
                    <div class="carousel-inner">
                      <div class="carousel-item active">
                        <img src="img/0o1.png" class="rounded mx-auto d-block w-50" data-bs-toggle="modal" data-bs-target="#modal0o1" alt="Si es 0 o 1">  
                        <!-- Modal -->
                          <div class="modal fade" id="modal0o1" tabindex="-1" aria-labelledby="modal0o1Label" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered modal-xl">
                              <div class="modal-content">
                                <div class="modal-header">
                                  <h1 class="modal-title fs-5" id="modal0o1Label">Si el exponente es 0 a 1...</h1>
                                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                  <img src="img/0o1.png" class="modal-content">  
                                </div>
                              </div>
                            </div>
                          </div>
                          <!-- Modal -->
                      </div>
                      <div class="carousel-item">
                        <img src="img/Negativos.png" class="rounded mx-auto d-block w-50" data-bs-toggle="modal" data-bs-target="#modalNegativos" alt="...">
                          <!-- Modal -->
                          <div class="modal fade" id="modalNegativos" tabindex="-1" aria-labelledby="modalNegativosLabel" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered modal-xl">
                              <div class="modal-content">
                                <div class="modal-header">
                                  <h1 class="modal-title fs-5" id="modalNegativosLabel">Si el exponente es negativo...</h1>
                                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                  <img src="img/Negativos.png" class="modal-content">  
                                </div>
                              </div>
                            </div>
                          </div>
                          <!-- Modal -->
                      </div>
                      <div class="carousel-item">
                        <img src="img/MultiplicacionDivisionMismaBase.png" class="rounded mx-auto d-block w-50" data-bs-toggle="modal" data-bs-target="#modalMismaBaseOperaciones" alt="...">
                          <!-- Modal -->
                          <div class="modal fade" id="modalMismaBaseOperaciones" tabindex="-1" aria-labelledby="modalMismaBaseOperacionesLabel" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered modal-xl">
                              <div class="modal-content">
                                <div class="modal-header">
                                  <h1 class="modal-title fs-5" id="modalMismaBaseOperacionesLabel">Si la base es la misma...</h1>
                                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                  <img src="img/MultiplicacionDivisionMismaBase.png" class="modal-content">  
                                </div>
                              </div>
                            </div>
                          </div>
                          <!-- Modal -->
                      </div>
                      <div class="carousel-item">
                        <img src="img/MultiplicacionDiferenteBaseMismoE.png" class="rounded mx-auto d-block w-50" data-bs-toggle="modal" data-bs-target="#modalDiferenteBaseOperaciones" alt="...">
                          <!-- Modal -->
                          <div class="modal fade" id="modalDiferenteBaseOperaciones" tabindex="-1" aria-labelledby="modalDiferenteBaseOperacionesLabel" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered modal-xl">
                              <div class="modal-content">
                                <div class="modal-header">
                                  <h1 class="modal-title fs-5" id="modalDiferenteBaseOperacionesLabel">Si la base es distinta...</h1>
                                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                  <img src="img/MultiplicacionDiferenteBaseMismoE.png" class="modal-content">  
                                </div>
                              </div>
                            </div>
                          </div>
                          <!-- Modal -->
                      </div>
                      <div class="carousel-item">
                        <img src="img/PotenciaDePotencias.png" class="rounded mx-auto d-block w-50 zoom" data-bs-toggle="modal" data-bs-target="#modalPotencias" alt="...">
                          <!-- Modal -->
                          <div class="modal fade" id="modalPotencias" tabindex="-1" aria-labelledby="modalPotenciasLabel" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered modal-xl">
                              <div class="modal-content">
                                <div class="modal-header">
                                  <h1 class="modal-title fs-5" id="modalPotenciasLabel">Si hay que obtener una potencia de otra...</h1>
                                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                  <img src="img/PotenciaDePotencias.png" class="modal-content">  
                                </div>
                              </div>
                            </div>
                          </div>
                          <!-- Modal -->
                      </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Next</span>
                    </button>
                  </div>             
            
            </div>
          </div>
        </div>
       

        <div class="accordion-item">
    <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
            <p class="h2">Consulta los siguientes videos.</p>
        </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
        <div class="accordion-body">
            <p class="h3">Te invitamos a revisar los <code>videos</code> propuestos que también abordan lo explicado por las imágenes anteriores. Esperamos sean de tu agrado</p>

            <!-- Carrusel de Videos -->
            <div id="videoCarousel" class="carousel carousel-dark slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/j8QfacBt4JQ" title="Video 1" frameborder="0" allowfullscreen></iframe>
                    </div>
                    <div class="carousel-item">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/D71pZ7BqBWE" title="Video 2" frameborder="0" allowfullscreen></iframe>
                    </div>
                    <div class="carousel-item">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/ecKm0JwZlW8" title="Video 3" frameborder="0" allowfullscreen></iframe>
                    </div>
                    <div class="carousel-item">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/7HGLM1UIFZI" title="Video 4" frameborder="0" allowfullscreen></iframe>
                    </div>
                    <div class="carousel-item">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/DthBbN1sv_c" title="Video 5" frameborder="0" allowfullscreen></iframe>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#videoCarousel" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#videoCarousel" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            <!-- Fin del Carrusel de Videos -->

        </div>
    </div>
</div>





<div class="accordion-item">
    <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
            <p class="h2">Explora con la siguiente actividad.</p>
        </button>
    </h2>
    <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
        <div class="accordion-body">
            <!-- Agrega la imagen y vincúlala al enlace -->
            <a href="https://www.jigsawplanet.com/?rc=play&pid=1afcb6501f9b" target="_blank">
                <img class = "rompe" src="img/rompe.jpeg" alt="Explora la actividad" />
            </a>
        </div>
    </div>
</div>

      <?php include('application/views/footer.html'); ?>
</body>
</html>
