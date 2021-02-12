<template>
  <section>
    <aside class="w-full flex justify-start my-4 ml-2">
      <div @click="back">
        <IconArrow class="icon" />
      </div>
    </aside>
    <transition name="slide-fade">
      <component :is="componente_actual" class="component" />
    </transition>

    <article class="flex justify-center">
      <div
        v-if="componente_actual !== 'DatosUser8'"
        class="bg-rojo w-48 py-2 text-center rounded-3xl shadow-lg mr-2"
      >
        <button class="a" @click="changePage">Siguiente</button>
      </div>
      <div
        v-if="componente_actual === 'DatosUser8'"
        class="bg-rojo w-48 py-2 text-center rounded-3xl shadow-lg mr-2"
      >
        <button class="a" @click="openModal({ modal: 'documento' })">
          ¡Ya lo tengo!
        </button>
      </div>
    </article>
    <section v-if="modalDocumento" class="absolute inset-0 flex justify-center">
      <article
        class="modal z-10"
        @click="closeModal({ modal: 'documento' })"
      ></article>
      <Consejos class="consejos-modal absolute z-20" />
    </section>
  </section>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  layout: 'register',
  components: {
    DatosUser1: () => import('@/components/Register/particular/datosUser1'),
    DatosUser2: () => import('@/components/Register/particular/datosUser2'),
    DatosUser3: () => import('@/components/Register/particular/datosUser3'),
    DatosUser4: () => import('@/components/Register/particular/datosUser4'),
    DatosUser5: () => import('@/components/Register/particular/datosUser5'),
    DatosUser6: () => import('@/components/Register/particular/datosUser6'),
    DatosUser7: () => import('@/components/Register/particular/datosUser7'),
    DatosUser8: () => import('@/components/Register/particular/datosUser8'),
  },
  data() {
    return {
      componente_actual: 'DatosUser1',
    }
  },
  computed: {
    ...mapState({
      modalDocumento: (state) => state.modal.modal.documento,
    }),
  },
  methods: {
    ...mapActions({
      openModal: 'modal/openModal',
      closeModal: 'modal/closeModal',
      validateComponente1: 'particular/validateComponente1',
      validateComponente2: 'particular/validateComponente2',
      validateComponente3: 'particular/validateComponente3',
      validateComponente4: 'particular/validateComponente4',
      validateComponente5: 'particular/validateComponente5',
    }),
    back() {
      if (this.componente_actual === 'DatosUser1') {
        this.$router.push('/register')
      } else if (this.componente_actual === 'DatosUser2') {
        this.componente_actual = 'DatosUser1'
      } else if (this.componente_actual === 'DatosUser3') {
        this.componente_actual = 'DatosUser2'
      } else if (this.componente_actual === 'DatosUser4') {
        this.componente_actual = 'DatosUser3'
      } else if (this.componente_actual === 'DatosUser5') {
        this.componente_actual = 'DatosUser4'
      } else if (this.componente_actual === 'DatosUser6') {
        this.componente_actual = 'DatosUser5'
      } else if (this.componente_actual === 'DatosUser7') {
        this.componente_actual = 'DatosUser6'
      } else if (this.componente_actual === 'DatosUser8') {
        this.componente_actual = 'DatosUser7'
      }
    },
    async changePage() {
      if (this.componente_actual === 'DatosUser1') {
        const validaComponente1 = await this.validateComponente1()
        if (validaComponente1) {
          this.componente_actual = 'DatosUser2'
        }
      } else if (this.componente_actual === 'DatosUser2') {
        const validaComponente2 = await this.validateComponente2()
        if (validaComponente2) {
          this.componente_actual = 'DatosUser3'
        }
      } else if (this.componente_actual === 'DatosUser3') {
        const validaComponente3 = await this.validateComponente3()
        if (validaComponente3) {
          this.componente_actual = 'DatosUser6'
        }
      } else if (this.componente_actual === 'DatosUser6') {
        const validaComponente4 = await this.validateComponente4()
        if (validaComponente4) {
          this.componente_actual = 'DatosUser7'
        }
      } else if (this.componente_actual === 'DatosUser7') {
        const validaComponente5 = await this.validateComponente5()
        if (validaComponente5) {
          this.componente_actual = 'DatosUser8'
        }
        //   this.componente_actual = 'DatosUser4'
        // } else if (this.componente_actual === 'DatosUser4') {
        //   this.componente_actual = 'DatosUser5'
        // } else if (this.componente_actual === 'DatosUser5') {
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
.icon {
  fill: #ed1a3b;
}
.component {
  height: 560px;
}
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-enter {
  transform: translateX(10px);
  opacity: 0;
}
.modal {
  position: relative;
  background-color: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100%;
}
.consejos-modal {
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  bottom: 0px;
  border-top-left-radius: 41px;
  border-top-right-radius: 41px;
}
</style>
