<template>
  <section class="py-20 flex flex-col items-center">
    <h1 class="font-bold">Detalles del vehículo</h1>
    <section class="mt-8">
      <div class="flex items-center mb-4">
        <IconFile class="w-6 h-6 mx-2" />
        <h2 class="font-semibold">Ficha técnica</h2>
      </div>
      <article
        class="flex flex-wrap flex-row justify-between p-3 pt-5 article-p"
      >
        <div class="w-2/5 mb-3">
          <h4>Marca</h4>
          <p>
            {{ moto.Marca }}
          </p>
        </div>
        <div class="w-2/5 mb-3">
          <h4>Tipo de servicio</h4>
          <p>Particular</p>
        </div>
        <div class="w-2/5 mb-3">
          <h4>Línea</h4>
          <p>
            {{ moto.Linea }}
          </p>
        </div>
        <div class="w-2/5 mb-3">
          <h4>Clase de vehículo</h4>
          <p>
            {{ moto.Clase }}
          </p>
        </div>
        <div class="w-2/5 mb-3">
          <h4>Modelo</h4>
          <p>
            {{ moto.Modelo }}
          </p>
        </div>
        <div class="w-2/5 mb-3">
          <h4>Tipo de moto</h4>
          <p>-</p>
        </div>
        <div class="w-2/5 mb-3">
          <h4>Kilometraje</h4>
          <p>
            {{ moto.km }}
          </p>
        </div>
        <div class="w-2/5 mb-3">
          <h4>Combustible</h4>
          <p>
            {{ moto.Combustible }}
          </p>
        </div>
        <div class="w-2/5 mb-3">
          <h4>Transmisión</h4>
          <p>motomática</p>
        </div>
        <div class="w-2/5 mb-3">
          <h4>Color</h4>
          <p>
            {{ moto.Color }}
          </p>
        </div>
        <div class="w-2/5 mb-3">
          <h4>Sis. de arranque</h4>
          <p>Pedal</p>
        </div>
        <div class="w-2/5 mb-3">
          <h4>Final de placa</h4>
          <p>3</p>
        </div>
        <div class="w-2/5 mb-3">
          <h4>Cap. pasajeros</h4>
          <p>2</p>
        </div>
        <div class="w-2/5 mb-3">
          <h4>Tipo de motor</h4>
          <p>4 tiempos</p>
        </div>
        <div class="w-2/5 mb-3">
          <h4>Blindado</h4>
          <p>
            {{ moto.Direccion }}
          </p>
        </div>
        <div class="w-2/5 mb-3">
          <h4>Cilindraje</h4>
          <p>3630 cc</p>
        </div>
        <div class="w-2/5 mb-3">
          <h4>Blindado</h4>
          <p>{{ moto.Blindado }}</p>
        </div>
        <div class="w-2/5 mb-3">
          <h4>Cilindraje</h4>
          <p>{{ moto.Cilindraje }}</p>
        </div>
        <div class="w-2/5 mb-3">
          <h4>Peso vehicular</h4>
          <p>{{ moto.Peso }}</p>
        </div>
        <div class="w-2/5 mb-3">
          <h4>Sis. alimentación</h4>
          <p>Inyección electrónica</p>
        </div>
        <div class="w-2/5 mb-3">
          <h4>Final de placa</h4>
          <p>C</p>
        </div>
      </article>
      <article v-if="seguridad.length > 0" class="mt-5">
        <div class="flex items-center">
          <IconSeguridad class="w-6 h-6 mx-2" />
          <h2 class="font-semibold">Seguridad</h2>
        </div>
        <article class="div-seguridad p-3 mt-3">
          <div
            v-for="(item, index) in seguridad"
            :key="index"
            class="flex items-center mb-4"
          >
            <IconCheck class="w-4 h-4" />
            <p class="ml-2">{{ item.name }}</p>
          </div>
        </article>
      </article>
      <article v-if="confort.length > 0" class="mt-5">
        <div class="flex items-center">
          <IconConfort class="w-6 h-6 mx-2" />
          <h2 class="font-semibold">Confort</h2>
        </div>
        <article class="div-seguridad p-3 mt-3">
          <div
            v-for="(item, index) in confort"
            :key="index"
            class="flex items-center mb-4"
          >
            <IconCheck class="w-4 h-4" />
            <p class="ml-2">{{ item.name }}</p>
          </div>
        </article>
      </article>
      <article v-if="otros.length > 0" class="mt-5">
        <div class="flex items-center">
          <IconOtros class="w-6 h-6 mx-2" />
          <h2 class="font-semibold">Otros</h2>
        </div>
        <article class="div-seguridad p-3 mt-3">
          <div
            v-for="(item, index) in otros"
            :key="index"
            class="flex items-center mb-4"
          >
            <IconCheck class="w-4 h-4" />
            <p class="ml-2">{{ item.name }}</p>
          </div>
        </article>
      </article>
    </section>
  </section>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'DetallesFicha',
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
  computed: {
    ...mapState({
      otros: (state) => state.items.otros,
      seguridad: (state) => state.items.seguridad,
      confort: (state) => state.items.confort,
    }),
  },
}
</script>

<style scoped>
h1 {
  font-size: 22px;
}
h2 {
  font-size: 20px;
}
h4 {
  font-size: 16px;
  font-weight: bold;
}
p {
  font-size: 14px;
}
.article-p {
  background-color: #f2efef;
  border-top: solid #ed1a3b 2px;
}
.div-seguridad {
  background-color: #f2efef;
  border-top: solid #ed1a3b 2px;
}
</style>
