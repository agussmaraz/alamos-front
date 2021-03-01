<template>
    <section class="flex flex-col items-center text-center">
        <span class="flex text-rojo text-2xl mt-4 header text-center"> Datos personales </span>
        <section class="w-full pt-16">
            <div class="relative">
                <article
                    class="flex justify-around items-center border border-rojo rounded-md h-16 m-auto button-sex mb-12"
                    :class="{
                        inputError: errores.tipoCedula && errores.tipoCedula.error,
                    }"
                >
                    <button class="text-xs h-full w-full outline-none button-medio" :class="buttonGenero === 'ciudadania' ? 'activateButton' : false" @click="setGender('ciudadania')">Cédula ciudadania</button>
                    <button class="text-xs h-full w-full outline-none" :class="buttonGenero === 'extranjera' ? 'activateButton' : false" @click="setGender('extranjera')">Cédula Extranjera</button>
                </article>
                <IconError v-if="errores.tipoCedula" class="w-6 h-6 absolute icono-error2" />
            </div>
            <article class="relative mt-12">
                <input :value="data.cedula" type="text" class="border border-rojo rounded-md w-64 h-12 outline-none pl-4" :class="{ inputError: errores.cedula && errores.cedula.error }" @click="activate('cedula')" @focus="activate('cedula')" @input="(event) => inputValue(event, 'cedula')" />
                <IconError v-if="errores.cedula" class="w-6 h-6 absolute icono-error" />
                <div class="div-label absolute px-2" :class="active === 'cedula' || data.cedula != '' ? 'moveLabel' : false">
                    <label for="" class="text-rojo text-xs" @click="activate('cedula')">Número de identificacion</label>
                </div>
            </article>
            <article class="relative my-12">
                <input :value="data.fecha" type="date" class="border input-fecha border-rojo rounded-md w-64 h-12 outline-none pl-4" :class="{ inputError: errores.fecha && errores.fecha.error }" @click="activate('fecha')" @focus="activate('fecha')" @input="(event) => inputValue(event, 'fecha')" />
                <IconError v-if="errores.fecha" class="w-6 h-6 absolute icono-error" />
                <div class="div-label absolute px-2" :class="active === 'fecha' || data.fecha != '' ? 'moveLabel' : false">
                    <label for="" class="text-rojo text-xs" @click="activate('fecha')">Fecha de nacimiento</label>
                </div>
            </article>
        </section>
    </section>
</template>

<script>
    import { mapState, mapActions } from 'vuex';

    export default {
        name: 'Datos3',
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
                const genero = 'tipoCedula';
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
    .icono-error {
        top: 21px;
        right: 22px;
    }
    .icono-error2 {
        top: 19px;
        right: 27px;
    }
    .inputError {
        border: solid #ed1ad8 3px;
        @apply rounded-md;
    }
    .input-fecha {
        background-color: white;
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
</style>
