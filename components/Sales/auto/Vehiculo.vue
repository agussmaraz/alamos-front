<template>
    <section class="py-20">
        <div>
            <img src="~assets/img/Subaru.jpg" alt="foto" class="w-full" />
        </div>
        <article class="p-4">
            <div class="flex items-center py-4">
                <h2 class="uppercase">{{ auto.Linea }}</h2>
            </div>
            <div class="flex items-center">
                <span class="font-bold text-lg mr-2 modelo px-3">{{ auto.Modelo }}</span>
                <p class="p-marca uppercase font-bold">{{ auto.Marca }}</p>
            </div>
            <p class="font-bold text-2xl my-4">$ {{ auto.precio }}</p>
            <section v-if="user && user.role == 20" class="flex mb-8">
                <div class="font-bold button-reserva">Reservar por PSE</div>
                <div class="font-bold button-reporte ml-5">Reporte Vehicular</div>
            </section>
            <hr />
            <section class="flex items-center justify-between caja-items">
                <article class="flex flex-col items-center justify-center">
                    <Iconkm class="mb-2" />
                    <p class="p-marca font-bold text-sm">{{ auto.km }}</p>
                    <p class="p-marca2 text-xs">Km</p>
                </article>
                <article class="flex flex-col items-center justify-center">
                    <IconUserUnico class="mb-2" />
                    <p class="p-marca font-bold text-sm">{{ auto.dueño }}</p>
                    <p class="p-marca2 text-xs">Dueño</p>
                </article>
                <article class="flex flex-col items-center justify-center">
                    <IconCaja class="mb-2" />
                    <p class="p-marca font-bold text-sm">Automática</p>
                    <p class="p-marca2 text-xs">Caja</p>
                </article>
            </section>
            <hr v-if="user && user.role !== 20" />
        </article>
        <article v-if="user && user.role !== 20" class="art-caract flex items-center justify-around p-5">
            <div class="flex items-center">
                <IconPermuta />
                <div class="flex flex-col ml-3">
                    <p class="font-semibold p-marca text-sm">No acepta permuta</p>
                    <p class="text-xs">Condición del vendedor</p>
                </div>
            </div>
        </article>
        <hr />
        <article class="art-detalles flex flex-col items-center">
            <h3 class="text-xl font-bold mt-8">Detalles del vehículo</h3>
            <article class="art-caract flex items-center justify-around p-5">
                <div class="flex flex-col items-center">
                    <IconType1 class="icon-camioneta mb-3" />
                    <p class="font-bold text-black text-sm">Wagon</p>
                    <p class="text-xs p-marca2">CAMIONETA</p>
                </div>
            </article>
        </article>
        <article class="mt-8">
            <div class="flex items-center justify-around pt-2 w-full">
                <p class="font-bold w-1/2 text-center pb-2" :class="componente === false ? 'subrayado' : null" @click="componente = false">Ficha técnica</p>
                <p class="font-bold w-1/2 text-center pb-2" :class="componente ? 'subrayado' : null" @click="componente = true">Comentario vendedor</p>
            </div>
            <div class="comentario">
                <Comentario v-if="componente" class="tamaño" />
                <Ficha v-else />
            </div>
            <div v-if="user && user.role !== 20" class="referencias">
                <Referencias />
            </div>
            <div class="financiamiento">
                <Financiamiento />
            </div>
        </article>
    </section>
</template>

<script>
    import { mapState } from 'vuex';
    export default {
        name: 'Vehiculo',
        data() {
            return {
                auto: {
                    Marca: 'Subaru',
                    Linea: 'Outback 3.6r Es Limited',
                    Modelo: '2019',
                    Puertas: '5',
                    Cilindraje: '3630',
                    Color: 'Gris',
                    Clase: 'Camioneta',
                    Tipo: 'Wagon',
                    Combustible: 'Gasolina',
                    Peso: '2200',
                    Ejes: '2',
                    Blindado: 'No',
                    dueño: 'Único',
                    ubicacion: 'Bogotá D.C',
                    km: '18.000',
                    precio: '72.000.000',
                },
                componente: false,
            };
        },
        computed: {
            ...mapState({
                user: (state) => state.auth.usuario,
            }),
        },
    };
</script>

<style scoped>
    .arrow {
        fill: black;
    }
    hr {
        width: 80%;
        margin: 0 auto;
        color: #e9e8e8;
    }
    .button-reserva {
        background-color: #376ca1;
        color: white;
        width: 184px;
        height: 55px;
        border-radius: 8px;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .button-reporte {
        border: solid #747474 2px;
        background-color: white;
        color: #353535;
        width: 184px;
        height: 55px;
        border-radius: 8px;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .modelo {
        background-color: #f2efef;
    }
    .caja-items {
        width: 80%;
        margin: 0 auto;
        margin-top: 22px;
        margin-bottom: 22px;
    }
    .icon-camioneta {
        width: 88px;
        height: 86px;
    }
    .nav {
        background-color: #eaebef;
    }
    .options {
        box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
        position: fixed;
    }
    .p-marca2 {
        color: #8d8c8c;
    }
    .p-marca {
        color: #747474;
    }
    .art-caract {
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
</style>
