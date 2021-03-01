<template>
    <section class="caja-madre h-screen">
        <nav class="nav flex justify-between px-3 py-4">
            <div>
                <div @click="back">
                    <IconArrow class="arrow" />
                </div>
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
            <transition enter-active-class="transition duration-300 transform ease-out" enter-class="opacity-0" enter-to-class="opacity-100" leave-active-class="transition duration-300 transform ease-in" leave-class="opacity-100" leave-to-class="opacity-0">
                <component :is="componente_actual" class="mb-20" />
            </transition>
            <div v-if="componente_actual !== 'Caracteristicas'" class="bg-rojo w-48 py-2 text-center rounded-3xl shadow-lg m-auto button-sig">
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
            Form: () => import('@/components/Sales/auto/Form'),
            Form1: () => import('@/components/Sales/auto/Form1'),
            Caracteristicas: () => import('@/components/Sales/auto/Caracteristicas'),
        },
        data() {
            return {
                componente_actual: 'Form',
            };
        },
        methods: {
            back() {
                if (this.componente_actual === 'Form1') {
                    this.componente_actual = 'Form';
                } else if (this.componente_actual === 'Caracteristicas') {
                    this.componente_actual = 'Form1';
                }
            },
            changePage() {
                // if (this.componente_actual === 'Placa') {
                // this.componente_actual = 'Form'
                if (this.componente_actual === 'Form') {
                    this.componente_actual = 'Form1';
                } else if (this.componente_actual === 'Form1') {
                    this.componente_actual = 'Caracteristicas';
                }
            },
        },
    };
</script>

<style scoped>
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
