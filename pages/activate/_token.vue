<template>
    <section>
        <transition name="slide-fade">
            <component :is="componente_actual" class="component" />
        </transition>
        <article class="flex justify-center">
            <div class="bg-rojo w-48 py-2 text-center rounded-3xl shadow-lg mr-2">
                <button class="a" @click="changePage">Siguiente</button>
            </div>
        </article>
    </section>
</template>
<script>
    import axios from 'axios';
    import { mapActions } from 'vuex';
    export default {
        layout: 'register',
        components: {
            datosEmpresa4: () => import('@/components/Register/empresa/datosEmpresa4'),
        },
        data() {
            return {
                componente_actual: 'datosEmpresa4',
            };
        },
        mounted() {
            axios
                .post('https://auth.alamosautos.co/users/activate/', {
                    token: this.$route.params.token,
                })
                .then((res) => {
                    console.log(res.data.data.Token.token);
                    const token = res.data.data.Token.token;
                    localStorage.setItem('usertoken', JSON.stringify(token));
                    this.setUser(res.data);
                    if (res.data.data.Token.token === this.$route.params.token) {
                        this.$router.push('/home');
                    }
                });
        },
        methods: {
            ...mapActions({
                setUser: 'empresa/setUser',
            }),
            changePage() {
                if (this.componente_actual === 'datosEmpresa4') {
                    this.$router.push('/home');
                }
            },
        },
    };
</script>

<style scoped>
    .a {
        color: white;
        outline: none;
        width: 100%;
    }
    .component {
        height: 560px;
    }
    .slide-fade-enter-active {
        transition: all 0.3s ease;
    }

    .slide-fade-enter {
        transform: translateX(10px);
        opacity: 0;
    }
</style>
