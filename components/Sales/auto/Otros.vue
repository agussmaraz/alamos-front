<template>
  <section>
    <article class="overflow-y-auto py-48">
      <div class="checkbox div-checkout px-3">
        <input
          id="discapacidad"
          v-model="models.discapacidad"
          type="checkbox"
          name="discapacidad"
          class="input-div. w-4 h-5 md:h-6"
          @change="change"
        />
        <label for="discapacidad" class="pl-1"
          >Adaptado a personas con discapacidad</label
        >
      </div>
      <div class="checkbox div-checkout px-3">
        <input
          id="fabrica"
          v-model="models.fabrica"
          type="checkbox"
          name="fabrica"
          class="input-div. w-4 h-5 md:h-6"
          @change="change"
        />
        <label for="fabrica" class="pl-1">Garantía fabrica</label>
      </div>
      <div class="checkbox div-checkout px-3">
        <input
          id="mecanica"
          v-model="models.mecanica"
          type="checkbox"
          name="mecanica"
          class="input-div. w-4 h-5 md:h-6"
          @change="change"
        />
        <label for="mecanica" class="pl-1">Mécanica</label>
      </div>
      <div class="checkbox div-checkout px-3">
        <input
          id="pantalla"
          v-model="models.pantalla"
          type="checkbox"
          name="pantalla"
          class="input-div. w-4 h-5 md:h-6"
          @change="change"
        />
        <label for="pantalla" class="pl-1">Pantalla en asiento pasajeros</label>
      </div>
      <div class="checkbox div-checkout px-3">
        <input
          id="portaequipajes"
          v-model="models.portaequipajes"
          type="checkbox"
          name="portaequipajes"
          class="input-div. w-4 h-5 md:h-6"
          @change="change"
        />
        <label for="portaequipajes" class="pl-1"
          >Porta equipajes en techo</label
        >
      </div>
      <div class="checkbox div-checkout px-3">
        <input
          id="rines"
          v-model="models.rines"
          type="checkbox"
          name="rines"
          class="input-div. w-4 h-5 md:h-6"
          @change="change"
        />
        <label for="rines" class="pl-1">Rines de lujo</label>
      </div>
      <div class="checkbox div-checkout px-3">
        <input
          id="asegurado"
          v-model="models.asegurado"
          type="checkbox"
          name="asegurado"
          class="input-div. w-4 h-5 md:h-6"
          @change="change"
        />
        <label for="asegurado" class="pl-1">Vehículo asegurado</label>
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
        discapacidad: '',
        fabrica: '',
        mecanica: '',
        pantalla: '',
        portaequipaje: '',
        rines: '',
        vehiculo: '',
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
