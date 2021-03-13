<template>
    <section>
        <article class="art">
            <nav class="div-nav flex items-center">
                <IconArrow class="icon-arrow w-5 h-5 ml-2" />
                <h1 class="ml-12">Selecciona una Versión</h1>
            </nav>
            <article class="art-linea flex items-center justify-center">
                <h3 class="font-bold text-xl">2021 · Mazda</h3>
            </article>
        </article>
        <section>
            <ul class="overflow-y-auto">
                <li @click="changeComponent">Línea</li>
                <li @click="changeComponent">Línea</li>
                <li @click="changeComponent">Línea</li>
                <li @click="changeComponent">Línea</li>
                <li @click="changeComponent">Línea</li>
                <li @click="changeComponent">Línea</li>
                <li @click="changeComponent">Línea</li>
            </ul>
        </section>
    </section>
</template>

<script>
    export default {
        name: 'Version',
        props: {
            changeComponent: {
                type: Function,
                required: true,
            },
        },
    };
</script>

<style scoped>
    h1 {
        font-weight: bold;
        display: flex;
        justify-content: center;
    }
    ul {
        height: 444px;
        padding-top: 158px;
    }
    li {
        border-bottom: solid #c4c4c4 1px;
        padding-left: 17px;
        padding-right: 17px;
        padding: 10px;
        display: flex;
        justify-content: center;
        font-family: Montserrat;
        cursor: pointer;
    }
    .div-nav {
        background-color: white;
        box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
        height: 54px;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
    }
    .icon-arrow {
        fill: #353535;
    }
    .art {
        background-color: white;
        position: fixed;
        width: 100%;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
    }
    .art-linea {
        height: 98px;
        background-color: white;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    }
</style>
