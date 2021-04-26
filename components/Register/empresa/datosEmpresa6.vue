<template>
    <section class="flex flex-col items-center text-center">
        <span class="header flex text-2xl mt-4 text-rojo lg:text-3xl text-center lg:font-semibold"> Dirección de la empresa </span>
        <section class="w-full">
            <article class="relative mt-20">
                <input
                    :value="data.direccion"
                    type="text"
                    class="border border-rojo lg:border-gris rounded-md w-64 h-12 outline-none pl-4"
                    :class="{ inputError: errores.direccion && errores.direccion.error }"
                    @click="activate('direccion')"
                    @focus="activate('direccion')"
                    @input="(event) => inputValue(event, 'direccion')"
                />
                <IconError v-if="errores.direccion" class="w-6 h-6 absolute icono-error" />

                <div class="div-label absolute px-2" :class="active === 'direccion' || data.direccion != '' ? 'moveLabel' : false">
                    <label for="" class="text-rojo text-xs lg:text-gris lg:text-lg lg:font-semibold" @click="activate('direccion')">Dirección</label>
                </div>
            </article>
            <article class="relative my-12">
                <input
                    :value="data.ciudad"
                    type="text"
                    class="border border-rojo lg:border-gris rounded-md w-64 h-12 outline-none pl-4"
                    :class="{ inputError: errores.ciudad && errores.ciudad.error }"
                    @click="activate('ciudad')"
                    @focus="activate('ciudad')"
                    @input="(event) => inputValue(event, 'ciudad')"
                />
                <IconError v-if="errores.ciudad" class="w-6 h-6 absolute icono-error" />

                <div class="div-label absolute px-2" :class="active === 'ciudad' || data.ciudad != '' ? 'moveLabel' : false">
                    <label for="" class="text-rojo text-xs lg:text-gris lg:text-lg lg:font-semibold" @click="activate('ciudad')">Ciudad</label>
                </div>
            </article>
            <article class="relative my-12">
                <input
                    :value="data.localidad"
                    type="text"
                    class="border border-rojo lg:border-gris rounded-md w-64 h-12 outline-none pl-4"
                    :class="{ inputError: errores.localidad && errores.localidad.error }"
                    @click="activate('localidad')"
                    @focus="activate('localidad')"
                    @input="(event) => inputValue(event, 'localidad')"
                />
                <IconError v-if="errores.localidad" class="w-6 h-6 absolute icono-error" />

                <div class="div-label absolute px-2" :class="active === 'localidad' || data.localidad != '' ? 'moveLabel' : false">
                    <label for="" class="text-rojo text-xs lg:text-gris lg:text-lg lg:font-semibold" @click="activate('localidad')">Localidad</label>
                </div>
            </article>
        </section>
    </section>
</template>

<script>
    import { mapActions, mapState } from 'vuex';
    export default {
        name: 'DatosEmpresa6',
        data() {
            return {
                active: 'false',
                buttonGenero: '',
            };
        },
        computed: {
            ...mapState({
                data: (state) => state.empresa.datos,
                errores: (state) => state.empresa.errores,
            }),
        },
        methods: {
            ...mapActions({
                setData: 'empresa/setData',
                validate: 'empresa/validate',
                addValidation: 'empresa/addError',
                setError: 'empresa/setError',
            }),
            activate(id) {
                this.active = id;
            },
            activeButton(id) {
                this.buttonGenero = id;
            },
            inputValue(event, campo) {
                this.setData({ [campo]: event.target.value });
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
        width: 250px;
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
    .button-medio {
        border-left: solid #ed1a3b 1px;
        border-right: solid #ed1a3b 1px;
    }
    button {
        outline: none;
    }
    input {
        width: 300px;
    }
    .button-sex {
        width: 300px;
    }
    .activateButton {
        background-color: #ed1a3b;
        color: white;
    }
    @media (min-width: 1200px) {
        .header {
            color: black;
        }
    }
</style>
