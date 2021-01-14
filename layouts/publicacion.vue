<template>
  <section class="caja-madre">
    <nav class="flex justify-between px-3 py-4">
      <div>
        <nuxt-link to="/home">
          <IconArrow class="arrow" />
        </nuxt-link>
      </div>
      <div class="font-bold">Publicar vehiculo</div>
      <div class="font-bold text-xs mt-1">Cancelar</div>
    </nav>
    <article class="caja-pasos flex justify-between mt-5 px-8 py-4">
      <div class="div-icon">
        <IconVolante class="w-12 h-10 mt-2 m-auto indicado" />
      </div>
      <div class="div-icon">
        <IconCamera class="w-12 h-10 mt-2 m-auto" />
      </div>
      <div class="div-icon">
        <IconCarPin class="w-12 h-12 mt-1 m-auto" />
      </div>
      <div class="div-icon">
        <IconComments class="w-12 h-10 mt-2 m-auto" />
      </div>
    </article>
    <article class="caja-componente mb-40">
      <!-- <Auto /> -->
      <component :is="componente_actual" class="mb-20" />
      <div
        v-if="componente_actual !== 'Caracteristicas'"
        class="bg-rojo w-48 py-2 text-center rounded-3xl shadow-lg m-auto button-sig"
      >
        <button class="a" @click="changePage">Siguiente</button>
      </div>
    </article>
    <Footer />
  </section>
</template>

<script>
export default {
  name: 'Venta',
  components: {
    Placa: () => import('@/components/Sales/auto/Placa'),
    Form: () => import('@/components/Sales/auto/Form'),
    Form1: () => import('@/components/Sales/auto/Form1'),
    Caracteristicas: () => import('@/components/Sales/auto/Caracteristicas'),
  },
  data() {
    return {
      componente_actual: 'Placa',
    }
  },
  methods: {
    changePage() {
      if (this.componente_actual === 'Placa') {
        this.componente_actual = 'Form'
      } else if (this.componente_actual === 'Form') {
        this.componente_actual = 'Form1'
      } else if (this.componente_actual === 'Form1') {
        this.componente_actual = 'Caracteristicas'
      }
    },
  },
}
</script>

<style scoped>
.arrow {
  fill: black;
}
.a {
  color: white;
  outline: none;
}

nav {
  background-color: #e5e5e5;
}
.div-icon {
  background-color: #e5e5e5;
  padding: 5px;
  border-radius: 8px;
  width: 73px;
  height: 73px;
}
.caja-madre {
  background-color: #f9f8f8;
}
.caja-pasos {
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
}
.indicado {
  fill: #ed1a3b;
}
.caja-componente {
  background-color: white;
}
.button-sig {
  position: fixed;
  bottom: 100px;
  left: 109px;
}
</style>
