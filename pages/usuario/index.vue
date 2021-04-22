<template>
    <section>
        <ul class="space-y-1">
            <nuxt-link v-if="usuario.role === 20" to="/usuario/empresa" class="item">
                <div class="flex items-center">
                    <IconUser2 class="mr-2" />
                    Perfil de empresa
                </div>
                <IconArrow2 class="arrow w-5 h-5" />
            </nuxt-link>
            <nuxt-link v-else to="/usuario/datos" class="item">
                <div class="flex items-center">
                    <IconUser2 class="mr-2" />
                    Mis datos
                </div>
                <IconArrow2 class="arrow w-5 h-5" />
            </nuxt-link>
            <li class="item">
                <div class="flex items-center">
                    <IconFacturacion class="mr-2" />
                    Facturación
                </div>
                <IconArrow2 class="arrow w-5 h-5" />
            </li>
            <li class="item">
                <div class="flex items-center">
                    <IconEstadisticas class="mr-2" />
                    Estadísticas
                </div>
                <IconArrow2 class="arrow w-5 h-5" />
            </li>
            <li class="item">
                <div class="flex items-center">
                    <IconPublicidad class="mr-2" />
                    Publicidad
                </div>
                <IconArrow2 class="arrow w-5 h-5" />
            </li>
            <li class="item">
                <div class="flex items-center">
                    <IconCampana2 class="mr-2" />
                    Notificaciones
                </div>
                <IconArrow2 class="arrow w-5 h-5" />
            </li>
            <li class="item">
                <div class="flex items-center">
                    <IconCampanaSearch class="mr-2" />
                    Alertas de busqueda
                </div>
                <IconArrow2 class="arrow w-5 h-5" />
            </li>
            <li class="item">
                <div class="flex items-center">
                    <IconPrivacidad class="mr-2" />
                    Privacidad
                </div>
                <IconArrow2 class="arrow w-5 h-5" />
            </li>
            <li class="item">
                <div class="flex items-center">
                    <IconLogout class="mr-2" />
                    Cerrar sesión
                </div>
                <IconArrow2 class="arrow w-5 h-5" />
            </li>
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
