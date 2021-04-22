<template>
    <section class="rounded-md">
        <header class="header flex items-center justify-center">
            <h1 class="font-bold text-2xl">Eliminar cuenta</h1>
        </header>
        <article class="p-5">
            <p class="parrafo text-left mb-4">Cuéntanos por qué quieres eliminar tu cuenta:</p>
            <div class="flex items-center">
                <input type="radio" class="mr-3" name="" />
                <label for="">Ya vendí mi vehículo</label>
            </div>
            <div class="flex items-center">
                <input type="radio" class="mr-3" name="" />
                <label for="">Ya compre un vehículo</label>
            </div>
            <div class="flex items-center">
                <input type="radio" class="mr-3" name="" />
                <label for="">No me interesa comprar ni vender en Álamos</label>
            </div>
            <div class="flex items-center">
                <input type="radio" class="mr-3" name="" />
                <label for="">Tengo otros motivos</label>
            </div>
            <div class="relative">
                <input :type="show_password ? 'text' : 'password'" placeholder="Ingresa tu contraseña actual" class="text-gray-500 w-64 mt-5 ml-5" />
                <div @click="togglePassword">
                    <IconOjo v-if="!show_password" class="w-6 h-6 icon-ojo" />
                    <IconOjoCerrado v-else class="w-6 h-6 icon-ojo" />
                </div>
            </div>
            <div class="flex items-center justify-between mt-4">
                <button @click="closeModal({ modal: 'editEliminar' })">Cancelar</button>
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
        },
    };
</script>

<style scoped>
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
    label {
        font-family: Montserrat;
    }
    section {
        background: #ffffff;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
    .parrafo {
        width: 100%;
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
