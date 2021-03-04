<template>
    <div>
        <ul>
            <Chat v-for="chat in Object.values(chats)" :key="chat.id" :chat="chat" />
        </ul>
    </div>
</template>

<script>
    import { mapState } from 'vuex';

    export default {
        name: 'ChatsList',
        computed: {
            ...mapState({
                chats: (state) => state.chats.all,
            }),
        },
    };
</script>

<style></style>
