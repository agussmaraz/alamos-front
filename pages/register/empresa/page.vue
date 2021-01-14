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
    DatosEmmpresa1: () => import('@/components/Register/empresa/datosEmpresa1'),
    DatosEmpresa2: () => import('@/components/Register/empresa/datosEmpresa2'),
    DatosEmpresa3: () => import('@/components/Register/empresa/datosEmpresa3'),
    DatosEmpresa4: () => import('@/components/Register/empresa/datosEmpresa4'),
    DatosEmpresa5: () => import('@/components/Register/empresa/datosEmpresa5'),
    DatosEmpresa6: () => import('@/components/Register/empresa/datosEmpresa6'),
    DatosEmpresa7: () => import('@/components/Register/empresa/datosEmpresa7'),
    DatosEmpresa8: () => import('@/components/Register/empresa/datosEmpresa8'),
    DatosEmpresa9: () => import('@/components/Register/empresa/datosEmpresa9'),
    DatosEmpresa10: () =>
      import('@/components/Register/empresa/datosEmpresa10'),
  },
  data() {
    return {
      componente_actual: 'DatosEmmpresa1',
    }
  },
  methods: {
    changePage() {
      if (this.componente_actual === 'DatosEmmpresa1') {
        this.componente_actual = 'DatosEmpresa2'
      } else if (this.componente_actual === 'DatosEmpresa2') {
        this.componente_actual = 'DatosEmpresa3'
      } else if (this.componente_actual === 'DatosEmpresa3') {
        this.componente_actual = 'DatosEmpresa4'
      } else if (this.componente_actual === 'DatosEmpresa4') {
        this.componente_actual = 'DatosEmpresa5'
      } else if (this.componente_actual === 'DatosEmpresa5') {
        this.componente_actual = 'DatosEmpresa6'
      } else if (this.componente_actual === 'DatosEmpresa6') {
        this.componente_actual = 'DatosEmpresa7'
      } else if (this.componente_actual === 'DatosEmpresa7') {
        this.componente_actual = 'DatosEmpresa8'
      } else if (this.componente_actual === 'DatosEmpresa8') {
        this.componente_actual = 'DatosEmpresa9'
      } else if (this.componente_actual === 'DatosEmpresa9') {
        this.componente_actual = 'DatosEmpresa10'
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
