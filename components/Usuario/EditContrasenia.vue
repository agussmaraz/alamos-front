<template>
    <section class="rounded-md">
        <header class="header flex items-center justify-center">
            <h1 class="font-bold text-2xl">Modificar contraseña</h1>
        </header>
        <article class="p-5">
            <div class="text-sm text-left">
                <p>Condiciones:</p>
                <ul class="text-sm">
                    <li class="text-gray-600">- Debe tener mínimo 8 caracteres</li>
                    <li class="text-gray-600">- Debe tener máximo 10 caracteres</li>
                    <li class="text-gray-600">- Debe contener por lo menos una mayúscula</li>
                    <li class="text-gray-600">- Debe contener por lo menos un número</li>
                </ul>
            </div>
            <div class="relative">
                <input :type="show_password ? 'text' : 'password'" placeholder="Ingresa tu contraseña actual" class="text-gray-500 w-64 mt-5 ml-5" />
                <div @click="togglePassword">
                    <IconOjo v-if="!show_password" class="w-6 h-6 icon-ojo" />
                    <IconOjoCerrado v-else class="w-6 h-6 icon-ojo" />
                </div>
            </div>
            <div class="relative mt-8">
                <input :type="show_repeatPassword ? 'text' : 'password'" placeholder="Ingresa tu nueva contraseña" class="text-gray-500 w-64 ml-5" />
                <div @click="toggleRepeatPassword">
                    <IconOjo v-if="!show_repeatPassword" class="w-6 h-6 icon-ojo2" />
                    <IconOjoCerrado v-else class="w-6 h-6 icon-ojo2" />
                </div>
            </div>

            <div class="flex items-center justify-between mt-8">
                <button @click="closeModal({ modal: 'editContraseña' })">Cancelar</button>
                <button>Aceptar</button>
            </div>
        </article>
    </section>
</template>

<script>
    import { mapActions } from 'vuex';
    export default {
        data() {
            return {
                show_password: false,
                show_repeatPassword: false,
            };
        },
        methods: {
            ...mapActions({
                closeModal: 'modal/closeModal',
            }),
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
    .icon-ojo {
        position: absolute;
        top: 18px;
        right: 24px;
        stroke: #747474;
    }
    .icon-ojo2 {
        position: absolute;
        top: 0px;
        right: 24px;
        stroke: #747474;
    }
    .header {
        background-image: url('~assets/img/FondoModal.png');
        width: 100%;
        height: 120px;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
    }
    h1 {
        color: white;
    }
    section {
        background: #ffffff;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
    .parrafo {
        width: 100%;
        text-align: center;
    }
    button {
        background-color: #8e8e8e;
        color: white;
        width: 145px;
        border-radius: 8px;
        height: 45px;
        margin-top: 15px;
        outline: none;
    }
    input {
        border-bottom: solid #8e8e8e 2px;
        outline: none;
    }
</style>
