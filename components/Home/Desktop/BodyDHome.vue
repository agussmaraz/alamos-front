<template>
    <section class="Padre w-full">
        <header>
            <h1 class="textoP text-center font-bold text-3xl ...">¿Cómo funciona?</h1>
        </header>
        <main>
            <section class="flex flex-col">
                <h2 class="texto text-start font-bold text-3xl ...">Descubre lo nuevo de Chevrolet</h2>
                <div class="primero flex flex-row flex-wrap justify-evenly">
                    <a href="#">
                        <img src="../../../assets/img/ChevroletTraverse2021.png" width="500" alt="" />
                    </a>
                    <a href="#">
                        <img src="../../../assets/img/ChevroletTracker2021.png" width="500" alt="" />
                    </a>
                    <a href="#">
                        <img src="../../../assets/img/ChevroletColodaro2021.png" width="500" alt="" />
                    </a>
                </div>
            </section>
            <!-- Seccion Publicaciones Destacadas de Autos -->
            <section class="flex flex-col w-full bg-fondo">
                <h2 class="texto2 text-start font-bold text-3xl ...">Publicaciones destacadas de Carros</h2>
                <div class="flex flex-row items-center">
                    <div class="segundo flex flex-row flex-wrap justify-evenly outline-none items-start">
                        <!-- en el boton esta maquetada la primera imagen -->
                        <button class="botonCarro lg:rounded-b-lg">
                            <figure class="flex flex-col lg:bg-blanco lg:rounded-b-lg">
                                <img src="../../../assets/img/carroHome.png" width="330" alt="" />
                                <figcaption>
                                    <h1 class="Marca flex justify-start items-baseline mt-1 ml-4 font-bold">GRAND TOURING</h1>
                                    <div class="flex flex-row ml-4 mt-1">
                                        <span class="Año font-bold text-lg">2019</span>
                                        <span class="Marca font-bold ml-4">MAZDA</span>
                                    </div>
                                    <div class="flex justify-between items-end mt-2 ml-4 pb-1 font-bold w-11/12">
                                        <span class="Precio text-xl">$ 58.900.000</span>
                                        <span class="Kilometraje text-lg text-gris">36.000 km</span>
                                    </div>
                                </figcaption>
                            </figure>
                        </button>
                        <a href="#">
                            <img src="../../../assets/img/2017GRANDTOURING.png" width="330" alt="" />
                        </a>
                        <a href="#">
                            <img src="../../../assets/img/2017GRANDTOURING.png" width="330" alt="" />
                        </a>
                        <a href="#">
                            <img src="../../../assets/img/2017GRANDTOURING.png" width="330" alt="" />
                        </a>
                    </div>
                    <section class="ml-4">
                        <ButtonVectorR />
                    </section>
                </div>
            </section>
            <!-- Sección de: Marcas y Modelos Destacados Autos -->
            <section class="flex flex-col bg-fondo justify-between">
                <div>
                    <h2 class="texto3 font-bold text-3xl ...">Marcas y Modelos destacados</h2>
                </div>
                <div class="tercero lg:ml-20 flex flex-row flex-wrap justify-evenly items-center">
                    <div class="flex flex-col outline-none">
                        <!-- Los Eventos estan al final de cada Boton -->

                        <section class="col1 flex flex-row justify-around">
                            <button :class="active === false || active === 'chevrolet' ? 'is-active' : false" class="btnes lg:rounded-lg lg:ml-4 flex flex-col items-center justify-around" @click="btnA('chevrolet')">
                                <figure class="lg:pt-4">
                                    <img class="img" src="../../../assets/img/ChevroletH.png" alt="ChevroletLogo" />
                                </figure>
                                <figcaption class="lg:font-bold">Chevrolet</figcaption>
                            </button>
                            <button :class="active === 'mazda' ? 'is-active' : false" class="btnes lg:rounded-lg lg:ml-4 flex flex-col items-center justify-around" @click="btnA('mazda')">
                                <figure class="lg:pt-5">
                                    <img src="../../../assets/img/MazdaH.png" alt="MazdaLogo" />
                                </figure>
                                <figcaption class="lg:font-bold">Mazda</figcaption>
                            </button>
                            <button :class="active === 'renault' ? 'is-active' : false" class="btnes lg:rounded-lg lg:ml-4 flex flex-col items-center justify-around" @click="btnA('renault')">
                                <figure class="lg:pt-5">
                                    <img src="../../../assets/img/RenaultH.png" alt="RenaultLogo" />
                                </figure>
                                <figcaption class="lg:font-bold">Renault</figcaption>
                            </button>
                        </section>
                        <section class="flex flex-row lg:mt-4">
                            <button :class="active === 'nissan' ? 'is-active' : false" class="btnes lg:rounded-lg lg:ml-4 flex flex-col items-center justify-around" @click="btnA('nissan')">
                                <figure class="lg:pt-5">
                                    <img src="../../../assets/img/NissanH.png" alt="NissanLogo" />
                                </figure>
                                <figcaption class="lg:font-bold">Nissan</figcaption>
                            </button>
                            <button :class="active === 'hyundai' ? 'is-active' : false" class="btnes lg:rounded-lg lg:ml-4 flex flex-col items-center justify-around" @click="btnA('hyundai')">
                                <figure class="lg:pt-5">
                                    <img src="../../../assets/img/HyundaiH.png" alt="HyundaiLogo" />
                                </figure>
                                <figcaption class="lg:font-bold">Hyundai</figcaption>
                            </button>
                            <button :class="active === 'ford' ? 'is-active' : false" class="btnes lg:rounded-lg lg:ml-4 flex flex-col items-center justify-around" @click="btnA('ford')">
                                <figure class="lg:pt-5">
                                    <img src="../../../assets/img/FordH.png" alt="FordLogo" />
                                </figure>
                                <figcaption class="lg:font-bold">Ford</figcaption>
                            </button>
                        </section>
                    </div>
                    <div class="flex flex-row flex-wrap outline-none">
                        <a href="#">
                            <img src="../../../assets/img/Chevrolet-Tracker.png" width="230" height="180" alt="Chevrolet-Tracker" />
                        </a>
                        <a href="#">
                            <img src="../../../assets/img/Chevrolet-Spark.png" width="230" height="180" alt="Chevrolet-Spark" />
                        </a>
                        <a href="#">
                            <img src="../../../assets/img/Chevrolet-Captiva.png" width="230" height="180" alt="Chevrolet-Captiva" />
                        </a>
                        <a href="#">
                            <img src="../../../assets/img/Chevrolet-Cruze.png" width="230" height="180" alt="Chevrolet-Cruze" />
                        </a>
                    </div>
                    <section class="pr-10">
                        <ButtonVectorR />
                    </section>
                </div>
            </section>
            <!-- Seccion Publicaciones Destacadas de Motos -->
            <section class="flex flex-col w-full bg-fondo">
                <h2 class="texto2 text-start font-bold text-3xl ...">Publicaciones destacadas de Motos</h2>
                <div class="flex flex-row items-center">
                    <div class="segundo flex flex-row flex-wrap justify-evenly outline-none items-start">
                        <button class="botonCarro lg:rounded-b-lg">
                            <figure class="flex flex-col lg:bg-blanco lg:rounded-b-lg">
                                <img src="../../../assets/img/motoH.png" width="330" alt="" />
                                <figcaption>
                                    <h1 class="flex justify-start items-baseline mt-1 ml-4 font-bold">RC 200</h1>
                                    <div class="flex flex-row ml-4 mt-1">
                                        <span class="Año font-bold text-lg">2019</span>
                                        <span class="Marca font-bold ml-4">KTM</span>
                                    </div>
                                    <div class="flex justify-between items-end mt-2 ml-4 pb-1 font-bold w-11/12">
                                        <span class="Precio text-xl">$ 12.900.000</span>
                                        <span class="Kilometraje text-lg text-gris">36.000 km</span>
                                    </div>
                                </figcaption>
                            </figure>
                        </button>
                        <a href="#">
                            <img src="../../../assets/img/RC200H.png" width="330" alt="" />
                        </a>
                        <a href="#">
                            <img src="../../../assets/img/RC200H.png" width="330" alt="" />
                        </a>
                        <a href="#">
                            <img src="../../../assets/img/RC200H.png" width="330" alt="" />
                        </a>
                    </div>
                    <section class="ml-4">
                        <ButtonVectorR />
                    </section>
                </div>
            </section>
            <!-- Seccion de: Marcas y Modelos Destacados Motos -->
            <section class="flex flex-col bg-fondo justify-between">
                <div>
                    <h2 class="texto3 font-bold text-3xl ...">Marcas y Modelos destacados</h2>
                </div>
                <div class="tercero lg:ml-20 flex flex-row flex-wrap justify-evenly items-center">
                    <div class="flex flex-col outline-none">
                        <!-- Los Eventos estan al final de cada Boton -->

                        <section class="col1 flex flex-row justify-around">
                            <button :class="active === false || active === 'bajaj' ? 'is-active' : false" class="btnes lg:rounded-lg lg:ml-4 flex flex-col items-center justify-around" @click="btnA('bajaj')">
                                <figure class="lg:pt-4">
                                    <img class="img2" src="../../../assets/img/BajajLogoH.png" alt="BajajLogo" />
                                </figure>
                                <figcaption class="lg:font-bold">BAJAJ</figcaption>
                            </button>
                            <button :class="active === 'akt' ? 'is-active' : false" class="btnes lg:rounded-lg lg:ml-4 flex flex-col items-center justify-around" @click="btnA('akt')">
                                <figure class="lg:pt-5">
                                    <img src="../../../assets/img/AKTLogoH.png" alt="MazdaLogo" />
                                </figure>
                                <figcaption class="lg:font-bold">AKT</figcaption>
                            </button>
                            <button :class="active === 'akt1' ? 'is-active' : false" class="btnes lg:rounded-lg lg:ml-4 flex flex-col items-center justify-around" @click="btnA('akt1')">
                                <figure class="lg:pt-5">
                                    <img src="../../../assets/img/AKTLogoH.png" alt="RenaultLogo" />
                                </figure>
                                <figcaption class="lg:font-bold">AKT</figcaption>
                            </button>
                        </section>
                        <section class="flex flex-row lg:mt-4">
                            <button :class="active === 'akt2' ? 'is-active' : false" class="btnes lg:rounded-lg lg:ml-4 flex flex-col items-center justify-around" @click="btnA('akt2')">
                                <figure class="lg:pt-5">
                                    <img src="../../../assets/img/AKTLogoH.png" alt="NissanLogo" />
                                </figure>
                                <figcaption class="lg:font-bold">AKT</figcaption>
                            </button>
                            <button :class="active === 'akt3' ? 'is-active' : false" class="btnes lg:rounded-lg lg:ml-4 flex flex-col items-center justify-around" @click="btnA('akt3')">
                                <figure class="lg:pt-5">
                                    <img src="../../../assets/img/AKTLogoH.png" alt="HyundaiLogo" />
                                </figure>
                                <figcaption class="lg:font-bold">AKT</figcaption>
                            </button>
                            <button :class="active === 'akt4' ? 'is-active' : false" class="btnes lg:rounded-lg lg:ml-4 flex flex-col items-center justify-around" @click="btnA('akt4')">
                                <figure class="lg:pt-5">
                                    <img src="../../../assets/img/AKTLogoH.png" alt="FordLogo" />
                                </figure>
                                <figcaption class="lg:font-bold">AKT</figcaption>
                            </button>
                        </section>
                    </div>
                    <div class="flex flex-row flex-wrap outline-none">
                        <a href="#">
                            <img src="../../../assets/img/BoxerCT100.png" width="230" height="180" alt="Chevrolet-Tracker" />
                        </a>
                        <a href="#">
                            <img src="../../../assets/img/BoxerCT100.png" width="230" height="180" alt="Chevrolet-Spark" />
                        </a>
                        <a href="#">
                            <img src="../../../assets/img/BoxerCT100.png" width="230" height="180" alt="Chevrolet-Captiva" />
                        </a>
                        <a href="#">
                            <img src="../../../assets/img/BoxerCT100.png" width="230" height="180" alt="Chevrolet-Cruze" />
                        </a>
                    </div>
                    <section class="pr-10">
                        <ButtonVectorR />
                    </section>
                </div>
            </section>
            <!-- seccion de versus -->
            <VersusD />
        </main>
    </section>
</template>

<script>
    export default {
        name: 'Padre',
        data() {
            return {
                active: false,
            };
        },
        methods: {
            btnA(actives) {
                this.active = actives;
            },
        },
    };
</script>

<style scoped>
    .Padre {
        font-family: Montserrat;
    }
    .primero {
        width: 94%;
        margin-left: 80px;
        padding-bottom: 7%;
    }
    .segundo {
        width: 83%;
        margin-left: 95px;
    }
    .textoP {
        margin-top: 6%;
        margin-bottom: 45%;
    }
    .texto {
        margin-left: 7%;
        padding-bottom: 4%;
    }
    .texto2 {
        margin-left: 7%;
        padding-bottom: 4%;
        padding-top: 10%;
    }
    .texto3 {
        margin-left: 7%;
        margin-top: 3%;
        margin-bottom: 4%;
    }
    .btnes {
        background-color: white;
        height: 120px;
        width: 120px;
        outline: none;
    }
    .is-active {
        border: solid 1px;
        color: #ed1a3b;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
    .img {
        height: 75px;
    }
    .img2 {
        height: 55px;
    }
    .botonCarro {
        box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
    }
    .Marca {
        color: #8d8c8c;
    }
</style>
