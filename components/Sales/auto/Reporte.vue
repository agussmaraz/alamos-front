<template>
    <section class="flex flex-col items-center">
        <h1 class="my-5">Reporte Vehicular</h1>
        <p class="parrafo mt-3">Sube el peritaje del vehículo y <strong> compártelo con tus clientes </strong> directamente desde la publicación.</p>
        <p class="parrafo mt-4">Esto ayuda a despejas sus dudas acerca del vehículo y permite que las ventas sean más <strong> fáciles, rápidas y transparentes. </strong></p>
        <div class="mt-20 relative">
            <input type="text" placeholder="Selecciona un archivo .pdf" />
            <IconClip class="icon-clip" />
            <aside></aside>
        </div>
    </section>
</template>

<script>
    export default {};
</script>

<style scoped>
    h1 {
        color: #444343;
        font-size: 20px;
        font-weight: bold;
    }
    .parrafo {
        width: 318px;
        text-align: center;
        font-size: 15px;
    }
    input {
        border: solid #353535 2px;
        height: 40px;
        width: 318px;
        border-radius: 8px;
        padding-left: 10px;
    }
    aside {
        width: 45px;
        height: 37px;
        border-bottom-right-radius: 8px;
        border-top-right-radius: 8px;
        position: absolute;
        background-color: #c4c4c4;
        top: 1px;
        right: 1px;
    }
    .icon-clip {
        position: absolute;
        right: 11px;
        top: 8px;
        z-index: 10;
    }
</style>
