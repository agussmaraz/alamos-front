<template>
    <section>
        <aside class="w-full flex justify-start my-4 ml-2">
            <div @click="back">
                <IconArrow class="icon" />
            </div>
        </aside>
        <transition name="slide-fade">
            <component :is="componente_actual" class="component" />
        </transition>
        <article class="flex justify-center">
            <div class="bg-rojo w-48 py-2 text-center rounded-3xl shadow-lg mr-2">
                <button class="a" @click="changePage">Siguiente</button>
            </div>
        </article>
    </section>
</template>
<script>
    import { mapState, mapActions } from 'vuex';
    export default {
        layout: 'register',
        components: {
            DatosEmpresa1: () => import('@/components/Register/empresa/datosEmpresa1'),
            DatosEmpresa2: () => import('@/components/Register/empresa/datosEmpresa2'),
            DatosEmpresa3: () => import('@/components/Register/empresa/datosEmpresa3'),
            // DatosEmpresa4: () => import('@/components/Register/empresa/datosEmpresa4'),
            DatosEmpresa5: () => import('@/components/Register/empresa/datosEmpresa5'),
            DatosEmpresa6: () => import('@/components/Register/empresa/datosEmpresa6'),
            DatosEmpresa7: () => import('@/components/Register/empresa/datosEmpresa7'),
            DatosEmpresa8: () => import('@/components/Register/empresa/datosEmpresa8'),
            DatosEmpresa9: () => import('@/components/Register/empresa/datosEmpresa9'),
        },
        data() {
            return {
                componente_actual: 'DatosEmpresa1',
            };
        },
        computed: {
            ...mapState({
                errors: (state) => state.empresa.errores,
                user: (state) => state.empresa.datos,
            }),
        },
        methods: {
            ...mapActions({
                register: 'empresa/register',
                setError: 'empresa/setError',
                validateComponente1: 'empresa/validateComponente1',
                validateComponente2: 'empresa/validateComponente2',
                validateComponente3: 'empresa/validateComponente3',
                validateComponente4: 'empresa/validateComponente4',
                validateComponente5: 'empresa/validateComponente5',
            }),
            back() {
                if (this.componente_actual === 'DatosEmpresa1') {
                    this.$router.push('/register');
                } else if (this.componente_actual === 'DatosEmpresa2') {
                    this.componente_actual = 'DatosEmpresa1';
                } else if (this.componente_actual === 'DatosEmpresa5') {
                    this.componente_actual = 'DatosEmpresa2';
                } else if (this.componente_actual === 'DatosEmpresa6') {
                    this.componente_actual = 'DatosEmpresa5';
                } else if (this.componente_actual === 'DatosEmpresa7') {
                    this.componente_actual = 'DatosEmpresa6';
                } else if (this.componente_actual === 'DatosEmpresa8') {
                    this.componente_actual = 'DatosEmpresa7';
                    this.register(this.user);
                }
            },
            async changePage() {
                if (this.componente_actual === 'DatosEmpresa1') {
                    const validaComponente1 = await this.validateComponente1();
                    if (validaComponente1) {
                        this.componente_actual = 'DatosEmpresa2';
                    }
                } else if (this.componente_actual === 'DatosEmpresa2') {
                    const validaComponente2 = await this.validateComponente2();
                    if (validaComponente2) {
                        this.componente_actual = 'DatosEmpresa5';
                    }
                } else if (this.componente_actual === 'DatosEmpresa5') {
                    const validaComponente3 = await this.validateComponente3();
                    if (validaComponente3) {
                        this.componente_actual = 'DatosEmpresa6';
                    }
                } else if (this.componente_actual === 'DatosEmpresa6') {
                    const validaComponente4 = await this.validateComponente4();
                    if (validaComponente4) {
                        this.componente_actual = 'DatosEmpresa7';
                    }
                } else if (this.componente_actual === 'DatosEmpresa7') {
                    const validaComponente5 = await this.validateComponente5();
                    if (validaComponente5) {
                        this.componente_actual = 'DatosEmpresa8';
                    }
                } else if (this.componente_actual === 'DatosEmpresa8') {
                    this.componente_actual = 'DatosEmpresa3';
                    this.register(this.user);
                }
            },
            showErrors() {
                for (let i = 0; i < this.errors.length; i++) {
                    const error = this.errors[i];

                    this.setError({ ...error, show: true });
                }
            },
        },
    };
</script>

<style scoped>
    .icon {
        fill: #ed1a3b;
    }
    .a {
        color: white;
        outline: none;
        width: 100%;
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
</style>
