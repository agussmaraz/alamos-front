<template>
  <section class="flex flex-col items-center text-center">
    <span class="flex text-rojo text-2xl mt-4 header text-center">
      Datos personales
    </span>
    <section class="w-full pt-16">
      <article
        class="flex justify-around items-center border border-rojo rounded-md h-16 m-auto button-sex mb-12"
      >
        <button
          class="text-xs h-full w-full outline-none button-medio"
          :class="buttonGenero === 'ciudadania' ? 'activateButton' : false"
          @click="activeButton('ciudadania')"
        >
          Cédula ciudadania
        </button>
        <button
          class="text-xs h-full w-full outline-none"
          :class="buttonGenero === 'extranjera' ? 'activateButton' : false"
          @click="activeButton('extranjera')"
        >
          Cédula Extranjera
        </button>
      </article>
      <article class="relative mt-12">
        <input
          v-model="data.identificacion"
          type="text"
          class="border border-rojo rounded-md w-64 h-12 outline-none pl-4"
          @click="activate('identificacion')"
        />
        <div
          class="div-label absolute px-2"
          :class="
            active === 'identificacion' || data.identificacion != ''
              ? 'moveLabel'
              : false
          "
        >
          <label for="" class="text-rojo text-xs"
            >Número de identificacion</label
          >
        </div>
      </article>
      <article class="relative my-12">
        <input
          type="date"
          class="border border-rojo rounded-md w-64 h-12 outline-none pl-4"
          @click="activate('nacimiento')"
        />
        <div
          class="div-label absolute px-2"
          :class="
            active === 'nacimiento' || data.nacimiento != ''
              ? 'moveLabel'
              : false
          "
        >
          <label for="" class="text-rojo text-xs">Fecha de nacimiento</label>
        </div>
      </article>
    </section>
  </section>
</template>

<script>
export default {
  name: 'Datos3',
  data() {
    return {
      active: 'false',
      data: {
        identificacion: '',
        nacimiento: '',
      },
      buttonGenero: '',
    }
  },
  methods: {
    activate(id) {
      this.active = id
    },
    activeButton(id) {
      this.buttonGenero = id
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
  width: 250px;
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
.button-medio {
  border-left: solid #ed1a3b 1px;
  border-right: solid #ed1a3b 1px;
}
button {
  outline: none;
}
input {
  width: 300px;
}
.button-sex {
  width: 300px;
}
.activateButton {
  background-color: #ed1a3b;
  color: white;
}
</style>
