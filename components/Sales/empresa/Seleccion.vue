<template>
    <section class="caja-padre flex flex-col items-center h-screen">
        <h1 class="text-xl font-bold mt-5">Selecciona una opción</h1>
        <section class="mt-24 flex items-center">
            <nuxt-link to="/ventas/automoviles" class="flex caja-opcion items-center justify-around">
                <p class="div-p">Nuevo</p>
            </nuxt-link>
            <nuxt-link to="/ventas/automoviles" class="flex caja-opcion items-center justify-around ml-6">
                <p class="div-p">Usado</p>
            </nuxt-link>
        </section>
    </section>
</template>

<script>
    export default {
        name: 'Elegir',
    };
</script>

<style scoped>
    .icon {
        fill: #747474;
    }
    .elipsis {
        fill: #747474;
    }
    .caja-opcion {
        width: 121px;
        height: 102px;
        border-radius: 8px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        background-color: #e5e5e5;
    }
    .caja-padre {
        background-color: white;
    }
    .div-p {
        font-size: 18px;
        font-weight: bold;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .div-rotacion {
        width: 124px;
        height: 147px;
        background-color: white;
        z-index: 10;
    }
</style>
