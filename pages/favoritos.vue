<template>
    <section class="fixed w-full fav-list" :class="favoritos.length === 0 ? 'fav-list' : false">
        <nav class="flex justify-between items-center">
            <nuxt-link to="/home">
                <IconArrow class="icon-arrow w-4 h-4 cursor-pointer" />
            </nuxt-link>
            <div>
                <h2 class="font-bold">Favoritos</h2>
            </div>
            <IconCampana class="w-6 h-6 icon-campana" />
        </nav>
        <section class="flex flex-col items-center justify-center">
            <div class="order flex items-center px-3">
                <IconOrder />
                <p class="ml-3 cursor-pointer" @click="openModal({ modal: 'ordenar' })">Ordenar por:</p>
            </div>
            <FavVacio v-if="favoritos.length === 0" />
            <FavList v-else />
            <button class="mt-5" @click="addNFav">Agregar favs</button>
        </section>

        <Footer />
        <section v-if="ordenar" class="absolute inset-0 flex justify-center">
            <article class="modal z-10" @click="closeModal({ modal: 'ordenar' })"></article>
            <FavOrder class="consejos-modal absolute z-20" />
        </section>
    </section>
</template>

<script>
    import { mapState, mapActions } from 'vuex';

    export default {
        computed: {
            ...mapState({
                favoritos: (state) => state.favoritos.all,
                ordenar: (state) => state.modal.modal.ordenar,
            }),
        },
        methods: {
            ...mapActions({
                addFavorito: 'favoritos/add',
                openModal: 'modal/openModal',
                closeModal: 'modal/closeModal',
            }),
            addNFav() {
                const fav = {
                    // id: this.favoritos[this.favoritos.length - 1].id + 1,
                    linea: 'Outback 3.6R ES',
                    marca: 'Subaru',
                    año: 2019,
                    precio: '72.000.000',
                    lugar: 'Bogotá D.C',
                    dueño: 'Dueño Directo',
                };

                this.addFavorito(fav);
            },
        },
    };
</script>

<style scoped>
    .modal {
        position: relative;
        background-color: rgba(0, 0, 0, 0.7);
        width: 100%;
        height: 100%;
    }
    .consejos-modal {
        left: 50%;
        transform: translateX(-50%);
        border-radius: 8px;
        padding: 17px;
        top: 209px;
        width: 70%;
    }
    .icon-campana {
        fill: #747474;
    }
    .icon-arrow {
        fill: #353535;
    }
    nav {
        background-color: #eaebef;
        padding: 10px;
    }
    h2 {
        font-size: 15px;
    }
    .fav-list {
        background-color: #f2efef;
        height: 100vh;
    }
    .order {
        width: 100%;
        height: 60px;
        background-color: white;
    }
</style>
