<template>
    <div>
        <h2 class="font-bold text-center pt-12 text-gris">VIVE UNA MEJOR EXPERIENCIA</h2>
        <article class="contenido flex grid grid-cols-3 justify-around text-gris">
            <section class="columnas text-center">
                <div class="imagenes">
                    <IconCandado />
                </div>
                <h3 class="font-bold">Compra y vende seguros</h3>
                <div class="contenidoIconos text-gris">
                    <span>Somos un marketplace que entiende</span>
                    <span>tu <b>necesidad de seguiridad</b> e</span>
                    <span><b>información</b> a la hora de comprar y</span>
                    <span>vender vehículos usados.</span>
                </div>
            </section>
            <section class="columnas text-center">
                <div class="imagenes">
                    <IconBrujula />
                </div>
                <h3 class="textoGuia font-bold">Guía en el proceso</h3>
                <div class="contenidoIconos2 text-gris">
                    <span>Te guiamos durante el proceso de</span>
                    <span>compraventa y te damos las</span>
                    <span>herramientas necesarias para una</span>
                    <span> <b>transacción confiable.</b></span>
                </div>
            </section>
            <section class="columnas text-center">
                <div class="imagenes">
                    <IconAqui />
                </div>
                <h3 class="font-bold">Todo en un solo lugar</h3>
                <div class="contenidoIconos text-gris">
                    <span> <b>Consulta la documentación legal del</b> </span>
                    <span> <b>vehículo</b> y su historial. Además,</span>
                    <span>compara su precio con los <b>índices</b> más</span>
                    <span>importantes del mercado.</span>
                </div>
            </section>
        </article>
    </div>
</template>

<style scoped>
    div {
        width: auto;
        height: auto;
        margin-top: 200px;
        font-family: Montserrat;
    }
    h3 {
        font-size: 27px;
        width: 400px;
        margin-left: -50px;
    }
    h2 {
        font-size: 25px;
    }
    .contenido {
        width: 1300px;
        margin: auto;
    }
    .columnas {
        width: 300px;
    }
    section {
        color: #353535;
    }
    .imagenes {
        padding-top: 40px;
        padding-bottom: 30px;
        padding-left: 120px;
        margin-top: 30px;
    }
    .contenidoIconos {
        margin-top: 30px;
    }
    .contenidoIconos2 {
        margin-top: 30px;
    }
</style>
