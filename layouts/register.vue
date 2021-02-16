<template>
    <section class="">
        <Nuxt />
    </section>
</template>

<script>
    export default {
        name: 'Page1',
        data() {
            return {
                active: 'false',
                data: {
                    correo: '',
                    confirmacion: '',
                },
            };
        },
        methods: {
            activate(id) {
                this.active = id;
            },
        },
    };
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200&display=swap');

    .icono {
        margin-top: 60px;
        margin-bottom: 60px;
        margin-left: 80px;
    }
</style>
