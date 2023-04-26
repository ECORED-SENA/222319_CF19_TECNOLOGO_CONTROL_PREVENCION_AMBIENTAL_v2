<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Calidad del aire

    p.mb-4(data-aos="fade") La calidad del aire es un parámetro que indica las condiciones del aire que se respira. Para ahondar en aspectos importantes referentes a la calidad del aire, preste atención a los aspectos que se señalan enseguida:  

    .row.mb-4
      .col-md-8.mb-4(data-aos="fade-right")
        LineaTiempoD.tema8
          .row(numero="1" titulo="Control del aire")
            p En Colombia, el monitoreo y control de la contaminación atmosférica ha tomado, día a día, mayor relevancia, debido a que, según cifras de la Organización Mundial de la Salud, una de cada ocho muertes ocurridas a nivel mundial, es ocasionada por la contaminación del aire.
          .row(numero="2" titulo="Muertes por contaminación")
            p A nivel nacional, el Departamento Nacional de Planeación estimó que, durante el año 2015, los efectos de este fenómeno estuvieron asociados a 10.527 muertes y 67,8 millones de síntomas y enfermedades.
          .row(numero="3" titulo="Costo ambiental")
            p Los costos ambientales asociados a la contaminación atmosférica en Colombia, durante los últimos años, se incrementaron, pasando de 1,1% del PIB de 2009 ($5,7 billones de pesos) a 1,59% del PIB de 2014 ($12 billones de pesos) y a 1,93% del PIB en 2015 ($15.4 billones de pesos), lo cual pone en evidencia la necesidad de seguir implementando estrategias para controlar, evaluar y monitorear estas sustancias.
          .row(numero="4" titulo="Contaminación por regiones")
            p Es importante identificar qué zona o sectores representativos de Colombia ven afectada su calidad del aire.
          .row(numero="5" titulo="Zonas más afectadas")
            p Las zonas que mayor afectación que presentan importantes niveles de contaminación atmosférica son: el Área Metropolitana del Valle de Aburrá, las localidades de Puente Aranda, Carvajal y Kennedy, en Bogotá, el municipio de Ráquira, en Boyacá, y la zona industrial de ACOPI, en el municipio de Yumbo, Valle del Cauca.
      .col-md-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/tema2/img.png' alt='Imagen decorativa')


    .row.mb-4
      .col-md-4.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/tema2/img2.png' alt='Imagen decorativa')
      .col-md-8.mb-4(data-aos="fade-left")
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg-blue2")
          .row.justify-content-center(titulo="Sistema de Información Ambiental de Colombia SIAC")
            .col-md-11
              p Colombia cuenta con un sistema integral de información ambiental que integran diversas entidades, las cuales recopilan información ambiental que se reporta para conocimiento de todos los ciudadanos. Según el MADS, el SIAC es “el conjunto integrado de procesos y tecnologías involucradas en la gestión de la información ambiental del país, para facilitar la generación de conocimiento, la toma de decisiones, la educación y la participación social para el desarrollo sostenible”.
          .row.justify-content-center(titulo="¿Qué es el SIAC?")
            .col-md-11
              p Es un sistema de sistemas, que gestiona información acerca del estado ambiental, el uso y aprovechamiento, la vulnerabilidad y la sostenibilidad ambiental de los recursos naturales, en los ámbitos continental y marino del territorio colombiano. Se sustenta en un proceso de concertación interinstitucional, intersectorial e interdisciplinario, liderado por el Ministerio de Ambiente y Desarrollo Sostenible (MADS) y los institutos de investigación ambiental.
          .row.justify-content-center(titulo="Los institutos de investigación ambiental")
            .col-md-11
              ul.lista-ul--color.color-secundario.mb-0
                li
                  i.fas.fa-check
                  | El Instituto de Hidrología, Meteorología y Estudios Ambientales (IDEAM).
                li
                  i.fas.fa-check
                  | El Instituto de Investigación de Recursos Biológicos Alexander von Humboldt (IAvH).
                li
                  i.fas.fa-check
                  | El Instituto de Investigaciones Marinas y Costeras (INVEMAR).
                li
                  i.fas.fa-check
                  | El Instituto Amazónico de Investigaciones Científicas (SINCHI).
                li
                  i.fas.fa-check
                  | El Instituto de Investigaciones Ambientales del Pacífico (IIAP).
                li
                  i.fas.fa-check
                  | La Autoridad Nacional de Licencias Ambientales (ANLA).
                li
                  i.fas.fa-check
                  | La Unidad Administrativa Especial del Sistema de Parques Nacionales Naturales (UAESPNN).
          .row.justify-content-center(titulo="SVCA")
            .col-md-11
              p Para conocer el estado de la calidad del aire, las autoridades ambientales han instalado y puesto en operación Sistemas de Vigilancia –SVCA, según lo definido en el Protocolo para el Monitoreo y Seguimiento de la Calidad del Aire, por el Ministerio de Ambiente.
          .row.justify-content-center(titulo="SVCA en aumento")
            .col-md-11
              p El número de SVCA ha venido aumentado en los últimos años: de acuerdo con la información recopilada por el Instituto de Hidrología, Meteorología y Estudios Ambientales –IDEAM, mediante el Subsistema de Información sobre Calidad del Aire - SISAIRE, en 2018, operaron a nivel nacional 27 SVCA, conformados por 203 estaciones de monitoreo, de las cuales 169 fueron fijas y 34 indicativas.
              


    .row
      .col-md-8.mb-4(data-aos="fade-right")
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg-blue2")
          .row.justify-content-center(titulo="Cobertura")
            .col-md-11
              p La cobertura espacial de los sistemas de vigilancia, en 2018, abarcó 22 departamentos y 83 municipios, cubriendo las regiones Andina, Caribe, Pacífico y Orinoquía. La información de los contaminantes atmosféricos es reportada por las Corporaciones Autónomas Regionales y las autoridades ambientales de los grandes centros urbanos en el Subsistema de Información sobre Calidad del Aire – SISAIRE.
          .row.justify-content-center(titulo="SISAIRE")
            .col-md-11
              p El Sistema de Información sobre Calidad del Aire es un sistema para la captura, almacenamiento, transferencia, procesamiento y consulta de información. También permite la generación de información unificada de las redes de calidad del aire del país.
              p El SISAIRE tiene como propósito:
              ul.lista-ul--color.color-secundario.ps-3.mb-0
                li
                  i.fas.fa-check
                  | Recolectar información actualizada y analizada sobre calidad del aire, generada por los sistemas de Vigilancia de Calidad del Aire que son operados por las autoridades ambientales regionales y urbanas, con el propósito de garantizar la disponibilidad y la calidad de la información ambiental y su consulta por los usuarios del sistema.
                li
                  i.fas.fa-check
                  | Mantener la información al alcance de los ciudadanos y de las instituciones encargadas de la investigación en el tema ambiental.
                li
                  i.fas.fa-check
                  | Consultar el reporte diario de las mediciones de las autoridades ambientales regionales y de grandes centros urbanos de Colombia que cuentan con Sistemas de Vigilancia de la Calidad del Aire.
                li
                  i.fas.fa-check
                  | Analizar el consolidado histórico de estas mediciones.
                li
                  i.fas.fa-check
                  | Estudiar índices e indicadores (Índice Nacional de Calidad del Aire, Estados de Prevención, Alerta y Emergencia y Excedencias de las normas nacionales y regionales de calidad del aire)
                li
                  i.fas.fa-check
                  | Conocer toda la información relacionada con la calidad del aire en el país, su ubicación y el tipo de equipos utilizados para su reporte.
      .col-md-4.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/tema2/img3.png' alt='Imagen decorativa')



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
