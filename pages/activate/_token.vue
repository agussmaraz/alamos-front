<template>
    <section>
        <transition name="slide-fade">
            <component :is="componente_actual" class="component" />
        </transition>
        <article class="flex justify-center">
            <div v-if="componente_actual !== 'datosEmpresa9'" class="bg-rojo w-48 py-2 text-center rounded-3xl shadow-lg mr-2">
                <button class="a" @click="changePage">Siguiente</button>
            </div>
            <div v-if="componente_actual === 'datosEmpresa9'" class="bg-rojo w-48 py-2 text-center rounded-3xl shadow-lg mr-2">
                <button class="a" @click="changePage">Publicar vehículo</button>
            </div>
        </article>
    </section>
</template>
<script>
    import axios from 'axios';
    import { mapActions, mapState } from 'vuex';
    export default {
        layout: 'register',
        components: {
            datosEmpresa4: () => import('@/components/Register/empresa/datosEmpresa4'),
            datosUser11: () => import('@/components/Register/particular/datosUser11'),
            datosEmpresa9: () => import('@/components/Register/empresa/datosEmpresa9'),
        },
        data() {
            return {
                componente_actual: 'datosEmpresa4',
            };
        },
        computed: {
            ...mapState({
                usuario: (state) => state.auth.usuario,
            }),
        },
        mounted() {
            axios
                .post('https://auth.alamosautos.co/users/activate/', {
                    token: this.$route.params.token,
                })
                .then((res) => {
                    if (res.data.data.Role.name === 'particular') {
                        const token = res.data.data.Token.token;
                        localStorage.setItem('usertokenParticular', JSON.stringify(token));
                        this.setUser(res.data.data);
                    } else {
                        const token = res.data.data.Token.token;
                        localStorage.setItem('usertokenEmpresa', JSON.stringify(token));
                        this.setUser(res.data.data);
                    }
                });
        },
        methods: {
            ...mapActions({
                setUser: 'auth/setUser',
            }),
            changePage() {
                if (this.componente_actual === 'datosEmpresa4') {
                    if (this.usuario.role === 10) {
                        this.componente_actual = 'datosUser11';
                        return;
                    } else if (this.usuario.role === 20) {
                        this.componente_actual = 'datosEmpresa9';
                        return;
                    }
                }
                if (this.componente_actual === 'datosUser11') {
                    this.$router.push('/home');
                }
                if (this.componente_actual === 'datosEmpresa9') {
                    this.$router.push('/ventas');
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
