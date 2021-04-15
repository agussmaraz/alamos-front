<template>
    <article class="flex">
        <ul class="ul-filter">
            <li :class="component == 'Moto' ? 'li-seleccionado' : null" @click="change('Moto')"><IconLogoMoto class="mr-2" />Tipo de moto</li>
            <li :class="component == 'Ciudad' ? 'li-seleccionado' : null" @click="change('Ciudad')"><IconCiudad class="mr-2" /> Ciudad</li>
            <li :class="component == 'Marca' ? 'li-seleccionado' : null" @click="change('Marca')"><IconMarca class="mr-2" /> Marca y Linea</li>
            <li :class="component == 'Calendar' ? 'li-seleccionado' : null" @click="change('Calendar')"><IconCalendar class="mr-2" /> Modelo</li>
            <li :class="component == 'Condicion' ? 'li-seleccionado' : null" @click="change('Condicion')"><IconCondicion class="mr-2" /> Condición</li>
            <li :class="component == 'Vendedor' ? 'li-seleccionado' : null" @click="change('Vendedor')"><IconVendedor class="mr-2" />Vendedor</li>
            <li :class="component == 'Precio' ? 'li-seleccionado' : null" @click="change('Precio')"><IconPrecio class="mr-2" />Precio</li>
            <li :class="component == 'Km' ? 'li-seleccionado' : null" @click="change('Km')"><IconKilometraje class="mr-2" />Kilometraje</li>
            <li :class="component == 'Placa' ? 'li-seleccionado' : null" @click="change('Placa')"><IconPlaca2 class="mr-2" /> Placa</li>
            <li :class="component == 'Motor' ? 'li-seleccionado' : null" @click="change('Motor')"><IconMotor class="mr-2" /> Motor</li>
            <li><IconCilindraje class="mr-2" /> Cilindraje</li>
            <li :class="component == 'Transmision' ? 'li-seleccionado' : null" @click="change('Transmision')"><IconTransmision2 class="mr-2" />Transmision</li>
            <li :class="component == 'Arranque' ? 'li-seleccionado' : null" @click="change('Arranque')"><IconArranque2 class="mr-2" />Arranque</li>
            <li :class="component == 'Alimentacion' ? 'li-seleccionado' : null" @click="change('Alimentacion')"><IconAlimentacion class="mr-2 w-12" />Sistema de alimentación</li>
            <li :class="component == 'Combustible' ? 'li-seleccionado' : null" @click="change('Combustible')"><IconCombustible class="mr-2" />Combustible</li>
            <li :class="component == 'Color' ? 'li-seleccionado' : null" @click="change('Color')"><IconColor class="mr-2" />Color</li>
            <li><IconCapacidad class="mr-2 icon" />Peso motocicleta</li>
            <li :class="component == 'Pasajeros' ? 'li-seleccionado' : null" @click="change('Pasajeros')"><IconPasajeros class="mr-2 icon" /> Capacidad de pasajeros</li>
            <li :class="component == 'Items' ? 'li-seleccionado' : null" @click="change('Items')"><IconItems class="mr-2" />Items moto</li>
            <li>Único dueño</li>
            <li>Reporte vehicular</li>
            <li>Con video</li>
        </ul>
        <FiltroMoto v-if="component == 'Moto'" class="pt-20 pl-4" />
        <FiltroCiudad v-if="component == 'Ciudad'" class="pt-20 pl-4" />
        <FiltroMarca v-if="component == 'Marca'" class="pt-20 pl-4" />
        <FiltroCalendar v-if="component == 'Calendar'" class="pt-20 pl-4" />
        <FiltroCondicion v-if="component == 'Condicion'" class="pt-20 pl-4" />
        <FiltroVendedor v-if="component == 'Vendedor'" class="pt-20 pl-4" />
        <FiltroPrecio v-if="component == 'Precio'" class="pt-20 pl-4" />
        <FiltroKm v-if="component == 'Km'" class="pt-20 pl-4" />
        <FiltroMotoPlaca v-if="component == 'Placa'" class="pt-20 pl-4" />
        <FiltroMotor v-if="component == 'Motor'" class="pt-20 pl-4" />
        <FiltroTransMoto v-if="component == 'Transmision'" class="pt-20 pl-4" />
        <FiltroMotoArranque v-if="component == 'Arranque'" class="pt-20 pl-4" />
        <FiltroAlimentacion v-if="component == 'Alimentacion'" class="pt-20 pl-4" />
        <FiltroCombustible v-if="component == 'Combustible'" class="pt-20 pl-4" />
        <FiltroColor v-if="component == 'Color'" class="pt-20 pl-4" />
        <FiltroMotoPasajeros v-if="component == 'Pasajeros'" class="pt-20 pl-4" />
        <FiltroItemsMoto v-if="component == 'Items'" class="pt-20 pl-4" />
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
                component: 'Moto',
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
        fill: none;
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
        padding-bottom: 67px;
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
