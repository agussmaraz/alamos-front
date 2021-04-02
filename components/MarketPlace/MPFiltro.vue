<template>
    <section class="caja-padre w-full fixed">
        <header class="p-3">
            <h1 class="font-bold">Categoria:</h1>
        </header>
        <article class="flex">
            <ul class="ul-filter">
                <li @click="change('Ciudad')"><IconCiudad class="mr-2" /> Ciudad</li>
                <li @click="change('Marca')"><IconMarca class="mr-2" /> Marca y Linea</li>
                <li><IconCalendar class="mr-2" /> Modelo</li>
                <li><IconCondicion class="mr-2" /> Condición</li>
                <li><IconVendedor class="mr-2" />Vendedor</li>
                <li><IconCarroceria class="mr-2" />Carrocería</li>
                <li><IconPrecio class="mr-2" />Precio</li>
                <li><IconKilometraje class="mr-2" />Kilometraje</li>
                <li><IconPlaca2 class="mr-2" /> Placa</li>
                <li><IconCilindraje class="mr-2" /> Cilindraje</li>
                <li><IconTransmision class="mr-2" />Transmision</li>
                <li><IconCaja2 class="mr-2" />Caja</li>
                <li><IconDireccion class="mr-2" />Dirección</li>
                <li><IconCombustible class="mr-2" />Combustible</li>
                <li><IconColor class="mr-2" />Color</li>
                <li><IconPuertas class="mr-2" />Puertas</li>
                <li><IconPasajeros class="mr-2 icon" /> Capacidad de pasajeros</li>
                <li><IconCapacidad class="mr-2 icon" />Capacidad de carga</li>
                <li><IconItems class="mr-2" />Items carro</li>
                <li>Único dueño</li>
                <li>Servicio público</li>
                <li>Blindado</li>
                <li>Reporte vehicular</li>
                <li>Con video</li>
            </ul>
            <FiltroCiudad v-if="component == 'Ciudad'" class="pt-20 pl-4" />
            <FiltroMarca v-if="component == 'Marca'" class="pt-20 pl-4" />
        </article>
    </section>
</template>

<script>
    export default {
        name: 'MPFiltro',
        data() {
            return {
                component: 'Ciudad',
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
    header {
        background-color: white;
        position: fixed;
        width: 100%;
        box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
    }
    .caja-padre {
        background-color: white;
        height: 100vh;
    }
    .ul-filter {
        width: 140px;
        background-color: #f7f7f7;
        height: 100vh;
        overflow: scroll;
        padding-top: 50px;
    }
    li {
        height: 59px;
        border-bottom: solid black 1px;
        display: flex;
        align-items: center;
        padding-left: 10px;
    }
    .icon {
        width: 40px;
    }
</style>
