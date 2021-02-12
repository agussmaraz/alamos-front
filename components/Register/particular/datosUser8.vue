<template>
  <section class="flex flex-col items-center text-center">
    <h1 class="flex text-rojo text-2xl mt-4 header text-center w-56">
      Busca tu documento de identidad
    </h1>
    <IconDniFront class="iconDni my-8" />
    <div class="parrafo mt-4">
      <p>
        Queremos evitar la suplantación de identidad, por lo cual requerimos que
        tomes una foto a tu documento.
      </p>
      <strong> No lo compartiremos con nadie. </strong>
    </div>
    <div class="mt-5">
      <p class="mb-3">No es válido:</p>
      <ul>
        <li>- Pasaporte</li>
        <li>- Licencia de conducción</li>
        <li>- Trámite de cédula</li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: 'DatosUser8',
}
</script>

<style scoped>
.parrafo {
  width: 300px;
}
.iconDni {
  width: 73px;
}
</style>
