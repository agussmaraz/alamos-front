<template>
  <article>
    <nav class="flex justify-between px-3 py-4 mb-10">
      <div>
        <nuxt-link to="/ventas/automoviles/caracteristicas">
          <IconArrow class="arrow" />
        </nuxt-link>
      </div>
      <div class="font-bold">Publicar vehiculo</div>
      <div class="font-bold text-xs mt-1">Cancelar</div>
    </nav>
    <section class="caja-padre mt-10 pb-40">
      <img
        src="~assets/img/Imperfeccion.jpg"
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
      <div class="w-full mb-10">
        <h3 class="font-bold">Descripción de imperfección</h3>
        <input
          type="text"
          class="w-full border border-gray-600 rounded-md h-8 mt-3 pl-2"
          placeholder="'Rayón superficial'"
        />
      </div>
      <article>
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
              del vehículo, pero implica arreglos de latonería y pintura.
              Ejemplo: restaurar tapizados, pintura.
            </p>
            <input type="radio" name="radio" />
            <span class="check"></span>
          </label>
        </div>
        <div class="flex items-center">
          <label class="radio">
            <p>
              <strong> Severo:</strong> Estructural. Afecta la asegutabilidad
              del vehículo. Ejemplo: golpes estructurales, reparaciones
              mecánicas.
            </p>
            <input type="radio" name="radio" />
            <span class="check"></span>
          </label>
        </div>
        <div
          class="bg-rojo w-48 py-2 text-center rounded-3xl shadow-lg m-auto button-sig"
        >
          <button class="a">Siguiente</button>
        </div>
      </article>
    </section>
    <Footer />
  </article>
</template>

<script>
import Footer from '~/components/Footer/Footer.vue'
export default {
  name: 'Detalles',
  components: { Footer },
}
</script>

<style scoped>
.caja-padre {
  width: 80%;
  margin: 0 auto;
}
.a {
  color: white;
  outline: none;
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
  background-color: white;
  border: 2px solid black;
  border-radius: 40%;
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
