<template>
  <section class="flex flex-col items-center">
    <h1 class="my-5">Características adicionales</h1>
    <button class="button-items">
      <nuxt-link to="/ventas/automoviles/items">
        Items seleccionados
        <span>+</span>
      </nuxt-link>
    </button>
    <section class="caja-items">
      <article class="text-left my-4">
        <h3 class="font-bold text-base mb-3">Seguridad</h3>
        <div v-for="(item, index) in seguridad" :key="index">
          <p class="text-sm">
            {{ item.name }}
            <button
              class="text-rojo text-lg cursor-pointer button-eliminar"
              @click.prevent="deleteData({ tipo: 'seguridad', dato: item })"
            >
              x
            </button>
          </p>
        </div>
      </article>
      <article class="text-left my-4">
        <h3 class="font-bold text-base mb-3">Confort</h3>
        <div v-for="(item, index) in confort" :key="index">
          <p class="text-sm">
            {{ item.name }}
            <button
              class="text-rojo text-lg cursor-pointer button-eliminar"
              @click.prevent="deleteData({ tipo: 'confort', dato: item })"
            >
              x
            </button>
          </p>
        </div>
      </article>
      <article class="text-left my-4">
        <h3 class="font-bold text-base mb-3">Otros</h3>
        <div v-for="(item, index) in otros" :key="index">
          <p class="text-sm">
            {{ item.name }}
            <button
              class="text-rojo text-lg cursor-pointer button-eliminar"
              @click.prevent="deleteData({ tipo: 'otros', dato: item })"
            >
              x
            </button>
          </p>
        </div>
      </article>
    </section>
  </section>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'Elegidos',
  computed: {
    ...mapState({
      seguridad: (state) => state.items.seguridad,
      otros: (state) => state.items.otros,
      confort: (state) => state.items.confort,
    }),
  },
  methods: {
    ...mapActions({
      deleteData: 'items/deleteData',
    }),
  },
}
</script>

<style scoped>
.button-eliminar {
  outline: none;
}
p {
  background: #f9f8f8;
  border: 1px solid #dadada;
  border-radius: 6px;
  height: 40px;
  margin-bottom: 5px;
  display: flex;
  align-items: center;
  padding-left: 5px;
  justify-content: space-between;
  padding-right: 10px;
}
h1 {
  color: #444343;
  font-size: 20px;
  font-weight: bold;
}
.button-items {
  background-color: #e5e5e5;
  outline: none;
  width: 70%;
  padding: 3px;
  border-radius: 8px;
}
.caja-items {
  width: 68%;
  margin: 0 auto;
}
</style>
