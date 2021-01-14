<template>
  <section>
    <article class="overflow-y-auto py-48">
      <div class="checkbox div-checkout px-3">
        <input
          id="acondicionado"
          v-model="models.acondicionado"
          type="checkbox"
          name="acondicionado"
          class="input-div. w-4 h-5 md:h-6"
          @change="change"
        />
        <label for="acondicionado" class="pl-1">Aire acondicionado</label>
      </div>
      <div class="checkbox div-checkout px-3">
        <input
          id="bluethoot"
          v-model="models.bluethoot"
          type="checkbox"
          name="bluethoot"
          class="input-div. w-4 h-5 md:h-6"
          @change="change"
        />
        <label for="bluethoot" class="pl-1">Bluethoot</label>
      </div>
      <div class="checkbox div-checkout px-3">
        <input
          id="climatizador"
          v-model="models.climatizador"
          type="checkbox"
          name="climatizador"
          class="input-div. w-4 h-5 md:h-6"
          @change="change"
        />
        <label for="climatizador" class="pl-1">Climatizador</label>
      </div>
      <div class="checkbox div-checkout px-3">
        <input
          id="dvd"
          v-model="models.dvd"
          type="checkbox"
          name="dvd"
          class="input-div. w-4 h-5 md:h-6"
          @change="change"
        />
        <label for="dvd" class="pl-1">DVD</label>
      </div>
      <div class="checkbox div-checkout px-3">
        <input
          id="gps"
          v-model="models.gps"
          type="checkbox"
          name="gps"
          class="input-div. w-4 h-5 md:h-6"
          @change="change"
        />
        <label for="gps" class="pl-1">GPS</label>
      </div>
      <div class="checkbox div-checkout px-3">
        <input
          id="luces"
          v-model="models.luces"
          type="checkbox"
          name="luces"
          class="input-div. w-4 h-5 md:h-6"
          @change="change"
        />
        <label for="luces" class="pl-1">Luces</label>
      </div>
      <div class="checkbox div-checkout px-3">
        <input
          id="radio"
          v-model="models.radio"
          type="checkbox"
          name="radio"
          class="input-div. w-4 h-5 md:h-6"
          @change="change"
        />
        <label for="radio" class="pl-1">Radio</label>
      </div>
      <div class="checkbox div-checkout px-3">
        <input
          id="reproductor"
          v-model="models.reproductor"
          type="checkbox"
          name="reproductor"
          class="input-div. w-4 h-5 md:h-6"
          @change="change"
        />
        <label for="reproductor" class="pl-1">Reproductor MP3</label>
      </div>
      <div class="checkbox div-checkout px-3">
        <input
          id="retrovisores"
          v-model="models.retrovisores"
          type="checkbox"
          name="retrovisores"
          class="input-div. w-4 h-5 md:h-6"
          @change="change"
        />
        <label for="retrovisores" class="pl-1">Retrovisores Electricos</label>
      </div>
      <div class="checkbox div-checkout px-3">
        <input
          id="lluvia"
          v-model="models.lluvia"
          type="checkbox"
          name="lluvia"
          class="input-div. w-4 h-5 md:h-6"
          @change="change"
        />
        <label for="lluvia" class="pl-1">Sensor lluvia</label>
      </div>
      <div class="checkbox div-checkout px-3">
        <input
          id="parqueo"
          v-model="models.parqueo"
          type="checkbox"
          name="parqueo"
          class="input-div. w-4 h-5 md:h-6"
          @change="change"
        />
        <label for="parqueo" class="pl-1">Sensor parqueo</label>
      </div>
      <div class="checkbox div-checkout px-3">
        <input
          id="sillas"
          v-model="models.sillas"
          type="checkbox"
          name="sillas"
          class="input-div. w-4 h-5 md:h-6"
          @change="change"
        />
        <label for="sillas" class="pl-1">Sillas eléctricas</label>
      </div>
      <div class="checkbox div-checkout px-3">
        <input
          id="sunroof"
          v-model="models.sunroof"
          type="checkbox"
          name="sunroof"
          class="input-div. w-4 h-5 md:h-6"
          @change="change"
        />
        <label for="sunroof" class="pl-1">Sunroof</label>
      </div>
      <div class="checkbox div-checkout px-3">
        <input
          id="tapiceria"
          v-model="models.tapiceria"
          type="checkbox"
          name="tapiceria"
          class="input-div. w-4 h-5 md:h-6"
          @change="change"
        />
        <label for="tapiceria" class="pl-1">Tapicería en cuero</label>
      </div>
      <div class="checkbox div-checkout px-3">
        <input
          id="electricos"
          v-model="models.electricos"
          type="checkbox"
          name="electricos"
          class="input-div. w-4 h-5 md:h-6"
          @change="change"
        />
        <label for="electricos" class="pl-1">Vidrios eléctricos</label>
      </div>
      <div class="checkbox div-checkout px-3">
        <input
          id="polarizados"
          v-model="models.polarizados"
          type="checkbox"
          name="polarizados"
          class="input-div. w-4 h-5 md:h-6"
          @change="change"
        />
        <label for="polarizados" class="pl-1">Vidrios polarizados</label>
      </div>
    </article>
  </section>
