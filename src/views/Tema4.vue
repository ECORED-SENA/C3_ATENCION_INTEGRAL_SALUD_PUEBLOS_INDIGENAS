<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="fade-left")
      .titulo-principal__numero
        span 4
      h1 Afectación de la pervivencia y supervivencia

    .cajon-b.color-primario.p-3        
      p(data-aos="fade-down") Los pueblos indígenas han luchado durante muchos años por el reconocimiento de sus derechos y ello ha generado una afectación de la pervivencia y supervivencia. A continuación, se podrán conocer algunas cifras de los pueblos indígenas: 
    .bg-img-3.mt-5
      .row.justify-content-start.align-items-center(data-aos="fade-left")
        .col-lg-5.p-0
          h5.mb-0.ps-4.title-color.p-3.pe-5 Afectación de la pervivencia y supervivencia
        .col-1.p-0.d-none.d-lg-block.ms-3  
          img.img-t.mleft(src='@/assets/curso/temas/icon.svg',alt='') 

      img.img-a.img-t.pt-5(data-aos="zoom-in")(src='@/assets/curso/temas/img33.svg', alt='') 

    .row.justify-content-center.align-items-center.mt-5
      .col-lg-7      
        p(data-aos="fade-down") Para la mayoría de las sociedades que se encuentran en aislamiento, el primer impacto tras los primeros contactos es hacia el área de la salud; por ejemplo, en los nukak los primeros contactos con los misioneros llevaron a una disminución del 38,43 % de la población, mayoritariamente a causa de afecciones respiratorias.

        p(data-aos="fade-down") Adicional a esto hay una afectación en toda la forma de vida, cosmogonía y desarrollo de la identidad como pueblo a causa de pasar del nomadismo a asentamientos con medidas asistenciales en donde entran a depender del estado o de limosnas de las personas de los corregimientos y pueblos cercanos. Debido a esto, el pueblo comienza a enfrentar distintos problemas de mendicidad, alcoholismo, drogadicción, trata y explotación sexual.

        p(data-aos="fade-down") A causa de lo anterior, se han ido perdiendo costumbres que ya no son posibles debido al sedentarismo y el contacto más reducido con las rutas que manejaban antes y, así mismo, la lengua y sus tradiciones. Aún se consideran un grupo en gran estado de vulnerabilidad y es una muestra de lo que puede suceder tras la intervención en territorios y con grupos poblacionales que aún permanecen aislados. La intervención y el contacto pueden tener un impacto muy serio y es por esto por lo que se hace necesario una planeación y preparación que permitan ejecutar acciones sin daño.
      .col-lg-5      
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img34.png', alt='') 
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
