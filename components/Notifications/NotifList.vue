<template>
    <div>
        <ul>
            <Notification v-for="notification in notifications" :key="notification.id" :notif="notification" />
        </ul>
    </div>
</template>

<script>
    import { mapState } from 'vuex';

    export default {
        name: 'NotificationsList',
        computed: {
            ...mapState({
                notifications: (state) => state.notifications.all,
            }),
        },
    };
</script>

<style></style>
