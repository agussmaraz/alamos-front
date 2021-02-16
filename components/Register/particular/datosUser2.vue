<template>
    <section class="flex flex-col items-center text-center">
        <span class="flex text-rojo text-2xl mt-4 header text-center"> Datos personales </span>
        <section class="w-full">
            <article class="relative mt-20">
                <input :value="data.nombre" type="text" class="border border-rojo rounded-md w-64 h-12 outline-none pl-4" :class="{ inputError: errores.nombre && errores.nombre.error }" @click="activate('nombre')" @focus="activate('nombre')" @input="(event) => inputValue(event, 'nombre')" />
                <IconError v-if="errores.nombre" class="w-6 h-6 absolute icono-error" />

                <div class="div-label absolute px-2" :class="active === 'nombre' || data.nombre != '' ? 'moveLabel' : false">
                    <label class="text-rojo text-xs" @click="activate('nombre')">Ingresa tu nombre completo</label>
                </div>
            </article>
            <article class="relative my-12">
                <input
                    :value="data.apellido"
                    type="text"
                    class="border border-rojo rounded-md w-64 h-12 outline-none pl-4"
                    :class="{ inputError: errores.apellido && errores.apellido.error }"
                    @click="activate('apellido')"
                    @focus="activate('apellido')"
                    @input="(event) => inputValue(event, 'apellido')"
                />
                <IconError v-if="errores.apellido" class="w-6 h-6 absolute icono-error" />

                <div class="div-label absolute px-2" :class="active === 'apellido' || data.apellido != '' ? 'moveLabel' : false">
                    <label for="" class="text-rojo text-xs" @click="activate('apellido')">Ingresa tu apellido</label>
                </div>
            </article>
            <div class="relative">
                <article class="flex justify-around items-center border border-rojo rounded-md h-16 m-auto button-sex" :class="{ inputError: errores.genero && errores.genero.error }">
                    <button class="text-xs h-full w-full outline-none" :class="buttonGenero === 'masculino' ? 'activateButton' : false" @click="setGender('masculino')">Masculino</button>
                    <button class="text-xs h-full w-full outline-none button-medio" :class="buttonGenero === 'femenino' ? 'activateButton' : false" @click="setGender('femenino')">Femenino</button>
                    <button class="text-xs h-full w-full outline-none" :class="buttonGenero === 'otro' ? 'activateButton' : false" @click="setGender('otro')">Otros</button>
                </article>
                <IconError v-if="errores.genero" class="w-6 h-6 absolute icono-error2" />
            </div>
        </section>
    </section>
</template>

<script>
    import { mapState, mapActions } from 'vuex';

    export default {
        name: 'Datos2',
        data() {
            return {
                active: 'false',
                buttonGenero: '',
            };
        },
        computed: {
            ...mapState({
                data: (state) => state.particular.datos,
                errores: (state) => state.particular.errores,
            }),
        },
        methods: {
            ...mapActions({
                setData: 'particular/setData',
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
            setGender(param) {
                const genero = 'genero';
                this.setData({ [genero]: param });
                this.activeButton(param);
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
        top: 21px;
        right: 22px;
    }
    .icono-error2 {
        top: 12px;
        right: 71px;
    }
    .inputError {
        border: solid #ed1ad8 2px;
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
</style>
