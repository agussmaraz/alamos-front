<template>
    <section>
        <div class="w-full div-nav">
            <h1>Selecciona un modelo</h1>
        </div>
        <ul class="overflow-y-auto">
            <li @click="changeComponent">2022</li>
            <li @click="changeComponent">2021</li>
            <li @click="changeComponent">2020</li>
            <li @click="changeComponent">2019</li>
            <li @click="changeComponent">2018</li>
            <li @click="changeComponent">2017</li>
            <li @click="changeComponent">2016</li>
            <li @click="changeComponent">2015</li>
            <li @click="changeComponent">2014</li>
            <li @click="changeComponent">2013</li>
            <li @click="changeComponent">2012</li>
        </ul>
    </section>
</template>

<script>
    export default {
        name: 'Filtros',
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
        padding-top: 14px;
    }
    .div-nav {
        background-color: white;
        box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
        height: 54px;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
    }
    ul {
        height: 444px;
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
    section {
        background-color: white;
        border-radius: 8px;
    }
</style>
