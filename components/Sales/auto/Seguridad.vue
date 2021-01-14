<template>
  <section>
    <article class="overflow-y-auto py-48">
      <div class="checkbox div-checkout px-3">
        <input
          id="conductor"
          v-model="models.conductor"
          type="checkbox"
          name="conductor"
          class="input-div. w-4 h-5 md:h-6"
          @change="change"
        />
        <label for="conductor" class="pl-1">Airbag conductor</label>
      </div>
      <div class="checkbox div-checkout px-3">
        <input
          id="pasajeros"
          v-model="models.pasajeros"
          type="checkbox"
          name="pasajeros"
          class="input-div. w-4 h-5 md:h-6"
          @change="change"
        />
        <label for="pasajeros" class="pl-1">Airbags pasajeros</label>
      </div>
      <div class="checkbox div-checkout px-3">
        <input
          id="alarma"
          v-model="models.alarma"
          type="checkbox"
          name="alarma"
          class="input-div. w-4 h-5 md:h-6"
          @change="change"
        />
        <label for="alarma" class="pl-1">Alarma</label>
      </div>
      <div class="checkbox div-checkout px-3">
        <input
          id="frontal"
          v-model="models.frontal"
          type="checkbox"
          name="frontal"
          class="input-div. w-4 h-5 md:h-6"
          @change="change"
        />
        <label for="frontal" class="pl-1">Cámara frontal</label>
      </div>
      <div class="checkbox div-checkout px-3">
        <input
          id="reversa"
          v-model="models.reversa"
          type="checkbox"
          name="reversa"
          class="input-div. w-4 h-5 md:h-6"
          @change="change"
        />
        <label for="reversa" class="pl-1">Cámara reversa</label>
      </div>
      <div class="checkbox div-checkout px-3">
        <input
          id="control"
          v-model="models.control"
          type="checkbox"
          name="control"
          class="input-div. w-4 h-5 md:h-6"
          @change="change"
        />
        <label for="control" class="pl-1">Control de estabilidad</label>
      </div>
      <div class="checkbox div-checkout px-3">
        <input
          id="trasero"
          v-model="models.trasero"
          type="checkbox"
          name="trasero"
          class="input-div. w-4 h-5 md:h-6"
          @change="change"
        />
        <label for="trasero" class="pl-1">Desempañador trasero</label>
      </div>
      <div class="checkbox div-checkout px-3">
        <input
          id="delantero"
          v-model="models.delantero"
          type="checkbox"
          name="delantero"
          class="input-div. w-4 h-5 md:h-6"
          @change="change"
        />
        <label for="delantero" class="pl-1">Exploradoras delanteras</label>
      </div>
      <div class="checkbox div-checkout px-3">
        <input
          id="exploradoras"
          v-model="models.exploradoras"
          type="checkbox"
          name="exploradoras"
          class="input-div. w-4 h-5 md:h-6"
          @change="change"
        />
        <label for="exploradoras" class="pl-1">Exploradoras traseras</label>
      </div>
      <div class="checkbox div-checkout px-3">
        <input
          id="halogenos"
          v-model="models.halogenos"
          type="checkbox"
          name="halogenos"
          class="input-div. w-4 h-5 md:h-6"
          @change="change"
        />
        <label for="halogenos" class="pl-1">Faros halógenos</label>
      </div>
      <div class="checkbox div-checkout px-3">
        <input
          id="led"
          v-model="models.led"
          type="checkbox"
          name="led"
          class="input-div. w-4 h-5 md:h-6"
          @change="change"
        />
        <label for="led" class="pl-1">Faros led</label>
      </div>
      <div class="checkbox div-checkout px-3">
        <input
          id="frenos"
          v-model="models.frenos"
          type="checkbox"
          name="frenos"
          class="input-div. w-4 h-5 md:h-6"
          @change="change"
        />
        <label for="frenos" class="pl-1">Frenos ABS</label>
      </div>
    </article>
    <div
      v-if="activateButton"
      class="bg-rojo w-48 py-2 text-center rounded-3xl shadow-lg m-auto button-sig"
    >
      <button class="a">Siguiente</button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Seguridad',
  data() {
    return {
      models: {
        conductor: '',
        pasajeros: '',
        alarma: '',
        frontal: '',
        reversa: '',
        control: '',
        desempañador: '',
        delanteras: '',
        traseras: '',
        halogenos: '',
        led: '',
        faros: '',
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
