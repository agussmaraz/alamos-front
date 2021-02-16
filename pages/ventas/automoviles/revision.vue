<template>
    <section>
        <nav class="nav flex justify-between px-3 py-4 fixed w-full z-20">
            <div>
                <div v-if="detalles" @click="close">
                    <IconArrow class="arrow" />
                </div>
                <nuxt-link v-else to="/home">
                    <IconArrow class="arrow" />
                </nuxt-link>
            </div>
            <div class="font-bold">2019 SUBARU OUTBACK 3.6R ES</div>
            <div class="font-bold text-xs mt-1">Cancelar</div>
        </nav>
        <article v-if="!detalles" class="div-elegir flex items-center justify-around options w-full pt-16 z-10">
            <p class="font-bold w-1/3 text-center pb-2" :class="componente_actual === 'Vehiculo' ? 'subrayado' : null" @click="componente_actual = 'Vehiculo'">Vehículo</p>
            <p class="font-bold w-1/3 text-center pb-2" :class="componente_actual === 'Documentacion' ? 'subrayado' : null" @click="componente_actual = 'Documentacion'">Documentación</p>
            <p class="font-bold w-1/3 text-center pb-2" :class="componente_actual === 'Vendedor' ? 'subrayado' : null" @click="componente_actual = 'Vendedor'">Vendedor</p>
        </article>
        <DetallesFicha v-if="detalles" />

        <component :is="componente_actual" v-else />
        <section class="container-footer w-full h-20 flex items-center justify-around fixed bottom-0">
            <button class="button-modificar font-bold w-48 h-12">Modificar anuncio</button>
            <button class="button-publicar font-bold w-48 h-12">
                <nuxt-link to="/ventas/automoviles/final"> Publicar vehiculo </nuxt-link>
            </button>
        </section>
    </section>
</template>

<script>
    import { mapState, mapActions } from 'vuex';
    export default {
        name: 'Revision',
        components: {
            Vehiculo: () => import('@/components/Sales/auto/Vehiculo'),
            Documentacion: () => import('@/components/Sales/auto/Documentacion'),
            Vendedor: () => import('@/components/Sales/auto/Vendedor'),
        },
        data() {
            return {
                componente_actual: 'Vehiculo',
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
    }
    .button-publicar {
        background-color: #ed1a3b;
        border-radius: 10px;
        color: white;
    }
    .container-footer {
        background-color: white;
        box-shadow: 0px -2px 4px rgba(0, 0, 0, 0.25);
    }
</style>
