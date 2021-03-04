<template>
    <section class="p-3 flex justify-between">
        <div @click.prevent="open()">
            <IconArrow class="w-8 h-8 cursor-pointer" />
        </div>

        <div class="title">{{ active_page }}</div>
        <IconCampana class="w-8 h-8 text-gray-600" />
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
            open() {
                this.openMenu = true;
            },
            close() {
                this.openMenu = false;
            },
        },
    };
</script>

<style scoped>
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
