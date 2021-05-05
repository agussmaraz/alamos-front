<template>
    <main>
        <section class="mt-4">
            <img class="img" src="../../../assets/img/Encuentra_tu_Vehiculo.png" alt="" />
            <div class="contenedorP absolute ... block">
                <section class="texto flex flex-row justify-evenly font-bold w-full 2xl: text-5xl">
                    <h2 class="principal">Encuentra aquí</h2>
                    <h2 class="secundario">tu vehículo</h2>
                </section>
                <!-- seccion de iconos/auto/moto/3puntos -->
                <section class="iconos flex flex-row justify-around">
                    <button class="vehiculos w-24 rounded-full" :class="boton === 'vehiculos' || boton === false ? 'is-active' : false" @click="iconos('vehiculos')">
                        <div class="auto pl-2"><IconAutos /></div>
                    </button>
                    <button class="vehiculos w-24 rounded-full" :class="boton === 'motos' ? 'is-active' : false" @click="iconos('motos')">
                        <div class="moto"><IconMotos /></div>
                    </button>
                    <button class="puntos w-24 rounded-full" :class="boton === 'puntos' ? 'is-active' : false" @click="iconos('puntos')">
                        <div>
                            <p>...</p>
                        </div>
                    </button>
                </section>
                <!-- seccion de botones/todos/usados/nuevos -->
                <section class="botones text-xl w-full flex flex-row">
                    <div class="categoria1 w-24 rounded-tl-lg" :class="active === 'todos' || active === false ? 'is-active' : false">
                        <button class="btn w-full focus:outline-none ..." @click="btn('todos')">Todos</button>
                    </div>
                    <div class="categoria2 w-24 lg:ml-0.5" :class="active === 'usados' ? 'is-active' : false">
                        <button class="btn w-full focus:outline-none ..." @click="btn('usados')">Usados</button>
                    </div>
                    <div class="categoria3 w-24 rounded-tr-lg lg:ml-0.5" :class="active === 'nuevos' ? 'is-active' : false">
                        <button class="btn w-full focus:outline-none ..." @click="btn('nuevos')">Nuevos</button>
                    </div>
                </section>
                <!-- seccion de botones busqueda todos/usados/nuevos -->
                <div v-if="boton === false || boton === 'vehiculos'">
                    <BusquedaCompraC />
                </div>
                <div v-if="boton === 'motos'">
                    <BusquedaCompraM />
                </div>
                <div v-if="boton === 'puntos'">
                    <BusquedaCompraO />
                </div>
            </div>
        </section>
    </main>
</template>

<script>
    export default {
        name: 'EncuentraV',
        data() {
            return {
                active: false,
                boton: false,
            };
        },
        methods: {
            btn(id) {
                this.active = id;
            },
            iconos(icon) {
                this.boton = icon;
            },
        },
    };
</script>

<style scoped>
    main {
        box-sizing: border-box;
        font-family: Montserrat;
    }
    img {
        height: 600px;
    }
    .contenedorP {
        top: 23%;
        left: 22%;
        width: 63%;
    }
    .texto {
        z-index: 2;
        color: white;
        background: rgba(0, 0, 0, 0.4);
        border-radius: 20px 20px 20px 20px;
        font-size: 70px;
    }
    .principal {
        padding-left: 2%;
    }
    .secundario {
        color: #ffe167;
        padding-right: 2%;
    }
    .iconos {
        width: 43%;
        margin: auto;
        margin-top: 9%;
    }
    .vehiculos {
        background-color: white;
        height: 6rem;
        outline: none;
    }
    .puntos {
        background-color: white;
        height: 6rem;
        outline: none;
    }
    .puntos p {
        font-size: 90px;
        margin-top: -55%;
    }
    .auto {
        padding-left: 11%;
    }
    .moto {
        padding-top: 11%;
        padding-left: 6%;
    }
    /* btnes todos/usados/nuevos */
    .botones {
        margin-left: -10%;
        margin-top: -2%;
    }
    .btn {
        height: 60px;
    }
    .categoria1,
    .categoria2,
    .categoria3 {
        background-color: rgba(0, 0, 0, 0.5);
        color: white;
        width: 12%;
        height: 60px;
        outline: none;
    }
    .is-active {
        background-color: rgba(0, 0, 0, 0.801);
    }
</style>
