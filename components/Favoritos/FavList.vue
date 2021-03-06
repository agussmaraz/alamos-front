<template>
    <div>
        <ul>
            <Favs v-for="fav in favoritos" :key="fav.id" :fav="fav" />
        </ul>
    </div>
</template>

<script>
    import { mapState } from 'vuex';

    export default {
        name: 'FavoritosList',
        computed: {
            ...mapState({
                favoritos: (state) => state.favoritos.all,
            }),
        },
    };
</script>

<style scoped></style>
