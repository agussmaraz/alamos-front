<template>
    <section class="caja-madre">
        <nav class="flex justify-between px-3 py-4">
            <div>
                <nuxt-link to="/ventas/motos/caracteristicas">
                    <IconArrow class="arrow" />
                </nuxt-link>
            </div>
            <div class="font-bold">Publicar vehiculo</div>
            <div class="font-bold text-xs mt-1">Cancelar</div>
        </nav>
        <article v-if="componente_actual !== 'MotoDetalles'" class="caja-pasos flex justify-between mt-5 px-8 py-4">
            <div class="div-icon">
                <IconVolante class="w-12 h-10 mt-2 m-auto indicado" />
            </div>
            <div class="div-icon">
                <IconCamera
                    class="w-12 h-10 mt-2 m-auto icon-normal"
                    :class="{
                        indicado: componente_actual === 'OtroFotos' || componente_actual === 'OtroImperfecciones' || componente_actual === 'OtroUbicacion' || componente_actual === 'OtroComentarios',
                    }"
                />
            </div>
            <div class="div-icon">
                <IconCarPin
                    class="w-12 h-12 mt-1 m-auto icon-normal"
                    :class="{
                        indicado: componente_actual === 'OtroUbicacion' || componente_actual === 'OtroComentarios',
                    }"
                />
            </div>
            <div class="div-icon">
                <IconComments
                    class="w-12 h-10 mt-2 m-auto icon-normal"
                    :class="{
                        indicado: componente_actual === 'OtroComentarios',
                    }"
                />
            </div>
        </article>
        <article class="caja-componente mb-40">
            <!-- <Auto /> -->
            <transition name="slide-fade">
                <component :is="componente_actual" class="mb-20" />
            </transition>
            <div v-if="componente_actual !== 'OtroComentarios'" class="bg-rojo w-48 py-2 text-center rounded-3xl shadow-lg m-auto button-sig">
                <button class="a w-full h-full" @click="changePage">Siguiente</button>
            </div>
            <div v-if="componente_actual == 'OtroComentarios'" class="bg-rojo w-48 py-2 text-center rounded-3xl shadow-lg m-auto button-sig">
                <button class="a" @click="changePage">Finalizar</button>
            </div>
        </article>
        <section v-if="ModalOtroImperfecciones" class="absolute inset-0 flex justify-center">
            <article class="modal z-10" @click="closeModal({ modal: 'otroImperfecciones' })"></article>
            <Camara class="camara-modal absolute z-20" />
        </section>
        <Footer />
    </section>
</template>

<script>
    import { mapActions, mapState } from 'vuex';
    export default {
        name: 'Venta',
        components: {
            OtroPrecio: () => import('@/components/Sales/otro/OtroPrecio'),
            OtroFotos: () => import('@/components/Sales/otro/OtroFotos'),
            OtroImperfecciones: () => import('@/components/Sales/otro/OtroImperfecciones'),
            OtroUbicacion: () => import('@/components/Sales/otro/OtroUbicacion'),
            OtroComentarios: () => import('@/components/Sales/otro/OtroComentarios'),
        },
        data() {
            return {
                componente_actual: 'OtroFotos',
            };
        },
        computed: {
            ...mapState({
                ModalOtroImperfecciones: (state) => state.modal.modal.otroImperfecciones,
                modalFotos: (state) => state.modal.modal.fotos,
            }),
        },
        methods: {
            ...mapActions({
                openModal: 'modal/openModal',
                closeModal: 'modal/closeModal',
            }),
            changePage() {
                if (this.componente_actual === 'OtroFotos') {
                    this.componente_actual = 'OtroImperfecciones';
                } else if (this.componente_actual === 'OtroImperfecciones') {
                    this.componente_actual = 'OtroUbicacion';
                } else if (this.componente_actual === 'OtroUbicacion') {
                    this.componente_actual = 'OtroComentarios';
                } else if (this.componente_actual === 'OtroComentarios') {
                    this.$router.push('revision');
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
    .icon-normal {
        fill: #c4c4c4;
    }
    .modal {
        position: relative;
        background-color: rgba(0, 0, 0, 0.7);
        width: 100%;
        height: 100%;
        position: fixed;
    }
    .camara-modal {
        left: 50%;
        transform: translateX(-50%);
        width: 90%;
        top: 233px;
    }
    .arrow {
        fill: black;
    }
    .a {
        color: white;
        outline: none;
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
</style>
