<template>
    <section>
        <h3 class="font-bold mb-4">Carrocerías populares</h3>
        <article class="flex flex-wrap justify-around">
            <div class="w-2/5 mb-5 flex justify-center items-center flex-col">
                <IconSedan />
                <p class="uppercase p-marca mt-1">Seda</p>
            </div>
            <div class="w-2/5 mb-5 flex justify-center items-center flex-col">
                <IconHatchback />
                <p class="uppercase p-marca mt-1">Hatchback</p>
            </div>
            <div class="w-2/5 mb-5 flex justify-center items-center flex-col">
                <IconWagon />
                <p class="uppercase p-marca mt-1">Wagon</p>
            </div>
            <div class="w-2/5 mb-5 flex justify-center items-center flex-col">
                <IconPick />
                <p class="uppercase p-marca mt-1">Pick up</p>
            </div>
            <div class="w-2/5 mb-5 flex justify-center items-center flex-col">
                <IconCoupe />
                <p class="uppercase p-marca mt-1">Coupe</p>
            </div>
            <div class="w-2/5 mb-5 flex justify-center items-center flex-col">
                <IconConvertible />
                <p class="uppercase p-marca mt-1">Convertible</p>
            </div>
        </article>
        <h3 class="font-bold my-3">Carrocerías por clase de vehículo</h3>
        <ul>
            <li class="checkbox px-2">
                <input type="checkbox" name="bogota" />
                <label>Break</label>
            </li>
            <li class="checkbox px-2">
                <input type="checkbox" name="bogota" />
                <label>Buggy</label>
            </li>
            <li class="checkbox px-2">
                <input type="checkbox" name="bogota" />
                <label>Convertible</label>
            </li>
            <li class="checkbox px-2">
                <input type="checkbox" name="bogota" />
                <label>Coupé</label>
            </li>
            <li class="checkbox px-2">
                <input type="checkbox" name="bogota" />
                <label>Coupé convertible</label>
            </li>
            <li class="checkbox px-2">
                <input type="checkbox" name="bogota" />
                <label>Hatch back</label>
            </li>
            <li class="checkbox px-2">
                <input type="checkbox" name="bogota" />
                <label>Limosina</label>
            </li>
            <li class="checkbox px-2">
                <input type="checkbox" name="bogota" />
                <label>Sedán</label>
            </li>
            <li class="checkbox px-2">
                <input type="checkbox" name="bogota" />
                <label>Station Wagon</label>
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
        width: 66%;
    }
    ul {
        width: 230px;
        overflow: scroll;
        height: 200px;
        border: solid #c4c4c4 1px;
        border-radius: 8px;
    }
    .p-marca {
        color: #8e8e8e;
    }
    li:nth-child(2n + 1) {
        background-color: #f4f3f5;
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
