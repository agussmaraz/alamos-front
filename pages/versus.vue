<template>
    <section>
        <!-- <article class="fixed w-full article-nav"> -->
        <nav class="flex justify-between items-center">
            <nuxt-link to="/home">
                <IconArrow class="icon-arrow w-4 h-4 cursor-pointer" />
            </nuxt-link>
            <div>
                <h2 class="font-bold">Versus</h2>
            </div>
            <IconCampana class="w-6 h-6 icon-campana" />
        </nav>
        <section class="overflow-x-auto">
            <article class="article-nav" :class="comparacion.length > 0 ? 'article-nav-data' : null">
                <article class="relative article-versus mt-4">
                    <article v-if="comparacion.length > 0" class="container-versus">
                        <section v-for="index in 3" :key="index" class="flex items-center justify-between relative">
                            <div class="mx-4">
                                <img :src="comparacion[index - 1].img" alt="auto" class="auto-elegido" />
                                <article class="div-linea rounded-tl-md rounded-tr-md absolute flex items-center flex-col">
                                    <section class="w-full relative"></section>
                                    <div>
                                        <p class="p-linea">{{ comparacion[index - 1].linea }}</p>
                                        <p class="p-linea font-semibold">
                                            {{ comparacion[index - 1].marca }}
                                        </p>
                                    </div>
                                </article>
                                <div class="bg-rojo rounded-bl-md rounded-br-md h-10 absolute bottom-0 div-mensaje">
                                    <p class="font-bold p-mensaje">Enviar mensaje</p>
                                </div>
                            </div>
                        </section>
                    </article>
                    <section v-else class="flex items-center justify-around">
                        <div class="div-versus cursor-pointer mr-2" @click="openModal({ modal: 'versus' })">
                            <IconCarGray class="icon-car relative" />
                            <IconAddGray class="icon-add relative" />
                        </div>
                        <div class="div-versus cursor-pointer mr-2" @click="openModal({ modal: 'versus' })">
                            <IconCarGray class="icon-car relative" />
                            <IconAddGray class="icon-add relative" />
                        </div>
                    </section>
                    <div v-if="comparacion.length == 0" class="font-bold uppercase text-2xl vs absolute rounded-full flex items-center justify-center">VS.</div>
                </article>
            </article>
            <!-- </article> -->
            <article class="article-data px-4 pb-10">
                <header>
                    <div v-if="comparacion.length > 0" class="caja-flex">
                        <h4>Precio</h4>
                        <hr class="hr3" />
                    </div>
                </header>
                <article v-if="comparacion.length > 0" class="flex justify-between items-center caja-datos">
                    <div class="ml-4 font-bold" style="width: 50%">
                        {{ auto[0].precio }}
                    </div>
                    <div class="ml-4 font-bold" style="width: 50%">
                        {{ auto[1].precio }}
                    </div>
                    <div class="ml-4 font-bold" style="width: 50%">
                        {{ auto[2].precio }}
                    </div>
                </article>
                <div v-if="comparacion == 0" class="caja-flex">
                    <h4>Clase de vehiculo</h4>
                    <hr class="hr1" />
                </div>
                <div v-if="comparacion == 0" class="caja-flex mt-8">
                    <h4>Modelo</h4>
                    <hr class="hr2" />
                </div>
                <div v-if="comparacion.length > 0" class="caja-flex mt-8">
                    <h4>Kilometraje</h4>
                    <hr class="hr6" />
                </div>
                <article v-if="comparacion.length > 0" class="flex justify-between items-center caja-datos">
                    <div class="ml-4 font-bold" style="width: 50%">
                        {{ auto[0].km }}
                    </div>
                    <div class="ml-4 font-bold" style="width: 50%">
                        {{ auto[1].km }}
                    </div>
                    <div class="ml-4 font-bold" style="width: 50%">
                        {{ auto[2].km }}
                    </div>
                </article>
                <div v-if="comparacion.length > 0" class="caja-flex mt-8">
                    <h4>Placa</h4>
                    <hr class="hr7" />
                </div>
                <article v-if="comparacion.length > 0" class="flex justify-between items-center caja-datos">
                    <div class="ml-4 font-bold" style="width: 50%">
                        {{ auto[0].placa }}
                    </div>
                    <div class="ml-4 font-bold" style="width: 50%">
                        {{ auto[1].placa }}
                    </div>
                    <div class="ml-4 font-bold" style="width: 50%">
                        {{ auto[2].placa }}
                    </div>
                </article>
                <div v-if="comparacion.length > 0" class="caja-flex mt-8">
                    <h4>Único dueño</h4>
                    <hr class="hr9" />
                </div>
                <article v-if="comparacion.length > 0" class="flex justify-between items-center caja-datos">
                    <div class="ml-4 font-bold" style="width: 50%">
                        {{ auto[0].dueño }}
                    </div>
                    <div class="ml-4 font-bold" style="width: 50%">
                        {{ auto[1].dueño }}
                    </div>
                    <div class="ml-4 font-bold" style="width: 50%">
                        {{ auto[2].dueño }}
                    </div>
                </article>
                <div v-if="comparacion == 0" class="caja-flex mt-8">
                    <h4>Marca</h4>
                    <hr class="hr3" />
                </div>
                <div v-if="comparacion == 0" class="caja-flex mt-8">
                    <h4>Línea</h4>
                    <hr class="hr4" />
                </div>
                <div v-if="comparacion == 0" class="caja-flex mt-8">
                    <h4>Versión</h4>
                    <hr class="hr5" />
                </div>
                <div v-if="comparacion == 0" class="caja-flex mt-8">
                    <h4>Referencia</h4>
                    <hr class="hr6" />
                </div>
                <div v-if="comparacion.length > 0" class="caja-flex mt-8">
                    <h4>Caja</h4>
                    <hr class="hr7" />
                </div>
                <article v-if="comparacion.length > 0" class="flex justify-between items-center caja-datos">
                    <div class="ml-4 font-bold" style="width: 50%">
                        {{ auto[0].caja }}
                    </div>
                    <div class="ml-4 font-bold" style="width: 50%">
                        {{ auto[1].caja }}
                    </div>
                    <div class="ml-4 font-bold" style="width: 50%">
                        {{ auto[2].caja }}
                    </div>
                </article>
                <div v-if="comparacion.length > 0" class="caja-flex mt-8">
                    <h4>Cilindraje</h4>
                    <hr class="hr8" />
                </div>
                <article v-if="comparacion.length > 0" class="flex justify-between items-center caja-datos">
                    <div class="ml-4 font-bold" style="width: 50%">
                        {{ auto[0].cilindraje }}
                    </div>
                    <div class="ml-4 font-bold" style="width: 50%">
                        {{ auto[1].cilindraje }}
                    </div>
                    <div class="ml-4 font-bold" style="width: 50%">
                        {{ auto[2].cilindraje }}
                    </div>
                </article>
                <div v-if="comparacion == 0" class="caja-flex mt-8">
                    <h4>Cilindraje (cc)</h4>
                    <hr class="hr8" />
                </div>

                <div v-if="comparacion.length > 0" class="caja-flex mt-8">
                    <h4>Transmisión</h4>
                    <hr class="hr9" />
                </div>
                <article v-if="comparacion.length > 0" class="flex justify-between items-center caja-datos">
                    <div class="ml-4 font-bold" style="width: 50%">
                        {{ auto[0].transmision }}
                    </div>
                    <div class="ml-4 font-bold" style="width: 50%">
                        {{ auto[1].transmision }}
                    </div>
                    <div class="ml-4 font-bold" style="width: 50%">
                        {{ auto[2].transmision }}
                    </div>
                </article>
                <div v-if="comparacion.length > 0" class="caja-flex mt-8">
                    <h4>Dirección</h4>
                    <hr class="hr9" />
                </div>
                <article v-if="comparacion.length > 0" class="flex justify-between items-center caja-datos">
                    <div class="ml-4 font-bold" style="width: 50%">
                        {{ auto[0].direccion }}
                    </div>
                    <div class="ml-4 font-bold" style="width: 50%">
                        {{ auto[1].direccion }}
                    </div>
                    <div class="ml-4 font-bold" style="width: 50%">
                        {{ auto[2].direccion }}
                    </div>
                </article>
                <div v-if="comparacion.length > 0" class="caja-flex mt-8">
                    <h4>Combustible</h4>
                    <hr class="hr9" />
                </div>
                <article v-if="comparacion.length > 0" class="flex justify-between items-center caja-datos">
                    <div class="ml-4 font-bold" style="width: 50%">
                        {{ auto[0].combustible }}
                    </div>
                    <div class="ml-4 font-bold" style="width: 50%">
                        {{ auto[1].combustible }}
                    </div>
                    <div class="ml-4 font-bold" style="width: 50%">
                        {{ auto[2].combustible }}
                    </div>
                </article>
                <div v-if="comparacion == 0" class="caja-flex mt-8">
                    <h4>Potencia</h4>
                    <hr class="hr2" />
                </div>
                <div v-if="comparacion.length > 0" class="caja-flex mt-8">
                    <h4>Cap. Pasajeros</h4>
                    <hr class="hr8" />
                </div>
                <article v-if="comparacion.length > 0" class="flex justify-between items-center caja-datos">
                    <div class="ml-4 font-bold" style="width: 50%">
                        {{ auto[0].pasajeros }}
                    </div>
                    <div class="ml-4 font-bold" style="width: 50%">
                        {{ auto[1].pasajeros }}
                    </div>
                    <div class="ml-4 font-bold" style="width: 50%">
                        {{ auto[2].pasajeros }}
                    </div>
                </article>
                <div v-if="comparacion == 0" class="caja-flex mt-8">
                    <h4>Número de ejes</h4>
                    <hr class="hr8" />
                </div>
                <div v-if="comparacion == 0" class="caja-flex mt-8">
                    <h4>Cap. de carga (kg)</h4>
                    <hr class="hr10" />
                </div>
                <div v-if="comparacion == 0" class="caja-flex mt-8">
                    <h4>Peso vehicular (kg)</h4>
                    <hr class="hr1" />
                </div>
                <div v-if="comparacion == 0" class="caja-flex mt-8">
                    <h4>Importado</h4>
                    <hr class="hr6" />
                </div>
                <div v-if="comparacion == 0" class="caja-flex mt-8">
                    <h4>Nacionalidad</h4>
                    <hr class="hr11" />
                </div>
            </article>
            <section v-if="versus" class="absolute inset-0 flex justify-center">
                <article class="modal z-10" @click="closeModal({ modal: 'versus' })"></article>
                <Filtros class="consejos-modal absolute z-20" />
            </section>
        </section>
    </section>
