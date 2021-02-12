<template>
  <section class="caja-padre flex flex-col items-center">
    <h1 class="my-5">Ubicación del vehículo</h1>
    <article>
      <div class="w-full text-center">
        <input
          v-model="ubicacion"
          type="text"
          class="w-40 h-10 text-center rounded-md border-2 border-gray-600"
        />
      </div>
      <h1 class="mt-10 mb-5 text-center w-64 m-auto">
        Acepto videollamada para mostrar mi vehículo
      </h1>
      <div class="flex items-center justify-center">
        <button
          :class="active === 'si' ? 'activeButton' : null"
          class="w-20 mr-10 h-10 border-2 border-gray-600 rounded-md text-center font-bold button-opcion"
          @click="activateButton('si')"
        >
          SI
        </button>
        <button
          :class="active === 'no' ? 'activeButton' : null"
          class="w-20 h-10 border-2 border-gray-600 rounded-md text-center font-bold button-opcion"
          @click="activateButton('no')"
        >
          NO
        </button>
      </div>
      <h1 class="mt-10 mb-5 text-center">Agregar notas</h1>
      <div>
        <label class="radio">
          Contactarme entre las 9 am. a 7 pm.
          <input type="radio" name="radio" />
          <span class="check"></span>
        </label>
        <label class="radio">
          Contactarme sólo fines de semana.
          <input type="radio" name="radio" />
          <span class="check"></span>
        </label>
        <label class="radio">
          Contactarme sólo entre semana.
          <input type="radio" name="radio" />
          <span class="check"></span>
        </label>
      </div>
    </article>
  </section>
</template>

<script>
export default {
  name: 'Ubicacion',
  data() {
    return {
      ubicacion: 'Bogotá D.C',
      active: '',
    }
  },
  methods: {
    activateButton(data) {
      this.active = data
    },
  },
}
</script>

<style scoped>
h1 {
  color: #444343;
  font-size: 20px;
  font-weight: bold;
}
.caja-padre {
  width: 80%;
  margin: 0 auto;
}
.button-opcion {
  outline: none;
}
.activeButton {
  background-color: #444343;
  color: white;
}
.button-opcion:hover {
  background-color: #444343;
  color: white;
}
.radio {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* hide the browser's default radio button */
.radio input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

/* create custom radio */
.radio .check {
  position: absolute;
  top: 2px;
  left: 0;
  height: 21px;
  width: 21px;
  background-color: white;
  border: 2px solid black;
  border-radius: 40%;
}

/* on mouse-over, add border color */
.radio:hover input ~ .check {
  border: 2px solid black;
}

/* add background color when the radio is checked */
.radio input:checked ~ .check {
  background-color: white;
  /* border: none; */
}

/* create the radio and hide when not checked */
.radio .check:after {
  content: '';
  position: absolute;
  display: none;
}

/* show the radio when checked */
.radio input:checked ~ .check:after {
  display: block;
}

/* radio style */
.radio .check:after {
  top: 5px;
  left: 5px;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: black;
}
</style>
