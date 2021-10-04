<template>
  <div id="app">

    <!-- <encabezado v-bind:id="['encabezado']" ></encabezado> -->

    

<!-- servicios -->
    <div class="container-fluid">
      <servicios></servicios>
    </div>
<!-- noticias -->
    <div class="container-fluid">
      <noticias></noticias>
    </div>

<!-- equipo -->
    <div class="container-fluid">
      <div class="row justify-content-center mb-5">
        <div class="col mt-5" v-for="(item, index) of equipo" :key="index">
          <equipo :member="item"></equipo>
        </div>
      </div>
    </div>

    <footer></footer>
    <!-- <h1>{{ title }}</h1> -->
  </div>
</template>

<script>
import Footer from "./components/Footer.vue";
import Equipo from "./components/Equipo.vue";
import Noticias from "./components/Noticias.vue";
import Servicios from "./components/Servicios.vue";

export default {
  name: "App",
  components: {
    Footer,
    Equipo,
    Noticias,
    Servicios,
  },
  data(){
    return {
      title: "Que nota de futuro",
      // encabezado1 : 'encabezado',
      
      team: [
        {
          codigo: 1,
          nombre: "Ana María Giraldo",
          descripcion:
            "Administradora de Empresas Turísticas y Hoteleras, estoy estudiando programación porque quiero hacer parte de la cuarta revolución industrial, soy una apasionada por la enseñanza por que se que el futuro del mundo depende de niños bien preparados y sobremodo muy amados.",
          rol: "Product Owner",
          imagen: "/src/img/Ana María.png",
        },
        {
          codigo: 2,
          nombre: "Gloria Gutiérrez",
          descripcion:
            "Diseñadora Gráfica Publicitaria, deseo a través de la programación ofrecer opciones creativas a diferentes problemas, el proyecto me motivó porque para mis los niños merecen un mejor futuro y considero que la música es importante para la vida y sirve para expresarse, crear vínculos y fomentar valores.",
          rol: "Team Development",
          imagen: "/src/img/Gloria G.png",
        },
        {
          codigo: 3,
          nombre: "Adriana Gislena Gil",
          descripcion:
            "Especialista en Control de Tiempo, Control de Costos y Control de Avance de Proyectos. Experiencia en el Análisis de Sistemas de Información. El Proyecto ¡Que Nota de Futuro! me ofrece la oportunidad de aplicar mis conocimientos con finalidad social.",
          rol: "Team Development",
          imagen: "/src/img/Gislena.png",
        },
        {
          codigo: 4,
          nombre: "Cielo Rueda",
          descripcion:
            "Ingeniero Electrónico, experiencia con Sistemas de Gestión y Sistemas de Análisis de Datos. Me motiva desarrollar una solución donde se pueda tener centralizada la información de los donantes y de los beneficiarios. Educar y culturizar nuestros niños y jovenes haran que ellos forgen nuestro futuro.",
          rol: "Team Development",
          imagen: "/src/img/Cielo R.png",
        },
      ],
    };
  },
};
</script>
