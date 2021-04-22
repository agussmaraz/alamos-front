<template>
    <section>
        <figure>
            <section class="logoAlamos absolute">
                <IconLogoAlamos />
            </section>
            <section class="imagenAuto absolute">
                <IconImageAuto />
            </section>
        </figure>
        <div class="box-border flex-col">
            <h1 class="font-bold text-gris">¡NOS TOMAMOS TU SEGURIDAD ENSERIO!</h1>
            <article class="pt-1 text-gris">
                <span>No queremos que seas victima de </span>
                <span class="text-rojo font-bold">robo o estafa</span>
                <span>cuando compres o vendas vehículos</span>
                <br />
                <br />
                <span>Nuestro registro de cuenta está diseñado para</span>
                <span class="text-rojo font-bold">proteger</span>
                <span>a nuestros usuarios y generar un</span>
                <span>ambiente de negociación</span>
                <span class="text-rojo font-bold">transparente y seguro.</span>
            </article>
        </div>
        <div class="fondoRegister">
            <IconFondoRegister />
        </div>
    </section>
</template>

<style scoped>
    div {
        height: 300px;
        margin-top: 110px;
        margin-left: 550px;
        font-family: Montserrat;
        position: relative;
    }
    h1 {
        font-size: 35px;
    }
    article {
        padding-top: 2rem;
        width: 400px;
        height: auto;
    }
    .logoAlamos {
        margin-left: 80px;
        top: 20px;
    }
    .imagenAuto {
        margin-top: 40px;
        position: absolute;
        left: 970px;
    }
    .fondoRegister {
        width: 1520px;
        margin-left: -100px;
        position: relative;
        top: -120px;
    }
</style>
