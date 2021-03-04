<template>
    <main class="main">
        <section class="">
            <article class="fixed w-full z-20">
                <nav class="flex justify-between items-center">
                    <nuxt-link to="/home">
                        <IconArrow class="icon-arrow w-4 h-4 cursor-pointer" />
                    </nuxt-link>
                    <div>
                        <input type="text" class="w-56 h-8 bg-white rounded-2xl p-2 pl-8 relative outline-none" placeholder="Buscar" />
                        <IconBuscar1 class="absolute w-5 h-5 search" />
                    </div>
                    <IconCampana class="w-6 h-6 icon-campana" />
                </nav>
                <article class="flex justify-between article-filter">
                    <div class="button-filter">
                        <IconOrder />
                        <p class="font-bold p-filter">Ordenar</p>
                    </div>
                    <div class="button-filter cursor-pointer" @click="show">
                        <IconView v-if="mostrar == 'lista'" />
                        <IconCuadrado v-if="mostrar == 'ventana'" />
                        <IconVentana v-if="mostrar == 'cuadrado'" />
                        <p class="font-bold p-filter">Vista</p>
                    </div>
                    <div class="button-filter">
                        <IconFilter />
                        <p class="font-bold p-filter">Filtrar</p>
                    </div>
                </article>
            </article>
            <section class="flex flex-col justify-center items-center pt-32 pb-10">
                <section v-if="mostrar == 'lista'">
                    <article v-for="(item, index) in auto" :key="index" class="article-auto flex items-center mt-6">
                        <IconCars class="icon-autos" />
                        <IconFavs class="icon-fav" />
                        <IconShare class="icon-share" />
                        <div>
                            <img src="~/assets/img/Subaru.jpg" alt="auto" class="auto-img" />
                        </div>
                        <div class="article-data pl-2 pt-2">
                            <h4 class="uppercase p-linea">{{ item.linea }}</h4>
                            <div class="flex items-center mt-1">
                                <p class="año-auto px-2 p-año">{{ item.año }}</p>
                                <p class="ml-2 uppercase p-marca">{{ item.marca }}</p>
                            </div>
                            <h2 class="font-bold text-lg p-precio mt-2">$ {{ item.precio }}</h2>
                            <article class="flex items-center justify-between">
                                <div class="flex items-center my-2">
                                    <Iconkm class="icon-km mr-2" />
                                    <p class="p-km font-semibold">{{ item.km }} km</p>
                                </div>
                                <div v-if="item.revision" class="flex items-center mr-3">
                                    <IconCheckBlue />
                                    <p class="p-lugar ml-2">R.V</p>
                                </div>
                            </article>
                            <hr />
                            <article class="flex justify-between p-lugar mt-1">
                                <div class="flex items-center">
                                    <IconPin class="mr-2" />
                                    {{ item.lugar }}
                                </div>
                                <div class="flex items-center mr-2">
                                    <IconLlave class="mr-2" />
                                    {{ item.dueño }}
                                </div>
                            </article>
                        </div>
                    </article>
                </section>
                <section v-if="mostrar == 'ventana'">
                    <article v-for="(item, index) in auto" :key="index" class="article-auto2 flex flex-col mt-10">
                        <IconCars class="icon-autos" />
                        <IconFavs class="icon-fav2" />
                        <IconShare class="icon-share2" />
                        <div>
                            <img src="~/assets/img/Subaru.jpg" alt="auto" class="auto-img2" />
                        </div>
                        <div class="article-data2 pl-2 pt-2">
                            <h4 class="uppercase p-linea2">{{ item.linea }}</h4>
                            <div class="flex items-center mt-1">
                                <p class="año-auto px-2 p-año2">{{ item.año }}</p>
                                <p class="ml-2 uppercase p-marca2">{{ item.marca }}</p>
                            </div>
                            <h2 class="font-bold p-precio2 mt-2">$ {{ item.precio }}</h2>
                            <hr />
                            <article class="flex flex-col p-lugar2 mt-1 p-2">
                                <article class="flex items-center justify-between">
                                    <div class="flex items-center mt-2">
                                        <Iconkm class="icon-km mr-2" />
                                        <p class="p-km">{{ item.km }} km</p>
                                    </div>
                                    <div v-if="item.revision" class="flex items-center mr-3">
                                        <IconCheckBlue />
                                        <p class="p-lugar2 ml-2">Reporte Vehicular</p>
                                    </div>
                                </article>
                                <div class="flex items-center mt-3">
                                    <IconUserGris />
                                    <p class="ml-2">Único dueño</p>
                                </div>
                                <div class="flex items-center mt-3">
                                    <IconCarMini />
                                    <p class="ml-2">Automática, 3630 cc</p>
                                </div>
                                <div class="flex items-center mt-3">
                                    <IconPlaca />
                                    <p class="ml-2">Final de placa: 3</p>
                                </div>
                                <article class="flex items-center justify-between p-lugar2">
                                    <div class="flex items-center mr-2">
                                        <IconLlave class="mr-2" />
                                        {{ item.dueño }}
                                    </div>
                                    <div class="flex items-center mt-3">
                                        <IconPin class="mr-2" />
                                        {{ item.lugar }}
                                    </div>
                                </article>
                            </article>
                        </div>
                    </article>
                </section>
                <section v-if="mostrar == 'cuadrado'" class="flex flex-wrap justify-around">
                    <article v-for="(item, index) in auto" :key="index" class="article-auto3 flex flex-col items-center mt-6">
                        <IconCars class="icon-autos" />
                        <IconFavs class="icon-fav3" />
                        <IconShare class="icon-share3" />
                        <div>
                            <img src="~/assets/img/Subaru.jpg" alt="auto" class="auto-img3" />
                        </div>
                        <div class="article-data3 pl-2 pt-2">
                            <h4 class="uppercase p-linea">{{ item.linea }}</h4>
                            <div class="flex items-center mt-1">
                                <p class="año-auto px-2 p-año">{{ item.año }}</p>
                                <p class="ml-2 uppercase p-marca">{{ item.marca }}</p>
                            </div>
                            <h2 class="font-bold text-lg p-precio mt-2">$ {{ item.precio }}</h2>
                            <article class="flex items-center justify-between">
                                <div class="flex items-center my-2">
                                    <Iconkm class="icon-km mr-2" />
                                    <p class="p-km font-semibold">{{ item.km }} km</p>
                                </div>
                                <div v-if="item.revision" class="flex items-center mr-3">
                                    <IconCheckBlue />
                                    <p class="p-lugar ml-2">R.V</p>
                                </div>
                            </article>
                            <hr />
                            <article class="flex justify-between p-lugar mt-1">
                                <div class="flex items-center">
                                    <IconPin class="mr-2" />
                                    {{ item.lugar }}
                                </div>
                                <div class="flex items-center mr-2">
                                    <IconLlave class="mr-2" />
                                    {{ item.dueño }}
                                </div>
                            </article>
                        </div>
                    </article>
                </section>
            </section>
        </section>
    </main>
