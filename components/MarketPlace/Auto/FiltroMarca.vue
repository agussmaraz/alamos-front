<template>
    <section>
        <input type="text" class="w-full h-8 rounded-md border border-gray-700 mb-2" />
        <h3 class="font-bold mb-3">Marcas más buscadas</h3>
        <article class="flex flex-wrap">
            <div class="flex flex-col items-center ml-2 mb-2">
                <img src="~/assets/img/Chevrolet.jpg" alt="" />
                <p>Chevrolet</p>
            </div>
            <div class="flex flex-col items-center ml-2 mb-2">
                <img src="~/assets/img/Chevrolet.jpg" alt="" />
                <p>Chevrolet</p>
            </div>
            <div class="flex flex-col items-center ml-2 mb-2">
                <img src="~/assets/img/Chevrolet.jpg" alt="" />
                <p>Chevrolet</p>
            </div>
            <div class="flex flex-col items-center ml-2 mb-2">
                <img src="~/assets/img/Chevrolet.jpg" alt="" />
                <p>Chevrolet</p>
            </div>
            <div class="flex flex-col items-center ml-2 mb-2">
                <img src="~/assets/img/Chevrolet.jpg" alt="" />
                <p>Chevrolet</p>
            </div>
            <div class="flex flex-col items-center ml-2 mb-2">
                <img src="~/assets/img/Chevrolet.jpg" alt="" />
                <p>Chevrolet</p>
            </div>
        </article>
        <h3 class="font-bold mb-3 mt-6">Todas las marcas</h3>
        <article class="caja-scroll">
            <ul>
                <li class="checkbox px-2">
                    <input type="checkbox" name="bogota" />
                    <label>Alfa romeo (x)</label>
                </li>
                <li class="checkbox px-2">
                    <input type="checkbox" name="bogota" />
                    <label>Audi (x)</label>
                </li>
                <li class="checkbox px-2">
                    <input type="checkbox" name="bogota" />
                    <label>BMW (x)</label>
                </li>
                <li class="checkbox px-2">
                    <input type="checkbox" name="bogota" />
                    <label>Baic (x)</label>
                </li>
                <li class="checkbox px-2">
                    <input type="checkbox" name="bogota" />
                    <label>Chevrolet (x)</label>
                </li>
                <li class="checkbox px-2">
                    <input type="checkbox" name="bogota" />
                    <label>Citroen (x)</label>
                </li>
                <li class="checkbox px-2">
                    <input type="checkbox" name="bogota" />
                    <label>Chysler (x)</label>
                </li>
                <li class="checkbox px-2">
                    <input type="checkbox" name="bogota" />
                    <label>Daiahtsu (x)</label>
                </li>
                <li class="checkbox px-2">
                    <input type="checkbox" name="bogota" />
                    <label>Fiat (x)</label>
                </li>
                <li class="checkbox px-2">
                    <input type="checkbox" name="bogota" />
                    <label>Ford (x)</label>
                </li>
                <li class="checkbox px-2">
                    <input type="checkbox" name="bogota" />
                    <label>Honda (x)</label>
                </li>
                <li class="checkbox px-2">
                    <input type="checkbox" name="bogota" />
                    <label>Hyundai (x)</label>
                </li>
            </ul>
        </article>
        <h3 class="font-bold mb-3 mt-6">Lineas</h3>
        <article class="caja-scroll">
            <ul>
                <li class="checkbox px-2">
                    <input type="checkbox" name="bogota" />
                    <label>Linea 1</label>
                </li>
                <li class="checkbox px-2">
                    <input type="checkbox" name="bogota" />
                    <label>Linea 1</label>
                </li>
                <li class="checkbox px-2">
                    <input type="checkbox" name="bogota" />
                    <label>Linea 2</label>
                </li>
                <li class="checkbox px-2">
                    <input type="checkbox" name="bogota" />
                    <label>Linea 3</label>
                </li>
                <li class="checkbox px-2">
                    <input type="checkbox" name="bogota" />
                    <label>Linea 4</label>
                </li>
                <li class="checkbox px-2">
                    <input type="checkbox" name="bogota" />
                    <label>Linea 5</label>
                </li>
                <li class="checkbox px-2">
                    <input type="checkbox" name="bogota" />
                    <label>Linea 6</label>
                </li>
                <li class="checkbox px-2">
                    <input type="checkbox" name="bogota" />
                    <label>Linea 7</label>
                </li>
                <li class="checkbox px-2">
                    <input type="checkbox" name="bogota" />
                    <label>Linea 8</label>
                </li>
                <li class="checkbox px-2">
                    <input type="checkbox" name="bogota" />
                    <label>Linea 9</label>
                </li>
                <li class="checkbox px-2">
                    <input type="checkbox" name="bogota" />
                    <label>Linea 10</label>
                </li>
                <li class="checkbox px-2">
                    <input type="checkbox" name="bogota" />
                    <label>Linea 11</label>
                </li>
            </ul>
        </article>
    </section>
</template>

<script>
    export default {};
</script>

<style scoped>
    section {
        width: 63%;
        height: 100vh;
        overflow: scroll;
        padding-bottom: 20px;
    }
    div {
        width: 73px;
        height: 55px;
        border: solid #c4c4c4 2px;
        border-radius: 5px;
    }
    p {
        font-size: 9px;
    }
    .caja-scroll {
        width: 230px;
    }
    ul {
        overflow: scroll;
        height: 220px;
        border: solid #c4c4c4 1px;
        border-radius: 8px;
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
