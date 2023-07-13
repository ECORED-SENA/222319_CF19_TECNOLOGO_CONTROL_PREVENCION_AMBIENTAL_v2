<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.pb-md-0.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 10
      h1 Plan de contingencia

    .row.mb-5
      .fondo-tema10img.tarjeta.p-4(data-aos="fade-down")
        .row.justify-content-center
          .col-md-10.bg-white.p-4.my-md-5
            p.mb-0 Cuando los sistemas de control presentan fallas durante la operación, es importante tener un plan de contingencia que le permita a la industria o proyecto respaldar el proceso productivo para que no impacte el medio ambiente de manera significativa.
    

    .row.fondo-tema10.align-items-center.pb-5
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-center
          
          p.mb-4.mb-md-5(data-aos="fade") El protocolo de fuentes fijas establece que la información que se debe tener en cuenta para ser enviada a la autoridad ambiental debe contener la siguiente documentación:

          .col-md-11
            SlyderF.text-center.mb-5(columnas="col-lg-6 col-xl-4" data-aos="fade-down")
              .tarjeta.color-acento-contenido.fondo-tarjetas.p-4
                .row.justify-content-center.mb-4
                  .col-md-5.col-6
                    img.px-md-1(src='@/assets/curso/temas/tema10/ico1.svg' alt='')
                p Descripción de la actividad que genera la emisión.
              .tarjeta.color-acento-contenido.fondo-tarjetas.p-4
                .row.justify-content-center.mb-4
                  .col-md-5.col-6
                    img.px-md-1(src='@/assets/curso/temas/tema10/ico2.svg' alt='')
                p Descripción de la actividad que se realiza en las instalaciones en las cuales se tiene instalado el sistema de control de emisiones atmosféricas.
              .tarjeta.color-acento-contenido.fondo-tarjetas.p-4
                .row.justify-content-center.mb-4
                  .col-md-5.col-6
                    img.px-md-1(src='@/assets/curso/temas/tema10/ico3.svg' alt='')
                p Identificación y caracterización de los sistemas de control de emisiones atmosféricas, incluyendo la referencia, condiciones de operación, la eficiencia de remoción de diseño y la eficiencia real de remoción.
              .tarjeta.color-acento-contenido.fondo-tarjetas.p-4
                .row.justify-content-center.mb-4
                  .col-md-5.col-6
                    img.px-md-1(src='@/assets/curso/temas/tema10/ico4.svg' alt='')
                p Ubicación de los sistemas de control. Se deben presentar los planos de las instalaciones con la ubicación geográfica de los sistemas de control de emisiones, incluyendo la ubicación de conexiones y otros que permitan el funcionamiento de estos.
              .tarjeta.color-acento-contenido.fondo-tarjetas.p-4
                .row.justify-content-center.mb-4
                  .col-md-5.col-6
                    img.px-md-1(src='@/assets/curso/temas/tema10/ico5.svg' alt='')
                p.mb-0 Identificación, análisis, explicación y respuesta a cada una de las posibles fallas de los sistemas de control de emisiones que se pueden presentar durante su operación, de acuerdo con las variables establecidas en el presente protocolo y lo establecido por el fabricante de este. (MAVDT, 2010, p. 79).
            



</template>

<script>
export default {
  name: 'Tema10',
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
