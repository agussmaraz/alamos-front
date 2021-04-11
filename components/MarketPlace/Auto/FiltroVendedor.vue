<template>
    <section>
        <h3 class="font-bold mb-4">Tipo de vendedor</h3>
        <ul class="space-y-4">
            <li class="checkbox">
                <input type="checkbox" name="usado" />
                <label>Dueño directo(x)</label>
            </li>
            <li class="checkbox">
                <input type="checkbox" name="nuevo" />
                <label>Tienda virtual (x)</label>
            </li>
        </ul>
    </section>
</template>

<script>
    export default {};
</script>

<style scoped>
    section {
        width: 60%;
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
