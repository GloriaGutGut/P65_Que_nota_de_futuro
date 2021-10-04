<template>
    <div>
        <form class="row form-ingreso">
            <div class="col-12 col-lg-1"></div>
            <div class="col-12 col-lg-5" style="align-items: center;">
                <p>Ingrese su nombre:<input type="text" id="nombre"></p>
            </div>
            <div class="col-12 col-lg-5" >
                <p>Ingrese su clave: <input type="password" id="clave"></p>
            </div>
            <div class="col-12 col-lg-1" >
                <p><input type="button" value="Aceptar" onclick="verificar()"></p>
            </div>
        </form>
    </div>
</template>