<template>
  <section class="">
    <aside class="w-full flex justify-start my-4 ml-2">
      <nuxt-link to="/register">
        <IconArrow />
      </nuxt-link>
    </aside>
    <Nuxt />
  </section>
</template>

<script>
export default {
  name: 'Page1',
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
</style>
