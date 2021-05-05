<template>
    <section class="consultas flex flex-col">
        <div class="borde absolute ..."></div>
        <div class="primero flex flex-row">
            <IconPreciosR />
            <a class="igual" href="">Precios de referencia</a>
        </div>
        <div class="etc flex flex-row">
            <img src="../../../../assets/img/creditoV.png" alt="" />
            <a class="excepcion" href="">Simula tu crédito vehicular</a>
        </div>
        <div class="etc flex flex-row">
            <IconAgendaP />
            <a class="igual" href="">Agenda tu peritaje</a>
        </div>
        <div class="etc flex flex-row">
            <IconReporteV />
            <a class="igual" href="">Solicita tu reporte vehicular (ver)</a>
        </div>
    </section>
</template>

<style scoped>
    .borde {
        border-top: 7px solid #ed1a3b;
        width: 65%;
        margin-left: -27px;
        margin-top: 40px;
    }
    .linea {
        height: 2px;
        color: #ed1a3b;
        width: 60%;
        border: none;
    }
    .consultas {
        z-index: 5;
        background-color: white;
        font-size: 18px;
        padding-left: 6%;
        height: 280px;
        width: 450px;
        border-radius: 0 0 10px 10px;
    }
    .primero {
        padding-top: 18%;
    }
    .etc {
        padding-top: 5%;
    }
    .excepcion {
        padding-left: 6%;
    }
    .igual {
        padding-left: 5%;
    }
</style>
