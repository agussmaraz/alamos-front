<template>
    <div>
        <section class="mt-16">
            <VueSlickCarousel :dots="true">
                <div><PageOne /></div>
                <div><PageTwo /></div>
                <div><PageThree /></div>
                <div><PageFour /></div>
            </VueSlickCarousel>
        </section>
        <div class="text-rojo text-lg mt-16 font-semibold text-center mb-10">
            <nuxt-link to="login"> Omitir >> </nuxt-link>
        </div>
        <div class="bg-rojo px-2 flex justify-around rounded-2xl m-auto div-button shadow-lg w-20">
            <nuxt-link class="a" to="login">INICIAR SESION</nuxt-link>
            <nuxt-link to="register/" class="a-border">REGISTRATE</nuxt-link>
        </div>
    </div>
</template>

<script>
    import VueSlickCarousel from 'vue-slick-carousel';
    import 'vue-slick-carousel/dist/vue-slick-carousel.css';
    // optional style for arrows & dots
    import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';

    export default {
        name: 'MyComponent',
        components: { VueSlickCarousel },
    };
</script>
<style scoped>
    .a {
        color: white;
        font-weight: 500;
        padding-top: 8px;
        padding-bottom: 8px;
        font-size: 15px;
    }
    .a-border {
        border-left: solid white;
        padding-left: 31px;
        color: white;
        font-weight: 500;
        padding-top: 8px;
        padding-bottom: 8px;
        font-size: 15px;
    }
    .div-button {
        width: 300px;
    }
</style>
