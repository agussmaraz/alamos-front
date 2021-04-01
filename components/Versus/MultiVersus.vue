<template>
    <section class="flex items-center justify-between">
        <article v-for="index in 3" :key="index">
            <div v-if="comparaciones[index - 1]" class="div-bg relative">
                <span class="cursor-pointer" @click="deleteItem(comparaciones[index - 1].id)">
                    <IconClose2 class="absolute icon-close" />
                </span>
                <img :src="comparaciones[index - 1].img" alt="auto" class="auto-img" />
            </div>
            <div v-else class="flex items-center justify-center">
                <IconAutoGris />
            </div>
        </article>
        <nuxt-link to="/versus" class="caja-arrow">
            <IconArrow2 class="icon-arrow" />
        </nuxt-link>
    </section>
</template>

<script>
    import { mapState, mapActions } from 'vuex';
    export default {
        computed: {
            ...mapState({
                comparaciones: (state) => state.versus.comparacion,
            }),
        },
        methods: {
            ...mapActions({
                deleteItem: 'versus/eliminate',
            }),
        },
    };
</script>

<style scoped>
    div {
        height: 79px;
        width: 92px;
        border-radius: 8px;
        background-color: #f2efef;
    }
    .caja-arrow {
        width: 64px;
        height: 79px;
        background-color: #ed1a3b;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .icon-arrow {
        transform: rotate(270deg);
        width: 40px;
        fill: white;
    }
    .auto-img {
        height: 100%;
        border-radius: 8px;
    }
    .icon-close {
        top: -12px;
        right: -10px;
    }
</style>