</template>

<script>
    import { mapState, mapActions } from 'vuex';
    export default {
        data() {
            return {
                auto: [
                    {
                        linea: 'Outback 3.6R ES',
                        año: 2019,
                        marca: 'Subaru',
                        precio: '72.000.000',
                        km: '18.000',
                        cilindraje: 'Automática',
                        transmision: '4X4',
                        direccion: 'Hidráulica',
                        combustible: 'Gasolina',
                        pasajeros: 5,
                        lugar: 'Bogotá D.C',
                        caja: 'Automática',
                        placa: 1,
                        img: require('~/assets/img/otro.png'),
                        revision: false,
                        id: 1,
                        dueño: 'Dueño Directo',
                    },
                    {
                        linea: 'Outback 3.6R ES',
                        año: 2019,
                        marca: 'Subaru',
                        precio: '72.000.000',
                        km: '18.000',
                        cilindraje: 'Automática',
                        transmision: '4X4',
                        direccion: 'Hidráulica',
                        combustible: 'Gasolina',
                        pasajeros: 5,
                        lugar: 'Bogotá D.C',
                        caja: 'Automática',
                        placa: 5,
                        img: require('~/assets/img/Subaru.jpg'),
                        revision: true,
                        id: 2,
                        dueño: 'Concesionario',
                    },
                    {
                        linea: 'Outback 3.6R ES',
                        año: 2019,
                        marca: 'Subaru',
                        precio: '72.000.000',
                        km: '18.000',
                        cilindraje: 'Automática',
                        transmision: '4X4',
                        direccion: 'Hidráulica',
                        combustible: 'Gasolina',
                        pasajeros: 5,
                        lugar: 'Bogotá D.C',
                        caja: 'Automática',
                        placa: 6,
                        img: require('~/assets/img/Subaru.jpg'),
                        id: 3,
                        revision: false,
                        dueño: 'Dueño Directo',
                    },
                ],
            };
        },
        computed: {
            ...mapState({
                versus: (state) => state.modal.modal.versus,
                comparacion: (state) => state.versus.comparacion,
            }),
        },
        methods: {
            ...mapActions({
                openModal: 'modal/openModal',
                closeModal: 'modal/closeModal',
            }),
        },
    };
