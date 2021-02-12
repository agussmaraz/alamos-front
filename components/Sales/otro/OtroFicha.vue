<template>
  <section class="">
    <article class="flex flex-row flex-wrap justify-around m-auto w-full">
      <div class="flex flex-col w-2/5 mb-3">
        <h2>Modelo</h2>
        <p>{{ otro.Modelo }}</p>
      </div>
      <div class="flex flex-col w-2/5 mb-3">
        <h2>Clase de vehiculo</h2>
        <p>{{ otro.Clase }}</p>
      </div>
      <div class="flex flex-col w-2/5 mb-3">
        <h2>Final de placa</h2>
        <p>5</p>
      </div>
      <div class="flex flex-col w-2/5 mb-3">
        <h2>Tipo de Carroceria</h2>
        <p>xx</p>
      </div>
      <div class="flex flex-col w-2/5 mb-3">
        <h2>Kilometraje</h2>
        <p>{{ otro.km }}</p>
      </div>
      <div class="flex flex-col w-2/5 mb-3">
        <h2>Tipo de servicio</h2>
        <p>Particular</p>
      </div>
      <div class="flex flex-col w-2/5 mb-3">
        <h2>Cilindraje</h2>
        <p>99 cc</p>
      </div>
      <div class="flex flex-col w-2/5 mb-3">
        <h2>Combustible</h2>
        <p>{{ otro.Combustible }}</p>
      </div>
      <div class="flex flex-col w-2/5 mb-3">
        <h2>Núm. de ejes</h2>
        <p>x</p>
      </div>
      <div class="flex flex-col w-2/5 mb-3">
        <h2>Puertas</h2>
        <p>x</p>
      </div>
      <div class="flex flex-col w-2/5 mb-3">
        <h2>Cap de carga</h2>
        <p>x kg</p>
      </div>
      <div class="flex flex-col w-2/5 mb-3">
        <h2>Color</h2>
        <p>x</p>
      </div>
      <div class="flex flex-col w-2/5 mb-3">
        <h2>Cap. pasajeros</h2>
        <p>4 tiempos</p>
      </div>
      <div class="flex flex-col w-2/5 mb-3">
        <h2>Blindado</h2>
        <p>{{ otro.Blindado }}</p>
      </div>
      <div class="flex flex-col w-2/5 mb-3">
        <h2>Peso vehicular</h2>
        <p>x kg</p>
      </div>
    </article>
  </section>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Ficha',
  data() {
    return {
      otro: {
        Marca: 'FAW',
        Linea: 'xxx',
        Modelo: '2014',
        Puertas: 'x',
        Pasajeros: '2',
        Cilindraje: 'xx',
        Color: 'Azul',
        Clase: 'Camión',
        Tipo: 'xxx',
        Combustible: 'Gasolina',
        Peso: 'xxx',
        Ejes: 'x',
        Blindado: 'No',
        pasajeros: '5',
        Carga: '-',
        placa: 'c',
        precio: '60.000.000',
        ubicacion: 'Bogotá D.C',
        dueño: 'Dueño directo',
        km: '30.000',
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
