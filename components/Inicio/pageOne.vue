<template>
  <section class="flex flex-col items-center text-center">
    <header class="flex text-rojo font-bold items-center text-2xl">
      <IconLogo class="w-10 h-10 icon mr-2" />
      Álamos
    </header>
    <article>
      <IconPageOne class="icono ml-2" />
      <h1 class="text-rojo text-2xl">Compra y vende seguro</h1>
      <div class="div-parrafo">
        <span class="text-sm parrafo">
          Somos un marketplace donde puedes comprar y vender tu vehículo de
          manera
        </span>
        <span class="text-sm"> segura, ágil y al mejor precio. </span>
      </div>
    </article>
  </section>
</template>

<script>
export default {
  name: 'PageOne',
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200&display=swap');

.icon {
  fill: #ed1a3b;
}
.icono {
  margin-top: 60px;
  margin-bottom: 60px;
  margin-left: 100px;
}
.parrafo {
  font-family: 'Montserrat', sans-serif;
}
.div-parrafo {
  width: 300px;
  margin-top: 30px;
  margin-bottom: 40px;
}
</style>