</template>

<script>
export default {
  name: 'Confort',
  data() {
    return {
      models: {
        acondicionado: '',
        bluethoot: '',
        climatizador: '',
        dvd: '',
        gps: '',
        luces: '',
        radio: '',
        reproductor: '',
        retrovisores: '',
        lluvia: '',
        parqueo: '',
        electricas: '',
        sunroof: '',
        tapiceria: '',
        electricos: '',
        polarizados: '',
      },
      activateButton: '',
    }
  },
  methods: {
    change() {
      const array = Object.values(this.models)
      for (let index = 0; index < array.length; index++) {
        const element = array[index]
        if (element === true) {
          this.activateButton = true
        }
      }
    },
  },
}
</script>

<style scoped>
.a {
  color: white;
  outline: none;
}
.button-sig {
  position: fixed;
  bottom: 100px;
  left: 109px;
}
input {
  outline: none;
}
::placeholder {
  color: #8d8c8c;
}
nav {
  background-color: #e5e5e5;
}
.arrow {
  fill: black;
}
.title {
  width: 67%;
}
.div-checkout {
  border-bottom: solid rgba(218, 218, 218, 0.2) 1px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  height: 53px;
  color: #353535;
  margin-bottom: 10px;
}
.input-div {
  height: 35px;
  width: 35px;
}

.checkbox {
  position: relative;
  display: block;
}
.checkbox input[type='checkbox'] {
  width: auto;
  opacity: 0.00000001;
  position: absolute;
  left: 0;
  margin-left: -20px;
}
.checkbox label {
  position: relative;
}
.checkbox label:before {
  content: '';
  position: absolute;
  right: 0;
  top: 0;
  width: 35px;
  height: 35px;
  transition: transform 0.28s ease;
  border-radius: 10px;
  border: 1px solid #353535;
}
.checkbox label:after {
  content: '';
  display: block;
  width: 18px;
  height: 10px;
  border-bottom: 2px solid #ed1a3b;
  border-left: 2px solid #ed1a3b;
  transform: rotate(-45deg) scale(0);
  -webkit-transform: rotate(-45deg) scale(0);
  transition: transform ease 0.25s;
  will-change: transform;
  position: absolute;
  top: 9px;
  right: 8px;
}
.checkbox input[type='checkbox']:checked ~ label::before {
  background-color: white;
  color: #ed1a3b;
}
.checkbox input[type='checkbox']:checked ~ label::after {
  -webkit-transform: rotate(-45deg) scale(1);
  transform: rotate(-45deg) scale(1);
}
.checkbox label {
  min-height: 34px;
  display: flex;
  margin-bottom: 0;
  font-weight: normal;
  cursor: pointer;
  align-items: center;
}
.checkbox label span {
  position: absolute;
  top: 50%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
}
.checkbox input[type='checkbox']:focus + label::before {
  outline: 0;
}
</style>
