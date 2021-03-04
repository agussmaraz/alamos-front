<template>
    <section class="fixed w-full">
        <nav class="flex justify-between items-center">
            <nuxt-link to="/home">
                <IconArrow class="icon-arrow w-4 h-4 cursor-pointer" />
            </nuxt-link>
            <div>
                <h2>Favoritos</h2>
            </div>
            <IconCampana class="w-6 h-6 icon-campana" />
        </nav>
        <article class="flex flex-col justify-center items-center">
            <h3 class="font-bold mt-8">Garaje vacío</h3>
            <p class="mt-8">No hay favoritos para ver ahora</p>

            <nuxt-link to="/tienda-virtual" class="bg-rojo button rounded-md text-sm px-4 py-2 mt-10">Explora vehículos</nuxt-link>
            <IconFavoritos class="mt-10" />
        </article>
        <Footer />
    </section>
</template>

<script>
    export default {};
</script>

<style scoped>
    .icon-campana {
        fill: #747474;
    }
    .icon-arrow {
        fill: #353535;
    }
    nav {
        background-color: #eaebef;
        padding: 10px;
    }
    h2 {
        font-size: 15px;
    }
    h3 {
        font-size: 22px;
    }
    .button {
        color: white;
    }
</style>
