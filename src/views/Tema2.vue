<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="fade-left")
      .titulo-principal__numero
        span 2
      h1 Afectaciones y acciones sin daño

    .cajon-b.color-secundario.p-3        
      p(data-aos="fade-down") El sistema de intervención mediante las acciones sin daño pretende lograr una comprensión del contexto y de las dinámicas primarias que allí existan para de este modo desarrollar un plan de acción que evite los daños y perjuicios para la comunidad o el territorio.  

    .row.justify-content-center.align-items-center.mt-5.cajon.color-acento-botones(data-aos="fade-left") 
      .col-lg-7        
        p.mb-0.ps-3 De ahí que la implementación de un sistema acorde con los postulados de un Estado social de derecho deba adoptar el concepto de acción sin daño, y consecuencialmente extender los alcances de la noción clásica de planeación que se ha propuesto y desarrollado en los procedimientos contractuales emprendidos por las entidades públicas. Es indispensable señalar que, en Colombia, esta iniciativa no solo debe dirigirse a los grupos sociales afectados por el conflicto armado, sino que también tiene que responder a todos aquellos sectores que han sido marginados o se han visto afectados por la pobreza, la discriminación y la segregación social. (Duque, 2016, p. 6).
      .col-lg-5.p-0
        img(data-aos="zoom-in")(src='@/assets/curso/temas/img30.jpg', alt='')    
    Separador 
</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
