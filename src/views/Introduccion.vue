<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    

    p.mb-4(data-aos="fade") Aquí comienza el estudio del componente formativo “
      b Verificación de las emisiones resultantes de proceso y operaciones productivas
      |”. Como primer paso en este recorrido, observe con atención el video que se muestra a continuación. Muchos éxitos en esta experiencia.

    figure(data-aos="fade-down")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/YKtLuaR5mrM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video. Verificación de las emisiones resultantes de proceso y operaciones productivas



</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
