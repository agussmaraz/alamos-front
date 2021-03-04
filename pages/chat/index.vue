<template>
    <div>
        <ChatEmpty v-if="Object.values(chats).length === 0" />
        <ChatList v-else />

        <button @click="newMessage">Agregar notif</button>
    </div>
</template>

<script>
    import { mapState, mapActions } from 'vuex';

    export default {
        layout: 'submain',
        computed: {
            ...mapState({
                chats: (state) => state.chats.all,
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
