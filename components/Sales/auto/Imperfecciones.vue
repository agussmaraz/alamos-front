<template>
    <section class="flex flex-col items-center">
        <h1 class="my-5">Imperfecciones de tu carro</h1>
        <p class="w-10/12 text-center mb-5 text-base">Hazle saber al comprador cuales son las imperfecciones más relevantes de tu vehículo.</p>
        <article class="flex justify-around w-full">
            <main class="flex flex-col items-center">
                <div class="div-camara rounded-md relative" @click="openModal({ modal: 'imperfecciones' })">
                    <IconCamaraGray class="w-12 h-12 absolute icon-camara" />
                    <IconAddImage class="w-6 h-6 absolute icon-add" />
                </div>
                <p class="text-xs font-bold px-2 rounded-md my-6 p-descripcion">Descripción</p>
                <IconAlert class="w-8 h-8" />
            </main>
            <main class="flex flex-col items-center">
                <div class="div-camara rounded-md relative" @click="openModal({ modal: 'imperfecciones' })">
                    <IconCamaraGray class="w-12 h-12 absolute icon-camara" />
                    <IconAddImage class="w-6 h-6 absolute icon-add" />
                </div>
                <p class="text-xs font-bold px-2 rounded-md my-6 p-descripcion">Descripción</p>
                <IconAlert class="w-8 h-8" />
            </main>
            <main class="flex flex-col items-center">
                <div class="div-camara rounded-md relative" @click="openModal({ modal: 'imperfecciones' })">
                    <IconCamaraGray class="w-12 h-12 absolute icon-camara" />
                    <IconAddImage class="w-6 h-6 absolute icon-add" />
                </div>
                <p class="text-xs font-bold px-2 rounded-md my-6 p-descripcion">Descripción</p>
                <IconAlert class="w-8 h-8" />
            </main>
            <main class="flex flex-col items-center">
                <div class="div-camara rounded-md relative" @click="openModal({ modal: 'imperfecciones' })">
                    <IconCamaraGray class="w-12 h-12 absolute icon-camara" />
                    <IconAddImage class="w-6 h-6 absolute icon-add" />
                </div>
                <p class="text-xs font-bold px-2 rounded-md my-6 p-descripcion">Descripción</p>
                <IconAlert class="w-8 h-8" />
            </main>
        </article>
    </section>
</template>

<script>
    import { mapActions } from 'vuex';
    export default {
        computed: {},
        methods: {
            ...mapActions({
                openModal: 'modal/openModal',
            }),
        },
    };
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200&display=swap');

    body {
        font-family: 'Montserrat', sans-serif;
    }
    .icon-add {
        top: 4px;
        right: 4px;
    }
    .div-camara {
        width: 81px;
        height: 81px;
        background-color: #eaebef;
        box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.75);
        cursor: pointer;
    }
    h1 {
        color: #444343;
        font-size: 20px;
        font-weight: bold;
    }
    .icon-camara {
        bottom: 6px;
        right: 17px;
    }
    .p-descripcion {
        background-color: #eaebef;
        box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.75);
        text-align: center;
        color: #8f8f8f;
    }
</style>
