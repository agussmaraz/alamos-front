<template>
    <div>
        <NotifEmpty v-if="notifications.length === 0" />
        <NotifList v-else />

        <button @click="addNotif">Agregar notif</button>
    </div>
</template>

<script>
    import { mapState, mapActions } from 'vuex';

    export default {
        layout: 'submain',
        computed: {
            ...mapState({
                notifications: (state) => state.notifications.all,
            }),
        },
        methods: {
            ...mapActions({
                addNotification: 'notifications/add',
            }),
            addNotif() {
                const notif = {
                    id: this.notifications[this.notifications.length - 1].id + 1,
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

<style></style>
