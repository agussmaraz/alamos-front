<template>
    <section>
        <h2 class="font-bold text-rojo">Ordenar por:</h2>
        <hr class="my-2" />
        <article>
            <div class="flex items-center mb-3 justify-between">
                <label for="">Agregado recientemente</label>
                <input v-model="elegido" type="radio" name="orden" value="reciente" />
            </div>
            <div class="flex items-center mb-3 justify-between">
                <label for="">Menor precio</label>
                <input v-model="elegido" type="radio" name="orden" value="menor" />
            </div>
            <div class="flex items-center mb-3 justify-between">
                <label for="">Mayor precio</label>
                <input v-model="elegido" type="radio" name="orden" value="mayor" />
            </div>
            <div class="flex items-center mb-3 justify-between">
                <label for="">Orden alfabético</label>
                <input v-model="elegido" type="radio" name="orden" value="alfabetico" />
            </div>
        </article>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                elegido: '',
            };
        },
    };
</script>

<style scoped>
    h2 {
        font-size: 20px;
    }
    hr {
        width: 90%;
        color: #c4c4c4;
    }
    section {
        background-color: white;
    }
    label {
        font-size: 17px;
    }
    input {
        width: 25px;
        height: 25px;
    }
</style>
