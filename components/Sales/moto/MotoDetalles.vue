<template>
  <section class="caja-padre pt-10">
    <img
      src="~assets/img/moto-imperfeccion.png"
      class="imagen"
      alt="auto-daniado"
    />
    <div class="w-full mb-4 mt-6">
      <h3 class="font-bold">Ubicación de imperfección</h3>
      <input
        type="text"
        class="w-full border border-gray-600 rounded-md h-8 mt-3 pl-2"
        placeholder="'Puerta delantera izquierda'"
      />
    </div>
    <div class="w-full">
      <h3 class="font-bold">Descripción de imperfección</h3>
      <input
        type="text"
        class="w-full border border-gray-600 rounded-md h-8 mt-3 pl-2"
        placeholder="'Rayón superficial'"
      />
    </div>
    <article class="mt-10">
      <h3 class="font-bold">Nivel de imperfección</h3>
      <div class="flex items-center mt-3">
        <label class="radio">
          <p>
            <strong> Leve: </strong> Estético. No afecta la asegurabilidad del
            vehículo. Ejemplo: rayones leves, abolladuras.
          </p>
          <input type="radio" name="radio" />
          <span class="check"></span>
        </label>
      </div>
      <div class="flex items-center">
        <label class="radio">
          <p>
            <strong> Moderado:</strong> Estético. No afecta la asegurabilidad
            del vehículo, pero implica arreglos de latonería y pintura. Ejemplo:
            restaurar tapizados, pintura.
          </p>
          <input type="radio" name="radio" />
          <span class="check"></span>
        </label>
      </div>
      <div class="flex items-center">
        <label class="radio">
          <p>
            <strong> Severo:</strong> Estructural. Afecta la asegutabilidad del
            vehículo. Ejemplo: golpes estructurales, reparaciones mecánicas.
          </p>
          <input type="radio" name="radio" />
          <span class="check"></span>
        </label>
      </div>
    </article>
  </section>
</template>

<script>
export default {
  name: 'Detalles',
}
</script>

<style scoped>
.caja-padre {
  width: 80%;
  margin: 0 auto;
}
.imagen {
  width: 338px;
  height: 201px;
  border-radius: 5px;
}
/* custom radio */
.radio {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* hide the browser's default radio button */
.radio input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

/* create custom radio */
.radio .check {
  position: absolute;
  top: 21px;
  left: 0;
  height: 21px;
  width: 21px;
  background-color: #eee;
  border: 1px solid #ccc;
  border-radius: 50%;
}

/* on mouse-over, add border color */
.radio:hover input ~ .check {
  border: 2px solid black;
}

/* add background color when the radio is checked */
.radio input:checked ~ .check {
  background-color: white;
  /* border: none; */
}

/* create the radio and hide when not checked */
.radio .check:after {
  content: '';
  position: absolute;
  display: none;
}

/* show the radio when checked */
.radio input:checked ~ .check:after {
  display: block;
}

/* radio style */
.radio .check:after {
  top: 5px;
  left: 5px;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: black;
}
</style>
