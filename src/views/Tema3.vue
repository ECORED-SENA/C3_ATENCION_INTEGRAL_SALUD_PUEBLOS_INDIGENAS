<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="fade-left")
      .titulo-principal__numero
        span 3
      h1 Apropiaciones y enajenaciones
    .row.justify-content-center.align-items-center
      .col-lg-7
        .row.justify-content-center.align-items-center
          .col-lg-12
            .col-color3(data-aos="slide-down")
              .bloque-texto-b.p-4(data-aos="fade-down")
                .bloque-texto-b__texto
                  i.color-green.fas.fa-quote-left
                  p El fortalecimiento de la cultura propia y la orientación y autogestión por parte de los pueblos indígenas, presentan soluciones propias e insustituibles que solamente se encuentran en el desarrollo de su autonomía, con reales posibilidades de autodeterminación, real poder político de sus organizaciones y autogobierno, con la capacidad de decidir y con la capacidad de llevar a cabo sus proyectos de desarrollo y el fortalecimiento de su cultura.#[br]
                  p.mb-0 #[b Refiere Bonfil (1978)]
                  i.color-green.fas.fa-quote-right 
      .col-lg-5
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img31.svg', alt='') 

    .row.justify-content-center.align-items-center.mt-5.cajon.color-acento-contenido(data-aos="fade-left") 
      .col-lg-7        
          p(data-aos="fade-down").mb-0.ps-3 Bonfil señala que la autogestión está ligada directamente con la existencia de formas propias de organización y el fortalecimiento de su propia cultura, de su lengua, de su propio control social, control cultural, esto es, apropiar conocimientos e ideas de otras culturas, sin destruir la propia. Como lo afirma Varesse (1992), un pueblo que confía en su propia cultura está en condición de gestionar su propio desarrollo. La preservación del patrimonio cultural y la evolución de la cultura, que es dinámica, no estática, pero no la destrucción del patrimonio cultural por la sustitución exógena que se apoya en la supremacía económico-financiera y en la hegemonía político-cultural.
      .col-lg-5.p-0
        img(data-aos="zoom-in")(src='@/assets/curso/temas/img32.jpg', alt='')  
    Separador 

</template>

<script>
export default {
  name: 'Tema3',
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
