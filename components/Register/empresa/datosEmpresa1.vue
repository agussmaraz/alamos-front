<template>
    <section class="flex flex-col items-center text-center">
        <h1 class="hidden sm:block sm:font-semibold lg:block lg:font-semibold lg:text-left lg:w-full lg:text-4xl lg:pl-4">Regístrate</h1>
        <form class="forms hidden lg:block flex flex-col">
            <p class="contenidoP lg:font-semibold"><input class="input1 text-base lg:font-semibold" type="radio" name="particular" value="soy-particular" /> Soy Particular</p>
            <br />
            <p class="contenidoP1 lg:font-semibold"><input class="input2 text-base lg:font-semibold" type="radio" name="empresa" value="soy-empresa" /> Soy Empresa</p>
        </form>
        <span class="flex text-rojo text-2xl mt-4 header text-center lg:hidden"> Ingresa tu email corporativo </span>
        <article class="lg:hidden">
            <div class="div-parrafo">
                <div class="mb-4">
                    <div class="mb-3">
                        <span class="text-sm parrafo">Ingresa un correo electrónico válido para registrarte en </span>
                        <span class="text-sm"> Álamos. </span>
                    </div>
                    <div class="hidden md:block">
                        <p>Hola, estoy escondido</p>
                    </div>
                </div>
            </div>
        </article>
        <section class="w-full">
            <article class="relative mt-10">
                <input
                    :value="data.correo"
                    type="email"
                    class="correo border border-rojo lg:border lg:border-gris rounded-md h-12 outline-none pl-4 relative"
                    :class="{ inputError: errores.correo && errores.correo.error }"
                    @click="activate('correo')"
                    @focus="activate('correo')"
                    @input="(event) => inputValue(event, 'correo')"
                />
                <IconError v-if="errores.correo" class="w-6 h-6 absolute icono-error" />
                <div class="div-label absolute px-2" :class="active === 'correo' || data.correo != '' ? 'moveLabel' : false">
                    <label for="" class="text-rojo text-xs lg:text-gris lg:text-lg" @click="activate('correo')">Correo electrónico</label>
                </div>
            </article>
            <article class="relative mt-10">
                <input
                    :value="data.confirmacion"
                    type="email"
                    class="correo border border-rojo lg:border lg:border-gris rounded-md h-12 outline-none pl-4"
                    :class="{
                        inputError: errores.confirmacion && errores.confirmacion.error,
                    }"
                    @click="activate('confirmar')"
                    @focus="activate('confirmar')"
                    @input="(event) => inputValue(event, 'confirmacion')"
                />
                <IconError v-if="errores.confirmacion" class="w-6 h-6 absolute icono-error" />

                <div class="div-label absolute px-2" :class="active === 'confirmar' || data.confirmacion != '' ? 'moveLabel' : false">
                    <label for="" class="text-rojo text-xs lg:text-gris lg:text-lg" @click="activate('confirmar')">Confirmar correo</label>
                </div>
                <!-- {{ errores.correo.error.length }} -->
            </article>
        </section>
        <TienesCuenta />
    </section>
</template>

<script>
    import { mapActions, mapState } from 'vuex';
    export default {
        name: 'DatosEmpresa1',
        data() {
            return {
                active: 'false',
            };
        },
        computed: {
            ...mapState({
                errores: (state) => state.empresa.errores,
                data: (state) => state.empresa.datos,
            }),
        },
        methods: {
            ...mapActions({
                setData: 'empresa/setData',
                // validate: 'empresa/validate',
            }),
            inputValue(event, campo) {
                this.setData({ [campo]: event.target.value });
            },
            activate(id) {
                this.active = id;
            },
        },
    };
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200&display=swap');

    .icon {
        fill: #ed1a3b;
    }
    .icono-error {
        top: 12px;
        right: 71px;
    }
    .inputError {
        border: solid #ed1ad8 3px;
        @apply rounded-md;
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
        width: 220px;
        margin-top: 30px;
        margin-bottom: 40px;
    }
    a {
        color: white;
    }
    .div-label {
        background-color: white;
        left: 68px;
        top: 10px;
    }
    .moveLabel {
        margin-top: -21px;
        transition: margin-top 300ms;
    }
    .correo {
        width: 300px;
    }
    .input1 {
        font-family: Montserrat;
        padding-bottom: 10px;
    }
    .input2 {
        font-family: Montserrat;
    }
    .forms {
        width: 100%;
    }
    .contenidoP {
        padding-top: 15%;
        padding-right: 45%;
        font-size: 1.3rem;
        color: gray;
    }
    .contenidoP input {
        width: 15px;
        height: 15px;
    }
    .contenidoP1 {
        padding-right: 45%;
        padding-bottom: 5%;
        font-size: 1.3rem;
        color: gray;
    }
    .contenidoP1 input {
        width: 15px;
        height: 15px;
    }
    @media (min-width: 1200px) {
        .div-label {
            left: 10%;
        }
    }
</style>
