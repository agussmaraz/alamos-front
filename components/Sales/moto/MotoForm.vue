<template>
  <section class="flex flex-col items-center caja-padre">
    <h1 class="my-5">Datos del vehículo</h1>
    <p class="parrafo">Por favor, verifica que los datos estén correctos:</p>
    <form action="">
      <div>
        <label for="">Marca</label>
        <input v-model="moto.Marca" class="input-form" type="text" />
      </div>
      <div>
        <label for="">Línea</label>
        <input v-model="moto.Linea" class="input-form" type="text" />
      </div>
      <article class="flex items-center">
        <div class="w-1/3 items-center">
          <label class="label-mini" for="">Modelo</label>
          <input v-model="moto.Modelo" class="input-hijos" type="text" />
        </div>
        <div class="w-1/3 items-center">
          <label class="label-mini" for="">Cilindraje</label>
          <input v-model="moto.Cilindraje" class="input-hijos" type="text" />
        </div>
        <div class="w-1/3 items-center">
          <label class="label-mini" for="">Cap. pasajeros</label>
          <input v-model="moto.Pasajeros" class="input-hijos" type="text" />
        </div>
      </article>
      <div>
        <label for="">Color</label>
        <input v-model="moto.Color" class="input-form" type="text" />
      </div>
      <div>
        <label for="">Clase de vehículo</label>
        <input v-model="moto.Clase" class="input-form" type="text" />
      </div>
      <div>
        <label for="">Tipo de combustible</label>
        <input v-model="moto.Combustible" class="input-form" type="text" />
      </div>
      <article class="flex items-center">
        <div class="w-1/3 items-center">
          <label class="label-mini" for="">Peso vehicular</label>
          <input v-model="moto.Peso" class="input-hijos" type="text" />
        </div>

        <div class="w-1/3 items-center">
          <label for="">Blindado</label>
          <input v-model="moto.Blindado" class="input-hijos" type="text" />
        </div>
        <div class="w-1/3 items-center">
          <label class="label-mini" for="">Final de placa</label>
          <input v-model="moto.placa" class="input-hijos" type="text" />
        </div>
      </article>
    </form>
  </section>
</template>

<script>
export default {
  name: 'Form',
  data() {
    return {
      moto: {
        Marca: 'Bajaj',
        Linea: 'Boxer Ct 100',
        Modelo: '2012',
        Pasajeros: '2',
        Cilindraje: '99',
        Color: 'Naranja',
        Clase: 'Motocicleta',
        Tipo: 'Wagon',
        Combustible: 'Gasolina',
        Peso: '-',
        Ejes: '2',
        Blindado: 'No',
        pasajeros: '5',
        carga: '-',
        placa: 'c',
      },
    }
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200&display=swap');

.parrafo {
  font-family: 'Montserrat', sans-serif;
  font-size: 15px;
  margin-bottom: 30px;
}
.caja-padre {
  width: 90%;
  margin: 0 auto;
}
form {
  width: 90%;
}
h1 {
  color: #444343;
  font-size: 20px;
  font-weight: bold;
}
label {
  font-weight: bold;
  font-size: 16px;
  color: #8d8c8c;
  margin-bottom: 5px;
}
.label-mini {
  font-size: 14px;
}
.input-form {
  width: 339px;
  height: 30px;
  background: #e5e5e5;
  border-radius: 6px;
  outline: none;
  padding-left: 10px;
}
div {
  display: flex;
  flex-flow: column;
  justify-content: center;
  margin-bottom: 35px;
}
.input-hijos {
  width: 80%;
  height: 30px;
  background: #e5e5e5;
  border-radius: 6px;
  outline: none;
  padding-left: 10px;
}
</style>
