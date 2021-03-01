<template>
    <section class="flex flex-col">
        <aside class="flex justify-end mt-2 mb-8 mr-2">
            <nuxt-link to="home"><IconClose /></nuxt-link>
        </aside>
        <header class="flex flex-col text-rojo font-bold items-center text-2xl mb-24">
            <IconLogo class="w-24 h-24 icon mr-2" />
            Álamos
        </header>
        <div class="flex flex-col w-64 m-auto relative">
            <input :value="data.cedula" type="number" name="" placeholder="Número de Cédula" @input="(event) => inputValue(event, 'cedula')" />
            <IconDni class="w-6 h-6 absolute dni" />
            <input :value="data.contraseña" type="password" placeholder="Contraseña" class="mt-8" @input="(event) => inputValue(event, 'contraseña')" />
            <IconKey class="w-6 h-5 absolute key" />
            <p class="text-center text-sm mt-8">¿Olvidaste tu contraseña?</p>
        </div>
        <div class="bg-rojo w-64 py-2 text-center rounded-3xl shadow-lg m-0 m-auto">
            <button class="a" href="" @click.prevent="loginUser">INICIAR SESIÓN</button>
        </div>
    </section>
</template>

<script>
    import { mapState, mapActions } from 'vuex';
    export default {
        computed: {
            ...mapState({
                data: (state) => state.auth.datos,
            }),
        },
        methods: {
            ...mapActions({
                setData: 'auth/setData',
                login: 'auth/login',
            }),
            inputValue(event, campo) {
                this.setData({ [campo]: event.target.value });
            },
            loginUser() {
                this.login(this.data);
                this.$router.push('/home');
            },
        },
    };
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@1,200&display=swap');

    .icon {
        fill: #ed1a3b;
    }
    section {
        height: 100vh;
        background-image: url('~assets/img/Selling-car.png');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        /* padding-top: 87px; */
    }
    input {
        height: 40px;
        border-radius: 20px;
        outline: none;
        padding-left: 60px;
    }
    ::placeholder {
        font-family: 'Nunito', sans-serif;
        /* text-align: center; */
    }
    .dni {
        top: 9px;
        left: 11px;
    }
    .key {
        bottom: 62px;
        left: 11px;
    }
    .a {
        color: white;
    }
</style>
