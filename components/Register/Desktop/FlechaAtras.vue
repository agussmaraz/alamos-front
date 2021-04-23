<template>
    <section>
        <div class="contenido hidden lg:flex lg:flex-row lg:block lg:color-blue lg:pt-4">
            <div class="arrow lg:text-2xl">&#10140;</div>
            <p class="arrowP">Atras</p>
        </div>
    </section>
</template>

<style scoped>
    .contenido {
        padding-right: 230px;
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
