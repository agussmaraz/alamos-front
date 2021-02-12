<template>
  <section class="flex flex-col items-center text-center">
    <aside class="w-full flex justify-start my-4 ml-2">
      <nuxt-link to="/">
        <IconArrow class="icon" />
      </nuxt-link>
    </aside>
    <span class="flex text-rojo items-center text-2xl mt-4 header">
      ¡Nos tomamos tu seguridad en serio!
    </span>
    <article>
      <IconHands class="icono w-24" />
      <div class="div-parrafo">
        <div class="mb-4">
          <span class="text-sm parrafo">No queremos que seas víctima </span>
          <span class="text-sm"> robo o estafa </span>
          <span class="text-sm parrafo">
            cuando compres o vendas vehículos.
          </span>
        </div>
        <span class="text-sm parrafo">
          Nuestro registro de cuenta está diseñado para
        </span>
        <span class="text-sm">proteger</span>
        <span class="text-sm parrafo"
          >. a nuestros usuarios y generar un ambiente de negociación
        </span>
        <span class="text-sm"> transparente y seguro. </span>
      </div>
    </article>
    <article class="flex mt-4">
      <div
        class="bg-rojo w-32 py-2 text-center rounded-lg shadow-lg m-auto mr-2"
      >
        <nuxt-link class="a" to="/register/empresa">Soy empresa</nuxt-link>
      </div>
      <div
        class="bg-rojo w-32 py-2 text-center rounded-lg shadow-lg m-auto ml-2"
      >
        <nuxt-link class="a" to="/register/particular"
          >Soy particular</nuxt-link
        >
      </div>
    </article>
  </section>
</template>

<script>
export default {
  name: 'PageOne',
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
  width: 250px;
  margin-top: 30px;
  margin-bottom: 40px;
}
.header {
  width: 200px;
}
a {
  color: white;
}
</style>
