<template>
    <div>{{ notification }}</div>
</template>

<script>
    import { mapState, mapActions } from 'vuex';

    export default {
        name: 'NotificationMatch',
        computed: {
            ...mapState({
                notification: (state) => state.notifications.active,
                notifications: (state) => state.notifications.all,
            }),
        },
        created() {
            if (this.notification === null) {
                const notif = this.notifications.find((notification) => notification.id === this.$route.params.id);
                if (notif) {
                    this.setActive(notif);
                } else {
                    this.$router.push('/notificaciones');
                }
            }
        },
        methods: {
            ...mapActions({
                setActive: 'notifications/setActive',
            }),
        },
    };
</script>

<style></style>