</template>

<script>
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
                        lugar: 'Bogotá D.C',
                        revision: false,
                        dueño: 'Dueño Directo',
                    },
                    {
                        linea: 'Outback 3.6R ES',
                        año: 2019,
                        marca: 'Subaru',
                        precio: '72.000.000',
                        km: '18.000',
                        lugar: 'Bogotá D.C',
                        revision: true,
                        dueño: 'Concesionario',
                    },
                    {
                        linea: 'Outback 3.6R ES',
                        año: 2019,
                        marca: 'Subaru',
                        precio: '72.000.000',
                        km: '18.000',
                        lugar: 'Bogotá D.C',
                        revision: false,
                        dueño: 'Dueño Directo',
                    },
                    {
                        linea: 'Outback 3.6R ES',
                        año: 2019,
                        marca: 'Subaru',
                        precio: '72.000.000',
                        km: '18.000',
                        lugar: 'Bogotá D.C',
                        revision: false,
                        dueño: 'Dueño Directo',
                    },
                ],
                mostrar: 'lista',
            };
        },
        methods: {
            show() {
                switch (this.mostrar) {
                    case 'lista':
                        this.mostrar = 'ventana';
                        break;
                    case 'ventana':
                        this.mostrar = 'cuadrado';
                        break;
                    case 'cuadrado':
                        this.mostrar = 'lista';
                        break;
                }
            },
        },
    };
