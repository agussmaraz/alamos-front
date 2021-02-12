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
      <div class="text-center">
        <h3 class="font-bold">Precio según Revista Motor</h3>
        <p>para referencias similares</p>
      </div>
      <hr class="my-4" />
      <div class="flex items-center justify-center mb-5">
        <p>Subaru Outback xx | 2018</p>
        <span class="font-bold ml-2">$57,5 mill. </span>
      </div>
      <div class="flex items-center justify-center">
        <p>Subaru Outback ww | 2017</p>
        <span class="font-bold ml-2">$56,0 mill. </span>
      </div>
    </article>
  </section>
</template>

<script>
export default {
  name: 'Precio',
  data() {
    return {
      precio: '59.000.000',
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
