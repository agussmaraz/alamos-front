<template>
    <div>
        <ul>
            <PubliChat v-for="chat in chats" :key="chat.id" :chat="chat" />
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'ChatsList',
        props: {
            chats: {
                type: Array,
                default: () => [],
            },
        },
    };
</script>

<style></style>
