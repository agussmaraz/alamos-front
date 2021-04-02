<template>
    <div class="chat__body">
        <div class="chat__header">
            <h2>{{ publication.title }}</h2>
            <h3>{{ pubPrice }}</h3>
        </div>
        <div class="chat__messages">
            <ul>
                <li v-for="message in messages" :key="message.id">
                    <ChatBubbleSender v-if="message.from === 'nico'" :message="message.text" :timestamp="message.time" />
                    <ChatBubbleReceiver v-else :message="message.text" :timestamp="message.time" />
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import { mapState, mapActions } from 'vuex';
    import Api from '../../../../services/api';

    export default {
        layout: 'chatInterface',
        middleware: ['mustBeLogged'],
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
            chatCounter() {
                let counter = 0;

                if (this.chat !== null) {
                    this.messages.forEach((message) => {
                        if (message.read === false) {
                            counter += 1;
                        }
                    });
                }

                return counter;
            },
        },
        beforeMount() {
            this.setActivePage(`Chat con ${this.chat.contact}`);
        },
        mounted() {
            for (let i = 0; i < this.messages.length; i++) {
                const message = this.messages[i];

                this.setMessageAsRead(message);
            }
        },
        methods: {
            ...mapActions({
                setActivePage: 'config/setActivePage',
                setMessageAsRead: 'publications/setMessageAsRead',
            }),
        },
    };
</script>

<style scoped>
    .chat__messages {
        height: 100%;
    }
    .chat__messages ul {
        height: calc(100% - 50px);
        position: relative;
        overflow-y: scroll;
    }

    .chat__body {
        height: calc(100% - 52px);
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
