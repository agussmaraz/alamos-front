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
        async asyncData({ app, route }) {
            if (process.server) {
                const publications = await Api.getPublications();

                for (let i = 0; i < publications.length; i++) {
                    const publication = publications[i];

                    app.store.dispatch('publications/addPublication', publication);
                }

                const active_publication = publications.find((publication) => publication.id === Number(route.params.id));

                app.store.dispatch('publications/setActive', active_publication);
            }
        },
        computed: {
            ...mapState({
                chats: (state) => state.publications.active.chats,
            }),
        },
        beforeMount() {
            this.setActivePage('Chats');
        },
        methods: {
            ...mapActions({
                addChat: 'chats/addMessage',
                setActivePage: 'config/setActivePage',
            }),
            newMessage() {
                const chat = {
                    publication: 1,
                    from: 'agus',
                    to: 'nico',
                    text: 'hola ' + String(Date.now()).slice(-4),
                    time: Date.now(),
                    read: false,
                };

                this.addChat(chat);
            },
        },
    };
</script>

<style></style>
