<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.pb-md-0.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1 Normatividad

    
    p.mb-4(data-aos="fade") Conocer el marco normativo que regula la contaminación del aire en el país es muy importante para establecer las acciones de prevención y control de los contaminantes que afectan en la actualidad.

    .row.fondo-tema7.align-items-center.py-5
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-center

          .col-md-12
            h3.subt.text-white.mb-4(data-aos="fade") Normas calidad del aire
            p.mb-4(data-aos="fade") Las normas de calidad del aire en Colombia se convierten en la base para el seguimiento, así lo afirma el Instituto de Hidrología Meteorología y Estudios Ambientales –IDEAM.

          .row
            .col-md-6(data-aos="fade-down")
              .tarjeta.bg-green.p-4.p-md-5.h-100
                h3.t-green.text-center.mb-4 Normas asociadas
                .row.justify-content-center.mb-4
                  .col-md-3.col-5
                    img.px-md-0(src='@/assets/curso/temas/tema7/ico1.svg' alt='Icono decorativo')
                ul.lista-ul--color.color-secundario.mb-0
                  li
                    i.fas.fa-check
                    | Resolución 2254 de 2017. Por la cual se adopta la norma de calidad del aire ambiente y se dictan otras disposiciones.
                  li
                    i.fas.fa-check
                    | Resolución 650 de 2010. Por la cual se adopta el Protocolo para el Monitoreo y Seguimiento de la Calidad del Aire.
                  li
                    i.fas.fa-check
                    | Resolución 2154 de 2010. Por la cual se ajusta el Protocolo para el Monitoreo y Seguimiento de la Calidad del Aire adoptado a través de la Resolución 650 de 2010 y se adoptan otras disposiciones.
                
            .col-md-6(data-aos="fade-down")
              .tarjeta.bg-primario.p-4.p-md-5.h-100
                h3.t-green2.text-center.mb-4 Protocolos asociados
                .row.justify-content-center.mb-4
                  .col-md-3.col-5
                    img.px-md-0(src='@/assets/curso/temas/tema7/ico2.svg' alt='Icono decorativo')
                ul.lista-ul--color.color-secundario.mb-0
                  li
                    i.fas.fa-check
                    span.mb-0.text-white Protocolo para el monitoreo y seguimiento de la calidad del aire.
                  li
                    i.fas.fa-check
                    span.mb-0.text-white Manual de diseño de Sistemas de Vigilancia de Calidad del Aire.
    
    
    h3.subt.text-white.mb-4(data-aos="fade") Normas fuentes fijas

    .row
      .col-md-8.mb-4(data-aos="fade-right")
        p Las fuentes fijas puntuales, mejor conocidas como “chimeneas”, o ductos por donde se expulsan gases contaminantes (MP, SOx, NOx, CO, COV, entre otros) de las industrias que hacen parte del sector productivo que mueve la economía del país aportan de manera importante al continuo deterioro de la calidad del aire que respiramos, especialmente en las principales ciudades del país. Por esta razón, la normativa asociada a las fuentes fijas es fundamental para el seguimiento y control de las emisiones en Colombia. (IDEAM, 2014).
        .bg-green2.p-4
          h5.t-green2 Normas asociadas
          ul.lista-ul--color.color-secundario.mb-0.ps-3
            li
              i.fas.fa-check
              | Resolución 909 de 2008. Por la cual se establecen las normas y estándares de emisión admisibles de contaminantes a la atmósfera por fuentes fijas y se dictan otras disposiciones.
      .col-md-4.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/tema7/img.png' alt='Imagen decorativa')


    .row.fondo-blue.align-items-center.py-5
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-center

        .row
          .col-md-12
            h3.subt.text-white.mb-4(data-aos="fade") Normas fuentes móviles
          .col-md-4.mb-4(data-aos="fade-right")
            img(src='@/assets/curso/temas/tema7/img2.png' alt='Imagen decorativa')
          .col-md-8.mb-4(data-aos="fade-left")
            p Según el portal del IDEAM, “las emisiones por fuentes móviles se producen por la quema de combustibles fósiles utilizados por el parque automotor, ya que los vehículos automotores son los principales emisores de contaminantes como óxidos de nitrógeno, monóxido de carbono, hidrocarburos no quemados, dióxidos de azufre y compuestos orgánicos volátiles”. (IDEAM, 2014).
            .bg-green2.p-4
              h5.t-green2 Normas asociadas
              ul.lista-ul--color.color-secundario.mb-0.ps-3
                li
                  i.fas.fa-check
                  | Resolución 910 de 2008. Por la cual se reglamentan los niveles permisibles de emisión de contaminantes que deberán cumplir las fuentes móviles terrestres, se reglamenta el artículo 91 del Decreto 948 de 1995 y se adoptan otras disposiciones.
                li
                  i.fas.fa-check
                  | Resolución 1111 de 2013. Por la cual se modifica la resolución 910 de 2008.



</template>

<script>
export default {
  name: 'Tema7',
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
