<template>
    <section class="pt-32 flex flex-col items-center">
        <h1 class="font-bold">Estado legal del vehiculo</h1>
        <p class="parrafo text-center mt-5">Podrás consultar esta información y gestionar el proceso de compra si el vendedor acepta tu oferta.</p>
        <section class="mt-8 w-full">
            <article class="flex items-center justify-center mb-4 w-full">
                <div class="circle-candado rounded-full relative mr-5">
                    <IconLock class="icon" />
                    <div class="conexion-candado absolute"></div>
                </div>
                <p class="parrafo-candado">Estado de propiedad, características del vehículo, SOAT y tecnomecánica.</p>
            </article>
            <article class="flex items-center justify-center mb-4 w-full">
                <div class="circle-candado rounded-full relative mr-5">
                    <div class="conexion-candado absolute"></div>
                    <IconLock class="icon" />
                </div>
                <p class="parrafo-candado">Historial de propietarios, embargos y limitaciones del vehículo.</p>
            </article>
            <article class="flex items-center justify-center mb-4 w-full">
                <div class="circle-candado rounded-full relative mr-5">
                    <div class="conexion-candado absolute"></div>
                    <IconLock class="icon" />
                </div>
                <p class="parrafo-candado">Historial de accidentes del vehículo por aseguradora.</p>
            </article>
            <article class="flex items-center justify-center mb-4 w-full">
                <div class="circle-candado rounded-full relative mr-5">
                    <div class="conexion-candado absolute"></div>
                    <IconLock class="icon" />
                </div>
                <p class="parrafo-candado">Estado de multas y comparendos del vehículo.</p>
            </article>
            <article class="flex items-center justify-center mb-4 w-full">
                <div class="circle-candado rounded-full relative mr-5">
                    <IconLock class="icon" />
                </div>
                <p class="parrafo-candado">Estado de impuestos del vehículo.</p>
            </article>
        </section>
    </section>
</template>

<script>
    export default {
        name: 'Documentacion',
    };
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200&display=swap');

    h1 {
        font-size: 22px;
    }
    .parrafo {
        width: 345px;
        font-family: 'Montserrat', sans-serif;
        font-size: 15px;
    }
    .icon {
        width: 20px;
        height: 25px;
    }
    .parrafo-candado {
        width: 280px;
        font-family: 'Montserrat', sans-serif;
        font-size: 14px;
    }
    .circle-candado {
        width: 53px;
        height: 52px;
        border: solid #898989 2px;
        padding-left: 14px;
        padding-top: 9px;
    }
    .conexion-candado {
        height: 19px;
        width: 11px;
        background-color: #898989;
        left: 18px;
        bottom: -20px;
    }
</style>
