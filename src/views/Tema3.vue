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
          .col-lg-10
            .col-color3(data-aos="slide-down")
              .bloque-texto-b.p-4(data-aos="fade-down")
                .bloque-texto-b__texto
                  i.color-green.fas.fa-quote-left
                  p Finalmente, la colonización sobre los territorios indígenas, la colonización es un fenómeno constante a todo lo largo de la historia de los pueblos indígenas. El Caribe y el centro de los Andes fueron las primeras regiones que sucumbieron al proceso colonizador, luego vendría la ocupación de las tierras bajas asociada a la apertura de caminos y vías de comunicación y a la explotación de recursos naturales. La Amazonia permaneció relativamente marginada de la vida del resto de la Nación hasta la primera mitad del siglo XX. En la actualidad los resguardos indígenas son un freno a los procesos de colonización. No obstante, persiste la ocupación forzosa de territorios indígenas para la instalación de cultivos ilícitos, la explotación de recursos del bosque y la minería ilegal. #[br]
                  p.mb-0 #[b (Departamento Nacional de Planeación, DNP, 2004).]
                  i.color-green.fas.fa-quote-right 

            .bloque-texto-b.color-acento-botones.p-4.mt-3
              .bloque-texto-b__texto
                i.color-green.fas.fa-quote-left
                h5 Que se debe diferenciar los conceptos de cultura autónoma y cultura apropiada, que corresponden a la cultura propia, en contraposición a los conceptos de cultura enajenada y de cultura impuesta, que son el resultado de la opresión y la violencia cultural.#[br]
                p.mb-0  Bonfil (1978)
                i.color-green.fas.fa-quote-right   

            p(data-aos="fade-down").mt-3 Plantea que se deben fortalecer las formas de organización propias y recuperar lo enajenado (las tierras, el idioma, las tradiciones, el conocimiento ancestral y de su historia, etc.), lo apropiado es los adoptado y adaptado por voluntad, el enriquecimiento de la cultura autónoma, por innovación y etnodesarrollo en un intercambio entre culturas, no lo impuesto por una cultura dominante.
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
