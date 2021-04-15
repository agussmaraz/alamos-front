<template>
    <section class="navbar__top p-3 flex justify-between items-center">
        <div @click.prevent="goBack">
            <IconArrow class="w-6 h-6 cursor-pointer" />
        </div>

        <div class="title">{{ active_page }}</div>
        <IconCampana class="w-6 h-6 text-gray-600" />
    </section>
</template>

<script>
    import { mapState } from 'vuex';

    export default {
        name: 'Nav',
        data() {
            return {
                openMenu: false,
            };
        },
        computed: {
            ...mapState({
                active_page: (state) => state.config.active_page,
            }),
        },
        methods: {
            goBack() {
                this.$router.back();
            },
        },
    };
</script>

<style scoped>
    .navbar__top {
        height: 50px;
    }

    .title {
        font-family: Montserrat;
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 20px;
        display: flex;
        align-items: center;
        text-align: center;
    }
    .search {
        top: 19px;
        left: 98px;
        fill: #747474;
    }
    .left {
        width: 0;
    }
    svg {
        fill: #747474;
    }
    .open-menuLeft {
        width: 300px;
        transition: 300ms;
        transition-timing-function: ease-out;
    }
    section {
        background: #eaebef;
    }
</style>
