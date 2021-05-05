<template>
    <section>
        <div class="contenido hidden lg:flex lg:flex-row lg:block lg:color-blue lg:pt-4">
            <div class="arrow lg:text-2xl">&#10140;</div>
            <a class="arrowP pt-0.5 pl-2" href="">Atrás</a>
        </div>
    </section>
</template>

<style scoped>
    .contenido {
        width: 300px;
        padding-bottom: 10%;
        padding-right: 23%;
    }
    .arrow {
        color: #376ca1;
        transform: rotateY(180deg);
    }
    .arrowP {
        color: #376ca1;
        font-size: 22px;
    }
</style>
