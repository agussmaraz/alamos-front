<template>
  <section>
    <component :is="componente_actual" class="component" />
    <article class="flex justify-center">
      <div class="bg-rojo w-48 py-2 text-center rounded-3xl shadow-lg mr-2">
        <button class="a" @click="changePage">Siguiente</button>
      </div>
    </article>
  </section>
</template>

<script>
export default {
  layout: 'register',
  components: {
    DatosUser1: () => import('@/components/Register/particular/datosUser1'),
    DatosUser2: () => import('@/components/Register/particular/datosUser2'),
    DatosUser3: () => import('@/components/Register/particular/datosUser3'),
    DatosUser4: () => import('@/components/Register/particular/datosUser4'),
  },
  data() {
    return {
      componente_actual: 'DatosUser1',
    }
  },
  methods: {
    changePage() {
      if (this.componente_actual === 'DatosUser1') {
        this.componente_actual = 'DatosUser2'
      } else if (this.componente_actual === 'DatosUser2') {
        this.componente_actual = 'DatosUser3'
      } else if (this.componente_actual === 'DatosUser3') {
        this.componente_actual = 'DatosUser4'
      }
    },
  },
}
</script>

<style scoped>
.a {
  color: white;
  outline: none;
  width: 100%;
}
.component {
  height: 560px;
}
</style>
