<template>
    <section class="p-3 flex justify-between">
        <div @click.prevent="open()">
            <IconMenu class="w-8 h-8 cursor-pointer" />
        </div>
        <article @click.prevent="close()">
            <NavLeft class="absolute top-0 left bg-white" :class="openMenu ? 'open-menuLeft' : null" :status="openMenu" />
        </article>
        <div>
            <input type="text" class="w-64 h-8 bg-white rounded-2xl p-2 pl-8 relative outline-none" placeholder="Buscar" />
            <IconBuscar1 class="absolute w-5 h-5 search" />
        </div>
        <IconCampana class="w-8 h-8 text-gray-600" />
    </section>
</template>

<script>
    export default {
        name: 'Nav',
        data() {
            return {
                openMenu: false,
            };
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
    .search {
        top: 19px;
        left: 100px;
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
