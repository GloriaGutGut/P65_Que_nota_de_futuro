<template>
    <div class="container-lg header-section">
        <div class="row align-items-center header-container">
            <div class="row banner-lg-12 col-md-6">
                <img class="img-responsive" src="img/encabezado1.jpg" alt="Banner instrumentos" style="height: auto;">
            </div>
            <div class="col-12 col-lg-2 logo-container">
                <img class="logo-container__site-logo" src="img/logo que nota de futuro.png" alt="Logo Que nota de futuro">
            </div>
            <div class="col-12 col-lg-8 site-title">
                <h1>¡QUE NOTA DE FUTURO!</h1>
            </div>
            <div class="col-12 col-lg-2 contadorVisitas">
                <a href="https://www.contadorvisitasgratis.com" title="contador para pagina web"><img src="https://counter10.stat.ovh/private/contadorvisitasgratis.php?c=wk3cbxq7ha8rur949agkaqtkh5ww5bbw" border="0" title="contador para pagina web" alt="contador para pagina web"></a>
            </div>
            <div><marquee><h3>Humanidad hacia otros</h3></marquee>                
            </div>
            
            <!-- Inicio menú navegación -->
            <div class="row col-12 col-lg-12">
                <b-nav class= "nav-list">
                    <ul class="site-nav" style="list-style: none;">
                        <li class="nav-menu-item" >
                            <a href="#services" style="color: rgb(252, 182, 5);  text-decoration: none; font-size: 20px; font-weight: bold;">SERVICIOS</a>
                        </li>
                        <li class="nav-menu-item">
                            <a href="#news" style="color: rgb(252, 182, 5);  text-decoration: none; font-size: 20px; font-weight: bold;">NOTICIAS</a>
                        </li>
                        <li class="nav-menu-item">
                            <a href="#team" style="color: rgb(252, 182, 5); text-decoration: none; font-size: 20px; font-weight: bold;">EQUIPO UBUNTU</a>
                        </li>
                        <li class="nav-menu-item">
                            <a href="#contact" style="color: rgb(252, 182, 5); text-decoration: none; font-size: 20px; font-weight: bold;">CONTACTO</a>
                        </li>
                    </ul>  
                </b-nav>
            </div>            
            <!-- Fin menú navegación -->
        </div>
    </div>
</template>

<script>
    export default {
        name: "Encabezado",
    }
</script>
