<template>
    <section class="body">
        <h1 class="w-full text-center mt-5">Encuadra la cédula en el recuadro blanco</h1>
        <Foto v-if="fotoFront" class="mt-5" :pictureName="email + '_front'" @pictureUploaded="takeBackPicture" />
        <Foto v-else class="mt-5" :pictureName="email + '_back'" @pictureUploaded="goToNextComponent" />
        <div v-if="fotoFront" class="div-posicion flex items-center"><IconDni1 class="mr-3" /> Coloca el FRENTE de la cédula</div>
        <div v-else class="div-posicion flex items-center"><IconDni2 class="mr-3" /> Coloca el DORSO de la cédula</div>
    </section>
</template>

<script>
    import { mapState } from 'vuex';
    export default {
        data() {
            return {
                fotoFront: true,
            };
        },
        computed: {
            ...mapState({
                email: (state) => state.particular.datos.correo,
            }),
        },
        methods: {
            takeBackPicture() {
                this.fotoFront = false;
            },
            goToNextComponent() {
                this.$router.push('/register/particular/validacion');
            },
        },
    };
</script>

<style scoped>
    .body {
        background-color: #444343;
        height: 100vh;
        padding-top: 10px;
    }
    .div-posicion {
        background-color: white;
        color: #ed1a3b;
        padding: 8px;
        width: 245px;
        border-radius: 8px;
        margin: 20px auto;
    }
    h1 {
        color: white;
        font-size: 20px;
    }
</style>
