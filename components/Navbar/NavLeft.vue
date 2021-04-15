<template>
    <!-- <div class="bg-gray-100 w-full"> -->
    <transition enter-active-class="transition-all duration-150 transform ease-out" enter-class="-translate-x-full" enter-to-class="translate-x-0" leave-active-class="transition-all duration-100 transform ease-in" leave-class="translate-x-0" leave-to-class="-translate-x-full">
        <article v-if="status" class="bg-white w-10/12 z-10 left-0 h-screen overflow-scroll pb-20">
            <header class="pl-4 flex items-center">
                <IconLogo class="w-12 h-12 logo" />
                <h1 class="text-rojo font-bold text-lg ml-3">Álamos</h1>
            </header>
            <div class="div-caja py-3 pl-4">
                <IconUserOff v-if="!esta_logueado" />
                <IconUsuario v-if="esta_logueado" class="w-16 h-16" />
                <p v-if="user && user.first_name" class="font-bold">Bienvenido, {{ user.first_name }}.</p>
                <p v-if="user && user.business_name" class="font-bold">Bienvenido, {{ user.business_name }}.</p>
            </div>
            <ul class="space-y-6 mt-4">
                <li class="flex items-center pl-4 mt-2">
                    <IconHome class="w-5 h-4" />
                    <p class="ml-4">Inicio</p>
                </li>
                <li class="flex items-center pl-4">
                    <IconBuscar1 class="w-5 h-4" />
                    <p class="ml-4">Buscar</p>
                </li>
                <hr v-if="esta_logueado" />
                <li v-if="esta_logueado" class="flex items-center pl-4">
                    <IconUserMenu class="w-5 h-4" />
                    <p class="ml-4">Mi cuenta</p>
                </li>
                <li v-if="esta_logueado" class="flex items-center pl-4">
                    <IconUserMenu class="w-5 h-4" />
                    <p class="ml-4">Mis anuncios</p>
                </li>
                <li v-if="esta_logueado" class="flex items-center pl-4">
                    <IconNegocios class="w-5 h-4" />
                    <p class="ml-4">Mis negociaciones</p>
                </li>
                <hr v-if="esta_logueado" />
                <li v-if="esta_logueado" class="flex items-center pl-4">
                    <IconVentasMenu class="w-5 h-5" />
                    <p class="ml-4">Vender mi vehículo</p>
                </li>
                <li class="flex items-center pl-4">
                    <IconTiendas class="w-5 h-4" />
                    <p class="ml-4">Tiendas virtuales</p>
                </li>
                <li class="flex items-center pl-4">
                    <IconTiendas class="w-5 h-4" />
                    <p class="ml-4">Consultas vehiculares</p>
                </li>
                <li class="flex items-center pl-4">
                    <IconTiendas class="w-5 h-4" />
                    <p class="ml-4">Versus</p>
                </li>
                <hr v-if="esta_logueado" />
                <li v-if="esta_logueado" class="flex items-center pl-4">
                    <IconTiendas class="w-5 h-4" />
                    <p class="ml-4">Publicidad</p>
                </li>
                <li v-if="esta_logueado" class="flex items-center pl-4">
                    <IconTiendas class="w-5 h-4" />
                    <p class="ml-4">Estadísticas</p>
                </li>
                <hr v-if="esta_logueado" />
                <li v-if="esta_logueado" class="flex items-center pl-4">
                    <IconHistory class="w-5 h-4" />
                    <p class="ml-4">Historial</p>
                </li>
                <li v-if="esta_logueado" class="flex items-center pl-4">
                    <IconConfig class="w-5 h-4" />
                    <p class="ml-4">Configuración</p>
                </li>
            </ul>
            <div class="flex items-center justify-center mt-4">
                <nuxt-link v-if="!esta_logueado" to="/login" class="button-login px-5 py-2">Inicia sesión</nuxt-link>
            </div>
        </article>
    </transition>
    <!-- </div> -->
</template>

<script>
    import { mapState } from 'vuex';
    export default {
        name: 'NavLeft',
        props: {
            status: {
                required: true,
                type: Boolean,
            },
        },

        computed: {
            ...mapState({
                user: (state) => state.auth.usuario,
            }),
            esta_logueado() {
                return this.user !== null;
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
        border-top: solid #c4c4c4 1px;
        border-bottom: solid #c4c4c4 1px;
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
    hr {
        color: #c4c4c4;
    }
    .button-login {
        background-color: #ed1a3b;
        color: white;
        font-weight: bold;
        border-radius: 8px;
    }
</style>
