<template>
  <section>
    <article class="caja-nav pb-3 fixed z-20 w-full">
      <nav class="flex justify-between px-3 py-4">
        <div>
          <nuxt-link to="/ventas/automoviles/formulario">
            <IconArrow class="arrow" />
          </nuxt-link>
        </div>
        <div class="title font-bold">Items vehículos</div>
      </nav>
      <article class="flex items-center justify-around py-3">
        <p
          class="font-bold w-1/3 text-center pb-2"
          :class="componente_actual == 'Seguridad' ? 'active' : false"
          @click="componente_actual = 'Seguridad'"
        >
          Seguridad
        </p>
        <p
          class="font-bold w-1/3 text-center pb-2"
          :class="componente_actual == 'Confort' ? 'active' : false"
          @click="componente_actual = 'Confort'"
        >
          Confort
        </p>
        <p
          class="font-bold w-1/3 text-center pb-2"
          :class="componente_actual == 'Otros' ? 'active' : false"
          @click="componente_actual = 'Otros'"
        >
          Otros
        </p>
      </article>
      <article class="flex justify-center mt-3">
        <input
          v-model="busqueda"
          type="text"
          class="w-64 rounded-full h-10 border border-gray-200 pl-10 relative"
          placeholder="Buscador"
          @keyup="newSearch(busqueda)"
        />
        <IconSearch2 class="w-6 h-6 absolute" />
      </article>
    </article>
    <component
      :is="componente_actual"
      :busqueda="busqueda"
      @checkbox="change"
    />
    <div
      v-if="activateButton"
      class="bg-rojo w-48 py-2 text-center rounded-3xl shadow-lg m-auto button-sig"
    >
      <button class="a" @click="changePage">Siguiente</button>
    </div>
    <Footer />
  </section>
</template>

<script>
export default {
  components: {
    Seguridad: () => import('@/components/Sales/auto/Seguridad'),
    Confort: () => import('@/components/Sales/auto/Confort'),
    Otros: () => import('@/components/Sales/auto/Otros'),
    // Elegidos: () => import('@/components/Sales/auto/Elegidos'),
  },
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
      componente_actual: 'Seguridad',
      busqueda: '',
    }
  },
  methods: {
    changePage() {
      if (this.componente_actual === 'Seguridad') {
        this.componente_actual = 'Confort'
      } else if (this.componente_actual === 'Confort') {
        this.componente_actual = 'Otros'
      } else if (this.componente_actual === 'Otros') {
        this.$router.push('/ventas/automoviles/caracteristicas')
      }
    },
    change(value) {
      // console.log(value)
      if (value === true) {
        this.activateButton = true
      }
    },
    newSearch(param) {
      this.busqueda = param
    },
  },
}
</script>

<style scoped>
.active {
  border-bottom: solid #ed1a3b 4px;
}
.a {
  color: white;
  outline: none;
}
.button-sig {
  position: fixed;
  bottom: 100px;
  left: 109px;
}
.caja-nav {
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
  background-color: white;
}
svg {
  left: 87px;
  bottom: 20px;
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
</style>
