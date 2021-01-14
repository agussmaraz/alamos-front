<template>
  <section class="flex flex-col">
    <aside class="flex justify-end mt-2 mb-8 mr-2">
      <nuxt-link to="home"><IconClose /></nuxt-link>
    </aside>
    <header
      class="flex flex-col text-rojo font-bold items-center text-2xl mb-24"
    >
      <IconLogo class="w-24 h-24 icon mr-2" />
      Álamos
    </header>
    <div class="flex flex-col w-64 m-auto relative">
      <input type="number" name="" placeholder="Número de Cédula" />
      <IconDni class="w-6 h-6 absolute dni" />
      <input type="password" placeholder="Contraseña" class="mt-8" />
      <IconKey class="w-6 h-5 absolute key" />
      <p class="text-center text-sm mt-8">¿Olvidaste tu contraseña?</p>
    </div>
    <div class="bg-rojo w-64 py-2 text-center rounded-3xl shadow-lg m-0 m-auto">
      <a class="a" href="">INICIAR SESIÓN</a>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@1,200&display=swap');

.icon {
  fill: #ed1a3b;
}
section {
  height: 100vh;
  background-image: url('~assets/img/Selling-car.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  /* padding-top: 87px; */
}
input {
  height: 40px;
  border-radius: 20px;
}
::placeholder {
  font-family: 'Nunito', sans-serif;
  text-align: center;
}
.dni {
  top: 9px;
  left: 11px;
}
.key {
  bottom: 62px;
  left: 11px;
}
.a {
  color: white;
}
</style>
