<template>
    <section class="caja-madre">
        <nav class="flex justify-between px-3 py-4">
            <div>
                <div @click="back">
                    <IconArrow class="arrow cursor-pointer" />
                </div>
            </div>
            <div class="font-bold">Publicar vehiculo</div>
            <nuxt-link to="/home" class="font-bold text-xs mt-1">Cancelar</nuxt-link>
        </nav>
        <article v-if="componente_actual !== 'Detalles'" class="caja-pasos flex justify-between mt-5 px-8 py-4">
            <div class="div-icon">
                <IconVolante class="w-12 h-10 mt-2 m-auto indicado" />
            </div>
            <div class="div-icon">
                <IconCamera
                    class="w-12 h-10 mt-2 m-auto icon-normal"
                    :class="{
                        indicado: componente_actual === 'Fotos' || componente_actual === 'Imperfecciones' || componente_actual === 'Ubicacion' || componente_actual === 'Comentarios',
                    }"
                />
            </div>
            <div class="div-icon">
                <IconCarPin
                    class="w-12 h-12 mt-1 m-auto icon-normal"
                    :class="{
                        indicado: componente_actual === 'Ubicacion' || componente_actual === 'Comentarios',
                    }"
                />
            </div>
            <div class="div-icon">
                <IconComments
                    class="w-12 h-10 mt-2 m-auto icon-normal"
                    :class="{
                        indicado: componente_actual === 'Comentarios',
                    }"
                />
            </div>
        </article>
        <article class="caja-componente pb-40 h-screen">
            <!-- <Auto /> -->
            <transition name="slide-fade">
                <component :is="componente_actual" class="pb-40" />
            </transition>
            <div v-if="componente_actual !== 'Comentarios'" class="bg-rojo w-48 py-2 text-center rounded-3xl shadow-lg m-auto button-sig">
                <button class="a w-full h-full" @click="changePage">Siguiente</button>
            </div>
            <div v-if="componente_actual == 'Comentarios'" class="bg-rojo w-48 py-2 text-center rounded-3xl shadow-lg m-auto button-sig">
                <button class="a" @click="changePage">Finalizar</button>
            </div>
        </article>
        <section v-if="modalImperfecciones" class="absolute inset-0 flex justify-center">
            <article class="modal z-10" @click="closeModal({ modal: 'imperfecciones' })"></article>
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
            Elegidos: () => import('@/components/Sales/auto/Elegidos'),
            Precio: () => import('@/components/Sales/auto/Precio'),
            Fotos: () => import('@/components/Sales/auto/Fotos'),
            Imperfecciones: () => import('@/components/Sales/auto/Imperfecciones'),
            Imperfecciones2: () => import('@/components/Sales/auto/Imperfecciones2'),
            Detalles: () => import('@/components/Sales/auto/Detalles'),
            Ubicacion: () => import('@/components/Sales/auto/Ubicacion'),
            Comentarios: () => import('@/components/Sales/auto/Comentarios'),
            Reporte: () => import('@/components/Sales/auto/Reporte'),
        },
        data() {
            return {
                componente_actual: 'Elegidos',
            };
        },
        computed: {
            ...mapState({
                modalImperfecciones: (state) => state.modal.modal.imperfecciones,
                modalFotos: (state) => state.modal.modal.fotos,
                user: (state) => state.auth.usuario,
            }),
        },
        methods: {
            ...mapActions({
                openModal: 'modal/openModal',
                closeModal: 'modal/closeModal',
            }),
            back() {
                if (this.componente_actual === 'Precio') {
                    this.componente_actual = 'Elegidos';
                } else if (this.componente_actual === 'Fotos') {
                    this.componente_actual = 'Precio';
                } else if (this.componente_actual === 'Imperfecciones') {
                    this.componente_actual = 'Precio';
                } else if (this.componente_actual === 'Detalles') {
                    this.componente_actual = 'Imperfecciones';
                } else if (this.componente_actual === 'Imperfecciones2') {
                    this.componente_actual = 'Detalles';
                } else if (this.componente_actual === 'Ubicacion') {
                    this.componente_actual = 'Imperfecciones2';
                } else if (this.componente_actual === 'Comentarios') {
                    this.componente_actual = 'Ubicacion';
                }
            },
            changePage() {
                if (this.componente_actual === 'Elegidos') {
                    this.componente_actual = 'Precio';
                } else if (this.componente_actual === 'Precio') {
                    this.componente_actual = 'Fotos';
                } else if (this.componente_actual === 'Fotos') {
                    this.componente_actual = 'Imperfecciones';
                } else if (this.componente_actual === 'Imperfecciones') {
                    this.componente_actual = 'Detalles';
                } else if (this.componente_actual === 'Detalles') {
                    this.componente_actual = 'Imperfecciones2';
                } else if (this.componente_actual === 'Imperfecciones2') {
                    this.componente_actual = 'Ubicacion';
                } else if (this.componente_actual === 'Ubicacion') {
                    this.componente_actual = 'Comentarios';
                } else if (this.componente_actual === 'Comentarios' && this.user && this.user.role === 20) {
                    this.componente_actual = 'Reporte';
                    // } else if (this.componente_actual === 'Comentarios') {
                } else if (this.componente_actual === 'Reporte') {
                    this.$router.push('revision');
                } else if (this.componente_actual === 'Comentarios' && this.user && this.user.role === 10) {
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
