<template>
    <section class="Padre z-10">
        <section class="borde pb-4 lg:rounded-b-lg">
            <div class="bordeR absolute ..."></div>
            <button class="secciones lg:focus:outline-none pt-4 font-semibold justify-between flex flex-row">
                <IconNotificacion />
                <div class="">Notificaciones</div>
            </button>
            <button class="seccion lg:focus:outline-none font-semibold justify-between flex flex-row mt-8">
                <IconMensajes />
                <div class="pl-3">Mensajes</div>
            </button>
            <button class="seccion lg:focus:outline-none font-semibold justify-between flex flex-row mt-8">
                <img src="../../../../assets/img/CorazonFav.png" alt="fav" />
                <div class="pl-3">Favoritos</div>
            </button>
        </section>
        <section class="borde mt-8 pb-4">
            <button class="seccion lg:focus:outline-none font-semibold justify-between flex flex-row">
                <IconMiCuenta />
                <div class="pl-3">Mi cuenta</div>
            </button>
            <button class="seccion lg:focus:outline-none font-semibold justify-between flex flex-row mt-8">
                <IconMisAnuncios />
                <div class="pl-3">Mis anuncios</div>
            </button>
            <button class="seccion lg:focus:outline-none font-semibold justify-between flex flex-row mt-8">
                <IconMisNegocios />
                <div class="pl-3">Mis negociaciones</div>
            </button>
        </section>
        <section class="borde mt-8 pb-4">
            <button class="seccion lg:focus:outline-none font-semibold justify-between flex flex-row">
                <IconHistorial />
                <div class="pl-3">Historial</div>
            </button>
            <button class="seccion lg:focus:outline-none font-semibold justify-between flex flex-row mt-8">
                <IconConfiguracion />
                <div class="pl-3">Configuracion</div>
            </button>
        </section>
        <section class="shadow pb-5">
            <button class="seccion lg:focus:outline-none font-semibold justify-between flex flex-row pt-6">
                <IconCerrarS />
                <div class="pl-3">Cerrar sesión</div>
            </button>
        </section>
    </section>
</template>

<style scoped>
    .secciones {
        margin-top: 7rem;
        padding-left: 2rem;
        width: 215px;
        font-size: 19px;
        color: #747474;
    }
    .seccion {
        padding-left: 2rem;
        font-size: 19px;
        color: #747474;
    }
    .borde {
        border-bottom: solid 1px #c4c4c4;
        box-shadow: -4px 0px 0px 0px rgb(0, 0, 0, 0.25);
    }
    .shadow {
        box-shadow: -4px 4px 0px 0 rgba(0, 0, 0, 0.25);
    }
    .bordeR {
        border-top: solid 7px #ed1a3b;
        top: 90px;
        right: 0;
        width: 38%;
    }
</style>
