<template>
    <div>
        <ul>
            <Chat v-for="publication in Object.values(publications)" :key="publication.id" :publication="publication" />
        </ul>
    </div>
</template>

<script>
    import { mapState } from 'vuex';

    export default {
        name: 'ChatsList',
        computed: {
            ...mapState({
                publications: (state) => state.publications.all,
            }),
        },
    };
</script>

<style></style>
