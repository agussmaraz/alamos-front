<template>
    <article>
        <h1 class="text-center font-bold text-lg p-4">¿Qué quieres hacer?</h1>
        <section class="flex justify-between items-center px-3 py-6">
            <div>
                <IconSearch2 class="w-8 h-10" />
                Comprar
            </div>
            <div>
                <nuxt-link to="/ventas/">
                    <IconCarSale class="w-8 h-10" />
                    Vender
                </nuxt-link>
            </div>
            <div>
                <IconDocSearch class="w-8 h-10" />
                Consultar
            </div>
            <div>
                <nuxt-link to="/versus">
                    <IconVersus class="w-8 h-10" />
                    Versus
                </nuxt-link>
            </div>
        </section>
    </article>
</template>

<script>
    export default {};
</script>

<style scoped>
    svg {
        fill: #797979;
        margin: 0 auto;
    }
    div {
        background-color: white;
        border-radius: 8px;
        box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.25);
        padding: 5px;
        width: 86px;
        text-align: center;
    }
    section {
        background-color: #f2efef;
    }
</style>
