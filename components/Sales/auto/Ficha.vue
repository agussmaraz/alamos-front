<template>
  <section class="">
    <article class="flex flex-row flex-wrap justify-around m-auto w-full">
      <div class="flex flex-col w-2/5 mb-3">
        <h2>Modelo</h2>
        <p>{{ auto.Modelo }}</p>
      </div>
      <div class="flex flex-col w-2/5 mb-3">
        <h2>Cilindraje</h2>
        <p>3640 cc</p>
      </div>
      <div class="flex flex-col w-2/5 mb-3">
        <h2>Final de placa</h2>
        <p>3</p>
      </div>
      <div class="flex flex-col w-2/5 mb-3">
        <h2>Combustible</h2>
        <p>{{ auto.Combustible }}</p>
      </div>
      <div class="flex flex-col w-2/5 mb-3">
        <h2>Kilometraje</h2>
        <p>{{ auto.km }}</p>
      </div>
      <div class="flex flex-col w-2/5 mb-3">
        <h2>Caja</h2>
        <p>Automática</p>
      </div>
      <div class="flex flex-col w-2/5 mb-3">
        <h2>Puertas</h2>
        <p>{{ auto.Puertas }}</p>
      </div>
      <div class="flex flex-col w-2/5 mb-3">
        <h2>Dirección</h2>
        <p>Hadráulica</p>
      </div>
      <div class="flex flex-col w-2/5 mb-3">
        <h2>Color</h2>
        <p>{{ auto.Color }}</p>
      </div>
      <div class="flex flex-col w-2/5 mb-3">
        <h2>Transmisión</h2>
        <p>4x4</p>
      </div>
    </article>
    <div class="w-full flex justify-center mt-5">
      <button
        class="button border-2 border-rojo rounded-full h-10 w-32 font-bold mb-3"
        @click="open"
      >
        Ver más
      </button>
    </div>
  </section>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Ficha',
  data() {
    return {
      auto: {
        Marca: 'Subaru',
        Linea: 'Outback 3.6r Es Limited',
        Modelo: '2019',
        Puertas: '5',
        Cilindraje: '3630',
        Color: 'Gris',
        Clase: 'Camioneta',
        Tipo: 'Wagon',
        Combustible: 'Gasolina',
        Peso: '2200',
        Ejes: '2',
        Blindado: 'No',
        dueño: 'Dueño directo',
        ubicacion: 'Bogotá D.C',
        km: '18.000',
        precio: '72.000.000',
      },
    }
  },
  methods: {
    ...mapActions({
      open: 'detalles/openDetalle',
    }),
  },
}
</script>

<style scoped>
h2 {
  font-size: 16px;
  font-weight: bold;
}
.button {
  background-color: white;
  outline: none;
}
</style>
