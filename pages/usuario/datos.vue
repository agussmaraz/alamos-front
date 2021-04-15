<template>
    <section>
        <NavAlter class="fixed w-full" />
        <section class="layout__body">
            <h1 class="ml-5 my-5">Datos personales</h1>
            <article class="body-card flex flex-col justify-between m-auto">
                <div class="">
                    <p class="p-label">Nombre</p>
                    <h3 class="mt-2">Martín Francisco</h3>
                </div>
                <div class="">
                    <p class="p-label">Apellido</p>
                    <h3 class="mt-2">Rodríguez López</h3>
                </div>
                <div class="">
                    <p class="p-label">Sexo</p>
                    <h3 class="mt-2">Masculino</h3>
                </div>
                <div class="">
                    <p class="p-label">Tipo de documento</p>
                    <h3 class="mt-2">Cédula de ciudadanía</h3>
                </div>
                <div class="">
                    <p class="p-label">Número de identificación</p>
                    <h3 class="mt-2">1019032589</h3>
                </div>
                <div class="">
                    <p class="p-label">Fecha de nacimiento</p>
                    <h3 class="mt-2">05/10/1985</h3>
                </div>
            </article>
            <h1 class="ml-5 mb-5 mt-10">Datos de contacto</h1>
            <article class="art-datos flex flex-col justify-between mx-auto">
                <div class="flex items-center justify-between">
                    <header>
                        <p class="p-label">E-mail</p>
                        <h3 class="mt-2">martin73@gmail.com</h3>
                    </header>
                    <IconEditar />
                </div>
                <div class="flex items-center justify-between">
                    <header>
                        <p class="p-label">Ciudad y localidad</p>
                        <h3 class="mt-2">Bogotá D.C, Mazurén</h3>
                    </header>
                    <IconEditar />
                </div>
                <div class="flex items-center justify-between">
                    <header>
                        <p class="p-label">Celular</p>
                        <h3 class="mt-2">1234567890</h3>
                    </header>
                    <IconEditar />
                </div>
                <div class="flex items-center justify-between">
                    <header>
                        <p class="p-label">Teléfono fijo</p>
                        <h3 class="mt-2">123456789</h3>
                    </header>
                    <IconEditar />
                </div>
            </article>
            <h1 class="ml-5 mb-5 mt-10">Contraseña</h1>
            <article class="art-contra flex flex-col justify-between mx-auto">
                <div class="flex items-center justify-between">
                    <header>
                        <p class="p-label">Contraseña</p>
                    </header>
                    <IconEditar />
                </div>
            </article>
            <h1 class="ml-5 mb-5 mt-10">Eliminar cuenta</h1>
            <div class="ml-5">
                <p class="parrafo">Esta acción es permanente. Si eliminas tu cuenta, se perderán todos tus datos, así como tu historial y todas las publicaciones que tengas activas</p>
                <h4 class="uppercase font-bold text-rojo mt-5">Eliminar mi cuenta</h4>
            </div>
        </section>
    </section>
</template>

<script>
    import { mapActions } from 'vuex';
    export default {
        beforeMount() {
            this.setActivePage('Mis datos');
        },
        methods: {
            ...mapActions({
                // addChat: 'publications/addMessage',
                setActivePage: 'config/setActivePage',
            }),
        },
    };
</script>

<style scoped>
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