</script>

<style scoped>
    .p-linea {
        color: white;
    }
    .div-linea {
        background-color: black;
        opacity: 0.5;
        bottom: 0px;
        width: 143px;
    }
    .p-mensaje {
        color: white;
    }
    .div-mensaje {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 143px;
        bottom: -40px;
        right: 16px;
    }
    .auto-elegido {
        width: 143px;
        height: 134px;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
    }
    /* .caja-datos {
        width: 144%;
    } */
    .modal {
        position: relative;
        background-color: rgba(0, 0, 0, 0.7);
        width: 100%;
        height: 100%;
        position: fixed;
    }
    .container-versus {
        /* width: 120%; */
        display: flex;
        align-items: center;
    }
    .consejos-modal {
        left: 50%;
        transform: translateX(-50%);
        border-radius: 8px;
        top: 60px;
        width: 78%;
        height: 444px;
        border-radius: 8px;
    }
    .icon-campana {
        fill: #747474;
    }
    .icon-arrow {
        fill: #353535;
    }
    nav {
        background-color: #eaebef;
        padding: 10px;
    }
    header {
        position: sticky;
        display: inline-flex;
        align-self: flex-start;
        left: 10px;
    }
    .caja-flex {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .div-versus {
        width: 170px;
        height: 125px;
        border-radius: 8px;
        box-shadow: 0px 4px 2px rgba(0, 0, 0, 0.25);
        background: #f2efef;
    }
    .vs {
        background-color: white;
        width: 68px;
        height: 68px;
        border: solid #f2efef 1px;
        color: #dfdfdf;
        top: 27px;
        left: 169px;
    }
    .icon-car {
        left: 50px;
        top: 40px;
    }
    .icon-add {
        left: 110px;
        top: -46px;
    }
    .article-versus {
        /* width: 120%; */
        height: 187px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        padding-bottom: 20px;
    }
    .article-nav {
        background-color: white;
        /* width: 120%; */
        position: sticky;
        position: -webkit-sticky;
        top: 0; /* required */
    }
    .article-nav-data {
        background-color: white;
        width: 128%;
        position: sticky;
        position: -webkit-sticky;
        top: 0; /* required */
    }
    .article-data {
        /* padding-top: 260px; */
        padding-top: 20px;
        width: 120%;
        height: 500px;
        overflow: scroll;
    }
    h4 {
        color: #bebebe;
        font-size: 13px;
        font-weight: bold;
        @apply uppercase;
    }
    .hr1 {
        width: 60%;
        color: #dbdada;
    }
    .hr2 {
        color: #dbdada;
        width: 80%;
    }
    .hr3 {
        color: #dbdada;
        width: 83%;
    }
    .hr4 {
        color: #dbdada;
        width: 85%;
    }
    .hr5 {
        color: #dbdada;
        width: 81%;
    }
    .hr6 {
        color: #dbdada;
        width: 76%;
    }
    .hr7 {
        color: #dbdada;
        width: 88%;
    }
    .hr8 {
        color: #dbdada;
        width: 68%;
    }
    .hr9 {
        color: #dbdada;
        width: 73%;
    }
    .hr10 {
        color: #dbdada;
        width: 62%;
    }
    .hr11 {
        color: #dbdada;
        width: 71%;
    }
</style>
