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
        <p class="font-bold w-1/3 text-center pb-2 border-b-4 border-rojo">
          Seguridad
        </p>
        <p class="font-bold w-1/3 text-center pb-2">Confort</p>
        <p class="font-bold w-1/3 text-center pb-2">Otros</p>
      </article>
      <article class="flex justify-center mt-3">
        <input
          type="text"
          class="w-64 rounded-full h-10 border border-gray-200 pl-10 relative"
          placeholder="Buscador"
        />
        <IconSearch2 class="w-6 h-6 absolute" />
      </article>
    </article>
    <component :is="componente_actual" />
    <div
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
    }
  },
  methods: {
    changePage() {
      if (this.componente_actual === 'Seguridad') {
        this.componente_actual = 'Confort'
      } else if (this.componente_actual === 'Confort') {
        this.componente_actual = 'Otros'
      }
    },
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
