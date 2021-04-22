<template>
    <section>
        <NavAlter class="fixed w-full" />
        <section class="layout__body">
            <h1 v-if="usuario.role === 10" class="ml-5 my-5">Datos personales</h1>
            <h1 v-else class="ml-5 my-5">Datos de la empresa</h1>
            <article class="body-card flex flex-col justify-between m-auto" :class="usuario.role === 20 ? 'empresa' : null">
                <div v-if="usuario.role === 10" class="">
                    <p class="p-label">Nombre</p>
                    <h3 class="mt-2">{{ usuario.first_name }}</h3>
                </div>
                <div v-else class="">
                    <p class="p-label">Nombre de la empresa</p>
                    <h3 class="mt-2">{{ usuario.business_name }}</h3>
                </div>
                <div v-if="usuario.role === 20" class="">
                    <p class="p-label">Razón social</p>
                    <h3 class="mt-2">{{ usuario.first_name }}</h3>
                </div>
                <div v-if="usuario.role === 10" class="">
                    <p class="p-label">Apellido</p>
                    <h3 class="mt-2">{{ usuario.last_name }}</h3>
                </div>
                <div v-if="usuario.role === 10" class="">
                    <p class="p-label">Sexo</p>
                    <h3 v-if="usuario.gender === 'F'" class="mt-2">Femenino</h3>
                    <h3 v-if="usuario.gender === 'M'" class="mt-2">Masculino</h3>
                </div>
                <div class="">
                    <p class="p-label">Tipo de documento</p>
                    <h3 class="mt-2">{{ usuario.id_type }}</h3>
                </div>
                <div class="">
                    <p class="p-label">Número de identificación</p>
                    <h3 class="mt-2">{{ usuario.id_number }}</h3>
                </div>
                <div v-if="usuario.role === 10" class="">
                    <p class="p-label">Fecha de nacimiento</p>
                    <h3 class="mt-2">{{ resetDate(usuario.birthday) }}</h3>
                </div>
            </article>
            <h1 class="ml-5 mb-5 mt-10">Datos de contacto</h1>
            <article class="art-datos flex flex-col justify-between mx-auto">
                <div class="flex items-center justify-between">
                    <header v-if="usuario.role === 10">
                        <p class="p-label">E-mail</p>
                        <h3 class="mt-2">{{ usuario.email }}</h3>
                    </header>
                    <header v-else>
                        <p class="p-label">E-mail corporativo</p>
                        <h3 class="mt-2">{{ usuario.email }}</h3>
                    </header>
                    <div class="cursor-pointer" @click="open('editEmail')">
                        <IconEditar />
                    </div>
                </div>
                <div v-if="usuario.role === 20" class="flex items-center justify-between">
                    <header>
                        <p class="p-label">Dirección de facturación</p>
                        <h3 class="mt-2">{{ usuario.address }}</h3>
                    </header>
                    <div class="cursor-pointer" @click="open('editUbicacion')">
                        <IconEditar />
                    </div>
                </div>
                <div class="flex items-center justify-between">
                    <header>
                        <p class="p-label">Ciudad y localidad</p>
                        <h3 class="mt-2">{{ usuario.city }}, {{ usuario.region }}</h3>
                    </header>
                    <div class="cursor-pointer" @click="open('editUbicacion')">
                        <IconEditar />
                    </div>
                </div>
                <div class="flex items-center justify-between">
                    <header>
                        <p class="p-label">Celular</p>
                        <h3 class="mt-2">{{ usuario.phone_mobile }}</h3>
                    </header>
                    <div class="cursor-pointer" @click="open('editCelular')">
                        <IconEditar />
                    </div>
                </div>
                <div class="flex items-center justify-between">
                    <header>
                        <p class="p-label">Teléfono fijo</p>
                        <h3 class="mt-2">{{ usuario.phone_land }}</h3>
                    </header>
                    <div class="cursor-pointer" @click="open('editTelefono')">
                        <IconEditar />
                    </div>
                </div>
            </article>
            <h1 class="ml-5 mb-5 mt-10">Contraseña</h1>
            <article class="art-contra flex flex-col justify-between mx-auto">
                <div class="flex items-center justify-between">
                    <header>
                        <p class="p-label">Contraseña</p>
                    </header>
                    <div class="cursor-pointer" @click="open('editContraseña')">
                        <IconEditar />
                    </div>
                </div>
            </article>
            <h1 class="ml-5 mb-5 mt-10">Eliminar cuenta</h1>
            <div class="ml-5">
                <p class="parrafo">Esta acción es permanente. Si eliminas tu cuenta, se perderán todos tus datos, así como tu historial y todas las publicaciones que tengas activas</p>
                <h4 class="uppercase font-bold text-rojo mt-5" @click="open('editEliminar')">Eliminar mi cuenta</h4>
            </div>
        </section>
        <section v-if="editEmail" class="absolute inset-0 flex justify-center">
            <article class="modal z-10" @click="closeModal({ modal: 'editEmail' })"></article>
            <EditEmail class="consejos-modal absolute z-20" />
        </section>
        <section v-if="editUbicacion" class="absolute inset-0 flex justify-center">
            <article class="modal z-10" @click="closeModal({ modal: 'editUbicacion' })"></article>
            <EditUbicacion class="consejos-modal absolute z-20" />
        </section>
        <section v-if="editCelular" class="absolute inset-0 flex justify-center">
            <article class="modal z-10" @click="closeModal({ modal: 'editCelular' })"></article>
            <EditCelular class="consejos-modal absolute z-20" />
        </section>
        <section v-if="editTelefono" class="absolute inset-0 flex justify-center">
            <article class="modal z-10" @click="closeModal({ modal: 'editTelefono' })"></article>
            <EditTelefono class="consejos-modal absolute z-20" />
        </section>
        <section v-if="editContraseña" class="absolute inset-0 flex justify-center">
            <article class="modal z-10" @click="closeModal({ modal: 'editContraseña' })"></article>
            <EditContrasenia class="consejos-modal absolute z-20" />
        </section>
        <section v-if="editEliminar" class="absolute inset-0 flex justify-center">
            <article class="modal z-10" @click="closeModal({ modal: 'editEliminar' })"></article>
            <EditEliminar class="consejos-modal absolute z-20" />
        </section>
    </section>
