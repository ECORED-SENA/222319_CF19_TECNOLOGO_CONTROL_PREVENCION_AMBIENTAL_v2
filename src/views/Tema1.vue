<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Conceptos generales


    .row.mb-4
      .col-md-5.mb-4(data-aos="fade-right")
        p Para la verificación de las emisiones resultantes de proceso y operaciones productivas, es importante reconocer los conceptos generales asociados a las emisiones generadas en el proceso industrial u operativo del proyecto.
        .bg-green5.p-4
          p.mb-0 Como comienzo de este componente, conozca y comprenda elementos conceptuales como atmósfera, contaminación atmosférica, fuentes naturales y antropogénicas de contaminación, monóxidos, óxidos y otros compuestos orgánicos. Con claridad sobre lo que son y sus impactos en los procesos de contaminación, su navegación por el componente formativo será muy satisfactoria.
      .col-md-7(data-aos="fade-left")
        img(src='@/assets/curso/temas/tema1/img.png' alt='')
      

    .row.fondo-tema1.align-items-center.py-5
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-center

          .col-md-12
            h3.subt.text-white.mb-4(data-aos="fade") La atmósfera
            p.mb-4(data-aos="fade") Es importante reconocer cuál es elemento que más se impacta en lo relacionado con la contaminación del aire; en ese sentido, la atmósfera adquiere una vital importancia para identificar cómo se generan los principales procesos que de ella derivan.

          .col-md-7.mb-4(data-aos="fade-right")
            p La atmósfera es la primera capa gaseosa que envuelve a nuestro planeta, con un espesor aproximado de 10.000 kilómetros. En ella se producen todos los fenómenos climáticos y meteorológicos que afectan al planeta, regula la entrada y salida de energía terrestre, y por ende, su temperatura, y es el principal medio de transferencia del calor. Está constituida por una mezcla de gases entre los que se encuentran el nitrógeno (N<sub>2</sub>), el oxígeno (O<sub>2</sub>), el dióxido de carbono (CO<sub>2</sub>), además de otros gases en cantidades minúsculas, tales como el argón, helio, neón y ozono. En las capas bajas de la atmósfera, se encuentran el vapor de agua e impurezas en forma de polvo.
            p Asimismo, la atmósfera se puede dividir en diferentes capas, para poder identificar las estratificaciones según su altura, temperatura y presión del aire. Teniendo en cuenta la Guía de Calidad del Aire, se definen los diferentes niveles de la atmósfera, así:
          .col-md-5.mb-4(data-aos="fade-left")
            img(src='@/assets/curso/temas/tema1/img2.png' alt='')


    ImagenInfografica.color-acento-botones.mb-5(data-aos="fade-down")
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/tema1/img-infog.svg', alt='Niveles de la atmósfera')

      .tarjeta.bg-yellow.p-3(x="19%" y="88%" numero="+")
        .h4.mb-2 Tropósfera: 
        p Es la más cercana a la superficie terrestre, donde se forman las nubes y se desarrollan diversos procesos atmosféricos, tales como las lluvias y los frentes. La temperatura del aire disminuye con la altura. En esta capa se acumula la mayor parte del vapor de agua y el CO<sub>2</sub>.
      .tarjeta.bg-yellow.p-3(x="40%" y="71%" numero="+")
        .h4.mb-2 Estratósfera: 
        p En esta capa, la temperatura comienza a aumentar con la altura, fenómeno que se le atribuye a la presencia del ozono (O<sub>3</sub>), puesto que es el gas que absorbe los rayos ultravioletas. Tanto la formación como la destrucción del ozono se hace por reacciones fotoquímicas. 
      .tarjeta.bg-yellow.p-3(x="53%" y="48%" numero="+")
        .h4.mb-2 Mesósfera: 
        p Es una capa en que la temperatura vuelve a disminuir con la altura debido a la disminución de la concentración de ozono. 
      .tarjeta.bg-yellow.p-3(x="63.5%" y="28%" numero="+")
        .h4.mb-2 Termósfera o ionósfera: 
        p En esta, la temperatura aumenta nuevamente con la altura. La presencia de partículas electrizadas da lugar a la presencia de capas ionizadas que tienen la propiedad de reflejar las ondas radioeléctricas.
      .tarjeta.bg-yellow.p-3(x="71%" y="10%" numero="+")
        .h4.mb-2 Exósfera: 
        p Constituye la zona de transición entre la atmósfera y el espacio exterior, contiene la mayor parte del ozono atmosférico y absorbe gran parte de la radiación ultravioleta.


    h3.subt.text-white.mb-4(data-aos="fade") Contaminación atmosférica   
    .row
      .col-md-7.mb-4(data-aos="fade-right")
        p La contaminación atmosférica es un factor que incide directamente en el ser humano y consecuentemente en el ecosistema del cual depende.
        p La afectación antrópica de la contaminación es la presencia en el aire de uno o más contaminantes, o cualquier combinación de ellos en concentraciones o niveles tales que puedan constituir un riesgo a la salud de las personas, a la calidad de vida de la población, a la preservación de la naturaleza o a la conservación del patrimonio ambiental.
        p En ese sentido, es importante reconocer cuál es el origen de los contaminantes, para identificar los métodos de control y de medición que influyen en el control y seguimiento de las emisiones. Conózcalos a continuación.
      .col-md-5.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/tema1/img3.png' alt='')

    .tarjeta.fondo-sliderA.p-4.p-md-5.pb-md-3.mb-5
      SlyderA(tipo="b" data-aos="fade-down")
        .row.justify-content-center
          .col-md-6.mb-4.mb-md-0
            h4 Fuentes naturales 
            p Corresponden a los eventos de contaminación producidos por fenómenos propios de la naturaleza. Entre estos, se encuentran las erosiones, los incendios forestales, las erupciones volcánicas, la descomposición de la vegetación y las tormentas de polvo.
          .col-md-5
              img(src='@/assets/curso/temas/tema1/slide-img1.png', alt='')
        .row.justify-content-center
          .col-md-6.mb-4.mb-md-0
            h4 Fuentes antropogénicas 
            p Estas corresponden a actividades o intervenciones que realizan las personas, siendo la principal causa la combustión de materiales, sea esta originada por las industrias, los vehículos o en el hogar. Esta clasificación tiene a su vez una subdivisión en tres grupos: las fuentes fijas, las fuentes móviles y las fuentes fugitivas.
          .col-md-5
              img(src='@/assets/curso/temas/tema1/slide-img2.png', alt='')
        .row.justify-content-center
          .col-md-6.mb-4.mb-md-0
            h4 Fuentes fijas  
            p Estas corresponden a aquéllas situadas en un lugar físico particular, definido e inamovible. Involucran las emisiones generadas por la quema de combustibles producto de actividades industriales y residenciales.
          .col-md-5
              img(src='@/assets/curso/temas/tema1/slide-img3.png', alt='')
        .row.justify-content-center
          .col-md-6.mb-4.mb-md-0
            h4 Fuentes móviles  
            p Estas corresponden a aquellas fuentes que sí pueden desplazarse. A estas se asocian las emisiones de gases en tubos de escape, desgaste de frenos y neumáticos de distintos tipos de transporte motorizado, como automóviles, camiones, buses y motocicletas.
          .col-md-5
              img(src='@/assets/curso/temas/tema1/slide-img4.png', alt='')


    h3.subt.text-white.mb-4(data-aos="fade") Contaminantes de la atmósfera 
    
    p(data-aos="fade") Los contaminantes de la atmósfera se producen, en su gran mayoría, por el desarrollo productivo de la actividad humana y el empleo de combustibles fósiles.
    p.mb-4(data-aos="fade") Entre los contaminantes más significativos que afectan la salud y el medio ambiente, están:

    AcordionA(tipo="a" clase-tarjeta="tarjeta bg-blue2" data-aos="fade-down")
      .row.justify-content-center(titulo="Material Particulado (MP)")
        .col-md-6
          p Estas partículas se encuentran principalmente en zonas urbanas y provienen de centrales térmicas, procesos industriales, tráfico de vehículos, combustión residencial de leña para calefacción y carbón e incineradores industriales. El material particulado (MP) se clasifica según su diámetro, característica de la cual depende la intensidad de sus impactos.
          p La denominación de partículas de diámetros menores a 10 micrones, conocidas como MP10, y de diámetros menores a 2,5 micrones, conocidas como MP2,5. Este último es el contaminante más dañino para la salud y que genera mayores niveles de mortalidad prematura en la población.
        .col-md-5
          img(src='@/assets/curso/temas/tema1/acor-img1.png', alt='')
      .row.justify-content-center(titulo="Monóxido de carbono (CO)")
        .col-md-6
          p Este gas es producto de la combustión incompleta de los combustibles al existir una cantidad insuficiente de oxígeno, dando como resultado CO en vez de CO<sub>2</sub>. Los vehículos a motor y los procesos industriales son responsables de aproximadamente el 80 % de estas emisiones a la atmósfera.
        .col-md-5
          img(src='@/assets/curso/temas/tema1/acor-img2.png', alt='')
      .row.justify-content-center(titulo="Óxidos de nitrógeno (NO<sub>x</sub>)")
        .col-md-6
          p Estos gases se producen durante el quemado de maderas y combustibles fósiles, como gasolina, carbón y gas natural. El sector transporte constituye la fuente principal de emisión de NOx. El mayor desplazamiento en vehículos particulares por parte de la población en las grandes ciudades y el crecimiento sostenido del parque automotriz son una de las causas más importantes del aumento de las emisiones de este contaminante.
          h5 ¿SABÍAS QUE…?
          p Los óxidos de nitrógeno (NO<sub>x</sub>) se dividen en varios compuestos, los cuales incluyen:
          p Óxido nítrico (NO). - Dióxido de nitrógeno (NO<sub>2</sub>). - Trióxido de nitrógeno (NO<sub>3</sub>). - Óxido nitroso (N<sub>2</sub>O). - Pentóxido de nitrógeno (N<sub>2</sub>O<sub>5</sub>). Los NO<sub>x</sub> son responsables de importantes efectos sobre la salud y el medio ambiente, como problemas respiratorios o daño pulmonar, enfermedades en pulmones y bronquios, mayor susceptibilidad a las infecciones, daño celular, irritación ocular y pérdida de las mucosas.
        .col-md-5
          img(src='@/assets/curso/temas/tema1/acor-img4.png', alt='')
      .row.justify-content-center(titulo="Óxidos de azufre (SO<sub>x</sub>)")
        .col-md-6
          p El dióxido de azufre (SO<sub>2</sub>) y trióxido de azufre (SO<sub>3</sub>) son los óxidos dominantes del azufre presentes en la atmósfera. Son producto de la combustión de combustibles fósiles, principalmente, derivados del petróleo y carbón. Los óxidos de azufre pueden acelerar la corrosión de los materiales al formar, primero, ácido sulfúrico en la atmósfera o sobre la superficie de los metales.
        .col-md-5
          img(src='@/assets/curso/temas/tema1/acor-img5.png', alt='')
      .row.justify-content-center(titulo="Compuestos Orgánicos Volátiles (COV)")
        .col-md-6
          p Las emisiones de estos compuestos proceden de distintas fuentes, como el transporte, industrias de disolventes, minería, vertederos, entre otros, además de fuentes biogénicas, como la vegetación. Muchos de estos compuestos interactúan con otros componentes para producir niebla y contaminación por aerosoles en presencia de radiación solar.
        .col-md-5
          img(src='@/assets/curso/temas/tema1/acor-img6.png', alt='')
      .row.justify-content-center(titulo="Plomo (Pb)")
        .col-md-6
          p Este contaminante proviene de la combustión de gasolinas con plomo, de la minería y fundiciones, y de la incineración de residuos. El plomo puede depositarse en el agua y alimentos que el humano consume, por lo que puede ser absorbido por su cuerpo.
        .col-md-5
          img(src='@/assets/curso/temas/tema1/acor-img7.png', alt='')
      .row.justify-content-center(titulo="Ozono troposférico (O<sub>3</sub>)")
        .col-md-6
          p Se trata del principal componente del <em>smog</em> fotoquímico y uno de los más fuertes agentes oxidantes. El ozono se forma en la tropósfera y de la acción de esta en las moléculas de ozono en la estratósfera, como producto de la reacción entre los NO<sub>x</sub>, los COV y los hidrocarburos (HC), en presencia de radiación solar. Las fuentes de hidrocarburos y NO<sub>x</sub> en las zonas urbanas son primordialmente los vehículos.
        .col-md-5
          img(src='@/assets/curso/temas/tema1/acor-img8.png', alt='')






</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
