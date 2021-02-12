<template>
  <section class="flex flex-col items-center">
    <h1 class="my-5">Características adicionales</h1>
    <button class="">
      <nuxt-link to="/ventas/motos/items">
        Seleccionar items
        <span>+</span>
      </nuxt-link>
    </button>
  </section>
</template>

<script>
export default {
  name: 'Caracteristicas',
}
</script>

<style scoped>
h1 {
  color: #444343;
  font-size: 20px;
  font-weight: bold;
}
button {
  background-color: #e5e5e5;
  outline: none;
  width: 70%;
  padding: 3px;
  border-radius: 8px;
}
</style>
