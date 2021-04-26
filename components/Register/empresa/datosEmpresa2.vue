<template>
    <section class="flex flex-col items-center text-center">
        <span class="header flex text-2xl mt-4 text-rojo lg:text-3xl text-center lg:font-semibold"> Datos de la empresa </span>
        <FlechaAtras />
        <p class="sm:block lg:hidden parrafo div-parrafo text-sm">A continuación, solicitaremos los datos de tu empresa para hacer tus facturas cuando generes cargos:</p>
        <section class="padre w-full">
            <article class="relative mt-4">
                <input
                    :value="data.nombre"
                    type="text"
                    :class="{ inputError: errores.nombre && errores.nombre.error }"
                    class="border border-rojo lg:border-gris rounded-md w-64 h-12 outline-none pl-4"
                    @click="activate('nombre_empresa')"
                    @focus="activate('nombre_empresa')"
                    @input="(event) => inputValue(event, 'nombre')"
                />
                <IconError v-if="errores.nombre" class="w-6 h-6 absolute icono-error" />

                <div class="div-label absolute px-2" :class="active === 'nombre_empresa' || data.nombre_empresa != '' ? 'moveLabel' : false">
                    <label for="" class="text-rojo text-xs lg:text-gris lg:text-lg lg:font-semibold" @click="activate('nombre_empresa')">Nombre de la empresa</label>
                </div>
            </article>
            <article class="relative my-12">
                <input
                    :value="data.razon"
                    type="text"
                    class="border border-rojo lg:border-gris rounded-md w-64 h-12 outline-none pl-4"
                    :class="{ inputError: errores.razon && errores.razon.error }"
                    @click="activate('razon_social')"
                    @focus="activate('razon_social')"
                    @input="(event) => inputValue(event, 'razon')"
                />
                <IconError v-if="errores.razon" class="w-6 h-6 absolute icono-error" />

                <div class="div-label absolute px-2" :class="active === 'razon_social' || data.razon_social != '' ? 'moveLabel' : false">
                    <label for="" class="text-rojo text-xs lg:text-gris lg:text-lg lg:font-semibold" @click="activate('razon_social')">Razón social</label>
                </div>
            </article>
            <article class="relative my-12">
                <input :value="data.nit" type="text" class="border border-rojo lg:border-gris rounded-md w-64 h-12 outline-none pl-4" :class="{ inputError: errores.nit && errores.nit.error }" @click="activate('nit')" @focus="activate('nit')" @input="(event) => inputValue(event, 'nit')" />
                <IconError v-if="errores.nit" class="w-6 h-6 absolute icono-error" />

                <div class="div-label absolute px-2" :class="active === 'nit' || data.nit != '' ? 'moveLabel' : false">
                    <label for="" class="text-rojo text-xs lg:text-gris lg:text-lg lg:font-semibold" @click="activate('nit')">NIT</label>
                </div>
            </article>
        </section>
    </section>
</template>

<script>
    import { mapActions, mapState } from 'vuex';
    export default {
        name: 'DatosEmpresa2',
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
    .icono {
        margin-top: 60px;
        margin-bottom: 60px;
        margin-left: 80px;
    }
    .icono-error {
        top: 12px;
        right: 71px;
    }
    .inputError {
        border: solid #ed1ad8 3px;
        @apply rounded-md;
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
    .padre {
        height: 250px;
    }
    @media (min-width: 1200px) {
        .header {
            padding-right: 10%;
        }
    }
</style>
