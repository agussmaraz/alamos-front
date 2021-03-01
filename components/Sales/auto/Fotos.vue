<template>
    <section class="flex flex-col items-center">
        <h1 class="my-5">Sube las fotos de tu carro</h1>
        <div class="my-3 parrafo">
            <p>Sigue el <strong> orden de las fotos </strong>guía para que tu publicación no pierda exposición.</p>
        </div>
        <article class="w-4/5 text-left">
            <h3 class="mb-3">Exterior</h3>
            <hr class="mb-8" />
            <article class="flex flex-wrap flex-row justify-around">
                <div class="div-exterior relative" @click="openModal({ modal: 'imperfecciones' })">
                    <aside class="py-1 px-3 portada absolute">Portada</aside>
                    <img src="~/assets/img/Car-frente.svg" alt="" class="foto1" />
                    <IconAddImage class="w-6 h-6 absolute icon-add" />
                </div>
                <div class="div-exterior relative" @click="openModal({ modal: 'imperfecciones' })">
                    <img src="~/assets/img/Car-perfil.svg" alt="" class="foto2" />
                    <IconAddImage class="w-6 h-6 absolute icon-add" />
                </div>
                <div class="div-exterior relative" @click="openModal({ modal: 'imperfecciones' })">
                    <img src="~/assets/img/Car-lateral.svg" alt="" class="foto3" />
                    <IconAddImage class="w-6 h-6 absolute icon-add" />
                </div>
                <div class="mt-6 div-exterior relative" @click="openModal({ modal: 'imperfecciones' })">
                    <img src="~/assets/img/Car-perfil-trasero.svg" alt="" class="foto4" />
                    <IconAddImage class="w-6 h-6 absolute icon-add" />
                </div>
                <div class="mt-6 div-exterior relative" @click="openModal({ modal: 'imperfecciones' })">
                    <img src="~/assets/img/Car-trasera.svg" alt="" class="foto5" />
                    <IconAddImage class="w-6 h-6 absolute icon-add" />
                </div>
                <div class="mt-6 div-exterior relative" @click="openModal({ modal: 'imperfecciones' })">
                    <img src="~/assets/img/Car-llanta.svg" alt="" class="foto6" />
                    <IconAddImage class="w-6 h-6 absolute icon-add" />
                </div>
            </article>
        </article>
        <article class="w-4/5 text-left mt-8">
            <h3 class="mb-3">Interior</h3>
            <hr class="mb-4" />
            <article class="flex flex-wrap flex-row justify-around">
                <div class="div-interior1 relative" @click="openModal({ modal: 'imperfecciones' })">
                    <div class="title-image"></div>
                    <p class="absolute p1 font-bold">Frente</p>
                    <IconAddImage class="w-6 h-6 absolute icon-add" />
                </div>
                <div class="relative div-interior2" @click="openModal({ modal: 'imperfecciones' })">
                    <div class="title-image"></div>
                    <p class="absolute p2 font-bold">Tablero</p>
                    <IconAddImage class="w-6 h-6 absolute icon-add" />
                </div>

                <div class="relative div-interior3" @click="openModal({ modal: 'imperfecciones' })">
                    <div class="title-image"></div>
                    <p class="absolute p3 font-bold">Tapizado</p>
                    <IconAddImage class="w-6 h-6 absolute icon-add" />
                </div>
                <section class="mt-6 flex justify-start w-full">
                    <div class="relative div-interior4" @click="openModal({ modal: 'imperfecciones' })">
                        <div class="title-image"></div>
                        <p class="absolute p4 font-bold">Baúl</p>
                        <IconAddImage class="w-6 h-6 absolute icon-add" />
                    </div>
                    <div class="ml-3 relative div-interior5" @click="openModal({ modal: 'imperfecciones' })">
                        <div class="title-image"></div>
                        <p class="absolute p5 font-bold">Pedales</p>
                        <IconAddImage class="w-6 h-6 absolute icon-add" />
                    </div>
                </section>
            </article>
        </article>
        <article class="w-4/5 text-left mt-8">
            <h3 class="mb-5">Link Video (opcional)</h3>
            <section>
                <input v-model="video" type="url" class="border border-black w-10/12 rounded-md h-8 pl-2" />
            </section>
        </article>
    </section>
