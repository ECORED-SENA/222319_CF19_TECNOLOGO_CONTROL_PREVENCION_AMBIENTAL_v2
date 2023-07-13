<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 8
      h1 Informe de resultados

    p.mb-4(data-aos="fade") Cuando se presentan los informes de los resultados obtenidos de las mediciones de las fuentes fijas, estos deberán contener la siguiente información, la cual debe ser presentada a la autoridad ambiental (MAVDT, 2010, p. 36-43).

    .row
      .col-md-4.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/tema8/img.svg' alt='')
      .col-md-8(data-aos="fade-left")
        LineaTiempoD.tema8
          .row(numero="1" titulo="Primero")
            ul.lista-ul--color.color-secundario.ps-3.mb-0.fa-ul
              li
                i.fas.fa-check
                | Resumen ejecutivo.
              li
                i.fas.fa-check
                | Introducción.
              li
                i.fas.fa-check
                | Descripción del proceso o instalación.
              li
                i.fas.fa-check
                | Descripción de la fuente de emisión.
              li
                i.fas.fa-check
                | Descripción del programa de medición.
          .row(numero="2" titulo="Seguido de")
            ul.lista-ul--color.color-secundario.ps-3.mb-0.fa-ul
              li
                i.fas.fa-check
                | Identificación del responsable de realizar la medición.
              li
                i.fas.fa-check
                | Procedimiento de evaluación.
              li
                i.fas.fa-check
                | Descripción de equipos y procedimientos.
              li
                i.fas.fa-check
                | Métodos de toma de muestras y análisis.
              li
                i.fas.fa-check
                | Métodos analíticos.
          .row(numero="3" titulo="Luego")
            ul.lista-ul--color.color-secundario.ps-3.mb-0.fa-ul
              li
                i.fas.fa-check
                | Localización del sitio de toma de muestra.
              li
                i.fas.fa-check
                | Procedimientos de control y aseguramiento de calidad.
              li
                i.fas.fa-check
                | Procedimiento de medición.
              li
                i.fas.fa-check
                | Equipos de calibración externa y verificación en laboratorio.
              li
                i.fas.fa-check
                | Instrumentos de calibración y mantenimiento.
              li
                i.fas.fa-check
                | Validación de datos.
              li
                i.fas.fa-check
                | Auditoría de la medición y acciones correctivas.
          .row(numero="4" titulo="Asimismo")
            ul.lista-ul--color.color-secundario.ps-3.mb-0.fa-ul
              li
                i.fas.fa-check
                | Documentación.
              li
                i.fas.fa-check
                | Reporte de resultados de análisis.
              li
                i.fas.fa-check
                | Procedimiento de toma de muestra y análisis.
              li
                i.fas.fa-check
                | Reporte de errores en la evaluación de emisiones atmosféricas.
          .row(numero="5" titulo="Finalmente")
            ul.lista-ul--color.color-secundario.ps-3.mb-0.fa-ul
              li
                i.fas.fa-check
                | Pérdida o alteración de la muestra.
              li
                i.fas.fa-check
                | Errores de toma de muestra.
              li
                i.fas.fa-check
                | Errores de análisis.
              li
                i.fas.fa-check
                | Criterios de invalidación de datos.
              li
                i.fas.fa-check
                | Cadena de custodia de la muestra.
              li
                i.fas.fa-check
                | Registro Único Ambiental (RUA).




</template>

<script>
export default {
  name: 'Tema8',
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
