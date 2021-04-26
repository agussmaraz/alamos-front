<template>
    <section class="flex flex-col items-center text-center">
        <span class="header flex text-2xl mt-4 sm:text-rojo lg:text-3xl text-center lg:font-semibold"> Términos y Condiciones </span>
        <FlechaAtras class="flecha" />
        <div class="terminosC">
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed magnam accusamus molestiae vitae saepe omnis quibusdam sint nam tenetur facere quam est pariatur incidunt, laboriosam ab. Rerum impedit quibusdam adipisci! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure,
                unde. Eum repellat cum sed maiores commodi unde eius hic accusantium optio ipsam facilis, assumenda in, consectetur nesciunt facere perspiciatis perferendis? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum assumenda dolores alias? Aliquam minus repellendus ut.
                Quasi, fugiat. Quis tempore in autem expedita fuga doloremque eligendi corporis porro saepe commodi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat commodi ipsum laborum modi assumenda exercitationem veniam optio fugit reiciendis officia? Laudantium unde nostrum
                ipsum et sit neque, deserunt quae possimus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, dolor beatae? Consequatur sit aspernatur veritatis ullam, cupiditate natus, adipisci velit vel laboriosam pariatur iste maiores blanditiis facilis eum ea. Deleniti? Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Dolores velit exercitationem deserunt obcaecati, eligendi laborum dicta, eos placeat harum ad deleniti neque. Tempora perspiciatis facilis commodi, excepturi delectus maxime neque. Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Quas exercitationem perspiciatis expedita repellat sunt eum adipisci sed possimus voluptates facere tempore, nam provident laborum praesentium repellendus sapiente facilis. Aliquid, quo! Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus veritatis officia illo
                eius quia non natus alias. Autem est, odit numquam aperiam perferendis totam quasi nobis at pariatur deleniti ipsam. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem, voluptas, impedit suscipit quibusdam cumque labore omnis iusto officiis iure temporibus, asperiores
                fugit placeat harum? Illo eveniet debitis nulla tenetur repellat! Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quaerat, unde voluptates repellendus labore ea ullam maxime accusamus magni itaque nam et ad sequi inventore maiores neque reprehenderit exercitationem aut.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse pariatur atque, repellat deserunt, eos placeat cupiditate a, perspiciatis temporibus illum nihil excepturi voluptates. Modi esse laboriosam itaque maxime officia aliquid.
            </p>
        </div>

        <div class="contenido"><input type="radio" name="Acepto_los_Terminos" value="true" /> He leído y estoy de acuerdo</div>
        <div class="text-sm div-parrafo">
            <span class="parrafo lg:hidden">Para abrir tu cuenta de</span>
            <span class="lg:hidden">Álamos</span>
            <span class="parrafo lg:hidden">tienes que aceptar los términos y condiciones.</span>
        </div>
        <p class="text-xs parrafo underline mt-64 lg:hidden">Leer Términos y Condiciones</p>
    </section>
</template>

<script>
    export default {
        name: 'DatosEmpresa9',
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
    button {
        outline: none;
    }
    a {
        color: white;
    }
    @media (min-width: 1200px) {
        .header {
            color: black;
            margin-left: -4%;
        }
        .terminosC {
            border: 1px solid #9b9b9b;
            width: 100%;
            overflow: auto;
            font-family: Montserrat;
            margin-bottom: 5%;
            height: 350px;
        }
        .terminosC::-webkit-scrollbar {
            overflow: hidden;
        }
        .contenido {
            margin-top: 5%;
            margin-left: -33%;
        }
        .contenido input {
            width: 15px;
            height: 15px;
        }
        .flecha {
            margin-left: -11%;
        }
        .div-parrafo {
            margin-top: 0%;
            margin-bottom: 0%;
        }
    }
</style>
