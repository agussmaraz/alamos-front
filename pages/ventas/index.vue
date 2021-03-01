<template>
    <section class="caja-madre">
        <nav class="flex justify-between px-3 py-4">
            <div>
                <nuxt-link to="/home">
                    <IconArrow class="arrow" />
                </nuxt-link>
            </div>
            <div class="font-bold">Publicar vehiculo</div>
            <div class="font-bold text-xs mt-1">
                <nuxt-link to="/home"> Cancelar </nuxt-link>
            </div>
        </nav>
        <article class="caja-pasos flex justify-between mt-5 px-8 py-4">
            <div class="div-icon">
                <IconVolante class="w-12 h-10 mt-2 m-auto" />
            </div>
            <div class="div-icon">
                <IconCamera class="w-12 h-10 mt-2 m-auto" />
            </div>
            <div class="div-icon">
                <IconCarPin class="w-12 h-12 mt-1 m-auto" />
            </div>
            <div class="div-icon">
                <IconComments class="w-12 h-10 mt-2 m-auto" />
            </div>
        </article>
        <article class="h-screen">
            <Elegir />
            <!-- <component :is="componente_actual" /> -->
        </article>
        <Footer />
    </section>
</template>

<script>
    export default {
        name: 'Venta',
        components: {
            // Elegir: () => import('@/components/Sales/Elegir'),
        },
        data() {
            return {
                componente_actual: 'Elegir',
            };
        },
    };
</script>

<style scoped>
    .arrow {
        fill: black;
    }
    nav {
        background-color: #e5e5e5;
    }
    .div-icon {
        background-color: #e5e5e5;
        padding: 5px;
        border-radius: 8px;
        width: 73px;
        height: 73px;
    }
    .caja-madre {
        background-color: #f9f8f8;
    }
    .caja-pasos {
        box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
    }
    svg {
        fill: #c4c4c4;
    }
</style>
