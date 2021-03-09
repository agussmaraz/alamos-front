<template>
    <div>
        <ul>
            <!-- <transition-group name="slide-fade" tag="div"> -->
            <Notification v-for="notification in notifications" :key="notification.id" :notif="notification" />
            <!-- </transition-group> -->
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

<style scoped>
    .slide-fade-enter-active {
        transition: all 0.3s ease;
    }

    .slide-fade-enter {
        transform: translateX(10px);
        opacity: 0;
    }
</style>
