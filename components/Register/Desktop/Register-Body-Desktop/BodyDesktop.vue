<template>
    <div class="padre">
        <h2 class="font-bold text-center pt-14 text-gris">VIVE UNA MEJOR EXPERIENCIA</h2>
        <article class="contenido flex flex-row justify-evenly text-gris py-20">
            <section class="columnas flex flex-col">
                <div class="imagenes flex m-auto">
                    <IconCandado />
                </div>
                <h3 class="text-center font-bold">Compra y vende seguros</h3>
                <div class="contenidoIconos flex flex-col text-gris text-center">
                    <span>Somos un marketplace que entiende</span>
                    <span>tu <b>necesidad de seguiridad</b> e</span>
                    <span><b>información</b> a la hora de comprar y</span>
                    <span>vender vehículos usados.</span>
                </div>
            </section>
            <section class="columnas flex flex-col">
                <div class="imagenes flex m-auto">
                    <IconBrujula />
                </div>
                <h3 class="text-center font-bold">Guía en el proceso</h3>
                <div class="contenidoIconos flex flex-col text-gris text-center">
                    <span>Te guiamos durante el proceso de</span>
                    <span>compraventa y te damos las</span>
                    <span>herramientas necesarias para una</span>
                    <span> <b>transacción confiable.</b></span>
                </div>
            </section>
            <section class="columnas flex flex-col">
                <div class="imagenes flex m-auto">
                    <IconAqui />
                </div>
                <h3 class="text-center font-bold">Todo en un solo lugar</h3>
                <div class="contenidoIconos flex flex-col text-gris text-center">
                    <span>Consulta la <b>documentación legal del</b> </span>
                    <span><b>vehículo</b> y su historial. Además,</span>
                    <span>compara su precio con los<b>índices</b>más</span>
                    <span>importantes del mercado.</span>
                </div>
            </section>
        </article>
    </div>
</template>

<style scoped>
    .padre {
        width: auto;
        height: auto;
        padding-top: 100px;
    }
    div {
        width: auto;
        height: auto;
        font-family: Montserrat;
        font-size: 20px;
    }
    h3 {
        font-size: 27px;
        width: 102%;
    }
    h2 {
        font-size: 35px;
    }
    section {
        color: #353535;
    }
    .imagenes {
        padding-bottom: 30px;
        margin-top: 30px;
    }
    .contenidoIconos {
        margin-top: 30px;
    }
</style>
