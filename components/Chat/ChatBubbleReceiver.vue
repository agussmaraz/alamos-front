<template>
    <div class="chat--bubble__receiver">
        {{ message }}
        <span class="chat--bubble__timestamp">{{ parsed_timestamp }}</span>
    </div>
</template>

<script>
    export default {
        name: 'ChatBubbleReceiver',
        props: {
            message: {
                type: String,
                default: '',
            },
            timestamp: {
                type: Number,
                default: () => Date.now(),
            },
        },
        computed: {
            parsed_timestamp() {
                const date = new Date(this.timestamp);
                const hours = date.getUTCHours() < 10 ? '0' + date.getUTCHours() : date.getUTCHours();
                const minutes = date.getUTCMinutes() < 10 ? '0' + date.getUTCMinutes() : date.getUTCMinutes();

                return hours + ':' + minutes;
            },
        },
    };
</script>

<style scoped>
    .chat--bubble__receiver {
        max-width: 60%;
        margin: 10px auto 0 15px;
        position: relative;

        background: #4dcf6e;
        border-radius: 10px;
        color: white;

        font-family: Montserrat;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 20px;

        padding: 11px 43px 13px 13px;
    }

    .chat--bubble__timestamp {
        position: absolute;
        right: 9px;
        bottom: 6px;

        font-family: Montserrat;
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 15px;
    }
</style>
