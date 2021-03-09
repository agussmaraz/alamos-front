<template>
    <div class="flex flex-col justify-center items-center">
        <h2>¡No tienes notificaciones!</h2>

        <p>¡Mantente al tanto! Las notificaciones sobre tu actividad se mostrarán aquí</p>

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
        font-size: 22px;
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
        width: 331px;
        text-align: center;
        margin-top: 50px;
    }

    .campana {
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: #d9d9d9;
        width: 178px;
        height: 178px;
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
