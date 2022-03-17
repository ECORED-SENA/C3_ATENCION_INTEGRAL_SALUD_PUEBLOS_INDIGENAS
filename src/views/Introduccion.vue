<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5  
    .titulo-principal.color-acento-contenido(data-aos="fade-left")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center.align-items-center.py-5
      .col-lg-10 
        .cajon-b.color-primario.p-3        
          p(data-aos="fade-down") La discriminación y el racismo han sido determinantes en la vida de los pueblos indígenas, pues debido a ello se han generado grandes vulneraciones a sus derechos, sobre todo, los más fundamentales. En el siguiente recurso, se podrá conocer sobre el despojo de tierras, cómo han sido víctimas de genocidio y desaparición forzada, temas que serán la introducción a este componente formativo. Además, seguir profundizando en temas como el patrimonio cultural y su lenguaje. Bienvenidos:
        
        figure.mt-5(data-aos="fade-left")
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/p_sk9FYRCl4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
