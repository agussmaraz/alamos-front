<template>
    <section class="caja-padre flex flex-col items-center p-3">
        <IconDniFront class="iconinfo w-12 h-12 my-3" />
        <span class="flex text-rojo text-2xl mt-4 header text-center my-3"> Que el documento se vea completo </span>
        <p class="text-center my-3">Todo el documento tiene que estar visible cuando saques la foto.</p>
        <nuxt-link to="/register/particular/foto" class="button-foto py-2 px-4">Tomar foto</nuxt-link>
    </section>
</template>

<script>
    export default {
        name: 'Consejo4',
    };
</script>

<style scoped>
    .caja-padre {
        width: 300px;
        margin: 0 auto;
        border-top-right-radius: 8px;
        border-top-left-radius: 8px;
    }
    .iconinfo {
        fill: #ed1a3b;
    }
    .button-foto {
        background-color: #ffc0c0;
        border-radius: 8px;
    }
</style>
