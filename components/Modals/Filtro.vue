<template>
    <section>
        <header class="flex items-center justify-start">
            <IconArrow class="icon" />
            <p class="uppercase font-bold ml-5">Categorias</p>
        </header>
        <ul>
            <li @click="getData('Carro')">Carro <IconArrow2 /></li>
            <li @click="getData('Moto')">Moto<IconArrow2 /></li>
            <li @click="getData('Otro')">Otros vehiculos <IconArrow2 /></li>
        </ul>
    </section>
</template>

<script>
    import { mapState, mapActions } from 'vuex';
    export default {
        computed: {
            ...mapState({
                filter: (state) => state.filter.filter,
            }),
        },
        methods: {
            ...mapActions({
                setFilter: 'filter/setFilter',
                closeModal: 'modal/closeModal',
            }),
            getData(param) {
                this.setFilter(param);
                this.closeModal({ modal: 'seleccionFiltro' });
            },
        },
    };
</script>

<style scoped>
    .icon {
        fill: black;
        height: 18px;
        width: 18px;
    }
    header {
        background: #ffffff;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
        height: 61px;
        padding-left: 10px;
    }
    li {
        padding-left: 10px;
        text-transform: uppercase;
        border-bottom: 1px solid #c4c4c4;
        width: 100%;
        height: 65px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    section {
        background-color: white;
        position: absolute;
        top: 0;
        height: 100%;
        width: 100%;
        z-index: 40;
    }
</style>
