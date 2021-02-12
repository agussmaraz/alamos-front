<template>
  <section class="flex flex-col items-center">
    <h1 class="my-5">Precio de venta</h1>
    <article>
      <div
        class="flex justify-around border-2 border-rojo rounded-lg py-2 px-6 ml-2 mb-16"
      >
        <p>$COP</p>
        <input
          v-model="precio"
          type="text"
          class="w-3/5 ml-2 outline-none font-bold text-lg"
        />
      </div>
    </article>
  </section>
</template>

<script>
export default {
  name: 'Precio',
  data() {
    return {
      precio: '5.000.000',
    }
  },
}
</script>

<style scoped>
h1 {
  color: #444343;
  font-size: 20px;
  font-weight: bold;
}
p {
  color: #8d8c8c;
}
</style>
