<template>
    <div class="notification">
        <div class="notification__icon">
            <Icon :icon="fav.icon" />
        </div>
        <div class="notification__body">
            <div class="notification__header">
                <h2>{{ fav.title }}</h2>
                <p>{{ date }}</p>
            </div>
            <p class="notification__text">
                {{ fav.text }} (<span><b>Ver más</b>).</span>
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Notification',
        props: {
            fav: {
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
