<template>
  <section class="flex flex-col items-center">
    <h1 class="my-5">Comentarios del vehículo</h1>
    <article class="flex flex-col">
      <textarea
        v-model="descripcion"
        name="textarea"
        cols="35"
        rows="8"
        class="border border-gray-700 rounded-md p-3"
        maxlength="2500"
      ></textarea>
      <span>{{ descripcion.length }}/2500</span>
    </article>
  </section>
</template>

<script>
export default {
  name: 'Comentarios',
  data() {
    return {
      descripcion:
        'Camioneta está en muy buen estado. Todo al día. Full equipo 4x4.',
    }
  },
  watch: {
    descripcion(_, old) {
      if (old.length > 2500) {
        this.descripcion = old
      }
    },
  },
}
</script>

<style scoped>
h1 {
  color: #444343;
  font-size: 20px;
  font-weight: bold;
}
</style>
