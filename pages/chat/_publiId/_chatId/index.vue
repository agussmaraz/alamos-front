<template>
    <div class="chat__body">
        <div class="chat__header">
            <h2>{{ publication.title }}</h2>
            <h3>{{ pubPrice }}</h3>
        </div>
        <div class="chat__messages">
            <ul>
                <li v-for="message in messages" :key="message.id">{{ message.text }}</li>
            </ul>
        </div>
    </div>
</template>

<script>
    import { mapState, mapActions } from 'vuex';
    import Api from '../../../../services/api';

    export default {
        layout: 'submain',
        async asyncData({ app, route }) {
            if (process.server) {
                const publications = await Api.getPublications();

                for (let i = 0; i < publications.length; i++) {
                    const publication = publications[i];

                    app.store.dispatch('publications/addPublication', publication);
                }

                const active_publication = publications.find((publication) => publication.id === Number(route.params.publiId));

                app.store.dispatch('publications/setActive', active_publication);

                const active_chat = active_publication.chats.find((chat) => chat.contact === route.params.chatId);

                app.store.dispatch('chats/setActive', active_chat);
            }
        },
        computed: {
            ...mapState({
                chat: (state) => state.chats.active,
                messages: (state) => state.chats.active.messages,
                publication: (state) => state.publications.active,
            }),
            pubPrice() {
                return '$' + String(this.publication.price).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.');
            },
        },
        beforeMount() {
            this.setActivePage(`Chat con ${this.chat.contact}`);
        },
        methods: {
            ...mapActions({
                setActivePage: 'config/setActivePage',
            }),
        },
    };
</script>

<style scoped>
    .chat__body {
        background-color: #e5e5e5;
        height: 100%;
    }
    .chat__header {
        background-color: #ffffff;
        padding-left: 18.49%;
        padding-top: 3%;
        padding-bottom: 3%;

        color: #353535;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }

    .chat__header h2 {
        font-family: Montserrat;
        font-style: normal;
        font-weight: bold;
        font-size: 17px;
        line-height: 30px;
    }

    .chat__header h3 {
        font-family: Montserrat;
        font-weight: 400;
        font-style: normal;
        font-size: 17px;
        line-height: 30px;
    }
</style>
