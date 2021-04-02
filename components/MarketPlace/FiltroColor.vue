<template>
    <section class="px-3">
        <input type="text" class="w-full h-8 mb-3 border border-gray-700 rounded-md" />
        <ul class="space-y-3">
            <li class="checkbox">
                <input type="checkbox" name="usado" />
                <label>Amarillo (x)</label>
            </li>
            <li class="checkbox">
                <input type="checkbox" name="usado" />
                <label>Azul (x)</label>
            </li>
            <li class="checkbox">
                <input type="checkbox" name="usado" />
                <label>Beige (x)</label>
            </li>
            <li class="checkbox">
                <input type="checkbox" name="usado" />
                <label>Blanco (x)</label>
            </li>
            <li class="checkbox">
                <input type="checkbox" name="usado" />
                <label>Café (x)</label>
            </li>
            <li class="checkbox">
                <input type="checkbox" name="usado" />
                <label>Camuflafo (x)</label>
            </li>
            <li class="checkbox">
                <input type="checkbox" name="usado" />
                <label>Crema (x)</label>
            </li>
            <li class="checkbox">
                <input type="checkbox" name="usado" />
                <label>Dorado (x)</label>
            </li>
            <li class="checkbox">
                <input type="checkbox" name="usado" />
                <label>Fucsia (x)</label>
            </li>
            <li class="checkbox">
                <input type="checkbox" name="usado" />
                <label>Gris (x)</label>
            </li>
            <li class="checkbox">
                <input type="checkbox" name="usado" />
                <label>Lila (x)</label>
            </li>
            <li class="checkbox">
                <input type="checkbox" name="usado" />
                <label>Morado (x)</label>
            </li>
            <li class="checkbox">
                <input type="checkbox" name="usado" />
                <label>Naranja (x)</label>
            </li>
            <li class="checkbox">
                <input type="checkbox" name="usado" />
                <label>Negro (x)</label>
            </li>
            <li class="checkbox">
                <input type="checkbox" name="usado" />
                <label>Plateado (x)</label>
            </li>
            <li class="checkbox">
                <input type="checkbox" name="usado" />
                <label>Rojo (x)</label>
            </li>
            <li class="checkbox">
                <input type="checkbox" name="usado" />
                <label>Rosado (x)</label>
            </li>
            <li class="checkbox">
                <input type="checkbox" name="usado" />
                <label>Turquesa (x)</label>
            </li>
            <li class="checkbox">
                <input type="checkbox" name="usado" />
                <label>Verde (x)</label>
            </li>
            <li class="checkbox">
                <input type="checkbox" name="usado" />
                <label>Vinotinto (x)</label>
            </li>
            <li class="checkbox">
                <input type="checkbox" name="usado" />
                <label>Otro (x)</label>
            </li>
        </ul>
    </section>
</template>

<script>
    export default {};
</script>

<style scoped>
    h3 {
        color: #353535;
    }
    section {
        width: 65%;
        height: 100vh;
        overflow: scroll;
        padding-bottom: 20px;
    }
    .checkbox {
        position: relative;
        display: block;
    }
    .checkbox input[type='checkbox'] {
        width: auto;
        opacity: 0.00000001;
        position: absolute;
        left: 0;
        margin-left: -20px;
    }
    .checkbox label {
        position: relative;
    }
    .checkbox label:before {
        content: '';
        position: absolute;
        right: 0;
        top: 0;
        width: 20px;
        height: 20px;
        transition: transform 0.28s ease;
        border-radius: 5px;
        border: 1px solid #353535;
    }
    .checkbox label:after {
        content: '';
        display: block;
        width: 18px;
        height: 10px;
        border-bottom: 2px solid #ed1a3b;
        border-left: 2px solid #ed1a3b;
        transform: rotate(-45deg) scale(0);
        -webkit-transform: rotate(-45deg) scale(0);
        transition: transform ease 0.25s;
        will-change: transform;
        position: absolute;
        top: 9px;
        right: 8px;
    }
    .checkbox input[type='checkbox']:checked ~ label::before {
        background-color: white;
        color: #ed1a3b;
    }
    .checkbox input[type='checkbox']:checked ~ label::after {
        -webkit-transform: rotate(-45deg) scale(1);
        transform: rotate(-45deg) scale(1);
    }
    .checkbox label {
        min-height: 34px;
        display: flex;
        margin-bottom: 0;
        font-weight: normal;
        cursor: pointer;
    }
    .checkbox label span {
        position: absolute;
        top: 50%;
        -webkit-transform: translateY(-50%);
        transform: translateY(-50%);
    }
    .checkbox input[type='checkbox']:focus + label::before {
        outline: 0;
    }
</style>
