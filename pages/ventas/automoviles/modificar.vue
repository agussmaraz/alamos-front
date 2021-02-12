<template>
  <section class="">
    <article>
      <nav class="nav flex items-center px-3 py-4 fixed w-full z-20">
        <div>
          <nuxt-link to="/ventas/automoviles/publicacion">
            <IconArrow class="arrow" />
          </nuxt-link>
        </div>
        <div class="font-bold ml-12">2019 SUBARU OUTBACK 3.6R ES</div>
      </nav>
    </article>
    <article class="caja-divs">
      <div class="div-publicacion flex items-center justify-between">
        <p>Modificar publicación</p>
        <IconArrow2 class="icon-arrow w-4 h-4" />
      </div>
      <div class="div-publicacion flex items-center justify-between">
        <p>Pausar publicación</p>
        <IconArrow2 class="icon-arrow w-4 h-4" />
      </div>
      <div class="div-publicacion flex items-center justify-between">
        <p>Eliminar publicación</p>
        <IconArrow2 class="icon-arrow w-4 h-4" />
      </div>
    </article>
    <Footer />
  </section>
</template>

<script>
export default {
  name: 'Modificar',
}
</script>

<style scoped>
.caja-divs {
  padding-top: 59px;
}
.arrow {
  fill: black;
}
.nav {
  background-color: #eaebef;
}
.icon-arrow {
  fill: #353535;
  transform: rotate(270deg);
}
.div-publicacion {
  padding: 16px;
  border-bottom: 1px solid #c4c4c4;
}
</style>
