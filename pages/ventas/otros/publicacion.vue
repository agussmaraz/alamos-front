<template>
    <section>
        <nav class="nav flex justify-between items-center px-3 pt-2 pb-1 fixed w-full z-20">
            <div>
                <div v-if="detalles" @click="close">
                    <IconArrow class="arrow" />
                </div>
                <nuxt-link v-else to="/home">
                    <IconArrow class="arrow" />
                </nuxt-link>
            </div>
            <div class="font-bold text-center w-40 ml-4">2014 FAW</div>
            <div class="flex items-center">
                <IconHeart class="w-8 h-8 icon-heart mr-6" />
                <IconCompartir class="w-6 h-6 icon-share" />
            </div>
        </nav>
        <article v-if="!detalles" class="div-elegir flex items-center justify-around options w-full pt-16 z-10">
            <p class="font-bold w-1/3 text-center pb-2" :class="componente_actual === 'OtroVehiculo' ? 'subrayado' : null" @click="componente_actual = 'OtroVehiculo'">Vehículo</p>
            <p class="font-bold w-1/3 text-center pb-2" :class="componente_actual === 'OtroDocumentacion' ? 'subrayado' : null" @click="componente_actual = 'OtroDocumentacion'">Documentación</p>
            <p class="font-bold w-1/3 text-center pb-2" :class="componente_actual === 'OtroVendedor' ? 'subrayado' : null" @click="componente_actual = 'OtroVendedor'">Vendedor</p>
        </article>
        <OtroDetallesFicha v-if="detalles" />
        <component :is="componente_actual" v-else />
        <section class="container-footer w-full h-20 flex items-center justify-around fixed bottom-0">
            <nuxt-link to="/ventas/otros/modificar" class="button-modificar font-bold w-48 h-12"> Modificar/Finalizar </nuxt-link>
            <nuxt-link to="/ventas/otros/impulsar" class="w-40 button-impulsar h-12 font-semibold flex items-center justify-center">
                <IconPromocionar class="mr-2 w-6 h-6 icon-promo" />
                Impulsar
            </nuxt-link>
        </section>
    </section>
</template>

<script>
    import { mapState, mapActions } from 'vuex';
    export default {
        name: 'Publicacion',
        components: {
            OtroVehiculo: () => import('@/components/Sales/otro/OtroVehiculo'),
            OtroDocumentacion: () => import('@/components/Sales/otro/OtroDocumentacion'),
            OtroVendedor: () => import('@/components/Sales/otro/OtroVendedor'),
        },
        data() {
            return {
                componente_actual: 'OtroVehiculo',
            };
        },
        computed: {
            ...mapState({
                detalles: (state) => state.detalles.detalles,
            }),
        },
        methods: {
            ...mapActions({
                open: 'detalles/openDetalles',
                close: 'detalles/closeDetalle',
            }),
        },
    };
</script>

<style scoped>
    .icon-heart {
        fill: #747474;
    }
    .icon-share {
        fill: #747474;
    }
    .icon-promo {
        fill: white;
    }
    .button-impulsar {
        background-color: #ed1a3b;
        color: white;
        border-radius: 10px;
    }
    .arrow {
        fill: black;
    }
    .nav {
        background-color: #eaebef;
    }
    .options {
        box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
        position: fixed;
    }
    .p-marca {
        color: #8d8c8c;
    }
    .art-caract {
        background-color: #f2efef;
        height: 149px;
    }
    .comentario {
        background-color: #f2efef;
        padding-top: 20px;
    }
    .div-elegir {
        background-color: white;
    }
    .tamaño {
        height: 352px;
    }
    .subrayado {
        border-bottom: solid #ed1a3b 3px;
    }
    .referencias {
        background-color: #495b6d;
    }
    .subrayado {
        border-bottom: solid #ed1a3b 4px;
    }
    .button-modificar {
        background-color: #c4c4c4;
        border-radius: 10px;
        text-align: center;
        padding-top: 11px;
    }
    .container-footer {
        background-color: white;
        box-shadow: 0px -2px 4px rgba(0, 0, 0, 0.25);
    }
</style>
