<template>
    <section class="flex flex-col items-center text-center">
        <span class="flex text-rojo text-2xl mt-4 header text-center"> Ingresa tu email corporativo </span>
        <article>
            <div class="div-parrafo">
                <div class="mb-4">
                    <div class="mb-3">
                        <span class="text-sm parrafo">Ingresa un correo electrónico válido para registrarte en </span>
                        <span class="text-sm"> Álamos. </span>
                    </div>
                </div>
            </div>
        </article>
        <section class="w-full">
            <article class="relative mt-10">
                <input :value="data.correo" type="email" class="border border-rojo rounded-md h-12 outline-none pl-4 relative" :class="{ inputError: errores.correo && errores.correo.error }" @click="activate('correo')" @focus="activate('correo')" @input="(event) => inputValue(event, 'correo')" />
                <IconError v-if="errores.correo" class="w-6 h-6 absolute icono-error" />
                <div class="div-label absolute px-2" :class="active === 'correo' || data.correo != '' ? 'moveLabel' : false">
                    <label for="" class="text-rojo text-xs" @click="activate('correo')">Correo electrónico</label>
                </div>
            </article>
            <article class="relative mt-10">
                <input
                    :value="data.confirmacion"
                    type="email"
                    class="border border-rojo rounded-md h-12 outline-none pl-4"
                    :class="{
                        inputError: errores.confirmacion && errores.confirmacion.error,
                    }"
                    @click="activate('confirmar')"
                    @focus="activate('confirmar')"
                    @input="(event) => inputValue(event, 'confirmacion')"
                />
                <IconError v-if="errores.confirmacion" class="w-6 h-6 absolute icono-error" />

                <div class="div-label absolute px-2" :class="active === 'confirmar' || data.confirmacion != '' ? 'moveLabel' : false">
                    <label for="" class="text-rojo text-xs" @click="activate('confirmar')">Confirmar correo</label>
                </div>
                <!-- {{ errores.correo.error.length }} -->
            </article>
        </section>
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
        border: solid #ed1ad8 2px;
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
</style>
