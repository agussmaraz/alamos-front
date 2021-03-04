<template>
    <div class="chat__conversation" @click="goToChat">
        <div class="chat__conversation__icon">
            <img src="" alt="" />
        </div>
        <div class="chat__conversation__body">
            <div class="chat__conversation__header">
                <h2>{{ chat.publication.title }}</h2>
                <p>{{ date }}</p>
            </div>
            <p class="chat__conversation__text">{{ last_message.from }}: {{ last_message.text }}</p>
        </div>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';

    export default {
        name: 'Notification',
        props: {
            chat: {
                type: Object,
                default() {
                    return {};
                },
            },
        },
        data() {
            return {
                date: 'Calculando...',
            };
        },
        computed: {
            last_message() {
                return this.chat.messages[this.chat.messages.length - 1];
            },
            chatIcon() {
                return this.chat.icon;
            },
        },
        mounted() {
            setInterval(this.calculatedDate, 1000);
        },
        methods: {
            ...mapActions({
                setActive: 'chat__conversations/setActive',
            }),
            goToChat() {
                this.setActive(this.chat);
                this.$router.push(this.chat.link);
            },
            calculatedDate() {
                const seconds = Math.floor((new Date() - this.chat.messages[this.chat.messages.length - 1].time) / 1000);

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
    .chat__conversation {
        height: 93px;
        display: flex;
        background: #f9f8f8;
        box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
    }

    .chat__conversation__icon {
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

    .chat__conversation__header {
        display: flex;
        justify-content: space-between;
        padding-top: 16px;
        padding-right: 20px;
    }

    .chat__conversation__header p {
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

    .chat__conversation__body {
        font-family: Montserrat;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 22px;
        color: #444343;
        width: 100%;
    }
</style>
