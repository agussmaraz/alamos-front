<template>
    <section>
        <article>
            <nav class="nav flex justify-between px-3 py-4 fixed w-full z-20">
                <div>
                    <nuxt-link to="/home">
                        <IconArrow class="arrow" />
                    </nuxt-link>
                </div>
                <div class="font-bold">Publicar vehículo</div>
                <div class="font-bold text-xs mt-1">Cancelar</div>
            </nav>
        </article>
        <article class="pt-32 flex flex-col items-center">
            <IconFelicitaciones class="w-20 h-20 icon" />
            <h2 class="font-semibold mt-6">¡Publicación Exitosa!</h2>
            <p class="text-rojo font-semibold mt-2 text-lg">Gratuita</p>
            <div class="mt-10 flex flex-col items-center justify-center">
                <p class="w-64 text-center">Tu vehículo ya está visible en el Marketplace.</p>
                <nuxt-link to="/ventas/automoviles/publicacion" class="mt-12 text-rojo font-semibold text-lg text-center"> Ir a publicación </nuxt-link>
            </div>
            <div class="mt-12">
                <button class="w-56 button-impulsar h-12 font-semibold flex items-center justify-center">
                    <IconPromocionar class="mr-2 w-6 h-6 icon-promo" />
                    Impulsar publicación
                </button>
            </div>
        </article>
        <Footer />
    </section>
</template>

<script>
    export default {
        name: 'Final',
    };
</script>

<style scoped>
    .arrow {
        fill: black;
    }
    .nav {
        background-color: #eaebef;
    }
    .icon {
        fill: #ed1a3b;
        margin-left: 25px;
    }
    h2 {
        font-size: 20px;
        color: #444343;
    }
    .button-impulsar {
        background-color: #ed1a3b;
        color: white;
        border-radius: 10px;
    }
    .icon-promo {
        fill: white;
    }
</style>
