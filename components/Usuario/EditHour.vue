<template>
    <section class="padre p-4">
        <article>
            <h2 class="font-bold">Desde</h2>
            <section class="flex items-center ml-8">
                <div class="flex items-center">
                    <input type="number" class="input-hour pl-3 text-lg time-active" />
                    <p class="puntitos">:</p>
                    <input type="number" class="input-hour pl-3 text-lg" />
                </div>
                <div class="flex flex-col ml-5">
                    <button class="button-hour" :class="active === 'AM' ? 'activeButton' : null" @click="setButton('AM')">AM</button>
                    <button class="button-hour2" :class="active === 'PM' ? 'activeButton' : null" @click="setButton('PM')">PM</button>
                </div>
            </section>
        </article>
        <hr />
        <article class="mt-2">
            <h2 class="font-bold">Hasta</h2>
            <section class="flex items-center ml-8">
                <div class="flex items-center">
                    <input type="number" class="input-hour time-active" />
                    <p class="puntitos">:</p>
                    <input type="number" class="input-hour" />
                </div>
                <div class="flex flex-col ml-5">
                    <button class="button-hour" :class="active === 'AM' ? 'activeButton' : null" @click="setButton('AM')">AM</button>
                    <button class="button-hour2" :class="active === 'PM' ? 'activeButton' : null" @click="setButton('PM')">PM</button>
                </div>
            </section>
        </article>
        <hr />
        <div class="w-full flex justify-start items-center mt-3">
            <input type="checkbox" name="Cerrado" class="w-5 h-5" />
            <p class="font-bold ml-2">Cerrado</p>
        </div>
        <div class="flex items-center w-full justify-end mt-4">
            <p class="font-bold text-rojo" @click="closeModal({ modal: 'editHour' })">Cancelar</p>
            <p class="font-bold text-rojo ml-5">Ok</p>
        </div>
    </section>
</template>

<script>
    import { mapActions } from 'vuex';
    export default {
        data() {
            return {
                active: 'PM',
            };
        },
        methods: {
            ...mapActions({
                closeModal: 'modal/closeModal',
            }),
            setButton(param) {
                this.active = param;
            },
        },
    };
</script>

<style scoped>
    hr {
        color: #c4c4c4;
    }
    .puntitos {
        font-size: 55px;
        margin-bottom: 10px;
        color: #747474;
    }
    .time-active {
        color: #ff8f80;
    }
    .padre {
        background-color: white;
        height: 359px;
        width: 354px;
    }
    .input-hour {
        width: 65px;
        height: 65px;
        border-radius: 8px;
        background-color: #f2efef;
        border: solid #e5e5e5 3px;
        outline: none;
    }
    .button-hour {
        background-color: #f2efef;
        border: solid #e5e5e5 3px;
        width: 70px;
        height: 33px;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
        color: #ff8f80;
        outline: none;
    }
    .button-hour2 {
        background-color: #f2efef;
        border: solid #e5e5e5 3px;
        width: 70px;
        height: 33px;
        border-bottom-left-radius: 8px;
        border-bottom-right-radius: 8px;
        color: #ff8f80;
        outline: none;
    }
    .activeButton {
        background-color: white;
        color: #353535;
        font-weight: bold;
    }
</style>
