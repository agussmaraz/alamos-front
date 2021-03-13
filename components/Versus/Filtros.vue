<template>
    <section>
        <component :is="componente_actual" :changeComponent="changePage" class="mb-20 component" />
    </section>
</template>

<script>
    import { mapActions } from 'vuex';
    export default {
        name: 'Filtros',
        components: {
            modelo: () => import('@/components/Versus/Modelo'),
            marca: () => import('@/components/Versus/Marca'),
            linea: () => import('@/components/Versus/Linea'),
            version: () => import('@/components/Versus/Version'),
            referencia: () => import('@/components/Versus/Referencia'),
        },
        data() {
            return {
                componente_actual: 'modelo',
            };
        },
        methods: {
            ...mapActions({
                closeModal: 'modal/closeModal',
            }),
            changePage() {
                if (this.componente_actual === 'modelo') {
                    this.componente_actual = 'marca';
                    return;
                }
                if (this.componente_actual === 'marca') {
                    this.componente_actual = 'linea';
                    return;
                }
                if (this.componente_actual === 'linea') {
                    this.componente_actual = 'version';
                    return;
                }
                if (this.componente_actual === 'version') {
                    this.componente_actual = 'referencia';
                    return;
                }
                if (this.componente_actual === 'referencia') {
                    this.closeModal({ modal: 'versus' });
                }
            },
        },
    };
</script>

<style scoped>
    h1 {
        font-weight: bold;
        display: flex;
        justify-content: center;
        padding-top: 14px;
    }
    .div-nav {
        background-color: white;
        box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
        height: 54px;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
    }
    ul {
        height: 444px;
    }
    li {
        border-bottom: solid #c4c4c4 1px;
        padding-left: 17px;
        padding-right: 17px;
        padding: 10px;
        display: flex;
        justify-content: center;
        font-family: Montserrat;
    }
    section {
        background-color: white;
    }
    .component {
        border-radius: 8px;
    }
</style>
