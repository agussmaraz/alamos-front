<template>
    <section class="caja-padre">
        <section class="paginacion">
            <VueSlickCarousel :dots="true" :arrows="false">
                <template class="custom-dot">
                    <div><Consejo1 /></div>
                    <div><Consejo2 /></div>
                    <div><Consejo3 /></div>
                    <div><Consejo4 /></div>
                </template>
            </VueSlickCarousel>
        </section>
    </section>
</template>

<script>
    import VueSlickCarousel from 'vue-slick-carousel';
    import 'vue-slick-carousel/dist/vue-slick-carousel.css';
    // optional style for arrows & dots
    import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';
    export default {
        name: 'Consejos',
        components: { VueSlickCarousel },
    };
</script>

<style scoped>
    .caja-padre {
        background-color: white;
    }
    .paginacion {
        background-color: white;
        border-top-left-radius: 41px;
        border-top-right-radius: 41px;
        height: 283px;
    }
    .slick-dots {
        background-color: white;
        bottom: 8px !important;
    }
    .custom-dot {
        color: red !important;
    }
</style>
