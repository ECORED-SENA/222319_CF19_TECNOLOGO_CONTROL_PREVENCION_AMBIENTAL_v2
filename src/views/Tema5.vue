<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido.mb-0
      .titulo-principal__numero
        span 5
      h1 Trámites de permisos de emisiones atmosféricas
    
    .row.mb-5
      .fondo-tema5img.p-4(data-aos="fade-down")
        .row.justify-content-center
          .col-md-10.bg-white.p-4.p-md-5.my-md-5
            p.mb-0 Cuando una empresa del sector productivo genera emisiones contaminantes por las fuentes fijas que posee, es importante saber que existe el trámite correspondiente para obtener el permiso de emisiones. La ANLA, Autoridad de Licencias Ambientales, establece que 
              em.bg-green “los permisos de emisión por estar relacionados con el ejercicio de actividades registradas por razones de orden público, no crean derechos adquiridos en cabeza de su respectivo titular, de modo que su modificación o suspensión podrá ser ordenada por las Autoridades ambientales competentes cuando surjan circunstancias que alteren sustancialmente aquellas que fueron tenidas en cuenta para otorgarlos, o que ameriten la declaración de los niveles de prevención, alerta o emergencia”. (ANLA, 2020).

    p.mb-4(data-aos="fade") A continuación, se presenta el compendio de requerimientos para la solicitud formal de permisos de emisiones atmosféricas:

    h5.mb-4.t-green2(data-aos="fade") Requerimientos para permisos de emisiones atmosféricas

    .row
      .col-md-8.mb-4(data-aos="fade-right")
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg-blue2")
          .row.justify-content-center(titulo="Primarios")
            .col-md-11
              ul.lista-ul--color.color-secundario.ps-3.mb-0.fa-ul
                li
                  i.fas.fa-check
                  | Formulario Único Nacional de Permiso de emisiones atmosféricas para fuentes fijas establecido por el Ministerio de Ambiente y Desarrollo Sostenible –MADS-, diligenciado y firmado por el solicitante.
                li
                  i.fas.fa-check
                  | Certificado de existencia y representación legal para personas jurídicas, expedido dentro del mes inmediatamente anterior a la presentación de la solicitud, y fotocopia de la cédula de ciudadanía para personas naturales. 
                li
                  i.fas.fa-check
                  | Poder debidamente otorgado, cuando se actúe mediante apoderado. 
                li
                  i.fas.fa-check
                  | Certificado de libertad y tradición expedido dentro del mes inmediatamente anterior a la presentación de la solicitud, o documento que acredite la posesión o tenencia del solicitante, contrato de arrendamiento, comodato.
          .row.justify-content-center(titulo="Secundarios")
            .col-md-11
              ul.lista-ul--color.color-secundario.ps-3.mb-0.fa-ul
                li
                  i.fas.fa-check
                  | Autorización del propietario o poseedor cuando el solicitante sea mero tenedor. (ANLA, 2020). 
                li
                  i.fas.fa-check
                  | Concepto sobre uso del suelo del establecimiento, obra o actividad, expedido por la autoridad municipal o distrital competente, o en su defecto, los documentos públicos u oficiales contentivos de normas y planos, o las publicaciones oficiales, que sustenten y prueben la compatibilidad entre la actividad u obra proyectada y el uso permitido del suelo. 
                li
                  i.fas.fa-check
                  | Información meteorológica básica del área afectada por las emisiones.
          .row.justify-content-center(titulo="De información")
            .col-md-11
              p Documento con la siguiente información para cada uno de los puntos objeto de la solicitud: 
              ol.lista-ol.ps-3.fa-ul
                li 
                  span.text-bold a)
                  | Localización de las instalaciones, del área o de la obra. 
                li 
                  span.text-bold b)
                  | Descripción de las obras, procesos y actividades de producción, mantenimiento, tratamiento, almacenamiento o disposición que generen las emisiones y planos que dichas descripciones requieran.
                li 
                  span.text-bold c)
                  | Flujograma con indicación y caracterización de los puntos de emisión al aire, ubicación y cantidad de los puntos de descarga al aire.
                li 
                  span.text-bold d)
                  | Descripción y planos de los ductos, chimeneas o fuentes dispersas, e indicación de sus materiales, medidas y características técnicas. 
                li 
                  span.text-bold e)
                  | Fecha proyectada de iniciación de actividades, o fechas proyectadas de iniciación y terminación de las obras, trabajos o actividades, si se trata de emisiones transitorias. 
                li 
                  span.text-bold f)
                  | Información técnica sobre producción prevista o actual, proyectos de expansión y proyecciones de producción a cinco (5) años.
          .row.justify-content-center(titulo="Técnicos")
            .col-md-11
              ul.lista-ul--color.color-secundario.ps-3.mb-0.fa-ul
                li
                  i.fas.fa-check
                  | Estudio técnico de evaluación de las emisiones de sus procesos de combustión o producción; se deberá anexar, además, información sobre consumo de materias primas combustibles u otros materiales utilizados. 
                li
                  i.fas.fa-check
                  | Diseño de los sistemas de control de emisiones atmosféricas existentes o proyectados, su ubicación e informe de ingeniería.
                li
                  i.fas.fa-check
                  | Si utiliza controles al final del proceso para el control de emisiones atmosféricas, o tecnologías limpias, o ambos. 
                li
                  i.fas.fa-check
                  | Estudio técnico de dispersión como información en proyectos para refinerías de petróleos, fábricas de cementos, plantas químicas y petroquímicas, siderúrgicas, quemas abiertas controladas en actividades agroindustriales y plantas termoeléctricas.
          .row.justify-content-center(titulo="Informes y comprobantes")
            .col-md-11
              ul.lista-ul--color.color-secundario.ps-3.mb-0.fa-ul
                li
                  i.fas.fa-check
                  | Entrega de Informe de Estado de Emisión IE-1 conforme al Artículo 2.2.5.1.10.2 Decreto 1076 del 2015, Resoluciones 1351 del 14 de noviembre de 1995 y 1619 del 21 de diciembre de 1995.
                li
                  i.fas.fa-check
                  | Aplica para las cementeras, siderúrgicas, refinerías y termoeléctricas.
                li
                  i.fas.fa-check
                  | Cada renovación de un permiso de emisión atmosférica requerirá la presentación de un nuevo Informe de Estados de Emisión IE-1 que contenga la información que corresponda al tiempo de su presentación.
                li
                  i.fas.fa-check
                  | Copia de la autoliquidación realizada a través de VITAL y del comprobante de pago, tal cual lo establece la Resolución 324 de 2015, modificada por la resolución 1978 de 2018 de la ANLA.
      .col-md-4.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/tema5/img2.png' alt='')






</template>

<script>
export default {
  name: 'Tema5',
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
