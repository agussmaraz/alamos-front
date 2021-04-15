<template>
    <article class="flex">
        <ul class="ul-filter">
            <li :class="component == 'Clase' ? 'li-seleccionado' : null" @click="change('Clase')"><IconCarroceria class="mr-2" />Clase de vehículo</li>
            <!-- <li :class="component == 'Carroceria' ? 'li-seleccionado' : null" @click="change('Carroceria')"><IconCarroceria class="mr-2" />Carrocería</li> -->
            <li :class="component == 'Ciudad' ? 'li-seleccionado' : null" @click="change('Ciudad')"><IconCiudad class="mr-2" /> Ciudad</li>
            <li :class="component == 'Marca' ? 'li-seleccionado' : null" @click="change('Marca')"><IconMarca class="mr-2" /> Marca y Linea</li>
            <li :class="component == 'Calendar' ? 'li-seleccionado' : null" @click="change('Calendar')"><IconCalendar class="mr-2" /> Modelo</li>
            <li :class="component == 'Condiciones' ? 'li-seleccionado' : null" @click="change('Condicion')"><IconCondicion class="mr-2" /> Condición</li>
            <li :class="component == 'Vendedor' ? 'li-seleccionado' : null" @click="change('Vendedor')"><IconVendedor class="mr-2" />Vendedor</li>
            <li><IconPrecio class="mr-2" />Precio</li>
            <li><IconKilometraje class="mr-2" />Kilometraje</li>
            <li :class="component == 'Placa' ? 'li-seleccionado' : null" @click="change('Placa')"><IconPlaca2 class="mr-2" /> Placa</li>
            <li><IconCilindraje class="mr-2" /> Cilindraje</li>
            <!-- <li :class="component == 'Transmision' ? 'li-seleccionado' : null" @click="change('Transmision')"><IconTransmision class="mr-2" />Transmision</li> -->
            <li :class="component == 'Caja' ? 'li-seleccionado' : null" @click="change('Caja')"><IconCaja2 class="mr-2" />Caja</li>
            <!-- <li :class="component == 'Direccion' ? 'li-seleccionado' : null" @click="change('Direccion')"><IconDireccion class="mr-2" />Dirección</li> -->
            <li :class="component == 'Combustible' ? 'li-seleccionado' : null" @click="change('Combustible')"><IconCombustible class="mr-2" />Combustible</li>
            <li :class="component == 'Color' ? 'li-seleccionado' : null" @click="change('Color')"><IconColor class="mr-2" />Color</li>
            <li :class="component == 'Puertas' ? 'li-seleccionado' : null" @click="change('Puertas')"><IconPuertas class="mr-2" />Puertas</li>
            <li :class="component == 'Pasajeros' ? 'li-seleccionado' : null" @click="change('Pasajeros')"><IconPasajeros class="mr-2 icon" /> Capacidad de pasajeros</li>
            <li><IconCapacidad class="mr-2 icon" />Capacidad de carga</li>
            <li :class="component == 'Peso' ? 'li-seleccionado' : null" @click="change('Peso')"><IconPesoOtro class="mr-2 icon" />Peso vehiculo</li>

            <!-- <li :class="component == 'Items' ? 'li-seleccionado' : null" @click="change('Items')"><IconItems class="mr-2" />Items carro</li> -->
            <li>Único dueño</li>
            <li>Servicio público</li>
            <li>Blindado</li>
            <li>Reporte vehicular</li>
            <li>Con video</li>
        </ul>
        <FiltroClaseOtro v-if="component == 'Clase'" class="pt-20 pl-4" />
        <FiltroCiudad v-if="component == 'Ciudad'" class="pt-20 pl-4" />
        <FiltroMarca v-if="component == 'Marca'" class="pt-20 pl-4" />
        <FiltroCalendar v-if="component == 'Calendar'" class="pt-20 pl-4" />
        <FiltroCondicion v-if="component == 'Condicion'" class="pt-20 pl-4" />
        <FiltroVendedor v-if="component == 'Vendedor'" class="pt-20 pl-4" />
        <FiltroPlaca v-if="component == 'Placa'" class="pt-20 pl-4" />
        <FiltroTransmision v-if="component == 'Transmision'" class="pt-20 pl-4" />
        <FiltroCaja v-if="component == 'Caja'" class="pt-20 pl-4" />
        <FiltroDireccion v-if="component == 'Direccion'" class="pt-20 pl-4" />
        <FiltroCombustible v-if="component == 'Combustible'" class="pt-20 pl-4" />
        <FiltroColor v-if="component == 'Color'" class="pt-20 pl-4" />
        <FiltroPuertas v-if="component == 'Puertas'" class="pt-20 pl-4" />
        <FiltroPasajeros v-if="component == 'Pasajeros'" class="pt-20 pl-4" />
        <FiltroItems v-if="component == 'Items'" class="pt-20 pl-4" />
        <FiltroOtroPeso v-if="component == 'Peso'" class="pt-20 pl-4" />

        <!-- <FiltroCarroceria v-if="component == 'Carroceria'" class="pt-20 pl-4" /> -->
    </article>
</template>

<script>
    export default {
        name: 'MPFiltro',
        props: {
            showFilter: {
                type: Function,
                required: true,
            },
        },
        data() {
            return {
                component: 'Clase',
            };
        },
        methods: {
            change(param) {
                this.component = param;
            },
        },
    };
</script>

<style scoped>
    .li-seleccionado {
        background-color: #eb7083;
        color: white;
    }
    .li-seleccionado svg {
        stroke: white;
    }
    li svg {
        stroke: #797979;
    }
    footer {
        position: absolute;
        bottom: 0;
        background: white;
        z-index: 40;
        width: 100%;
        padding: 12px;
        display: flex;
        justify-content: center;
        box-shadow: 0px -1px 4px rgb(0 0 0 / 25%);
    }
    button {
        color: white;
    }
    .icon-campana {
        position: absolute;
        right: 51px;
        top: 10px;
    }
    .icon-close {
        position: absolute;
        right: 11px;
        top: 9px;
    }
    header {
        background-color: white;
        position: fixed;
        width: 100%;
        box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
    }
    .caja-padre {
        background-color: white;
        height: 100vh;
        font-family: Montserrat;
    }
    .ul-filter {
        width: 140px;
        background-color: #f7f7f7;
        height: 100vh;
        overflow: scroll;
        padding-top: 60px;
    }
    li {
        height: 59px;
        border-bottom: solid black 1px;
        display: flex;
        align-items: center;
        padding-left: 10px;
        font-weight: 300;
    }
    .icon {
        width: 40px;
    }
</style>
