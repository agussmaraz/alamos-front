<template>
  <section class="flex flex-col items-center text-center">
    <IconPassword class="w-20 mt-6" />
    <span class="flex text-2xl mt-10 header text-center text-rojo">
      Genera tu clave de acceso
    </span>
    <div class="parrafo text-sm div-parrafo">
      <p>Vamos a pedirte que generes una clave de 6 dígitos.</p>
    </div>
    <article class="w-56 p-2 text-sm h-20 rounded div-pass shadow-md mt-8">
      <span class="parrafo">
        Esta va a ser tu clave de acceso a la aplicación.
      </span>
      <br />
      ¡No la olvides!
    </article>
  </section>
</template>

<script>
export default {
  name: 'DatosEmpresa7',
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
.div-pass {
  background-color: #fef49c;
}
</style>
