<template>
  <section class="py-32 flex flex-col items-center">
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
            {{ auto.Marca }}
          </p>
        </div>
        <div class="w-2/5 mb-3">
          <h4>Tipo de servicio</h4>
          <p>Particular</p>
        </div>
        <div class="w-2/5 mb-3">
          <h4>Línea</h4>
          <p>
            {{ auto.Linea }}
          </p>
        </div>
        <div class="w-2/5 mb-3">
          <h4>Clase de vehículo</h4>
          <p>
            {{ auto.Clase }}
          </p>
        </div>
        <div class="w-2/5 mb-3">
          <h4>Modelo</h4>
          <p>
            {{ auto.Modelo }}
          </p>
        </div>
        <div class="w-2/5 mb-3">
          <h4>Tipo de carrocería</h4>
          <p>
            {{ auto.Tipo }}
          </p>
        </div>
        <div class="w-2/5 mb-3">
          <h4>Final de placa</h4>
          <p>3</p>
        </div>
        <div class="w-2/5 mb-3">
          <h4>Número de ejes</h4>
          <p>2</p>
        </div>
        <div class="w-2/5 mb-3">
          <h4>Kilometraje</h4>
          <p>
            {{ auto.km }}
          </p>
        </div>
        <div class="w-2/5 mb-3">
          <h4>Caja</h4>
          <p>Automática</p>
        </div>
        <div class="w-2/5 mb-3">
          <h4>Puertas</h4>
          <p>
            {{ auto.Puertas }}
          </p>
        </div>
        <div class="w-2/5 mb-3">
          <h4>Dirección</h4>
          <p>
            {{ auto.Direccion }}
          </p>
        </div>
        <div class="w-2/5 mb-3">
          <h4>Color</h4>
          <p>
            {{ auto.Color }}
          </p>
        </div>
        <div class="w-2/5 mb-3">
          <h4>Transmisión</h4>
          <p>4x4</p>
        </div>
        <div class="w-2/5 mb-3">
          <h4>Cilindraje</h4>
          <p>3630 cc</p>
        </div>
        <div class="w-2/5 mb-3">
          <h4>Blindado</h4>
          <p>No</p>
        </div>
        <div class="w-2/5 mb-3">
          <h4>Combustible</h4>
          <p>
            {{ auto.Combustible }}
          </p>
        </div>
        <div class="w-2/5 mb-3">
          <h4>Peso Vehicular</h4>
          <p>2200 kg</p>
        </div>
        <div class="w-2/5 mb-3">
          <h4>Cap. pasajeros</h4>
          <p>5</p>
        </div>
        <div class="w-2/5 mb-3">
          <h4>Cap. de carga</h4>
          <p>-</p>
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
