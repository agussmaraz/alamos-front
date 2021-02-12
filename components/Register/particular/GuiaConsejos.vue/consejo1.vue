<template>
  <section class="caja-padre flex flex-col items-center p-3">
    <IconInfo class="iconinfo w-12 h-12 my-3" />
    <span class="flex text-rojo text-2xl mt-4 header text-center my-3">
      Consejos para sacar una foto válida del documento
    </span>
    <p class="text-center my-3">
      Sigue atentamente las siguientes indicaciones.
    </p>
  </section>
</template>

<script>
export default {
  name: 'Consejo1',
}
</script>

<style scoped>
.caja-padre {
  width: 300px;
  margin: 0 auto;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
}
.iconinfo {
  fill: #ed1a3b;
}
</style>
