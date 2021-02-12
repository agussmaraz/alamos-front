<template>
  <section class="flex flex-col items-center text-center">
    <span class="flex text-2xl mt-6 header text-center text-rojo">
      Términos y Condiciones
    </span>
    <div class="text-sm div-parrafo">
      <span class="parrafo">Para abrir tu cuenta de</span>
      <span>Álamos</span>
      <span class="parrafo"
        >tienes que aceptar los términos y condiciones.</span
      >
    </div>
    <p class="text-xs parrafo underline mt-64">Leer Términos y Condiciones</p>
  </section>
</template>

<script>
export default {
  name: 'DatosEmpresa9',
  data() {
    return {
      active: 'false',
      data: {
        first_name: '',
        last_name: '',
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
button {
  outline: none;
}
a {
  color: white;
}
</style>
