<template>
  <section class="">
    <article class="flex flex-row flex-wrap justify-around m-auto w-full">
      <div class="flex flex-col w-2/5 mb-3">
        <h2>Modelo</h2>
        <p>{{ moto.Modelo }}</p>
      </div>
      <div class="flex flex-col w-2/5 mb-3">
        <h2>Cilindraje</h2>
        <p>99 cc</p>
      </div>
      <div class="flex flex-col w-2/5 mb-3">
        <h2>Kilometraje</h2>
        <p>{{ moto.km }}</p>
      </div>
      <div class="flex flex-col w-2/5 mb-3">
        <h2>Sis. alimentación</h2>
        <p>Inyección electrónica</p>
      </div>
      <div class="flex flex-col w-2/5 mb-3">
        <h2>Transmisión</h2>
        <p>Automática</p>
      </div>
      <div class="flex flex-col w-2/5 mb-3">
        <h2>Combustible</h2>
        <p>{{ moto.Combustible }}</p>
      </div>
      <div class="flex flex-col w-2/5 mb-3">
        <h2>Sistema de arranque</h2>
        <p>Pedal</p>
      </div>
      <div class="flex flex-col w-2/5 mb-3">
        <h2>Color</h2>
        <p>{{ moto.Color }}</p>
      </div>
      <div class="flex flex-col w-2/5 mb-3">
        <h2>Tipo de motor</h2>
        <p>4 tiempos</p>
      </div>
      <div class="flex flex-col w-2/5 mb-3">
        <h2>Cap. pasajeros</h2>
        <p>2</p>
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
      moto: {
        Marca: 'Bajaj',
        Linea: 'Boxer Ct 100',
        Modelo: '2012',
        Pasajeros: '2',
        Cilindraje: '99',
        Color: 'Naranja',
        Clase: 'Motocicleta',
        Tipo: 'Wagon',
        Combustible: 'Gasolina',
        Peso: '-',
        Ejes: '2',
        Blindado: 'No',
        pasajeros: '5',
        carga: '-',
        placa: 'c',
        km: '80.000',
        precio: '5.000.000',
        ubicacion: 'Bogotá D.C',
        dueño: 'Dueño directo',
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
