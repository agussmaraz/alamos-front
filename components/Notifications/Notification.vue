<template>
    <div class="notification" @click="goToNotif">
        <div class="notification__icon">
            <Icon :icon="notif.icon" />
        </div>
        <div class="notification__body">
            <div class="notification__header">
                <h2>{{ notif.title }}</h2>
                <p>{{ date }}</p>
            </div>
            <p class="notification__text">
                {{ notif.text }} (<span><b>Ver más</b>).</span>
            </p>
        </div>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';

    export default {
        name: 'Notification',
        props: {
            notif: {
                type: Object,
                default() {
                    return {};
                },
            },
        },
        data() {
            return {
                date: 'Menos de 1 minuto',
            };
        },
        computed: {
            notifIcon() {
                return this.notif.icon;
            },
        },
        mounted() {
            setInterval(this.calculatedDate, 1000);
        },
        methods: {
            ...mapActions({
                setActive: 'notifications/setActive',
            }),
            goToNotif() {
                this.setActive(this.notif);
                this.$router.push(this.notif.link);
            },
            calculatedDate() {
                const seconds = Math.floor((new Date() - this.notif.date) / 1000);

                let interval = seconds / 31536000;

                if (interval > 1) {
                    this.date = Math.floor(interval) + Math.floor(interval) === 1 ? ' año' : ' años';
                }
                interval = seconds / 2592000;
                if (interval > 1) {
                    this.date = Math.floor(interval) + Math.floor(interval) === 1 ? ' mes' : ' meses';
                }
                interval = seconds / 86400;
                if (interval > 1) {
                    this.date = Math.floor(interval) + Math.floor(interval) === 1 ? ' día' : ' días';
                }
                interval = seconds / 3600;
                if (interval > 1) {
                    this.date = Math.floor(interval) + Math.floor(interval) === 1 ? ' hora' : ' horas';
                }
                interval = seconds / 60;
                if (interval > 1) {
                    this.date = Math.floor(interval) + ' minutos';
                }

                if (interval < 1) {
                    this.date = 'Menos de 1 minuto';
                }
            },
        },
    };
</script>

<style scoped>
    .notification {
        height: 93px;
        display: flex;
        background: #f9f8f8;
        box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
    }

    .notification__icon {
        margin-left: 16px;
        margin-right: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    h2 {
        font-family: Montserrat;
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 20px;
    }

    .notification__header {
        display: flex;
        justify-content: space-between;
        padding-top: 16px;
        padding-right: 20px;
    }

    .notification__header p {
        font-family: Montserrat;
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 17px;
        display: flex;
        align-items: center;
        text-align: center;
        color: #8d8c8c;
    }

    .notification__body {
        font-family: Montserrat;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 22px;
        color: #444343;
    }
</style>
