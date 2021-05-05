<template>
    <section>
        <div class="lg:bg-blanco">
            <MasInformacionR />
        </div>
        <footer class="Padre flex flex-col">
            <div class="m-auto flex flex-row">
                <span class="font-bold"> © alamosautos.co</span>
                <span> 2020 Colombia. Todos los Derechos Reservados. </span>
            </div>
            <div class="politicas m-auto">
                <a class="font-bold" href="#"> Política de Privacidad </a>
                <a class="font-bold" href="#"> Términos y Condiciones </a>
            </div>
        </footer>
    </section>
</template>

<style scoped>
    .Padre {
        background-color: #747474;
        font-family: Montserrat;
        color: white;
        font-size: 16px;
        padding-top: 1rem;
        padding-bottom: 1rem;
    }
    .politicas {
        width: 30%;
        display: flex;
        justify-content: space-evenly;
        padding-top: 1rem;
    }
</style>
