<template>
    <section>
        <head class="cabeza flex pt-14">
            <div class="imagenes flex">
                <IconLogoAlamos />
                <IconNoLogin />
            </div>
            <div class="contenido-C flex flex-row justify-around items-center">
                <p>Consultas Vehiculares</p>
                <p>Comprar</p>
                <p>Versus</p>
                <p>Tiendas Virtuales</p>
                <p>Ayudas</p>
            </div>
            <div class="imagenes2 flex justify-between">
                <IconUserContain />
                <IconVendeV />
            </div>
        </head>
    </section>
</template>

<style scoped>
    .cabeza {
        width: 100%;
        height: 100%;
        padding-top: 2%;
    }
    .contenido-C {
        width: 50%;
        font-family: Montserrat;
        font-size: 18px;
    }
    .imagenes {
        width: 20%;
        padding-left: 2%;
    }
    .imagenes2 {
        width: 20%;
    }
</style>
