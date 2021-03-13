<template>
    <section class="chat--footer text-gray-600 w-full fixed bottom-0 shadow z-10">
        <div class="chat--footer__icon">
            <Icon icon="CamaraGray" />
        </div>
        <div class="chat--footer__input">
            <input type="text" placeholder="Mensaje" @input="(event) => setMessage(event.target.value)" />
        </div>
        <div class="chat--footer__icon" @click="newMessage">
            <Icon icon="Arrow2" />
        </div>
    </section>
</template>

<script>
    import { mapState, mapActions } from 'vuex';

    export default {
        name: 'ChatFooter',
        computed: {
            ...mapState({
                publication: (state) => state.publications.active,
                chat: (state) => state.chats.active,
                current_message: (state) => state.chats.current_message,
            }),
        },
        methods: {
            ...mapActions({
                setMessage: 'chats/setCurrentMessage',
                addChat: 'publications/addMessage',
            }),
            newMessage() {
                const random_id = Math.random();

                const chat = {
                    id: Math.floor(Math.random() * 10000),
                    publication: this.publication.id,
                    from: random_id > 0.5 ? this.chat.contact : 'nico',
                    to: random_id > 0.5 ? 'nico' : this.chat.contact,
                    text: this.current_message,
                    time: Date.now(),
                    read: false,
                };

                this.addChat(chat);
            },
        },
    };
</script>

<style scoped>
    .chat--footer {
        display: flex;
        flex-flow: row nowrap;
    }

    .chat--footer__input {
        flex: 1 100%;
    }

    .chat--footer__input input:focus {
        outline: none;
    }

    .chat--footer__input input {
        width: 100%;
        height: 100%;

        font-family: Montserrat;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 22px;
        padding-left: 20px;
    }

    .chat--footer__icon {
        flex: 0 4rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    svg {
        fill: #9b9898;
        max-width: 27px;
        max-height: 27px;
    }

    section {
        height: 70px;
        background-color: white;
        box-shadow: 0px -2px 4px rgba(0, 0, 0, 0.25);
    }
</style>
