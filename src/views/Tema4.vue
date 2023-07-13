<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Procedimientos de monitoreo a fuentes móviles y fijas


    .row.mb-4
      .col-md-6.mb-4(data-aos="fade-right")
        p Comencemos con los Procedimientos de monitoreo a fuentes móviles. Para la verificación de las emisiones vehiculares, es comúnmente empleada la técnica de opacidad. El portal www.sprintdata.com.py establece: 
          em.bg-blue “Que el principio de la medición de opacidad es el siguiente: un haz luminoso (emisor apuntando al receptor y a una distancia constante entre los dos) pasa a través de una muestra de gas. La proporción de luz incidente que alcanza el receptor es inversamente proporcional a la tasa de partículas en suspensión en el gas”.
      .col-md-6(data-aos="fade-left")
        img(src='@/assets/curso/temas/tema4/img.jpg' alt='')

    p.mb-4(data-aos="fade") En relación con los procedimientos de monitoreo a fuentes móviles, tenga presente:
    
    TabsB.color-acento-botones.mb-5
      .bg-green4.py-4.py-md-5(titulo="Corrección numérica de la medición" :icono="require('@/assets/curso/temas/tema4/ico1.svg')")
        .row.justify-content-center
          .col-md-7.mb-4.mb-md-0
            h4 Corrección numérica de la medición
            p La medición realizada está corregida numéricamente. La opacidad de un vehículo es el valor de la opacidad máxima que ha sido medida durante una aceleración. Se requieren varias aceleraciones para obtener una medición fiable.
          .col-md-4
            img(src='@/assets/curso/temas/tema4/tab-img1.png', alt='')
      .bg-green4.py-4.py-md-5(titulo="Procedimiento de la medición vehicular" :icono="require('@/assets/curso/temas/tema4/ico2.svg')")
        .row.justify-content-center
          .col-md-7.mb-4.mb-md-0
            h4 Procedimiento de la medición vehicular
            p Teniendo en cuenta que esta técnica se aplica a fuentes móviles, es importante que el vehículo acelere el motor en ralentí. Entonces, una vez con la aceleración obtenida, el motor girando al ralentí, accionando rápidamente, pero sin brutalidad, el pedal del acelerador, con el fin de obtener el caudal máximo de la bomba de inyección, se mantiene esta posición hasta que se haya alcanzado el régimen máximo del motor y el regulador entre en función.
          .col-md-4
            img(src='@/assets/curso/temas/tema4/tab-img2.png', alt='')
      .bg-green4.py-4.py-md-5(titulo="Del régimen ralentí al régimen máximo" :icono="require('@/assets/curso/temas/tema4/ico3.svg')")
        .row.justify-content-center
          .col-md-7.mb-4.mb-md-0
            h4 Del régimen ralentí al régimen máximo
            p Se trata, por lo tanto, de pisar a fondo el acelerador, con el fin de pasar del régimen de ralentí al régimen máximo en el menor tiempo posible. Esta operación es un elemento esencial del procedimiento, ya que la opacidad elegida es la opacidad máxima medida durante una aceleración libre. A fin de obtener una medición válida, es imprescindible aplicarse en esta operación, con el fin de que la opacidad sea máxima (bomba de inyección con un caudal máximo). Es posible detectar que se ha alcanzado el régimen máximo ya sea escuchando o bien utilizando la opción cuentarrevoluciones. Posteriormente, se suelta el pedal para volver al régimen de ralentí.
          .col-md-4
            img(src='@/assets/curso/temas/tema4/tab-img3.png', alt='')
      .bg-green4.py-4.py-md-5(titulo="Aportes del <em>software</em>" :icono="require('@/assets/curso/temas/tema4/ico4.svg')")
        .row.justify-content-center
          .col-md-7.mb-4.mb-md-0
            h4 Aportes del <em>software</em>
            p Cuando se va a producir una aceleración libre, aparecen mensajes que indican en qué momento acelerar y en qué momento soltar el pedal de aceleración. El <em>software</em> analiza la curva de opacidad registrada durante la aceleración libre para detectar el máximo y establecer la validez de la aceleración. La diferencia numérica entre las opacidades de cada aceleración es un indicador de funcionamiento y, normalmente, cuando este promedio es alto, las pruebas oficiales dan como RECHAZADO, independientemente de que la opacidad esté por debajo del límite permitido. (Sprint Data, 2020).
          .col-md-4
            img(src='@/assets/curso/temas/tema4/tab-img4.png', alt='')



    .row.mb-4
      .col-md-4.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/tema4/img2.png' alt='')
      .col-md-8(data-aos="fade-left")
        p Ahora, cuando se habla de métodos de medición en fuentes fijas, es importante reconocer que las principales metodologías son adoptadas por medio de los procedimientos promulgados por la Agencia de Protección Ambiental de los Estados Unidos, conocida por su sigla EPA, y su Código Federal de Regulaciones (CFR), donde listan los principales métodos para la aplicación de los protocolos de medición de fuentes fijas industriales. En el Protocolo para el control y vigilancia de la contaminación atmosférica generada por fuentes fijas (MAVDT, 2010), se muestran los más empleados en Colombia.
        p Es importante resaltar que el protocolo da una salvedad con respecto al empleo de estas metodologías, como se cita a continuación: 
          em.bg-green “Los métodos de que trata la tabla anterior que se utilicen para la realización de mediciones directas serán los publicados por el Instituto de Hidrología, Meteorología y Estudios Ambientales – IDEAM. En ningún caso se aceptará cambio o modificación que no esté incluido en los métodos publicados por el IDEAM, como, por ejemplo, el cambio de las especificaciones técnicas de los equipos de medición o las pruebas para verificar su calibración. En caso de que el método no se encuentre publicado por el IDEAM, se deberá utilizar el aprobado o propuesto por la Agencia de Protección Ambiental de los Estados Unidos US-EPA”.
          |  (MAVDT, 2010).
        .tarjeta.bg-degrade-green.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-2
              img.px-md-3(src="@/assets/curso/temas/tema4/pdf.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0.text-white
                  h4.mb-1 Métodos de medición en fuentes fijas y protocolos asociados
                  p.mb-0 Para conocer el listado de métodos de medición de fuentes fijas y protocolos asociados, visite el Anexo_1_ MetodosMedicionFuentesFijasProtocolos
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/Anexo_1_MetodosMedicionFuentesFijasProtocolos.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download





</template>

<script>
export default {
  name: 'Tema4',
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
