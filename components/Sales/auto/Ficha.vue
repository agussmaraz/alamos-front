<template>
    <section class="">
        <article class="flex flex-row flex-wrap justify-around m-auto w-full">
            <div class="flex flex-col w-2/5 mb-3">
                <p>{{ auto.Modelo }}</p>
                <h2>Modelo</h2>
            </div>
            <div class="flex flex-col w-2/5 mb-3">
                <p>3640 cc</p>
                <h2>Cilindraje</h2>
            </div>
            <div class="flex flex-col w-2/5 mb-3">
                <p>3</p>
                <h2>Final de placa</h2>
            </div>
            <div class="flex flex-col w-2/5 mb-3">
                <p>{{ auto.Combustible }}</p>
                <h2>Combustible</h2>
            </div>
            <div class="flex flex-col w-2/5 mb-3">
                <p>{{ auto.km }}</p>
                <h2>Kilometraje</h2>
            </div>
            <div class="flex flex-col w-2/5 mb-3">
                <p>Automática</p>
                <h2>Caja</h2>
            </div>
            <div class="flex flex-col w-2/5 mb-3">
                <p>{{ auto.Puertas }}</p>
                <h2>Puertas</h2>
            </div>
            <div class="flex flex-col w-2/5 mb-3">
                <p>Hadráulica</p>
                <h2>Dirección</h2>
            </div>
            <div class="flex flex-col w-2/5 mb-3">
                <p>{{ auto.Color }}</p>
                <h2>Color</h2>
            </div>
            <div class="flex flex-col w-2/5 mb-3">
                <p>4x4</p>
                <h2>Transmisión</h2>
            </div>
        </article>
        <div class="w-full flex justify-center mt-5">
            <button class="button border-2 border-rojo rounded-full h-10 w-32 font-bold mb-3" @click="open">Ver más</button>
        </div>
    </section>
</template>

<script>
    import { mapActions } from 'vuex';
    export default {
        name: 'Ficha',
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
                    dueño: 'Dueño directo',
                    ubicacion: 'Bogotá D.C',
                    km: '18.000',
                    precio: '72.000.000',
                },
            };
        },
        methods: {
            ...mapActions({
                open: 'detalles/openDetalle',
            }),
        },
    };
</script>

<style scoped>
    p {
        font-size: 14px;
        font-weight: bold;
    }
    h2 {
        font-size: 12px;
    }
    .button {
        background-color: white;
        outline: none;
    }
</style>
