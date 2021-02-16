<template>
    <section class="caja-madre">
        <nav class="nav flex justify-between px-3 py-4">
            <div>
                <nuxt-link to="/home">
                    <IconArrow class="arrow" />
                </nuxt-link>
            </div>
            <div class="font-bold">Publicar vehiculo</div>
            <div class="font-bold text-xs mt-1">Cancelar</div>
        </nav>
        <article class="caja-pasos flex justify-between mt-5 px-8 py-4">
            <div class="div-icon">
                <IconVolante class="seleccionado w-12 h-10 mt-2 m-auto" />
            </div>
            <div class="div-icon">
                <IconCamera class="icon-normal w-12 h-10 mt-2 m-auto" />
            </div>
            <div class="div-icon">
                <IconCarPin class="icon-normal w-12 h-12 mt-1 m-auto" />
            </div>
            <div class="div-icon">
                <IconComments class="icon-normal w-12 h-10 mt-2 m-auto" />
            </div>
        </article>
        <article class="caja-componente mb-40">
            <!-- <Auto /> -->
            <transition name="slide-fade">
                <component :is="componente_actual" class="mb-20" />
            </transition>
            <div v-if="componente_actual !== 'OtroCaracteristicas'" class="bg-rojo w-48 py-2 text-center rounded-3xl shadow-lg m-auto button-sig">
                <button class="a w-full h-full" @click="changePage">Siguiente</button>
            </div>
        </article>
        <Footer />
    </section>
</template>

<script>
    export default {
        name: 'Venta',
        components: {
            // Placa: () => import('@/components/Sales/auto/Placa'),
            OtroForm: () => import('@/components/Sales/otro/OtroForm'),
            OtroForm1: () => import('@/components/Sales/otro/OtroForm1'),
            OtroPrecio: () => import('@/components/Sales/otro/OtroPrecio'),
        },
        data() {
            return {
                componente_actual: 'OtroForm',
            };
        },
        methods: {
            changePage() {
                // if (this.componente_actual === 'Placa') {
                // this.componente_actual = 'Form'
                if (this.componente_actual === 'OtroForm') {
                    this.componente_actual = 'OtroForm1';
                } else if (this.componente_actual === 'OtroForm1') {
                    this.componente_actual = 'OtroPrecio';
                } else if (this.componente_actual === 'OtroPrecio') {
                    this.$router.push('/ventas/otros/caracteristicas');
                }
            },
        },
    };
</script>

<style scoped>
    .slide-fade-enter-active {
        transition: all 0.3s ease;
    }

    .slide-fade-enter {
        transform: translateX(10px);
        opacity: 0;
    }
    /* @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200&display=swap');

body {
  font-family: 'Montserrat', sans-serif !important;
} */
    * {
        -webkit-tap-highlight-color: transparent;
    }
    .arrow {
        fill: black;
    }
    .a {
        color: white;
        outline: none;
    }

    .nav {
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
    .indicado {
        fill: #ed1a3b;
    }
    .caja-componente {
        background-color: white;
    }
    .button-sig {
        position: fixed;
        bottom: 100px;
        left: 109px;
    }
    .icon-normal {
        fill: #c4c4c4;
    }
    .seleccionado {
        fill: #ed1a3b;
    }
</style>
