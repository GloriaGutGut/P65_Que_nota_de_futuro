<template>
    <div id="news" class="news-section">
            <div class="row title-container">
                <h2>NOTICIAS</h2>
            </div>
            <div class="row">
                <article class="col-12 col-md-6 col-lg-6">
                    <div class="news-header">
                        <a class="page-link" href="http://musicthinkshout.com/2016/11/02/carta-anonima-de-un-profesor-de-escuela-de-musica-y-reflexion/">
                            <img src="img/carta.jpg" alt="carta manuscrita">
                            <div class="velo">Carta anónima de un profesor de música</div>
                        </a>
                        <h2 class="news-info__title">
                            <a href="http://musicthinkshout.com/2016/11/02/carta-anonima-de-un-profesor-de-escuela-de-musica-y-reflexion/">
                                CARTA ANÓNIMA DE UN PROFESOR DE MÚSICA
                            </a>
                        </h2>
                    </div>
                    <p class="news-info__text">
                        Valor es lo que necesita la música como herramienta para educar y humanizar. Dar valor es creer en el proyecto socio-artístico en sí mismo, tomárselo en serio y respetarlo. La institución educativa y las clases de música integran lo que se denomina una “comunidad artística de aprendizaje”.  La práctica musical refuerza los valores que son elementos integrantes de la “inteligencia emocional”, vital para el éxito personal y social.
                    </p> 
                </article>

                <article class="col-12 col-md-6 col-lg-6">
                    <div class="news-header">
                        <a class="page-link" href="http://www.viajerosdelpentagrama.gov.co/Joomla/index.php/14-comunidad/contenido-valioso/120-la-educacion-musical-en-colombia-desafios-y-realidades-vp">
                            <img src="img/Educacionmusical.jpg" alt="reunion maestros">
                            <div class="velo">La Educación Musical en Colombia</div>
                        </a>
                        <h2 class="news-info__title">
                            <a href="http://www.viajerosdelpentagrama.gov.co/Joomla/index.php/14-comunidad/contenido-valioso/120-la-educacion-musical-en-colombia-desafios-y-realidades-vp">
                                LA EDUCACIÓN MUSICAL EN COLOMBIA: DESAFÍOS Y REALIDADES
                            </a>
                        </h2>
                    </div>
                    <p class="news-info__text">
                        En esta entrevista, Andrés Samper, presidente del Foro Latinoamericano de Educación Musical, FLADEM, y docente de música de la Pontificia Universidad Javeriana, habla sobre la formación musical en Colombia, cómo estamos en comparación con América Latina y cuáles son los desafíos que tiene el sistema educativo actual.
                    </p>
                </article>

                <article class="col-12 col-md-6 col-lg-6">
                    <div class="news-header">
                        <a class="page-link" href="https://colombia.unir.net/actualidad-unir/musicoterapia/">
                            <img src="img/musicoterapia.jpg" alt="jóven tocando Ukelele">
                            <div class="velo">¿Qué es la Musicoterapia?</div>
                        </a>
                        <h2 class="news-info__title">
                            <a href="https://colombia.unir.net/actualidad-unir/musicoterapia/">
                                ¿QUÉ ES LA MUSICOTERAPIA Y CUALES SON SUS BENEFICIOS PARA LA SALUD?
                            </a>
                        </h2>
                    </div>
                    <p class="news-info__text">
                        La Musicoterapia es una terapia que utiliza la música con el objeto de restaurar, mantener e incrementar la salud mental o física de la persona, estableciendo un espacio de comunicación que permite favorecer tanto la introspección como la extroversión.
                    </p>
                </article>

                <article class="col-12 col-md-6 col-lg-6">
                    <div class="news-header">
                        <a class="page-link" href="https://www.maguare.gov.co">
                            <img src="img/maguare.jpg" alt="imagen maguare">
                            <div class="velo">¡Disfruta de Maguaré!</div>
                        </a>
                        <h2 class="news-info__title">
                            <a href="https://www.maguare.gov.co">
                                ¡DISFRUTA DE MAGUARÉ, EL PORTAL PARA NIÑOS!
                            </a>
                        </h2>
                    </div>
                    <p class="news-info__text">
                        Te invitamos a disfrutar de Maguaré, el portal para niños de la Estrategia Digital en Cultura y Primera Infancia del Ministerio de Cultura. Cuenta con más de 600 contenidos entre juegos, canciones, videos, libros y aplicaciones para que los niños de primera infancia, en compañía de un adulto, puedan explorar y divertirse a través de su voz, su cuerpo, su imaginación, sus movimientos y todos sus sentidos.
                    </p>
                </article>
            </div>
        </div>
</template>

<script>
export default {
  name: "Noticias",
  data() {
    return {
      movies: null,
    };
  },
  methods:{
  },
};
</script>

<style scoped>
    img{
    max-width: 150px;
    };
</style>
