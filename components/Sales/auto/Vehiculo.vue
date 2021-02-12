<template>
  <section class="py-20">
    <div>
      <img src="~assets/img/Subaru.jpg" alt="foto" class="w-full" />
    </div>
    <article class="p-4">
      <div class="flex items-center py-4">
        <span class="font-bold text-lg mr-2">{{ auto.Modelo }}</span> |
        <h2 class="ml-2 uppercase">{{ auto.Linea }}</h2>
      </div>
      <p class="p-marca uppercase font-bold">{{ auto.Marca }}</p>
      <p class="p-marca font-bold text-right text-lg">{{ auto.km }} Km</p>
      <p class="font-bold text-2xl">$ {{ auto.precio }}</p>
      <div class="flex items-center justify-between p-marca mt-8 mb-4">
        <p class="flex items-center">
          <IconMap class="w-4 h-4 mr-2" /> {{ auto.ubicacion }}
        </p>
        <p class="flex items-center">
          <IconUser class="w-4 h-4 mr-2" />{{ auto.dueño }}
        </p>
      </div>
    </article>
    <article class="art-caract flex items-center justify-around p-5">
      <div class="flex flex-col items-center">
        <IconUserGray class="w-8 h-8" />
        <p class="font-bold p-marca mt-2">Único dueño</p>
      </div>
      <div class="flex flex-col items-center">
        <IconCamioneta class="w-20 h-10" />
        <p class="font-bold p-marca">Wagon</p>
      </div>
    </article>
    <article class="art-detalles flex flex-col items-center">
      <h3 class="text-xl font-bold my-8">Detalles del vehículo</h3>
    </article>
    <article class="mt-8">
      <div class="flex items-center justify-around pt-2 w-full">
        <p
          class="font-bold w-1/2 text-center pb-2"
          :class="componente === false ? 'subrayado' : null"
          @click="componente = false"
        >
          Ficha técnica
        </p>
        <p
          class="font-bold w-1/2 text-center pb-2"
          :class="componente ? 'subrayado' : null"
          @click="componente = true"
        >
          Comentario vendedor
        </p>
      </div>
      <div class="comentario">
        <Comentario v-if="componente" class="tamaño" />
        <Ficha v-else />
      </div>
      <div class="referencias">
        <Referencias />
      </div>
      <div class="financiamiento">
        <Financiamiento />
      </div>
    </article>
  </section>
</template>

<script>
export default {
  name: 'Vehiculo',
  data() {
    return {
      auto: {
        Marca: 'Subaru',
        Linea: 'Outback 3.6r Es Limited',
        Modelo: '2019',
        Puertas: '5',
        Cilindraje: '3630',
        Color: 'Gris',
        Clase: 'Camioneta',
        Tipo: 'Wagon',
        Combustible: 'Gasolina',
        Peso: '2200',
        Ejes: '2',
        Blindado: 'No',
        dueño: 'Dueño directo',
        ubicacion: 'Bogotá D.C',
        km: '18.000',
        precio: '72.000.000',
      },
      componente: false,
    }
  },
}
</script>

<style scoped>
.arrow {
  fill: black;
}
.nav {
  background-color: #eaebef;
}
.options {
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  position: fixed;
}
.p-marca {
  color: #8d8c8c;
}
.art-caract {
  background-color: #f2efef;
  height: 149px;
}
.comentario {
  background-color: #f2efef;
  padding-top: 20px;
}
.div-elegir {
  background-color: white;
}
.tamaño {
  height: 352px;
}
.subrayado {
  border-bottom: solid #ed1a3b 3px;
}
.referencias {
  background-color: #495b6d;
}
</style>
