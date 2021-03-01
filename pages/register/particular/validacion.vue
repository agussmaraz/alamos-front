<template>
    <section>
        <aside class="w-full flex justify-start my-4 ml-2">
            <div v-if="componente_actual !== 'DatosUser4'" @click="back">
                <IconArrow class="icon cursor-pointer" />
            </div>
        </aside>
        <transition name="slide-fade">
            <component :is="componente_actual" class="component" />
        </transition>

        <article class="flex justify-center">
            <div v-if="componente_actual === 'DatosUser10'" class="bg-rojo w-48 py-2 text-center rounded-3xl shadow-lg mr-2">
                <button class="a" @click="changePage">Acepto términos</button>
            </div>
            <div v-if="componente_actual === 'DatosUser9'" class="bg-rojo w-48 py-2 text-center rounded-3xl shadow-lg mr-2">
                <button class="a" @click="changePage">Siguiente</button>
            </div>
            <div v-if="componente_actual === 'DatosUser11'" class="bg-rojo w-48 py-2 text-center rounded-3xl shadow-lg mr-2">
                <nuxt-link to="/home" class="a">Ir al inicio</nuxt-link>
            </div>
        </article>
        <section v-if="correo" class="absolute inset-0 flex justify-center">
            <article class="modal z-10" @click="closeModal({ modal: 'correo' })"></article>
            <Correo class="consejos-modal absolute z-20" />
        </section>
    </section>
</template>

<script>
    import { mapActions, mapState } from 'vuex';

    export default {
        layout: 'register',
        components: {
            DatosUser9: () => import('@/components/Register/particular/datosUser9'),
            DatosUser4: () => import('@/components/Register/particular/datosUser4'),
            DatosUser10: () => import('@/components/Register/particular/datosUser10'),
            DatosUser11: () => import('@/components/Register/particular/datosUser11'),
        },
        data() {
            return {
                componente_actual: 'DatosUser9',
                terminos: false,
                inicio: false,
            };
        },
        computed: {
            ...mapState({
                modalDocumento: (state) => state.modal.modal.documento,
                user: (state) => state.particular.datos,
                correo: (state) => state.modal.modal.correo,
            }),
        },
        methods: {
            ...mapActions({
                openModal: 'modal/openModal',
                closeModal: 'modal/closeModal',
                validaComponente6: 'particular/validateComponente6',
                register: 'particular/register',
            }),
            back() {
                if (this.componente_actual === 'DatosUser10') {
                    this.componente_actual = 'DatosUser9';
                    return;
                }
                if (this.componente_actual === 'DatosUser9') {
                    this.$router.push('/register/particular/foto');
                }
            },
            async changePage() {
                if (this.componente_actual === 'DatosUser9') {
                    const validaComponente6 = await this.validaComponente6();
                    if (validaComponente6) {
                        this.componente_actual = 'DatosUser10';
                        return;
                    }
                }
                if (this.componente_actual === 'DatosUser10') {
                    this.terminos = true;
                    this.componente_actual = 'DatosUser4';
                    this.register(this.user);
                    // return;
                }
                // if (this.componente_actual === 'DatosUser4') {

                // }
            },
        },
    };
</script>

<style scoped>
    .modal {
        position: relative;
        background-color: rgba(0, 0, 0, 0.7);
        width: 100%;
        height: 100%;
    }
    .consejos-modal {
        left: 50%;
        transform: translateX(-50%);
        border-radius: 8px;
        padding: 17px;
        top: 209px;
        width: 70%;
    }
    .a {
        color: white;
        outline: none;
        width: 100%;
    }
    .icon {
        fill: #ed1a3b;
    }
    .component {
        height: 560px;
    }
    .slide-fade-enter-active {
        transition: all 0.3s ease;
    }
    .slide-fade-enter {
        transform: translateX(10px);
        opacity: 0;
    }
    .modal {
        position: relative;
        background-color: rgba(0, 0, 0, 0.7);
        width: 100%;
        height: 100%;
    }
</style>
