<template>
    <section class="flex flex-col items-center">
        <h1 class="my-5">Tu Placa</h1>
        <p class="mb-5 parrafo">Ingresa la placa de tu vehículo</p>
        <article class="placa flex items-center justify-around border border-2-black relative">
            <input
                v-model="letras"
                maxlength="3"
                type="text"
                onkeyup="if
      (this.value.length == this.getAttribute('maxlength')) inputNum.focus()"
                placeholder="AAA"
            />
            <input id="inputNum" v-model="numeros" maxlength="3" type="text" placeholder="000" :onkeyup="completarPlaca(numeros)" />
            <div class="tornillo1"></div>
            <div class="tornillo2"></div>
            <div class="tornillo3"></div>
            <div class="tornillo4"></div>
            <div class="tornillo5"></div>
        </article>
        <div class="w-64 mt-10 text-center">
            <span>Sólo se motrará el</span>
            <span> último dígito </span>
            <span class="parrafo">de la placa en el Marketplace</span>
        </div>
        <div v-if="buttonActive" class="bg-rojo w-48 py-2 mt-10 text-center rounded-3xl shadow-lg m-auto button-sig">
            <nuxt-link to="/ventas/automoviles/formulario" class="a w-full h-full">Siguiente</nuxt-link>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'Auto',
        data() {
            return {
                numeros: '',
                letras: '',
                buttonActive: false,
            };
        },
        methods: {
            completarPlaca(param) {
                if (param.length === 3 && this.letras.length === 3) {
                    this.buttonActive = true;
                }
            },
        },
    };
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200&display=swap');

    section {
        background-color: white;
    }
    .parrafo {
        font-family: 'Montserrat', sans-serif;
    }
    .a {
        color: white;
    }
    h1 {
        color: #444343;
        font-size: 20px;
        font-weight: bold;
    }
    input {
        width: 45%;
        height: 45%;
        font-size: 50px;
        font-weight: 600;
        outline: none;
        text-transform: uppercase;
    }
    ::placeholder {
        font-size: 50px;
        color: #8e8e8e;
    }
    .placa {
        width: 239px;
        height: 109px;
        border: 2px solid #353535;
        box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
        border-radius: 6px;
    }
    .tornillo1 {
        width: 8px;
        height: 8px;
        border: 0.5px solid #dadada;
        box-shadow: inset 1px 2px 3px rgba(0, 0, 0, 0.5);
        border-radius: 100%;
        position: absolute;
        top: 5px;
        left: 5px;
    }
    .tornillo2 {
        width: 8px;
        height: 8px;
        border: 0.5px solid #dadada;
        box-shadow: inset 1px 2px 3px rgba(0, 0, 0, 0.5);
        border-radius: 100%;
        position: absolute;
        top: 5px;
        right: 5px;
    }
    .tornillo3 {
        width: 8px;
        height: 8px;
        border: 0.5px solid #dadada;
        box-shadow: inset 1px 2px 3px rgba(0, 0, 0, 0.5);
        border-radius: 100%;
        position: absolute;
        bottom: 5px;
        left: 5px;
    }
    .tornillo4 {
        width: 8px;
        height: 8px;
        border: 0.5px solid #dadada;
        box-shadow: inset 1px 2px 3px rgba(0, 0, 0, 0.5);
        border-radius: 100%;
        position: absolute;
        bottom: 5px;
        right: 5px;
    }
    .tornillo5 {
        width: 8px;
        height: 8px;
        border: 0.5px solid #dadada;
        box-shadow: inset 1px 2px 3px rgba(0, 0, 0, 0.5);
        border-radius: 100%;
        position: absolute;
        left: 110px;
    }
</style>
