<template>
    <div>
        <PubliChatEmpty v-if="Object.values(chats).length === 0" />
        <PubliChatList v-else :chats="Object.values(chats)" />

        <!-- <button @click="newMessage">Agregar notif</button> -->
    </div>
</template>

<script>
    import { mapState, mapActions } from 'vuex';
    import Api from '../../../services/api';

    export default {
        layout: 'submain',
        middleware: ['mustBeLogged'],
        async asyncData({ app, route, store }) {
            if (process.server) {
                const publications = await Api.getPublicationsByUser(store.state.auth.usuario.id);

                for (let i = 0; i < publications.length; i++) {
                    const publication = publications[i];

                    app.store.dispatch('publications/addPublication', publication);
                }

                const active_publication = publications.find((publication) => publication.id === Number(route.params.publiId));

                app.store.dispatch('publications/setActive', active_publication);
            }
        },
        computed: {
            ...mapState({
                chats: (state) => {
                    return state.publications.active ? state.publications.active.chats : {};
                },
            }),
        },
        beforeMount() {
            this.setActivePage('Chats');
        },
        methods: {
            ...mapActions({
                setActivePage: 'config/setActivePage',
            }),
        },
    };
</script>

<style></style>