</template>

<script>
    import { mapActions } from 'vuex';

    export default {
        data() {
            return {
                video: 'https://youtu.be/EAoBEW24p3I',
            };
        },
        methods: {
            ...mapActions({
                openModal: 'modal/openModal',
            }),
        },
    };
</script>

<style scoped>
    .portada {
        background-color: #ff5670;
        color: white;
        height: 27px;
        width: 102px;
        text-align: center;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
        top: -22px;
        font-weight: bold;
    }
    .parrafo {
        width: 330px;
        text-align: center;
    }
    .icon-add {
        top: 4px;
        right: 4px;
    }
    h1 {
        color: #444343;
        font-size: 20px;
        font-weight: bold;
    }
    h3 {
        color: #444343;
        font-size: 18px;
        font-weight: bold;
    }
    hr {
        color: #c4c4c4;
    }
    .p1 {
        right: 25px;
        bottom: 4px;
        color: white;
    }
    .p2 {
        right: 23px;
        bottom: 4px;
        color: white;
    }
    .p3 {
        right: 17px;
        bottom: 4px;
        color: white;
    }
    .p4 {
        right: 35px;
        bottom: 4px;
        color: white;
    }
    .p5 {
        right: 21px;
        bottom: 4px;
        color: white;
    }
    .div-exterior {
        width: 102px;
        height: 100px;
        background-color: #eaebef;
        border-radius: 8px;
        box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.75);
        cursor: pointer;
    }
    .title-image {
        height: 30%;
        width: 100%;
        background-color: black;
        opacity: 0.5;
        border-bottom-left-radius: 8px;
        border-bottom-right-radius: 8px;
    }
    .div-interior1 {
        width: 102px;
        height: 100px;
        border-radius: 8px;
        background-image: url('~assets/img/Frente.svg');
        background-size: cover;
        display: flex;
        align-items: flex-end;
        flex-flow: column-reverse;
        cursor: pointer;
    }
    .div-interior2 {
        width: 102px;
        height: 100px;
        border-radius: 8px;
        background-image: url('~assets/img/Car-tablero.svg');
        background-size: cover;
        background-position: center;
        display: flex;
        align-items: flex-end;
        flex-flow: column-reverse;
        cursor: pointer;
    }
    .div-interior3 {
        width: 102px;
        height: 100px;
        border-radius: 8px;
        background-image: url('~assets/img/Car-interior.svg');
        background-size: cover;
        background-position: center;
        display: flex;
        align-items: flex-end;
        flex-flow: column-reverse;
        cursor: pointer;
    }
    .div-interior4 {
        width: 102px;
        height: 100px;
        border-radius: 8px;
        background-image: url('~assets/img/Baul.svg');
        background-size: cover;
        background-position: center;
        display: flex;
        align-items: flex-end;
        flex-flow: column-reverse;
        cursor: pointer;
    }
    .div-interior5 {
        width: 102px;
        height: 100px;
        border-radius: 8px;
        background-image: url('~assets/img/Pedales.svg');
        background-size: cover;
        background-origin: center;
        display: flex;
        align-items: flex-end;
        flex-flow: column-reverse;
        cursor: pointer;
    }
    .foto1 {
        width: 64px;
        margin: 0 auto;
        margin-top: 12px;
        padding-top: 19px;
    }
    .foto2 {
        width: 79px;
        margin: 0 auto;
        margin-top: 15px;
        padding-top: 19px;
    }
    .foto3 {
        width: 98px;
        margin: 0 auto;
        margin-top: 20px;
        padding-top: 19px;
    }
    .foto4 {
        width: 82px;
        margin: 0 auto;
        margin-top: 18px;
        padding-top: 19px;
    }
    .foto5 {
        width: 65px;
        margin: 0 auto;
        margin-top: 13px;
        padding-top: 19px;
    }
    .foto6 {
        width: 91px;
        margin: 0 auto;
        padding-top: 13px;
        border-radius: 6px;
    }
</style>
