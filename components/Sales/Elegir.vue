<template>
    <section class="caja-padre flex flex-col items-center">
        <h1 class="text-xl font-bold mt-5">¿Qué quieres vender?</h1>
        <section class="mt-10">
            <nuxt-link to="/ventas/automoviles" class="flex caja-opcion items-center justify-around">
                <IconCarSuv class="w-20 icon" />
                <p class="div-p">Carro</p>
            </nuxt-link>
            <nuxt-link to="/ventas/motos" class="flex caja-opcion1 items-center justify-around mt-10">
                <IconMoto class="w-16 icon" />
                <p class="div-p">Moto</p>
            </nuxt-link>
            <nuxt-link to="/ventas/otros" class="flex caja-opcion2 items-center justify-around mt-10">
                <IconElipsis class="w-12 icon" />
                <p class="div-p">Otro</p>
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
        width: 254px;
        height: 62px;
        border-radius: 8px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        background: linear-gradient(110deg, #f2efef 54%, #ffff 54%);
    }
    .caja-opcion1 {
        width: 254px;
        height: 62px;
        border-radius: 8px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        background: linear-gradient(110deg, #f2efef 50%, #ffff 50%);
    }
    .caja-opcion2 {
        width: 254px;
        height: 62px;
        border-radius: 8px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        background: linear-gradient(110deg, #f2efef 46%, #ffff 46%);
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
