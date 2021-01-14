<template>
  <section class="flex flex-col items-center text-center">
    <span class="flex text-rojo text-2xl mt-4 header text-center">
      Teléfono de contacto
    </span>
    <section class="w-full">
      <article class="relative mt-20">
        <input
          v-model="data.telefono"
          type="text"
          class="border border-rojo rounded-md h-12 outline-none pl-4"
          @click="activate('telefono')"
        />
        <div
          class="div-label absolute px-2"
          :class="
            active === 'telefono' || data.telefono != '' ? 'moveLabel' : false
          "
        >
          <label for="" class="text-rojo text-xs">Teléfono fijo</label>
        </div>
      </article>
      <article class="relative mt-10">
        <input
          type="text"
          class="border border-rojo rounded-md h-12 outline-none pl-4"
          @click="activate('celular')"
        />
        <div
          class="div-label absolute px-2"
          :class="
            active === 'celular' || data.celular != '' ? 'moveLabel' : false
          "
        >
          <label for="" class="text-rojo text-xs">Celular</label>
        </div>
      </article>
    </section>
  </section>
</template>

<script>
export default {
  name: 'DatosEmpresa5',
  data() {
    return {
      active: 'false',
      data: {
        telefono: '',
        celular: '',
      },
    }
  },
  methods: {
    activate(id) {
      this.active = id
    },
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200&display=swap');

.icon {
  fill: #ed1a3b;
}
.icono {
  margin-top: 60px;
  margin-bottom: 60px;
  margin-left: 80px;
}
.parrafo {
  font-family: 'Montserrat', sans-serif;
}
.div-parrafo {
  width: 220px;
  margin-top: 30px;
  margin-bottom: 40px;
}
a {
  color: white;
}
.div-label {
  background-color: white;
  left: 68px;
  top: 10px;
}
.moveLabel {
  margin-top: -21px;
  transition: margin-top 1s;
}
input {
  width: 300px;
}
</style>
