<template>
    <section>
        <article class="fixed w-full article-nav">
            <nav class="flex justify-between items-center">
                <nuxt-link to="/home">
                    <IconArrow class="icon-arrow w-4 h-4 cursor-pointer" />
                </nuxt-link>
                <div>
                    <h2 class="font-bold">Versus</h2>
                </div>
                <IconCampana class="w-6 h-6 icon-campana" />
            </nav>
            <article class="flex items-center justify-center relative article-versus">
                <div class="div-versus cursor-pointer mr-2" @click="openModal({ modal: 'versus' })">
                    <IconCarGray class="icon-car relative" />
                    <IconAddGray class="icon-add relative" />
                </div>
                <div class="div-versus cursor-pointer ml-2">
                    <IconCarGray class="icon-car relative" />
                    <IconAddGray class="icon-add relative" />
                </div>
                <div class="font-bold uppercase text-2xl vs absolute rounded-full flex items-center justify-center">VS.</div>
            </article>
        </article>
        <article class="article-data px-4 pb-10">
            <div class="flex items-center justify-between">
                <h4>Clase de vehiculo</h4>
                <hr class="hr1" />
            </div>
            <div class="flex items-center justify-between mt-8">
                <h4>Modelo</h4>
                <hr class="hr2" />
            </div>
            <div class="flex items-center justify-between mt-8">
                <h4>Marca</h4>
                <hr class="hr3" />
            </div>
            <div class="flex items-center justify-between mt-8">
                <h4>Línea</h4>
                <hr class="hr4" />
            </div>
            <div class="flex items-center justify-between mt-8">
                <h4>Versión</h4>
                <hr class="hr5" />
            </div>
            <div class="flex items-center justify-between mt-8">
                <h4>Referencia</h4>
                <hr class="hr6" />
            </div>
            <div class="flex items-center justify-between mt-8">
                <h4>Caja</h4>
                <hr class="hr7" />
            </div>
            <div class="flex items-center justify-between mt-8">
                <h4>Cilindraje (cc)</h4>
                <hr class="hr8" />
            </div>

            <div class="flex items-center justify-between mt-8">
                <h4>Transmisión</h4>
                <hr class="hr9" />
            </div>
            <div class="flex items-center justify-between mt-8">
                <h4>Potencia</h4>
                <hr class="hr2" />
            </div>
            <div class="flex items-center justify-between mt-8">
                <h4>Cap. Pasajeros</h4>
                <hr class="hr8" />
            </div>
            <div class="flex items-center justify-between mt-8">
                <h4>Número de ejes</h4>
                <hr class="hr8" />
            </div>
            <div class="flex items-center justify-between mt-8">
                <h4>Cap. de carga (kg)</h4>
                <hr class="hr10" />
            </div>
            <div class="flex items-center justify-between mt-8">
                <h4>Peso vehicular (kg)</h4>
                <hr class="hr1" />
            </div>
            <div class="flex items-center justify-between mt-8">
                <h4>Importado</h4>
                <hr class="hr6" />
            </div>
            <div class="flex items-center justify-between mt-8">
                <h4>Nacionalidad</h4>
                <hr class="hr11" />
            </div>
        </article>
        <section v-if="versus" class="absolute inset-0 flex justify-center">
            <article class="modal z-10" @click="closeModal({ modal: 'versus' })"></article>
            <Filtros class="consejos-modal absolute z-20" />
        </section>
    </section>
</template>

<script>
    import { mapState, mapActions } from 'vuex';
    export default {
        computed: {
            ...mapState({
                versus: (state) => state.modal.modal.versus,
            }),
        },
        methods: {
            ...mapActions({
                openModal: 'modal/openModal',
                closeModal: 'modal/closeModal',
            }),
        },
    };
</script>

<style scoped>
    .modal {
        position: relative;
        background-color: rgba(0, 0, 0, 0.7);
        width: 100%;
        height: 100%;
        position: fixed;
    }
    .consejos-modal {
        left: 50%;
        transform: translateX(-50%);
        border-radius: 8px;
        top: 60px;
        width: 78%;
        height: 444px;
        border-radius: 8px;
    }
    .icon-campana {
        fill: #747474;
    }
    .icon-arrow {
        fill: #353535;
    }
    nav {
        background-color: #eaebef;
        padding: 10px;
    }
    .div-versus {
        width: 170px;
        height: 125px;
        border-radius: 8px;
        box-shadow: 0px 4px 2px rgba(0, 0, 0, 0.25);
        background: #f2efef;
    }
    .vs {
        background-color: white;
        width: 68px;
        height: 68px;
        border: solid #f2efef 1px;
        color: #dfdfdf;
    }
    .icon-car {
        left: 50px;
        top: 40px;
    }
    .icon-add {
        left: 110px;
        top: -46px;
    }
    .article-versus {
        width: 100%;
        height: 187px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        padding-bottom: 20px;
    }
    .article-nav {
        background-color: white;
    }
    .article-data {
        padding-top: 260px;
    }
    h4 {
        color: #bebebe;
        font-size: 13px;
        font-weight: bold;
        @apply uppercase;
    }
    .hr1 {
        width: 60%;
        color: #dbdada;
    }
    .hr2 {
        color: #dbdada;
        width: 80%;
    }
    .hr3 {
        color: #dbdada;
        width: 83%;
    }
    .hr4 {
        color: #dbdada;
        width: 85%;
    }
    .hr5 {
        color: #dbdada;
        width: 81%;
    }
    .hr6 {
        color: #dbdada;
        width: 76%;
    }
    .hr7 {
        color: #dbdada;
        width: 88%;
    }
    .hr8 {
        color: #dbdada;
        width: 68%;
    }
    .hr9 {
        color: #dbdada;
        width: 73%;
    }
    .hr10 {
        color: #dbdada;
        width: 62%;
    }
    .hr11 {
        color: #dbdada;
        width: 71%;
    }
</style>
