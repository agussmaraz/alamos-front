<template>
  <section class="caja-padre flex flex-col p-5">
    <h1 class="font-bold text-center text-xl">Selecciona una opción</h1>
    <p class="text-sm mt-3 text-center">Elige cómo vas a subir las fotos</p>
    <div class="flex justify-around items-center mt-6">
      <button class="text-rojo">Galería</button>
      <button class="text-rojo">Cámara</button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Camara',
}
</script>

<style scoped>
.caja-padre {
  background-color: white;
  width: 282px;
  height: 162px;
}
</style>