</script>

<style scoped>
    hr {
        color: #c4c4c4;
        width: 90%;
    }
    .icon-autos {
        position: absolute;
        top: 4px;
        left: 0px;
    }
    .icon-fav {
        position: absolute;
        top: 4px;
        right: 195px;
    }
    .icon-fav2 {
        position: absolute;
        top: 4px;
        right: 0px;
    }
    .icon-fav3 {
        position: absolute;
        top: 4px;
        right: 0px;
    }
    .icon-share {
        position: absolute;
        bottom: 4px;
        right: 198px;
    }
    .icon-share2 {
        position: absolute;
        top: 186px;
        right: 6px;
    }
    .icon-share3 {
        position: absolute;
        bottom: 153px;
        right: 3px;
    }
    .article-auto {
        width: 372px;
        height: 146px;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
        border-radius: 8px;
        position: relative;
    }
    .article-auto2 {
        width: 373px;
        height: 491px;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
        border-radius: 8px;
        position: relative;
    }
    .article-auto3 {
        width: 189px;
        height: 292px;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
        border-radius: 8px;
        position: relative;
    }
    .p-linea {
        font-size: 13px;
    }
    .p-linea2 {
        font-size: 16px;
    }
    .p-km {
        color: #747474;
        font-size: 13px;
    }
    .p-marca {
        font-size: 12px;
        color: #747474;
    }
    .p-marca2 {
        font-size: 14px;
        color: #747474;
    }
    .p-año {
        font-size: 12px;
    }
    .p-año2 {
        font-size: 13px;
    }
    .p-precio {
        font-size: 18px;
    }
    .p-precio2 {
        font-size: 24px;
    }
    .icon-km {
        width: 17px;
        height: 17px;
        fill: #747474 !important;
    }
    .p-lugar {
        font-size: 10px;
        color: #747474;
    }
    .p-lugar2 {
        font-size: 13px;
        color: #747474;
    }
    .article-data {
        background-color: white;
        height: 100%;
        width: 50%;
        border-bottom-right-radius: 8px;
        border-top-right-radius: 8px;
    }
    .article-data2 {
        background-color: white;
        height: 100%;
        border-bottom-right-radius: 8px;
        border-bottom-left-radius: 8px;
    }
    .article-data3 {
        background-color: white;
        height: 100%;
        width: 100%;
        border-bottom-right-radius: 8px;
        border-bottom-left-radius: 8px;
    }
    .search {
        top: 16px;
        left: 102px;
        fill: #747474;
    }
    .article-filter {
        background-color: white;
        padding: 10px;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    }
    .button-filter {
        border-radius: 20px;
        border: solid black 2px;
        width: 107px;
        height: 37px;
        display: flex;
        align-items: center;
        justify-content: space-around;
    }
    .p-filter {
        font-size: 13px;
    }
    .año-auto {
        background-color: #f2efef;
        padding-top: 2px;
        padding-bottom: 2px;
    }
    nav {
        background-color: #eaebef;
        padding: 10px;
    }
    .icon-arrow {
        fill: #353535;
    }
    .icon-campana {
        fill: #747474;
    }
    .main {
        background-color: #f2efef;
    }
    .auto-img {
        width: 193px;
        height: 146px;
        border-bottom-left-radius: 8px;
        border-top-left-radius: 8px;
    }
    .auto-img2 {
        width: 373px;
        height: 215px;
        border-top-right-radius: 8px;
        border-top-left-radius: 8px;
    }
    .auto-img3 {
        width: 189px;
        height: 146px;
        border-top-right-radius: 8px;
        border-top-left-radius: 8px;
    }
</style>
