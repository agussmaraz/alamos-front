<template>
    <section class="caja-padre">
        <h3 class="font-bold mb-4">Clase de vehículo</h3>
        <ul class="flex flex-wrap justify-around">
            <li class="w-2/5" :class="valor == 'Bus' ? 'li-seleccionado' : null" @click="changeValue('Bus')">Bus</li>
            <li class="w-2/5" :class="valor == 'Buseta' ? 'li-seleccionado' : null" @click="changeValue('Buseta')">Buseta</li>
            <li class="w-2/5" :class="valor == 'Camion' ? 'li-seleccionado' : null" @click="changeValue('Camion')">Camion</li>
            <li class="w-2/5" :class="valor == 'Ciclomotor' ? 'li-seleccionado' : null" @click="changeValue('Ciclomotor')">Ciclomotor</li>
            <li class="w-2/5" :class="valor == 'Cuadriciclo' ? 'li-seleccionado' : null" @click="changeValue('Cuadriciclo')">Cuadriciclo</li>
            <li class="w-2/5" :class="valor == 'Cuatrimoto' ? 'li-seleccionado' : null" @click="changeValue('Cuatrimoto')">Cuatrimoto</li>
            <li class="w-2/5" :class="valor == 'Microbus' ? 'li-seleccionado' : null" @click="changeValue('Microbus')">Microbus</li>
            <li class="w-2/5" :class="valor == 'Motocarro' ? 'li-seleccionado' : null" @click="changeValue('Motocarro')">Motocarro</li>
            <li class="w-2/5" :class="valor == 'Mototriciclo' ? 'li-seleccionado' : null" @click="changeValue('Mototriciclo')">Mototriciclo</li>
            <li class="w-2/5" :class="valor == 'Remolque' ? 'li-seleccionado' : null" @click="changeValue('Remolque')">Remolque</li>
            <li class="w-2/5" :class="valor == 'Semiremolque' ? 'li-seleccionado' : null" @click="changeValue('Semiremolque')">Semiremolque</li>
            <li class="w-2/5" :class="valor == 'Tractocamion' ? 'li-seleccionado' : null" @click="changeValue('Tractocamion')">Tractocamion</li>
            <li class="w-2/5" :class="valor == 'Tricimoto' ? 'li-seleccionado' : null" @click="changeValue('Tricimoto')">Tricimoto</li>
            <li class="w-2/5" :class="valor == 'Volqueta' ? 'li-seleccionado' : null" @click="changeValue('Volqueta')">Volqueta</li>
        </ul>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                valor: 'Bus',
            };
        },
        methods: {
            changeValue(param) {
                this.valor = param;
            },
        },
    };
</script>

<style scoped>
    .caja-padre {
        width: 66%;
    }
    li {
        background: #ffffff;
        box-shadow: 0px -1px 1px rgba(0, 0, 0, 0.25), 0px 2px 2px rgba(0, 0, 0, 0.25);
        border-radius: 6px;
        width: 122px;
        height: 42px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 15px;
        color: #747474;
        text-transform: uppercase;
        font-size: 13px;
    }
    .li-seleccionado {
        background-color: #376ca1;
        box-shadow: none;
        color: white;
    }
</style>
