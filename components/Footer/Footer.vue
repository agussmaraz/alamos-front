<template>
    <section class="text-gray-600 w-full fixed bottom-0 shadow pt-3 z-10">
        <div class="h-16 rounded-full absolute div-vender z-0">
            <nuxt-link to="/ventas">
                <IconCarSale class="w-10 h-10 cursor-pointer" />
            </nuxt-link>
        </div>
        <ul class="flex justify-between items-center px-2">
            <li class="li">
                <nuxt-link to="/home">
                    <IconHome class="w-6 h-6" />
                    Inicio
                </nuxt-link>
            </li>
            <nuxt-link to="/favoritos" class="li">
                <IconFav class="w-6 h-6" />
                Favoritos
            </nuxt-link>
            <nuxt-link to="/ventas" class="relative mt-5 cursor-pointer">Vender</nuxt-link>
            <li class="li">
                <IconChat class="w-6 h-6" />
                Chats
            </li>
            <nuxt-link class="li" to="/tienda-virtual">
                <IconMarket class="w-6 h-6" />
                Marketplace
            </nuxt-link>
        </ul>
    </section>
</template>

<script>
    export default {
        name: 'Footer',
    };
</script>

<style scoped>
    .li {
        font-size: 12px;
        display: flex;
        flex-flow: column;
        align-items: center;
    }
    svg {
        fill: #9b9898;
    }
    section {
        background-color: white;
        box-shadow: 0px -2px 4px rgba(0, 0, 0, 0.25);
    }
    .div-vender {
        left: 48%;
        transform: translateX(-50%);
        text-align: center;
        top: -22px;
        background-color: white;
        padding-left: 15px;
        padding-top: 13px;
        width: 68px;
        box-shadow: 0px -4px 3px -1px rgba(0, 0, 0, 0.25);
    }
</style>
