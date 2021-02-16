<template>
    <section class="flex flex-col items-center text-center">
        <header class="flex text-rojo font-bold items-center text-2xl">
            <IconLogo class="w-10 h-10 icon mr-2" />
            Álamos
        </header>
        <article>
            <IconPageTwo class="icono ml-2" />
            <h1 class="text-rojo text-2xl">Tu guía en el proceso</h1>
            <div class="div-parrafo">
                <span class="text-sm parrafo"> Te guiamos durante el proceso de compraventa y te brindamos las herramientas necesarias para una </span>
                <span class="text-sm"> transacción confiable. </span>
            </div>
        </article>
    </section>
</template>

<script>
    export default {
        name: 'PageTwo',
    };
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200&display=swap');

    .icon {
        fill: #ed1a3b;
    }
    .icono {
        margin: 60px auto;
    }
    .parrafo {
        font-family: 'Montserrat', sans-serif;
    }
    .div-parrafo {
        width: 300px;
        margin-top: 30px;
    }
</style>
