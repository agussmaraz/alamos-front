<template>
    <section class="pt-4">
        <p class="parrafo mx-auto text-sm">Revisa la politica de privacidad y el tratamiento de tus datos personales en el sitio.</p>
        <a href="" class="pl-8 text-sm">Ver política de privacidad</a>
    </section>
</template>

<script>
    import { mapActions } from 'vuex';

    export default {
        layout: 'submain',
        beforeMount() {
            this.setActivePage('Privacidad');
        },
        methods: {
            ...mapActions({
                setActivePage: 'config/setActivePage',
            }),
        },
    };
</script>

<style scoped>
    .parrafo {
        width: 350px;
        margin-bottom: 20px;
        font-family: Montserrat;
    }
    a {
        color: #5193f6;
        text-decoration: underline;
        font-family: Montserrat;
    }
</style>
