<template>
  <section class="flex flex-col items-center text-center">
    <span class="flex text-rojo text-2xl mt-4 header text-center">
      Datos de la empresa
    </span>
    <section class="w-full">
      <article class="relative mt-20">
        <input
          v-model="data.direccion"
          type="text"
          class="border border-rojo rounded-md w-64 h-12 outline-none pl-4"
          @click="activate('direccion')"
        />
        <div
          class="div-label absolute px-2"
          :class="
            active === 'direccion' || data.direccion != '' ? 'moveLabel' : false
          "
        >
          <label for="" class="text-rojo text-xs">Nombre de la empresa</label>
        </div>
      </article>
      <article class="relative my-12">
        <input
          type="text"
          class="border border-rojo rounded-md w-64 h-12 outline-none pl-4"
          @click="activate('ciudad')"
        />
        <div
          class="div-label absolute px-2"
          :class="
            active === 'ciudad' || data.ciudad != '' ? 'moveLabel' : false
          "
        >
          <label for="" class="text-rojo text-xs">Razón social</label>
        </div>
      </article>
      <article class="relative my-12">
        <input
          type="text"
          class="border border-rojo rounded-md w-64 h-12 outline-none pl-4"
          @click="activate('localidad')"
        />
        <div
          class="div-label absolute px-2"
          :class="
            active === 'localidad' || data.localidad != '' ? 'moveLabel' : false
          "
        >
          <label for="" class="text-rojo text-xs">Localidad</label>
        </div>
      </article>
    </section>
  </section>
</template>

<script>
export default {
  name: 'DatosEmpresa6',
  data() {
    return {
      active: 'false',
      data: {
        direccion: '',
        ciudad: '',
        localidad: '',
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
