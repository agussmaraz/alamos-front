<template>
    <main>
        <section class="desktop hidden md:block">
            <div><Header /></div>
            <transition name="slide-fade">
                <component :is="componente_actual" class="component" />
            </transition>
            <div><Body /></div>
            <div><FooterDesktop /></div>
        </section>
        <section class="flex flex-col items-center text-center lg:hidden">
            <aside class="w-full flex justify-start my-4 ml-2">
                <nuxt-link to="/">
                    <IconArrow class="icon" />
                </nuxt-link>
            </aside>
            <span class="flex text-rojo items-center text-2xl mt-4 header"> ¡Nos tomamos tu seguridad en serio! </span>
            <article>
                <IconHands class="icono w-24" />
                <div class="div-parrafo">
                    <div class="mb-4">
                        <span class="text-sm parrafo">No queremos que seas víctima </span>
                        <span class="text-sm"> robo o estafa </span>
                        <span class="text-sm parrafo"> cuando compres o vendas vehículos. </span>
                    </div>
                    <span class="text-sm parrafo"> Nuestro registro de cuenta está diseñado para </span>
                    <span class="text-sm">proteger</span>
                    <span class="text-sm parrafo">. a nuestros usuarios y generar un ambiente de negociación </span>
                    <span class="text-sm"> transparente y seguro. </span>
                </div>
            </article>
            <article class="flex mt-4">
                <div class="bg-rojo w-32 py-2 text-center rounded-lg shadow-lg m-auto mr-2">
                    <nuxt-link class="a" to="/register/empresa">Soy empresa</nuxt-link>
                </div>
                <div class="bg-rojo w-32 py-2 text-center rounded-lg shadow-lg m-auto ml-2">
                    <nuxt-link class="a" to="/register/particular">Soy particular</nuxt-link>
                </div>
            </article>
        </section>
    </main>
</template>

<script>
    import { mapActions } from 'vuex';
    export default {
        name: 'PageOne',
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
        },
    };
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200&display=swap');

    .icon {
        fill: #ed1a3b;
    }
    .icono {
        margin-top: 60px;
        margin-bottom: 60px;
        margin-left: 80px;
    }
    .parrafo {
        font-family: 'Montserrat', sans-serif;
    }
    .div-parrafo {
        width: 250px;
        margin-top: 30px;
        margin-bottom: 40px;
    }
    .header {
        width: 200px;
    }
    a {
        color: white;
    }
    .component {
        width: 400px;
        position: absolute;
        top: 120px;
        left: 200px;
        padding: 32px;
        border: solid gray 1px;
        background-color: white;
        border-radius: 8px;
    }
</style>
