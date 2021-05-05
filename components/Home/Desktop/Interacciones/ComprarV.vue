<template>
    <section>
        <head class="padre flex flex-row font-bold grid grid-cols-1">
            <div class="bordeP"></div>
            <main class="flex flex-row justify-around">
                <div class="excepcion1 flex flex-row">
                    <IconCompraC />
                    <a href="#">Carro</a>
                </div>
                <div class="excepcion2 flex flex-row">
                    <IconCompraM />
                    <a href="#">Moto</a>
                </div>
                <div class="excepcion3 flex flex-row">
                    <IconCompraO />
                    <a href="#">Otros vehículos</a>
                </div>
            </main>
            <section class="redirecciones flex flex-row">
                <div class="carro flex flex-col font-normal">
                    <div class="padding1">
                        <a href="#">Nuevo</a>
                    </div>
                    <div class="padding2">
                        <a href="#">Usado</a>
                    </div>
                </div>
                <div class="moto flex flex-col font-normal">
                    <div class="padding1">
                        <a href="#">Nueva</a>
                    </div>
                    <div class="padding2">
                        <a href="#">Usada</a>
                    </div>
                </div>
                <div class="otro flex flex-col font-normal">
                    <div class="padding1">
                        <a href="#">Nuevo</a>
                    </div>
                    <div class="padding2">
                        <a href="#">Usado</a>
                    </div>
                </div>
            </section>
        </head>
    </section>
</template>
<style scoped>
    .padre {
        background-color: white;
        font-size: 21px;
        height: 300px;
        width: 800px;
        border-radius: 0 0 10px 10px;
    }
    main {
        margin-top: 11%;
        width: 100%;
        height: 15%;
    }
    .bordeP {
        border-top: 7px solid #ed1a3b;
        width: 30%;
        margin-top: 42px;
        position: absolute;
        border-radius: 5px;
    }
    .excepcion1 {
        width: 30%;
        padding-left: 3%;
    }
    .excepcion2 {
        width: 30%;
    }
    .excepcion3 {
        width: 30%;
        padding-left: 10px;
    }
    .excepcion1 a,
    .excepcion2 a,
    .excepcion3 a {
        padding-left: 10px;
    }
    .redirecciones {
        width: 100%;
        margin-bottom: 14%;
        height: 152px;
    }
    .carro {
        width: 30%;
        margin-left: 4%;
        border-right: 1px solid #c4c4c4;
    }
    .moto {
        width: 30%;
        margin-left: 4%;
        border-right: 1px solid #c4c4c4;
    }
    .otro {
        width: 30%;
        margin-left: 3%;
    }
    .padding1 {
        padding-top: 10%;
    }
    .padding2 {
        padding-top: 25%;
    }
</style>
