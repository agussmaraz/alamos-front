<template>
    <section class="flex flex-col items-center text-center">
        <span class="lg:hidden flex text-rojo text-2xl mt-4 header text-center"> Teléfono de contacto </span>
        <span class="header text-2xl mt-4 lg:text-3xl text-center lg:font-semibold"> Datos de Contacto</span>
        <FlechaAtras />
        <section class="w-full">
            <article class="relative mt-20 lg:mt-12">
                <input
                    :value="data.telefono"
                    type="text"
                    class="border border-rojo rounded-md h-12 outline-none pl-4 border-gris"
                    :class="{ inputError: errores.telefono && errores.telefono.error }"
                    @click="activate('telefono')"
                    @focus="activate('telefono')"
                    @input="(event) => inputValue(event, 'telefono')"
                />
                <IconError v-if="errores.telefono" class="w-6 h-6 absolute icono-error" />

                <div class="div-label absolute px-2 lg:px-0" :class="active === 'telefono' || data.telefono != '' ? 'moveLabel' : false">
                    <label for="" class="text-rojo text-xs lg:text-gris lg:text-lg lg:font-semibold" @click="activate('telefono')">Teléfono fijo</label>
                </div>
            </article>
            <article class="relative mt-10 lg:pb-12">
                <input
                    :value="data.celular"
                    type="text"
                    class="border border-rojo rounded-md h-12 outline-none pl-4 border-gris"
                    :class="{ inputError: errores.celular && errores.celular.error }"
                    @click="activate('celular')"
                    @focus="activate('celular')"
                    @input="(event) => inputValue(event, 'celular')"
                />
                <IconError v-if="errores.celular" class="w-6 h-6 absolute icono-error" />

                <div class="div-label absolute px-2 lg:px-0" :class="active === 'celular' || data.celular != '' ? 'moveLabel' : false">
                    <label for="" class="text-rojo text-xs lg:text-gris lg:text-lg lg:font-semibold" @click="activate('celular')">Celular</label>
                </div>
            </article>
        </section>
        <TienesCuenta />
    </section>
</template>

<script>
    import { mapActions, mapState } from 'vuex';
    export default {
        name: 'DatosEmpresa5',
        data() {
            return {
                active: 'false',
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
            }),
            activate(id) {
                this.active = id;
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
    input {
        width: 300px;
    }
    .header {
        padding-right: 10%;
        color: black;
    }
    @media (min-width: 1200px) {
        .div-label {
            left: 10%;
        }
    }
</style>
