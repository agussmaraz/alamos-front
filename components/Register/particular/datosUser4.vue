<template>
  <section class="flex flex-col items-center text-center">
    <IconEmailHeart class="w-20 mt-6" />
    <span class="flex text-2xl mt-6 header text-center">
      ¡Te enviamos un correo!
    </span>
    <div class="parrafo text-sm div-parrafo">
      <p>
        Te acabamos de enviar un email para verificar tu dirección de correo.
      </p>
      <br />
      <p>Te enviamos el email a:</p>
    </div>
    <p class="text-rojo font-bold text-lg">concesionario@empresa.com</p>
    <button class="button-reenviar p-2 rounded-md parrafo w-32 shadow-md mt-8">
      Reenviar
    </button>
    <p class="text-xs parrafo underline mt-24">¿No has recibido el email?</p>
  </section>
</template>

<script>
export default {
  name: 'Page4',
  data() {
    return {
      active: 'false',
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
  top: 7px;
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
.button-reenviar {
  background-color: #ffc0c0;
}
</style>
