<template>
    <section>
        <article>
            <nav class="nav flex items-center px-3 py-4 fixed w-full z-20">
                <div>
                    <nuxt-link to="/ventas/motos/publicacion">
                        <IconArrow class="arrow" />
                    </nuxt-link>
                </div>
                <div class="font-bold text-center ml-20">Impulsa tu publicación</div>
            </nav>
        </article>
        <article class="pt-20">
            <VueSlickCarousel :dots="true">
                <div><Redes /></div>
                <div><Gold /></div>
                <div><Silver /></div>
                <div><Basico /></div>
            </VueSlickCarousel>
        </article>
        <Footer />
    </section>
</template>

<script>
    import VueSlickCarousel from 'vue-slick-carousel';
    import 'vue-slick-carousel/dist/vue-slick-carousel.css';
    // optional style for arrows & dots
    import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';

    export default {
        name: 'Impulsar',
        components: { VueSlickCarousel },
    };
</script>

<style scoped>
    .arrow {
        fill: black;
    }
    .nav {
        background-color: #eaebef;
    }
</style>
