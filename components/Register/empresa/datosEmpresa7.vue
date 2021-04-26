<template>
    <section class="flex flex-col items-center text-center">
        <IconPassword class="w-24" />
        <!-- Margen del IconPassword "mt-6" -->
        <span class="header flex text-2xl mt-10 header text-center text-rojo lg:text-3xl text-center lg:font-semibold"> Ingresa una constraseña </span>
        <FlechaAtras class="flecha" />
        <div class="parrafo text-sm div-parrafo text-left">
            <p>Condiciones:</p>
            <ul class="texto text-sm">
                <li>- Debe tener mínimo 8 caracteres</li>
                <li>- Debe tener máximo 10 caracteres</li>
                <li>- Debe contener por lo menos una mayúscula</li>
                <li>- Debe contener por lo menos un número</li>
            </ul>
        </div>
        <section class="w-full">
            <article class="relative mt-4">
                <input
                    ref="password"
                    :value="data.contraseña"
                    :type="show_password ? 'text' : 'password'"
                    class="border border-rojo lg:border-gris rounded-md w-64 h-12 outline-none pl-4"
                    :class="{
                        inputError: errores.contraseña && errores.contraseña.error,
                    }"
                    @click="activate('password')"
                    @focus="activate('password')"
                    @input="(event) => inputValue(event, 'contraseña')"
                />
                <IconError v-if="errores.contraseña" class="w-6 h-6 absolute icono-error" />
                <div @click="togglePassword">
                    <IconOjo v-if="!show_password" class="w-6 h-6 icon-ojo" />
                    <IconOjoCerrado v-else class="w-6 h-6 icon-ojo" />
                </div>
                <div class="div-label absolute px-2" :class="active === 'password' || data.password != '' ? 'moveLabel' : false">
                    <label for="" class="text-rojo text-xs lg:text-gris lg:text-lg lg:font-semibold" @click="activate('password')">Contraseña</label>
                </div>
            </article>
            <article class="repetir-C relative my-12">
                <input
                    ref="password"
                    :value="data.repetirContraseña"
                    :type="show_repeatPassword ? 'text' : 'password'"
                    class="border border-rojo lg:border-gris rounded-md w-64 h-12 outline-none pl-4"
                    :class="{
                        inputError: errores.repetirContraseña && errores.repetirContraseña.error,
                    }"
                    @click="activate('repeatPassword')"
                    @focus="activate('repeatPassword')"
                    @input="(event) => inputValue(event, 'repetirContraseña')"
                />
                <IconError v-if="errores.repetirContraseña" class="w-6 h-6 absolute icono-error" />

                <div @click="toggleRepeatPassword">
                    <IconOjo v-if="!show_repeatPassword" class="w-6 h-6 icon-ojo" />
                    <IconOjoCerrado v-else class="w-6 h-6 icon-ojo" />
                </div>
                <div class="div-label absolute px-2" :class="active === 'repeatPassword' || data.repeatPassword != '' ? 'moveLabel' : false">
                    <label for="" class="text-rojo text-xs lg:text-gris lg:text-lg lg:font-semibold" @click="activate('repeatPassword')">Repetir contraseña</label>
                </div>
            </article>
        </section>
    </section>
</template>

<script>
    import { mapActions, mapState } from 'vuex';
    export default {
        name: 'DatosEmpresa7',
        data() {
            return {
                active: 'false',
                // data: {
                //   password: '',
                //   repeatPassword: '',
                // },
                buttonGenero: '',
                show_password: false,
                show_repeatPassword: false,
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
            togglePassword() {
                switch (this.show_password) {
                    case true:
                        this.show_password = false;
                        break;
                    case false:
                        this.show_password = true;
                        break;
                }
            },
            toggleRepeatPassword() {
                switch (this.show_repeatPassword) {
                    case true:
                        this.show_repeatPassword = false;
                        break;
                    case false:
                        this.show_repeatPassword = true;
                        break;
                }
            },
        },
    };
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200&display=swap');
    .icon-ojo {
        position: absolute;
        top: 12px;
        right: 74px;
    }
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
        right: 100px;
    }
    .inputError {
        border: solid #ed1ad8 3px;
        @apply rounded-md;
    }
    .parrafo {
        font-family: 'Montserrat', sans-serif;
    }
    .div-parrafo {
        width: 320px;
        margin-top: 30px;
        margin-bottom: 40px;
    }
    a {
        color: white;
    }
    .div-label {
        background-color: white;
        left: 68px;
        top: 7px;
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
    .div-pass {
        background-color: #fef49c;
    }
    @media (min-width: 1200px) {
        .header {
            color: black;
            margin-top: -19%;
        }
        .parrafo {
            font-size: 22px;
        }
        .texto {
            font-size: 18px;
        }
        .repetir-C {
            margin-bottom: 0%;
        }
        .div-parrafo {
            margin-top: 0%;
        }
        .flecha {
            padding-right: 10%;
        }
    }
</style>
