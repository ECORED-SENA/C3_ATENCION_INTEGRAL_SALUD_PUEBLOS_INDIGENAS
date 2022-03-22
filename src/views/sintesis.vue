<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .row.justify-content-start.align-items-center.mt-5(data-aos="fade-left")
      .col-lg-4.title-color.ps-4.p-3.pe-5
        h5.mb-0.pe-5 Síntesis
      .col-1.p-0.d-none.d-lg-block.ms-3  
        img.img-t.mleft(src='@/assets/curso/temas/icon.svg',alt='')
      img.img-a.img-t.mt-5(data-aos="zoom-in")(src='@/assets/curso/temas/sintesis.svg', alt='')
</template>

<script>
export default {
  name: 'Sintesis',
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
