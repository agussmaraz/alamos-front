<template>
    <section>
        <article class="marcas">
            <nav class="div-nav flex items-center">
                <IconArrow class="icon-arrow w-5 h-5 ml-2" />
                <h1 class="ml-12">Selecciona una Marca</h1>
            </nav>
            <article>
                <div class="mt-3 flex justify-center relative">
                    <input type="text" class="rounded-2xl h-8" />
                    <IconSearch2 class="absolute icon-buscador w-5 h-5" />
                </div>
                <div class="flex flex-col justify-center items-center">
                    <h3 class="font-bold mt-3">Marcas populares</h3>
                    <article class="flex w-full justify-around items-center art-marcas mt-3">
                        <div class="marcas-populares relative">
                            <img src="~assets/img/Mazda.jpg" alt="" class="absolute img" />
                        </div>
                        <div class="marcas-populares relative">
                            <img src="~assets/img/chevrolet.jpg" alt="" class="absolute img2" />
                        </div>
                        <div class="marcas-populares relative">
                            <img src="~assets/img/Mazda.jpg" alt="" class="absolute img" />
                        </div>
                        <div class="marcas-populares relative">
                            <img src="~assets/img/chevrolet.jpg" alt="" class="absolute img2" />
                        </div>
                    </article>
                    <h3 class="font-bold my-2">Todas las marcas</h3>
                </div>
            </article>
        </article>
        <article>
            <ul class="overflow-y-auto">
                <li class="cursor-pointer" @click="changeComponent">Primero</li>
                <li class="cursor-pointer" @click="changeComponent">Audi</li>
                <li class="cursor-pointer" @click="changeComponent">Audi</li>
                <li class="cursor-pointer" @click="changeComponent">Audi</li>
                <li class="cursor-pointer" @click="changeComponent">Audi</li>
                <li class="cursor-pointer" @click="changeComponent">Audi</li>
                <li class="cursor-pointer" @click="changeComponent">Audi</li>
                <li class="cursor-pointer" @click="changeComponent">Audi</li>
                <li class="cursor-pointer" @click="changeComponent">Audi</li>
                <li class="cursor-pointer" @click="changeComponent">Audi</li>
                <li class="cursor-pointer" @click="changeComponent">Audi</li>
                <li class="cursor-pointer" @click="changeComponent">Audi</li>
                <li class="cursor-pointer" @click="changeComponent">Audi</li>
                <li class="cursor-pointer" @click="changeComponent">Audi</li>
            </ul>
        </article>
    </section>
</template>

<script>
    export default {
        name: 'Marca',
        props: {
            changeComponent: {
                type: Function,
                required: true,
            },
        },
    };
</script>

<style scoped>
    ul {
        height: 490px;
        padding-top: 252px;
    }
    li {
        border-bottom: solid #c4c4c4 1px;
        padding-left: 17px;
        padding-right: 17px;
        padding: 10px;
        display: flex;
        justify-content: center;
        font-family: Montserrat;
        cursor: pointer;
    }
    .marcas {
        width: 100%;
        background-color: white;
        position: fixed;
        box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
        border-top-right-radius: 8px;
        border-top-left-radius: 8px;
    }
    h1 {
        font-weight: bold;
        display: flex;
        justify-content: center;
    }
    .div-nav {
        background-color: white;
        box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
        height: 54px;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
    }
    .icon-arrow {
        fill: #353535;
    }
    input {
        border: solid #747474 1px;
        width: 220px;
    }
    .icon-buscador {
        left: 60px;
        top: 5px;
    }
    .marcas-populares {
        width: 65px;
        height: 65px;
        background: #ffffff;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
        border-radius: 4px;
    }
    .art-marcas {
        width: 95%;
    }
    .img {
        left: 10px;
        top: 9px;
    }
    .img2 {
        left: 16px;
        top: 16px;
    }
</style>
