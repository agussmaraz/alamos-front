<template>
    <section class="flex flex-col items-center">
        <h1 class="my-5">Comentarios del vehículo</h1>
        <div v-if="user && user.role == 10" class="flex items-center mb-4 w-full">
            <p class="ml-12">Permutar mi vehículo</p>
            <article class="flex justify-around items-center border rounded-md h-8 m-auto button-sex ml-3">
                <button class="text-xs h-full w-full outline-none" :class="buttonGenero === 'si' ? 'activateButtonSi' : false" @click="setPermutar('si')">SI</button>
                <button class="text-xs h-full w-full outline-none" :class="buttonGenero === 'no' ? 'activateButtonNo' : false" @click="setPermutar('no')">NO</button>
            </article>
        </div>
        <div v-if="user && user.role == 20" class="flex flex-col">
            <div class="relative">
                <input type="text" placeholder="Nombre de Asesor Comercial" />
                <IconUserWhite class="icon-user" />
                <aside></aside>
            </div>
            <div class="relative">
                <input type="number" placeholder="No. celular del Asesor" class="my-5" />
                <IconTelefono class="icon-telefono" />
                <aside class="aside2"></aside>
            </div>
        </div>
        <article class="flex flex-col mt-6">
            <textarea v-model="descripcion" name="textarea" placeholder="Cuéntanos más. Los detalles son claves para vender más rápido." cols="35" rows="8" class="rounded-md p-3" maxlength="2500"></textarea>
            <span v-if="descripcion.length > 0">{{ descripcion.length }}/2500</span>
        </article>
    </section>
</template>

<script>
    import { mapState } from 'vuex';
    export default {
        name: 'Comentarios',
        data() {
            return {
                descripcion: '',
                buttonGenero: 'si',
            };
        },
        computed: {
            ...mapState({
                user: (state) => state.auth.usuario,
            }),
        },
        watch: {
            descripcion(_, old) {
                if (old.length > 2500) {
                    this.descripcion = old;
                }
            },
        },
        methods: {
            setPermutar(param) {
                this.activeButton(param);
            },
            activeButton(id) {
                this.buttonGenero = id;
            },
        },
    };
</script>

<style scoped>
    h1 {
        color: #444343;
        font-size: 20px;
        font-weight: bold;
    }
    .button-sex {
        width: 102px;
        border: solid #ed1a3b 2px;
    }
    .activateButtonSi {
        background-color: #ed1a3b;
        color: white;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
        height: 29px;
    }
    .activateButtonNo {
        background-color: #ed1a3b;
        color: white;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
        height: 29px;
    }
    .icon-telefono {
        top: 29px;
        left: 15px;
        z-index: 10;
        position: absolute;
    }
    .icon-user {
        position: absolute;
        top: 10px;
        z-index: 10;
        left: 14px;
    }
    textarea {
        border: solid #353535 2px;
    }
    button {
        outline: none;
    }
    input {
        border: solid #353535 2px;
        height: 40px;
        width: 318px;
        border-radius: 8px;
        padding-left: 55px;
    }
    aside {
        width: 46px;
        height: 40px;
        border-bottom-left-radius: 8px;
        border-top-left-radius: 8px;
        position: absolute;
        background-color: #444343;
        top: 0;
    }
    .aside2 {
        width: 46px;
        height: 40px;
        border-bottom-left-radius: 8px;
        border-top-left-radius: 8px;
        position: absolute;
        background-color: #444343;
        top: 20px;
    }
</style>
