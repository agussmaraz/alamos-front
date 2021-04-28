<template>
    <section class="mt-4">
        <main>
            <img src="../../../assets/img/Encuentra_tu_Vehiculo.png" alt="" srcset="" />
            <div class="contenedorP absolute ... block">
                <section class="texto flex flex-row justify-evenly font-bold w-full">
                    <h2 class="principal">Encuentra aquí</h2>
                    <h2 class="secundario">tu vehículo</h2>
                </section>

                <section class="iconos flex flex-row justify-around">
                    <button class="vehiculos w-24 h-20 rounded-full">
                        <div class="auto pl-2"><IconAutos /></div>
                    </button>
                    <button class="vehiculos w-24 h-20 rounded-full">
                        <div class="moto"><IconMotos /></div>
                    </button>
                    <button class="puntos w-24 h-20 rounded-full"><p>...</p></button>
                </section>
                <section class="botones w-full flex flex-row">
                    <div class="categoria1">
                        <button class="todos">
                            <p>Todos</p>
                        </button>
                    </div>
                    <div class="categoria2">
                        <button class="usados">
                            <p>Usados</p>
                        </button>
                    </div>
                    <div class="categoria3">
                        <button class="nuevos">
                            <p>Nuevos</p>
                        </button>
                    </div>
                </section>
            </div>
        </main>
    </section>
</template>

<style scoped>
    main {
        box-sizing: border-box;
        font-family: Montserrat;
    }
    .contenedorP {
        top: 24%;
        left: 22%;
        width: 63%;
    }
    .texto {
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
        padding-top: 7%;
    }
    .vehiculos {
        background-color: white;
    }
    .puntos {
        background-color: white;
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
    .is-active {
        background: rgba(0, 0, 0, 0.8);
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }

    /* btnes todos/usados/nuevos */
    .botones {
        padding-top: 5%;
        font-size: 30px;
    }
    .categoria1 {
        background-color: rgba(0, 0, 0, 0.5);
        color: white;
        border-radius: 20px 0 0 0;
    }
</style>
