<template>
    <footer class="mb-8">
        <section>
            <p></p>
        </section>
        <section class="contenidoP flex justify-around mt-38">
            <div class="footerC">
                <h4 class="py-2 text-base"><b>Consultas Vehiculares</b></h4>
                <hr />
                <a href="">Reporte Vehicular</a>
                <a href="">RUNT</a>
                <a href="">SIM</a>
                <a href="">Fasecolda</a>
                <a href="">SIMIT</a>
                <a href="">Secretaría de Hacienda</a>
                <a href="">Revisar Motor</a>
            </div>
            <div class="footerC">
                <h4 class="py-2 text-base"><b>Servicios</b></h4>
                <hr />
                <a href="">Guía en proceso de compraventa</a>
                <a href="">Paga tu SOAT</a>
                <a href="">Agenda tu peritaje</a>
                <a href="">Cotiza la póliza de tu vehículo</a>
                <a href="">Simula tu crédito vehicular</a>
                <a href="">Versus: compara vehículos</a>
                <a href="">Tiendas virtuales</a>
            </div>
            <div class="footerC px-2">
                <h4 class="py-2 text-base"><b>Comprar</b></h4>
                <hr />
                <a href="">Carros Nuevos</a>
                <a href="">Carros Usados</a>
                <a href="">Motos Nuevas</a>
                <a href="">Motos Usadas</a>
                <a href="">Búsqueda Avanzada</a>
            </div>
            <div class="footerC">
                <h4 class="py-2 text-base"><b>Mi Cuenta</b></h4>
                <hr />
                <a href="">Ingresa</a>
                <a href="">Vende tu vehículo</a>
                <a href="">Impulsa tu publicación</a>
                <br />
                <h4 class="py-2 text-base"><b>Ayuda / PQR</b></h4>
                <hr />
                <a href="">Preguntas frecuentes</a>
                <a href="">Contáctanos</a>
                <a href="">Feedback y comentarios</a>
            </div>
            <div class="footerC">
                <section>
                    <figure class="alamosF relative my-2">
                        <IconAlamosFooter />
                    </figure>
                    <figure class="iconos flex flex-row justify-around bg-white p-2 bg-black">
                        <IconInstagramF />
                        <IconFacebookF />
                        <IconTwitter />
                        <IconYoutube />
                    </figure>
                </section>
                <section>
                    <h4 class="text-base"><b>Acerca de nosotros</b></h4>
                    <hr />
                    <a href="">Quiénes somos</a>
                    <a href="">Trabaja con nosotros</a>
                </section>
            </div>
        </section>
        <section class="copyright text-center mx-auto pb-6">
            <span> ©<b>alamosautos.co</b> 2020 Colombia. Todos los Derechos Reservados. </span>
            <div>
                <a class="px-4" href=""><b>Política de Privacidad</b></a>
                <a class="px-4" href=""><b>Términos y Condiciones</b></a>
            </div>
        </section>
    </footer>
</template>

<style scoped>
    .contenidoP {
        width: auto;
        height: auto;
        background-color: #747474;
        margin-top: 80px;
    }
    .footerC {
        padding: 1rem;
        padding-top: 40px;
        height: auto;
        font-family: Montserrat;
        color: white;
        font-size: 14px;
    }
    .footerC a {
        text-decoration: none;
        display: flex;
        flex-direction: column;
        padding: 4px;
    }
    .copyright {
        background-color: #747474;
        color: white;
    }
    .alamosF {
        margin-left: 15px;
    }
    .iconos {
        width: 220px;
    }
</style>
