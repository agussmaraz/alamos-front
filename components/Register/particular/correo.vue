<template>
    <section class="flex items-center justify-center flex-col pt-4">
        <h1 class="text-center">Por favor, revisa la carpeta de spam.</h1>
        <button class="bg-rojo px-4 py-2 mt-8 rounded-md" @click="closeModal({ modal: 'correo' })">Aceptar</button>
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
    section {
        background-color: white;
    }
    button {
        color: white;
        font-weight: bold;
    }
</style>
