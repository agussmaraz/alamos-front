<template>
    <section class="fixed w-full">
        <nav class="flex justify-between items-center">
            <nuxt-link to="/home">
                <IconArrow class="icon-arrow w-4 h-4 cursor-pointer" />
            </nuxt-link>
            <div>
                <h2>Favoritos</h2>
            </div>
            <IconCampana class="w-6 h-6 icon-campana" />
        </nav>
        <FavVacio v-if="favoritos.length === 0" />
        <FavList v-else />

        <button @click="addNotif">Agregar favs</button>

        <Footer />
    </section>
</template>

<script>
    import { mapState, mapActions } from 'vuex';

    export default {
        computed: {
            ...mapState({
                favoritos: (state) => state.favoritos.all,
            }),
        },
        methods: {
            ...mapActions({
                addNotification: 'notifications/add',
            }),
            addNotif() {
                const notif = {
                    id: this.favoritos[this.favoritos.length - 1].id + 1,
                    title: '¡Auto Match!',
                    text: '¡Felicitaciones! Tu oferta ha sido aceptada por el vendedor',
                    date: Date.now(),
                    icon: 'NotifCar',
                    link: '/notifications/match/1',
                };

                this.addNotification(notif);
            },
        },
    };
</script>

<style scoped>
    .icon-campana {
        fill: #747474;
    }
    .icon-arrow {
        fill: #353535;
    }
    nav {
        background-color: #eaebef;
        padding: 10px;
    }
    h2 {
        font-size: 15px;
    }
</style>
