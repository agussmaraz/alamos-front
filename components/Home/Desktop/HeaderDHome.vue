<template>
    <section>
        <head class="cabeza flex pt-14 lg:border-box justify-around items-center">
            <section class="login flex lg:justify-around items-center">
                <IconLogoAlamos />
                <button class="no-login focus:outline-none" @click="login()">
                    <p v-if="!active">No Login</p>
                    <p v-if="active">login</p>
                </button>
            </section>
            <section class="contenido-C flex flex-row font-semibold justify-around items-center">
                <div class="flex flex-row" @mouseenter="hover()" @mouseleave="hover()">
                    <p class="z-20">Consultas Vehiculares</p>
                    <p class="flecha z-20"><IconVectorDown /></p>
                    <section v-if="consultaV" class="consultas z-20 absolute ...">
                        <ConsultasV />
                    </section>
                </div>
                <div class="flex z-20" @mouseenter="hoverC()" @mouseleave="hoverC()">
                    <p class="z-20">Comprar</p>
                    <p class="flecha2 z-20"><IconVectorDown /></p>
                    <section v-if="compraV" class="comprar z-10 absolute ...">
                        <ComprarV />
                    </section>
                </div>
                <a class="z-20" href="#">Versus</a>
                <a class="z-20" href="#">Tiendas Virtuales</a>
                <a class="z-20" href="#">Ayuda</a>
            </section>
            <div class="hamburguesa flex justify-evenly items-center z-20">
                <div class="pb-2">
                    <button class="lg:focus:outline-none" @click="usuario()"><IconHamburguesaH /></button>
                </div>
                <div class="icon">
                    <button class="lg:focus:outline-none" @click="usuario()"><IconUserD /></button>
                </div>
            </div>
            <main v-if="menu" class="z-10 flex flex-col absolute ..." @mouseleave="usuario()">
                <MenuUsuario />
            </main>
            <div class="btnP z-20">
                <button class="btn flex flex-row justify-around items-center">
                    <p class="mas">+</p>
                    <p class="vehiculo">Vende tu vehículo</p>
                </button>
            </div>
        </head>
    </section>
</template>

<script>
    export default {
        name: 'Cabeza',
        data() {
            return {
                active: false,
                consultaV: false,
                compraV: false,
                menu: false,
            };
        },
        methods: {
            login() {
                this.active = !this.active;
            },
            hover() {
                this.consultaV = !this.consultaV;
            },
            hoverC() {
                this.compraV = !this.compraV;
            },
            usuario() {
                this.menu = !this.menu;
            },
        },
    };
</script>

<style scoped>
    @media (min-width: 1200px) {
        main {
            top: 7%;
            background-color: white;
            height: 720px;
            width: 19%;
            right: 335px;
        }
        .cabeza {
            padding-top: 4%;
            font-family: Montserrat;
        }
        .contenido-C {
            width: 50%;
            font-size: 22px;
            margin-left: 8%;
        }
        .login {
            width: 11%;
            margin-left: 2%;
        }
        .hamburguesa {
            height: 60px;
            width: 7%;
            padding-top: 1%;
            background: #ffffff;
            border: 2px solid #c4c4c4;
            box-sizing: border-box;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            border-radius: 60px;
            margin-right: 1%;
        }
        .btnP {
            padding-right: 2%;
        }
        .btn {
            color: white;
            padding-right: 3%;
            background-color: #ed1a3b;
            height: 60px;
            width: 260px;
            border-radius: 15px;
            border: 2px solid #c4c4c4;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        }
        .vehiculo {
            font-size: 23px;
        }
        .mas {
            font-size: 44px;
        }
        .icon {
            padding-bottom: 10%;
        }
        .no-login {
            width: 70px;
            background-color: #c4c4c4;
            height: 65px;
            border-radius: 35px;
        }
        .flecha {
            padding-top: 4%;
            padding-left: 5px;
        }
        .flecha2 {
            padding-top: 9%;
            padding-left: 6px;
        }
        .consultas {
            top: 120px;
            left: 420px;
        }
        .comprar {
            top: 120px;
        }
    }
</style>
