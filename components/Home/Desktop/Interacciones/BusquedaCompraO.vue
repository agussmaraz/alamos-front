<template>
    <section class="selects is-active rounded-tr-lg rounded-br-lg rounded-bl-lg">
        <section class="contenedor2 w-full m-auto flex flex-row pt-3">
            <div class="w-2/5 ml-8 mt-2.5">
                <select class="option1 focus:outline-none rounded-md" name="clase_de_vehiculo">
                    <option value="Toda_clase_de_vehiculos">Toda clase de vehículos</option>
                    <option value="">X vehículo</option>
                </select>
            </div>
        </section>
        <section class="contenedor1 w-full m-auto flex flex-row pt-4">
            <div class="select mt-2.5">
                <select class="option focus:outline-none rounded-l-lg" name="Todas-Las-Marcas">
                    <option selected value="marcas">Todas las Marcas</option>
                    <option value="autoY">MarcaX</option>
                </select>
            </div>
            <div class="select mt-2.5">
                <select class="option focus:outline-none" name="Todas-Las-Lineas">
                    <option selected value="lineas">Todas las líneas</option>
                    <option value="">LineaX-moto</option>
                </select>
            </div>
            <div class="select mt-2.5">
                <select class="option focus:outline-none" name="Modelo">
                    <option selected value="modelodelAuto">Modelo</option>
                    <option value="">ModeloX-moto</option>
                </select>
            </div>
            <div class="select mt-2.5">
                <select class="option focus:outline-none rounded-r-lg" name="Precio-Max">
                    <option selected value="Precio-Maximo">Precio Máximo</option>
                    <option value="">PrecioX-moto</option>
                </select>
            </div>
            <div class="busqueda mt-2.5 ml-12 w-full">
                <div class="lupa h-full">
                    <button class="h-full w-full" type="submit">
                        <div class="iconoL">
                            <IconLupa />
                        </div>
                    </button>
                </div>
            </div>
        </section>
    </section>
</template>

<style scoped>
    main {
        background-color: rgba(0, 0, 0, 0.801);
        width: 110%;
    }
    .selects {
        height: 150px;
        width: 100%;
        margin-left: -10%;
    }
    .contenedor1 {
        margin-left: 3%;
        height: 45%;
    }
    .contenedor2 {
        height: 42%;
    }
    .select {
        width: 20%;
    }
    .option1 {
        width: 80%;
        height: 100%;
        margin-top: 1.5%;
        padding-left: 5px;
    }
    .option {
        width: 100%;
        height: 100%;
        margin-top: 1.5%;
        border: solid 1px #9c9c9c;
        padding-left: 5px;
    }
    .busqueda {
        width: 8%;
    }
    .lupa {
        height: 105%;
        width: 95%;
        background-color: #ed1a3b;
        border-radius: 9px;
    }
    .iconoL {
        padding-left: 30%;
    }
</style>
