<template>
  <section class="flex flex-col items-center caja-padre">
    <h1 class="my-5">Completa los siguientes campos</h1>
    <p class="parrafo text-xs">Datos obligatorios *</p>
    <form action="">
      <div>
        <label for="">Tipo de transmisión*</label>
        <select name="select">
          <option v-for="(item, index) in transmision" :key="index" value="">
            {{ item }}
          </option>
        </select>
      </div>
      <div>
        <label for="">Sistema de arranque*</label>
        <select name="select">
          <option v-for="(item, index) in arranque" :key="index" value="">
            {{ item }}
          </option>
        </select>
      </div>
      <div>
        <label for="">Tipo de motor*</label>
        <select name="select">
          <option v-for="(item, index) in motor" :key="index" value="">
            {{ item }}
          </option>
        </select>
      </div>
      <div>
        <label for="">Sistema de alimentación*</label>
        <select name="select">
          <option v-for="(item, index) in alimentacion" :key="index" value="">
            {{ item }}
          </option>
        </select>
      </div>
      <div>
        <label for="">Tipo de moto*</label>
        <select name="select">
          <option v-for="(item, index) in moto" :key="index" value="">
            {{ item }}
          </option>
        </select>
      </div>
      <div>
        <label for="">Kilometraje*</label>
        <span>
          <input v-model="km" type="text" />
          <span class="text-gray-400"> Km </span>
        </span>
      </div>
      <div class="">
        <label for="">Único dueño*</label>
        <article
          class="flex justify-around items-center border rounded-md h-10 button-confirmacion"
        >
          <button
            class="text-xs h-full w-full outline-none button-medio"
            :class="buttonConfirmacion === 'si' ? 'activateButton' : false"
            @click.prevent="activeButton('si')"
          >
            Si
          </button>
          <button
            class="text-xs h-full w-full outline-none"
            :class="buttonConfirmacion === 'no' ? 'activateButton' : false"
            @click.prevent="activeButton('no')"
          >
            No
          </button>
        </article>
      </div>
    </form>
  </section>
</template>

<script>
export default {
  name: 'Form',
  data() {
    return {
      buttonConfirmacion: 'si',
      arranque: ['Pedal', 'Eléctrico', 'Pedal y Eléctrico'],
      transmision: [
        'Automática',
        '2 Velocidades',
        '3 Velocidades',
        '4 Velocidades',
        '5 Velocidades',
        '6 Velocidades',
        '7 Velocidades',
        '8 Velocidades',
      ],
      motor: ['2 Tiempos', '4 Tiempos', 'Eléctrico Cte. Continua'],
      alimentacion: ['Carburador', 'Inyección Electrónica'],
      moto: ['vacio'],
      km: '12.000',
    }
  },
  methods: {
    activeButton(param) {
      this.buttonConfirmacion = param
    },
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200&display=swap');

.parrafo {
  font-family: 'Montserrat', sans-serif;
  margin-bottom: 30px;
}
.caja-padre {
  width: 90%;
  margin: 0 auto;
}
form {
  width: 90%;
}
h1 {
  color: #444343;
  font-size: 20px;
  font-weight: bold;
}
label {
  font-weight: bold;
  font-size: 16px;
  color: #8d8c8c;
  margin-bottom: 5px;
}
div {
  display: flex;
  flex-flow: column;
  justify-content: center;
  margin-bottom: 35px;
}
select {
  width: 339px;
  height: 30px;
  background: #e5e5e5;
  border-radius: 6px;
  outline: none;
}
.activateButton {
  background-color: #8d8c8c;
  color: white;
  outline: none;
}
.button-confirmacion {
  width: 110px;
  outline: none;
  border: solid #8d8c8c 1px;
}
input {
  width: 120px;
  height: 30px;
  background: #e5e5e5;
  border-radius: 6px;
  outline: none;
  padding-left: 10px;
}
</style>
