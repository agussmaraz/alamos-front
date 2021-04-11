<template>
    <section class="caja-padre w-full fixed">
        <header class="p-3 z-20 relative">
            <div @click="openModal({ modal: 'seleccionFiltro' })">
                <h1 class="font-bold">Categoria:</h1>
            </div>
            <IconCampanaSearch class="icon-campana w-8 h-8" />
            <div @click="showFilter(false)">
                <IconClose class="icon-close w-8 h-8" />
            </div>
        </header>
        <FiltroAuto v-if="filter == 'Carro'" />
        <FiltroMoto v-if="filter == 'Moto'" />
        <FiltroOtro v-if="filter == 'Otro'" />
        <footer>
            <button class="bg-rojo h-10 w-64 rounded-md">Aplicar (x)</button>
        </footer>
        <Filtro v-if="seleccionFiltro" />
    </section>
</template>

<script>
    import { mapState, mapActions } from 'vuex';
    export default {
        name: 'MPFiltro',
        props: {
            showFilter: {
                type: Function,
                required: true,
            },
        },
        data() {
            return {
                component: 'Ciudad',
            };
        },
        computed: {
            ...mapState({
                seleccionFiltro: (state) => state.modal.modal.seleccionFiltro,
                filter: (state) => state.filter.filter,
            }),
        },
        methods: {
            ...mapActions({
                openModal: 'modal/openModal',
            }),
            change(param) {
                this.component = param;
            },
        },
    };
</script>

<style scoped>
    .li-seleccionado {
        background-color: #eb7083;
        color: white;
    }
    .li-seleccionado svg {
        stroke: white;
    }
    li svg {
        stroke: #797979;
    }
    footer {
        position: absolute;
        bottom: 0;
        background: white;
        z-index: 40;
        width: 100%;
        padding: 12px;
        display: flex;
        justify-content: center;
        box-shadow: 0px -1px 4px rgb(0 0 0 / 25%);
    }
    button {
        color: white;
    }
    .icon-campana {
        position: absolute;
        right: 51px;
        top: 10px;
    }
    .icon-close {
        position: absolute;
        right: 11px;
        top: 9px;
    }
    header {
        background-color: white;
        position: fixed;
        width: 100%;
        box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
    }
    .caja-padre {
        background-color: white;
        height: 100vh;
        font-family: Montserrat;
    }
    .ul-filter {
        width: 140px;
        background-color: #f7f7f7;
        height: 100vh;
        overflow: scroll;
        padding-top: 50px;
    }
    li {
        height: 59px;
        border-bottom: solid black 1px;
        display: flex;
        align-items: center;
        padding-left: 10px;
    }
    .icon {
        width: 40px;
    }
</style>
