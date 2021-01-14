<template>
  <section class="flex flex-col items-center text-center">
    <span class="flex text-rojo text-2xl mt-4 header text-center">
      Ingresa tu email corporativo
    </span>
    <article>
      <div class="div-parrafo">
        <div class="mb-4">
          <div class="mb-3">
            <span class="text-sm parrafo"
              >Ingresa un correo electrónico válido para registrarte en
            </span>
            <span class="text-sm"> Álamos. </span>
          </div>
        </div>
      </div>
    </article>
    <section class="w-full">
      <article class="relative mt-10">
        <input
          v-model="data.correo"
          type="text"
          class="border border-rojo rounded-md h-12 outline-none pl-4"
          @click="activate('correo')"
        />
        <div
          class="div-label absolute px-2"
          :class="
            active === 'correo' || data.correo != '' ? 'moveLabel' : false
          "
        >
          <label for="" class="text-rojo text-xs">Correo electrónico</label>
        </div>
      </article>
      <article class="relative mt-10">
        <input
          type="text"
          class="border border-rojo rounded-md h-12 outline-none pl-4"
          @click="activate('confirmar')"
        />
        <div
          class="div-label absolute px-2"
          :class="
            active === 'confirmar' || data.confirmacion != ''
              ? 'moveLabel'
              : false
          "
        >
          <label for="" class="text-rojo text-xs">Confirmar correo</label>
        </div>
      </article>
    </section>
  </section>
</template>

<script>
export default {
  name: 'DatosEmpresa1',
  data() {
    return {
      active: 'false',
      data: {
        correo: '',
        confirmacion: '',
      },
    }
  },
  methods: {
    activate(id) {
      this.active = id
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
  width: 220px;
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
input {
  width: 300px;
}
</style>
