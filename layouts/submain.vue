<template>
    <div class="h-full">
        <NavAlter class="fixed w-full" />
        <div class="layout__body pb-16 w-full min-h-full">
            <Nuxt />
        </div>
        <Footer class="w-full" />
    </div>
</template>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;600;700&display=swap');

    html {
        font-family: 'Montserrat', sans-serif !important;
    }
</style>

<style>
    html,
    body,
    #__nuxt,
    #__layout {
        height: 100%;
    }
</style>

<style scoped>
    .layout__body {
        padding-top: 58px;
    }
</style>
