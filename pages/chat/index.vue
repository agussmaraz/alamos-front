<template>
    <div>
        <ChatEmpty v-if="Object.values(publications).length === 0" />
        <ChatList v-else />

        <!-- <button @click="newMessage">Agregar notif</button> -->
    </div>
</template>

<script>
    import { mapState, mapActions } from 'vuex';
    import Api from '../../services/api';

    export default {
        layout: 'submain',
        middleware: ['mustBeLogged'],
        async asyncData({ app }) {
            if (process.server) {
                const publications = await Api.getPublicationsByUser(app.store.state.auth.user.id);

                for (let i = 0; i < publications.length; i++) {
                    const publication = publications[i];

                    app.store.dispatch('publications/addPublication', publication);
                }
            }
        },
        computed: {
            ...mapState({
                publications: (state) => state.publications.all,
            }),
        },
        beforeMount() {
            this.setActivePage('Chats');
        },
        methods: {
            ...mapActions({
                // addChat: 'publications/addMessage',
                setActivePage: 'config/setActivePage',
            }),
            // newMessage() {
            //     const chat = {
            //         publication: 1,
            //         from: 'agus',
            //         to: 'nico',
            //         text: 'hola ' + String(Date.now()).slice(-4),
            //         time: Date.now(),
            //         read: false,
            //     };

            //     this.addChat(chat);
            // },
        },
    };
</script>

<style></style>
