<template>
    <section class="selects is-active rounded-tr-lg rounded-br-lg rounded-bl-lg">
        <main class="margin w-full m-auto flex flex-row pt-5">
            <div class="select mt-2.5">
                <select class="option rounded-l-lg" name="Todas-Las-Marcas">
                    <option selected value="marcas">Todas las Marcas</option>
                    <option value="autoY">MarcaX</option>
                </select>
            </div>
            <div class="select mt-2.5">
                <select class="option" name="Todas-Las-Lineas">
                    <option selected value="lineas">Todas las líneas</option>
                    <option value="">LineaX</option>
                </select>
            </div>
            <div class="select mt-2.5">
                <select class="option" name="Modelo">
                    <option selected value="modelodelAuto">Modelo</option>
                    <option value="">ModeloX</option>
                </select>
            </div>
            <div class="select mt-2.5">
                <select class="option rounded-r-lg" name="Precio-Max">
                    <option selected value="Precio-Maximo">Precio Máximo</option>
                    <option value="">PrecioX</option>
                </select>
            </div>
            <div class="busqueda mt-2.5 w-full">
                <div class="lupa h-full">
                    <button class="h-full w-full" type="submit">
                        <div class="iconoL">
                            <IconLupa />
                        </div>
                    </button>
                </div>
            </div>
        </main>
    </section>
</template>

<style scoped>
    .selects {
        height: 100px;
        width: 100%;
        margin-left: -10%;
    }
    .margin {
        margin-left: 5%;
        height: 72%;
    }
    .select {
        width: 20%;
    }
    .option {
        width: 100%;
        height: 100%;
        margin-top: 1.5%;
        border: solid 1px #9c9c9c;
        padding-left: 5px;
    }
    .busqueda {
        margin-left: 3%;
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