</template>

<script>
    import { mapActions, mapState } from 'vuex';
    export default {
        computed: {
            ...mapState({
                editEmail: (state) => state.modal.modal.editEmail,
                editUbicacion: (state) => state.modal.modal.editUbicacion,
                editCelular: (state) => state.modal.modal.editCelular,
                editTelefono: (state) => state.modal.modal.editTelefono,
                editContraseña: (state) => state.modal.modal.editContraseña,
                editEliminar: (state) => state.modal.modal.editEliminar,
                usuario: (state) => state.auth.usuario,
            }),
        },
        beforeMount() {
            this.setActivePage('Mis datos');
        },
        methods: {
            ...mapActions({
                // addChat: 'publications/addMessage',
                setActivePage: 'config/setActivePage',
                openModal: 'modal/openModal',
                closeModal: 'modal/closeModal',
            }),
            resetDate(param) {
                const fecha = new Date(param);
                const fechaKey = fecha.getUTCMonth() + 1 + '/' + fecha.getUTCDate() + '/' + fecha.getFullYear();
                return fechaKey;
            },
            scroll() {
                window.scrollTo(0, 0);
            },
            open(param) {
                this.openModal({ modal: param });
                this.scroll();
            },
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
    h1 {
        font-weight: bold;
        font-size: 20px;
    }
    .layout__body {
        padding-top: 58px;
        padding-bottom: 58px;
    }
    .p-label {
        font-family: Montserrat;
        font-size: 13px;
        color: #353535;
    }
    .parrafo {
        font-family: Montserrat;
        width: 360px;
    }
    h3 {
        font-family: Montserrat;
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        color: #353535;
    }
    .body-card {
        background-color: #f2efef;
        width: 369px;
        height: 535px;
        border-radius: 10px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.4);
        border: 1px solid #f2efef;
        padding: 10px;
    }
    .empresa {
        background-color: #f2efef;
        width: 369px;
        height: 359px;
        border-radius: 10px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.4);
        border: 1px solid #f2efef;
        padding: 10px;
    }
    .art-datos {
        border-radius: 10px;
        width: 369px;
        height: 359px;
        background-color: #f2efef;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.4);
        border: 1px solid #f2efef;
        padding: 10px;
    }
    .art-contra {
        width: 369px;
        height: 90px;
        border-radius: 10px;
        background-color: #f2efef;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.4);
        border: 1px solid #f2efef;
        padding: 10px;
    }
</style>
