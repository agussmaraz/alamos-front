<template>
    <section>
        <ul class="space-y-1">
            <nuxt-link to="/usuario/datos" class="item">
                <div class="flex items-center">
                    <IconUser2 class="mr-2" />
                    Datos de la empresa
                </div>
                <IconArrow2 class="arrow w-5 h-5" />
            </nuxt-link>
            <nuxt-link to="/usuario/horarios" class="item">
                <div class="flex items-center">
                    <IconFacturacion class="mr-2" />
                    Configurar horarios de atención
                </div>
                <IconArrow2 class="arrow w-5 h-5" />
            </nuxt-link>
        </ul>
    </section>
</template>

<script>
    import { mapActions, mapState } from 'vuex';
    export default {
        layout: 'submain',
        computed: {
            ...mapState({
                usuario: (state) => state.auth.usuario,
            }),
        },
        beforeMount() {
            this.setActivePage('Mi cuenta');
        },
        methods: {
            ...mapActions({
                // addChat: 'publications/addMessage',
                setActivePage: 'config/setActivePage',
            }),
        },
    };
</script>

<style scoped>
    .arrow {
        fill: #353535;
        transform: rotate(270deg);
    }
    ul {
        padding-left: 10px;
        padding-right: 10px;
    }
    .item {
        height: 70px;
        border-bottom: solid #c4c4c4 1px;
        color: #747474;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
</style>
