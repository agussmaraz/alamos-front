<template>
    <!-- <div class="bg-gray-100 w-full"> -->
    <transition enter-active-class="transition-all duration-150 transform ease-out" enter-class="-translate-x-full" enter-to-class="translate-x-0" leave-active-class="transition-all duration-100 transform ease-in" leave-class="translate-x-0" leave-to-class="-translate-x-full">
        <article v-if="status" class="bg-white w-10/12 z-10 left-0 h-screen">
            <header class="pl-4 flex items-center">
                <IconLogo class="w-12 h-12 logo" />
                <h1 class="text-rojo font-bold text-lg ml-3">Álamos</h1>
            </header>
            <div class="div-caja py-3 pl-4">
                <IconUsuario class="w-16 h-16" />
                <p class="font-bold">Martín Rodríguez</p>
            </div>
            <ul class="space-y-6 pl-4 mt-2">
                <li class="flex items-center">
                    <IconHome class="w-5 h-4" />
                    <p class="ml-4">Inicio</p>
                </li>
                <li class="flex items-center">
                    <IconBuscar1 class="w-5 h-4" />
                    <p class="ml-4">Buscar</p>
                </li>
                <li class="flex items-center">
                    <IconUserMenu class="w-5 h-4" />
                    <p class="ml-4">Mi cuenta</p>
                </li>
                <li class="flex items-center">
                    <IconNegocios class="w-5 h-4" />
                    <p class="ml-4">Negociaciones</p>
                </li>
                <li class="flex items-center">
                    <IconCarMenu class="w-5 h-4" />
                    <p class="ml-4">Precios de referencia</p>
                </li>
                <li class="flex items-center">
                    <IconVentasMenu class="w-5 h-5" />
                    <p class="ml-4">Vender</p>
                </li>
                <li class="flex items-center">
                    <IconTiendas class="w-5 h-4" />
                    <p class="ml-4">Tiendas virtuales</p>
                </li>
                <li class="flex items-center">
                    <IconHistory class="w-5 h-4" />
                    <p class="ml-4">Historial</p>
                </li>
                <li class="flex items-center">
                    <IconConfig class="w-5 h-4" />
                    <p class="ml-4">Configuración</p>
                </li>
            </ul>
        </article>
    </transition>
    <!-- </div> -->
</template>

<script>
    export default {
        name: 'NavLeft',
        props: {
            status: {
                required: true,
                type: Boolean,
            },
        },
        methods: {
            change() {
                this.status = false;
            },
        },
    };
</script>

<style scoped>
    .div-caja {
        border-top: solid #e0e9fc 1px;
        border-bottom: solid #e0e9fc 1px;
    }
    p {
        color: #797979;
    }
    svg {
        fill: #9b9b9b;
    }
    .logo {
        fill: #ed1a3b;
    }
    article {
        background-color: white;
    }
</style>
