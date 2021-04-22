<template>
    <section class="mt-4">
        <h4 class="parrafo m-auto text-center">Estos horarios se mostrarán en las publicaciones activas del marketplace.</h4>
        <article class="mt-5">
            <ul>
                <li class="item px-4 inicio" @click="openModal({ modal: 'editHour' })">
                    <div class="flex flex-col">
                        <h2 class="font-semibold">Domingo</h2>
                        <p class="font-bold">Cerrado</p>
                    </div>
                    <IconArrow2 class="arrow w-5 h-5" />
                </li>
                <li class="item px-4" @click="openModal({ modal: 'editHour' })">
                    <div class="flex flex-col">
                        <h2 class="font-semibold">Lunes</h2>
                        <p class="font-bold">9:00am - 6:00pm</p>
                    </div>
                    <IconArrow2 class="arrow w-5 h-5" />
                </li>
                <li class="item px-4" @click="openModal({ modal: 'editHour' })">
                    <div class="flex flex-col">
                        <h2 class="font-semibold">Martes</h2>
                        <p class="font-bold">9:00am - 6:00pm</p>
                    </div>
                    <IconArrow2 class="arrow w-5 h-5" />
                </li>
                <li class="item px-4" @click="openModal({ modal: 'editHour' })">
                    <div class="flex flex-col">
                        <h2 class="font-semibold">Miércoles</h2>
                        <p class="font-bold">9:00am - 6:00pm</p>
                    </div>
                    <IconArrow2 class="arrow w-5 h-5" />
                </li>
                <li class="item px-4" @click="openModal({ modal: 'editHour' })">
                    <div class="flex flex-col">
                        <h2 class="font-semibold">Jueves</h2>
                        <p class="font-bold">9:00am - 6:00pm</p>
                    </div>
                    <IconArrow2 class="arrow w-5 h-5" />
                </li>
                <li class="item px-4" @click="openModal({ modal: 'editHour' })">
                    <div class="flex flex-col">
                        <h2 class="font-semibold">Viernes</h2>
                        <p class="font-bold">9:00am - 6:00pm</p>
                    </div>
                    <IconArrow2 class="arrow w-5 h-5" />
                </li>
                <li class="item px-4" @click="openModal({ modal: 'editHour' })">
                    <div class="flex flex-col">
                        <h2 class="font-semibold">Sábado</h2>
                        <p class="font-bold">9:00am - 6:00pm</p>
                    </div>
                    <IconArrow2 class="arrow w-5 h-5" />
                </li>
            </ul>
        </article>
        <section v-if="editHour" class="absolute inset-0 flex justify-center">
            <article class="modal z-10" @click="closeModal({ modal: 'editHour' })"></article>
            <EditHour class="consejos-modal absolute z-20" />
        </section>
    </section>
</template>

<script>
    import { mapActions, mapState } from 'vuex';
    export default {
        layout: 'submain',
        computed: {
            ...mapState({
                editHour: (state) => state.modal.modal.editHour,
            }),
        },
        beforeMount() {
            this.setActivePage('Horarios de atención');
        },
        methods: {
            ...mapActions({
                // addChat: 'publications/addMessage',
                setActivePage: 'config/setActivePage',
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
        top: 209px;
        width: 82%;
    }
    .arrow {
        fill: #747474;
        transform: rotate(270deg);
    }
    h2 {
        color: #353535;
    }
    p {
        color: #353535;
    }
    .item {
        height: 70px;
        box-shadow: 0px -1px 1px rgba(0, 0, 0, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.1);
        color: #747474;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    /* .inicio {
        border-top: solid #c4c4c4 1px;
    } */
    .parrafo {
        width: 80%;
    }
</style>
