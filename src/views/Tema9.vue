<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 9
      h1 Mantenimiento de equipos


    .row.fondo-tema9.align-items-center.pb-5
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-center

          .col-md-7.mb-4(data-aos="fade-right")
            p.mb-5 El mantenimiento es una actividad que se debe realizar para el correcto funcionamiento y debida operación de los equipos de control, como los de operación de la actividad industrial. Según Cansino (2015, p. 19), el mantenimiento es la agrupación de actividades que deben realizarse a instalaciones y equipos con el fin de detectar, corregir o prevenir los problemas ocasionados por las fallas potenciales de sus funciones.
            p El mantenimiento de una máquina o equipo se realiza con el fin de asegurar que una instalación, sistema industrial, una máquina u otro equipo continúe realizando las funciones para las que fue creado, manteniendo la capacidad y la calidad en su operación.
          .col-md-5.mb-4(data-aos="fade-left")
            img(src='@/assets/curso/temas/tema9/img.png' alt='')

          p.mb-4(data-aos="fade") A continuación, se presentan los tipos de mantenimiento y sus especificidades. Estúdielos con atención:

          h4.text-center.mb-4(data-aos="fade") Tipos de mantenimiento de equipos

          .row
            .col-md-6(data-aos="fade-down")
              .tarjeta.bg-acento-contenido.p-4.p-md-5.h-100
                h3.t-green.text-center.mb-4 Correctivo
                .row.justify-content-center.mb-4
                  .col-md-4.col-5
                    img.px-md-2(src='@/assets/curso/temas/tema9/ico1.svg' alt='')
                p No requiere de una planificación sistemática y se pone en práctica en el momento en que los equipos presentan una falla; en otras palabras, el mantenimiento se reduce a la reparación del equipo o maquinaria, produciendo un <em>stop</em> para un proceso de fabricación y disminuyendo la producción. Cuando se para un equipo de control por presentar una falla, no se puede seguir operando el proceso productivo. Aquí es importante poner en marcha los planes de contingencia para poder cumplir con la normativa asociada.
            .col-md-6(data-aos="fade-down")
              .tarjeta.bg-primario.p-4.p-md-5.h-100
                h3.t-green2.text-center.mb-4 Preventivo
                .row.justify-content-center.mb-4
                  .col-md-4.col-5
                    img.px-md-2(src='@/assets/curso/temas/tema9/ico2.svg' alt='')
                p.text-white Prevenir cualquier tipo de corrección en una reparación de un equipo se convierte en una tarea indispensable en la ejecución de los mantenimientos que se realicen en un proceso industrial. Este tipo de mantenimiento procura reducir el número de intervenciones correctivas mediante la aplicación de un sistema donde se ejecuten rutinas de inspección y la renovación de elementos en mal estado, siendo un mantenimiento planificado en el tiempo, a diferencia del correctivo, impidiendo afectar de forma directa la productividad y la calidad de producto o servicio que se entrega.





</template>

<script>
export default {
  name: 'Tema9',
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
