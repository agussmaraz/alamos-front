<template>
  <section class="flex flex-col items-center text-center">
    <header class="flex text-rojo font-bold items-center text-2xl">
      <IconLogo class="w-10 h-10 icon mr-2" />
      Álamos
    </header>
    <article>
      <IconPageThree class="icono ml-2" />
      <h1 class="text-rojo text-2xl">Todo en un sólo lugar</h1>
      <div class="div-parrafo">
        <span class="text-sm parrafo"> Consulta la </span>
        <span class="text-sm"> documentacion </span>
        <span class="parrafo text-sm"> del vehículo y su </span>
        <span class="text-sm">historial. </span>
        <span class="parrafo text-sm">
          Compara su precio con los índices más importantes del mercado.
        </span>
      </div>
    </article>
  </section>
</template>

<script>
export default {
  name: 'PageThree',
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200&display=swap');

.icon {
  fill: #ed1a3b;
}
.icono {
  margin: 60px auto;
}
.parrafo {
  font-family: 'Montserrat', sans-serif;
}
.div-parrafo {
  width: 250px;
  margin-top: 30px;
}
</style>
