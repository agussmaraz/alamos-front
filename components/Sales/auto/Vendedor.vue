<template>
    <section class="caja-padre pt-32">
        <article class="flex items-center justify-start">
            <div class="div-inicial">
                <p class="inicial">F</p>
            </div>
            <div class="ml-5">
                <h2 class="font-bold text-xl">Fernando J.</h2>
                <div class="flex items-center">
                    <IconMap class="w-4 h-4" />
                    <p class="text-sm ml-2 parrafo">Bogotá D.C</p>
                </div>
            </div>
        </article>
        <button v-if="user && user.role == 20" class="button-ver my-3">Ver stock de vehiculos</button>
        <div v-if="user && user.role == 20">
            <p class="font-bold mt-5 mb-1">Contacto</p>
            <hr />
            <article>
                <div class="flex items-center mt-4">
                    <IconUserCircle />
                    <p class="font-bold ml-2">Asesor Comercial</p>
                </div>
                <p class="ml-10">Martín Fonseca</p>
            </article>
        </div>
        <div class="caja-video flex items-center mt-8">
            <IconVideo class="icon-camara mr-3" />
            <p class="text-rojo">Agendar videollamada</p>
            <IconArrow2 class="icon-arrow ml-5" />
        </div>
        <article>
            <div class="flex items-center mt-8">
                <IconMsj class="w-4 h-4 ml-2" />
                <p class="parrafo text-sm font-bold ml-3">Enviar mensaje</p>
            </div>
            <div class="flex items-center mt-8">
                <IconPhone class="w-4 h-4 ml-2" />
                <p class="parrafo text-sm font-bold ml-3">Teléfono de contacto</p>
            </div>
        </article>
        <article class="mt-10 ml-2">
            <p class="font-bold text-lg parrafo2">Notas</p>
            <hr />
            <p class="parrafo2 mt-3">Contactarme entre las 9 am. a 7 pm.</p>
        </article>
    </section>
</template>

<script>
    import { mapState } from 'vuex';
    export default {
        name: 'Vendedor',
        computed: {
            ...mapState({
                user: (state) => state.auth.usuario,
            }),
        },
    };
</script>

<style scoped>
    .caja-padre {
        width: 85%;
        margin: 0 auto;
    }
    .div-inicial {
        width: 95px;
        height: 95px;
        border-radius: 100%;
        background-color: #5193f6;
        position: relative;
    }
    .inicial {
        position: absolute;
        right: 31px;
        bottom: 4px;
        font-size: 60px;
        color: white;
    }
    hr {
        color: #c4c4c4;
    }
    .icon-arrow {
        transform: rotate(270deg);
        width: 18px;
        height: 10px;
        fill: #ed1a3b;
    }
    .icon-camara {
        fill: #ed1a3b;
        width: 31px;
        height: 17px;
    }
    .caja-video {
        background: #ffffff;
        border: 1px solid #c4c4c4;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
        border-radius: 8px;
        width: 274px;
        height: 53px;
        padding: 12px;
    }
    .parrafo {
        color: #747474;
    }
    .parrafo2 {
        color: #353535;
    }
    .button-ver {
        background-color: #706e71;
        border-radius: 8px;
        width: 233px;
        height: 48px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-weight: bold;
    }
</style>
