<template>
    <section>
        <head class="cabeza flex pt-14 lg:border-box justify-around items-center">
            <div class="imagenes flex lg:justify-around items-center">
                <IconLogoAlamos />
                <a href="#"><IconNoLogin /></a>
            </div>
            <div class="contenido-C flex flex-row font-semibold justify-around items-center">
                <div class="flex">
                    <a href="#">Consultas Vehiculares</a>
                    <p class="flecha">></p>
                </div>
                <div class="flex">
                    <a href="#">Comprar</a>
                    <p class="flecha">></p>
                </div>
                <a href="#">Versus</a>
                <a href="#">Tiendas Virtuales</a>
                <a href="#">Ayuda</a>
            </div>
            <div class="imagenes2 flex justify-evenly items-center">
                <div class="menu_container">
                    <button class="menu_link">
                        <div class="menu_icons">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </button>
                </div>
                <div class="icon">
                    <a href="#"><IconUserD /></a>
                </div>
            </div>
            <div class="btnP">
                <button class="btn flex flex-row justify-around items-center *">
                    <p class="mas">+</p>
                    <p class="vehiculo">Vende tu vehículo</p>
                </button>
            </div>
        </head>
    </section>
</template>

<style scoped>
    @media (min-width: 1200px) {
        .cabeza {
            padding-top: 4%;
            font-family: Montserrat;
        }
        .contenido-C {
            width: 50%;
            font-size: 22px;
            margin-left: 8%;
        }
        .imagenes {
            width: 11%;
            margin-left: 2%;
        }
        .imagenes2 {
            height: 60px;
            width: 7%;
            padding-top: 1%;
            background: #ffffff;
            border: 2px solid #c4c4c4;
            box-sizing: border-box;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            border-radius: 60px;
            margin-right: 1%;
        }
        .btnP {
            padding-right: 5%;
        }
        .btn {
            color: white;
            padding-right: 3%;
            background-color: #ed1a3b;
            height: 60px;
            width: 260px;
            border-radius: 7%;
            border: 2px solid #c4c4c4;
            box-sizing: border-box;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        }
        .vehiculo {
            font-size: 23px;
        }
        .mas {
            font-size: 44px;
        }
        .icon {
            padding-bottom: 15%;
        }
        /* menu hamburguesas */

        .menu_container {
            display: flex;
            padding-bottom: 29%;
        }
        .menu_icons {
            position: relative;
            width: 44px;
        }
        .menu_icons span {
            display: block;
            width: 100%;
            height: 0.2rem;
            background-color: #545454;
            border-radius: 16px;
            position: absolute;
        }
        .menu_icons span:nth-child(1) {
            top: 0;
        }
        .menu_icons span:nth-child(2) {
            top: 9px;
        }
        .menu_icons span:nth-child(3) {
            top: 18px;
        }
    }
</style>
