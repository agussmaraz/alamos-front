<template>
    <div>
        <Nav class="fixed w-full md:hidden" />
        <div class="pt-16 pb-16 w-full md:pt-0 md:pb-0">
            <Nuxt />
        </div>
        <Footer class="w-full md:hidden" />
    </div>
</template>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200&display=swap');

    html {
        font-family: 'Montserrat', sans-serif !important;
    }
</style>
