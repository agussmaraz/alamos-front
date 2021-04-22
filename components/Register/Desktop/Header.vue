<template>
    <section>
        <figure>
            <section class="logoAlamos absolute">
                <IconLogoAlamos />
            </section>
        </figure>
        <div class="box-border flex flex-col items-center">
            <h1 class="font-bold text-gris">¡NOS TOMAMOS TU SEGURIDAD ENSERIO!</h1>
            <section class="flex items-center">
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
                <section class="imagenAuto">
                    <IconImageAuto />
                </section>
            </section>
        </div>

        <main class="caja-img">
            <img src="~assets/img/fondoRegister.png" alt="" class="h-full w-full" />
        </main>
    </section>
</template>

<style scoped>
    div {
        width: 100%;
        height: 300px;
        margin-top: 110px;
        padding-left: 430px;
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
    /* .fondoRegister {
        width: 1520px;
        margin-left: -100px;
        position: relative;
        top: -120px;
    } */
    .caja-img {
        height: 600px;
    }
    @media screen and (min-width: 1020px) {
        .caja-img {
            height: 600px;
        }
    }
</style>
