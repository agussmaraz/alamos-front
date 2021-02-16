<template>
    <section>
        <article class="caja-nav pb-3 fixed z-20 w-full">
            <nav class="flex justify-between px-3 py-4">
                <div>
                    <nuxt-link to="/ventas/otros/formulario">
                        <IconArrow class="arrow" />
                    </nuxt-link>
                </div>
                <div class="title font-bold">Items vehículos</div>
            </nav>
            <article class="flex items-center justify-around py-3">
                <p class="font-bold w-1/3 text-center pb-2" :class="componente_actual == 'OtroSeguridad' ? 'active' : false" @click="componente_actual = 'OtroSeguridad'">Seguridad</p>
                <p class="font-bold w-1/3 text-center pb-2" :class="componente_actual == 'OtroConfort' ? 'active' : false" @click="componente_actual = 'OtroConfort'">Confort</p>
                <p class="font-bold w-1/3 text-center pb-2" :class="componente_actual == 'OtroOtros' ? 'active' : false" @click="componente_actual = 'OtroOtros'">Otros</p>
            </article>
            <article class="flex justify-center mt-3">
                <input v-model="busqueda" type="text" class="w-64 rounded-full h-10 border border-gray-200 pl-10 relative" placeholder="Buscador" @keyup="newSearch(busqueda)" />
                <IconSearch2 class="w-6 h-6 absolute" />
            </article>
        </article>
        <transition name="slide-fade">
            <component :is="componente_actual" :busqueda="busqueda" @checkbox="change" />
        </transition>
        <div v-if="activateButton" class="bg-rojo w-48 py-2 text-center rounded-3xl shadow-lg m-auto button-sig">
            <button class="a w-full h-full" @click="changePage">Siguiente</button>
        </div>
        <Footer />
    </section>
</template>

<script>
    import { mapState } from 'vuex';
    export default {
        components: {
            OtroSeguridad: () => import('@/components/Sales/otro/OtroSeguridad'),
            OtroConfort: () => import('@/components/Sales/otro/OtroConfort'),
            OtroOtros: () => import('@/components/Sales/otro/OtroOtros'),
            // Elegidos: () => import('@/components/Sales/auto/Elegidos'),
        },
        data() {
            return {
                activateButton: '',
                componente_actual: 'OtroSeguridad',
                busqueda: '',
            };
        },
        computed: {
            ...mapState({
                caracteristicas: (state) => state.items.seguridad,
            }),
        },
        created() {
            this.findState();
        },
        methods: {
            findState() {
                for (let index = 0; index < this.caracteristicas.length; index++) {
                    const element = this.caracteristicas[index];
                    if (element.status === true) {
                        this.activateButton = true;
                    }
                }
            },
            changePage() {
                if (this.componente_actual === 'OtroSeguridad') {
                    this.componente_actual = 'OtroConfort';
                } else if (this.componente_actual === 'OtroConfort') {
                    this.componente_actual = 'OtroOtros';
                } else if (this.componente_actual === 'OtroOtros') {
                    this.$router.push('/ventas/otros/caracteristicas');
                }
            },
            change(value) {
                // console.log(value)
                if (value === true) {
                    this.activateButton = true;
                }
            },
            newSearch(param) {
                this.busqueda = param;
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
    .active {
        border-bottom: solid #ed1a3b 4px;
    }
    .a {
        color: white;
        outline: none;
    }
    .button-sig {
        position: fixed;
        bottom: 100px;
        left: 109px;
    }
    .caja-nav {
        box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
        background-color: white;
    }
    svg {
        left: 87px;
        bottom: 20px;
    }
    input {
        outline: none;
    }
    ::placeholder {
        color: #8d8c8c;
    }
    nav {
        background-color: #e5e5e5;
    }
    .arrow {
        fill: black;
    }
    .title {
        width: 67%;
    }
</style>
