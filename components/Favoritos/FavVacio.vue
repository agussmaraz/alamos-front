<template>
    <article class="flex flex-col justify-center items-center">
        <h3 class="font-bold mt-8">Garaje vacío</h3>
        <p class="mt-8">No hay favoritos para ver ahora</p>

        <nuxt-link to="/tienda-virtual" class="bg-rojo button rounded-md text-sm px-4 py-2 mt-10 button">Explora vehículos</nuxt-link>
        <IconFavoritos class="mt-10" />
    </article>
</template>

<script>
    export default {};
</script>

<style scoped>
    .button {
        color: white;
    }
    h3 {
        font-family: Montserrat;
        font-style: normal;
        font-weight: bold;
        line-height: 27px;
        font-size: 22px;
    }
    p {
        font-family: Montserrat;
        font-style: normal;
        font-weight: 200;
        font-size: 18px;
    }
    .button {
        font-family: Montserrat;
        font-style: normal;
    }
</style>
