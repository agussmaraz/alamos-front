<template>
    <section class="flex flex-col items-center text-center">
        <IconCongrats class="w-20 mt-6" />
        <span class="flex text-2xl mt-10 header text-center text-rojo">
            ¡Felicitaciones!
            <br />
            Tu cuenta ya está activa
        </span>
        <div class="parrafo text-sm div-parrafo">
            <p>
                ¡Listo! Ya puedes subir tus vehículos al marketplace y crear tu
                <nuxt-link to="/ventas" class="a"> TIENDA VIRTUAL </nuxt-link>
                para alcanzar más clientes.
            </p>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'DatosEmpres9',
        data() {
            return {
                active: 'false',
                data: {
                    first_name: '',
                    last_name: '',
                },
                buttonGenero: '',
            };
        },
        methods: {
            activate(id) {
                this.active = id;
            },
            activeButton(id) {
                this.buttonGenero = id;
            },
        },
    };
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200&display=swap');

    .icon {
        fill: #ed1a3b;
    }
    .icono {
        margin-top: 60px;
        margin-bottom: 60px;
        margin-left: 80px;
    }
    .parrafo {
        font-family: 'Montserrat', sans-serif;
    }
    .div-parrafo {
        width: 250px;
        margin-top: 30px;
        margin-bottom: 40px;
    }
    .div-label {
        background-color: white;
        left: 68px;
        top: 7px;
    }
    .a {
        color: rgb(74, 136, 252);
        text-decoration: underline;
    }
    .moveLabel {
        margin-top: -21px;
        transition: margin-top 1s;
    }
    button {
        outline: none;
    }
    input {
        width: 300px;
    }
    .button-sex {
        width: 300px;
    }
    .div-pass {
        background-color: #fef49c;
    }
</style>
