<template>
    <div>
        <h2>Chat vacío</h2>

        <p>Comunícate con otros usuarios en tiempo real y sin esfuerzo</p>

        <div class="absolute campana">
            <IconCampana />
        </div>
    </div>
</template>

<script>
    export default {
        name: 'NotifEmpty',
    };
</script>

<style scoped>
    h2 {
        font-family: Montserrat;
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 27px;
        /* identical to box height */

        text-align: center;
        margin-top: 50px;
    }

    p {
        font-family: Montserrat;
        font-style: normal;
        font-weight: 200;
        font-size: 18px;
        line-height: 30px;
        /* or 167% */

        text-align: center;
        margin-top: 50px;
    }

    .campana {
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: #d9d9d9;
        width: 200px;
        height: 200px;
        border-radius: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 50px;
    }

    .campana svg {
        fill: white;
        color: white;
        width: 100px;
    }
</style>
