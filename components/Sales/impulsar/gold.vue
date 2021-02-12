<template>
  <section class="flex flex-col justify-center items-center">
    <h1 class="font-semibold mb-4">Plan Gold</h1>
    <h4 class="mb-8">¡Impulsa tu publicación!</h4>
    <p class="p-costo mb-6">Costo por publicar: $60.000</p>
    <p class="p-duracion mb-2">Duración: 60 días</p>
    <p class="font-semibold mb-6">¡Republica GRATIS!</p>
    <p class="p-costo text-rojo mb-8">Ver más</p>
    <button class="bg-rojo w-40 button-seleccionar h-12">Seleccionar</button>
  </section>
</template>

<script>
export default {
  name: 'Gold',
}
</script>

<style scoped>
h1 {
  font-size: 28px;
  color: #353535;
}
h4 {
  font-size: 22px;
}
.p-costo {
  font-size: 18px;
}
.p-duracion {
  font-size: 16px;
}
.button-seleccionar {
  border-radius: 10px;
  color: white;
  font-weight: bold;
}
section {
  background-color: #f9f8f8;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
  width: 83%;
  margin: 47px auto;
  padding: 40px;
}
</style>
