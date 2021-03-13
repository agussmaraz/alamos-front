<template>
    <div class="counter--circle">{{ amount }}</div>
</template>

<script>
    export default {
        name: 'Counter',
        props: {
            amount: {
                type: Number,
                default: 0,
            },
        },
    };
</script>

<style scoped>
    .counter--circle {
        border-radius: 100%;
        width: 25px;
        height: 25px;
        background-color: #eb2c00;
        color: white;

        position: absolute;
        right: 16px;
        bottom: 13px;

        display: flex;
        justify-content: center;
        align-items: center;

        font-family: Montserrat;
        font-style: normal;
        font-weight: 600;
        font-size: 12px;
    }
</style>
