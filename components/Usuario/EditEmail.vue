<template>
    <section class="rounded-md">
        <header class="header flex items-center justify-center">
            <h1 class="font-bold text-2xl">Modificar E-mail</h1>
        </header>
        <article class="p-5">
            <p class="parrafo">Te llegará un mensaje al nuevo e-mail solicitando la confirmación del cambio.</p>
            <input type="text" placeholder="Ingresa el nuevo e-mail" class="text-gray-500 w-64 mt-8 ml-6" />
            <div class="flex items-center justify-between mt-4">
                <button @click="closeModal({ modal: 'editEmail' })">Cancelar</button>
                <button>Aceptar</button>
            </div>
        </article>
    </section>
</template>

<script>
    import { mapActions } from 'vuex';
    export default {
        methods: {
            ...mapActions({
                closeModal: 'modal/closeModal',
            }),
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
