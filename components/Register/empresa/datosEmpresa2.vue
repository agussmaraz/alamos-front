<template>
  <section class="flex flex-col items-center text-center">
    <span class="flex text-rojo text-2xl mt-4 header text-center">
      Datos de la empresa
    </span>
    <p class="parrafo div-parrafo text-sm">
      A continuación, solicitaremos los datos de tu empresa para hacer tus
      facturas cuando generes cargos:
    </p>
    <section class="w-full">
      <article class="relative mt-4">
        <input
          v-model="data.nombre_empresa"
          type="text"
          class="border border-rojo rounded-md w-64 h-12 outline-none pl-4"
          @click="activate('nombre_empresa')"
        />
        <div
          class="div-label absolute px-2"
          :class="
            active === 'nombre_empresa' || data.nombre_empresa != ''
              ? 'moveLabel'
              : false
          "
        >
          <label for="" class="text-rojo text-xs">Nombre de la empresa</label>
        </div>
      </article>
      <article class="relative my-12">
        <input
          type="text"
          class="border border-rojo rounded-md w-64 h-12 outline-none pl-4"
          @click="activate('razon_social')"
        />
        <div
          class="div-label absolute px-2"
          :class="
            active === 'razon_social' || data.razon_social != ''
              ? 'moveLabel'
              : false
          "
        >
          <label for="" class="text-rojo text-xs">Razón social</label>
        </div>
      </article>
      <article class="relative my-12">
        <input
          type="text"
          class="border border-rojo rounded-md w-64 h-12 outline-none pl-4"
          @click="activate('nit')"
        />
        <div
          class="div-label absolute px-2"
          :class="active === 'nit' || data.nit != '' ? 'moveLabel' : false"
        >
          <label for="" class="text-rojo text-xs">NIT</label>
        </div>
      </article>
    </section>
  </section>
</template>

<script>
export default {
  name: 'DatosEmpresa2',
  data() {
    return {
      active: 'false',
      data: {
        nombre_empresa: '',
        razon_social: '',
        nit: '',
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
