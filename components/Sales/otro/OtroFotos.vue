<template>
  <section class="flex flex-col items-center">
    <h1 class="my-5">Sube las fotos de tu moto</h1>
    <article class="w-4/5 text-left">
      <h3 class="mb-5">Fotos</h3>
      <article class="flex flex-wrap flex-row justify-around">
        <div
          class="div-exterior relative"
          @click="openModal({ modal: 'otroImperfecciones' })"
        >
          <IconCamaraGray class="w-12 h-12 absolute icon-camara" />

          <IconAddImage class="w-6 h-6 absolute icon-add" />
        </div>
        <div
          class="div-exterior relative"
          @click="openModal({ modal: 'otroImperfecciones' })"
        >
          <IconCamaraGray class="w-12 h-12 absolute icon-camara" />
          <IconAddImage class="w-6 h-6 absolute icon-add" />
        </div>
        <div
          class="div-exterior relative"
          @click="openModal({ modal: 'otroImperfecciones' })"
        >
          <IconCamaraGray class="w-12 h-12 absolute icon-camara" />

          <IconAddImage class="w-6 h-6 absolute icon-add" />
        </div>
        <div
          class="mt-6 div-exterior relative"
          @click="openModal({ modal: 'otroImperfecciones' })"
        >
          <IconCamaraGray class="w-12 h-12 absolute icon-camara" />

          <IconAddImage class="w-6 h-6 absolute icon-add" />
        </div>
        <div
          class="mt-6 div-exterior relative"
          @click="openModal({ modal: 'otroImperfecciones' })"
        >
          <IconCamaraGray class="w-12 h-12 absolute icon-camara" />

          <IconAddImage class="w-6 h-6 absolute icon-add" />
        </div>
        <div
          class="mt-6 div-exterior relative"
          @click="openModal({ modal: 'otroImperfecciones' })"
        >
          <IconCamaraGray class="w-12 h-12 absolute icon-camara" />

          <IconAddImage class="w-6 h-6 absolute icon-add" />
        </div>
        <div
          class="mt-6 div-exterior relative"
          @click="openModal({ modal: 'otroImperfecciones' })"
        >
          <IconCamaraGray class="w-12 h-12 absolute icon-camara" />

          <IconAddImage class="w-6 h-6 absolute icon-add" />
        </div>
        <div
          class="mt-6 div-exterior relative"
          @click="openModal({ modal: 'otroImperfecciones' })"
        >
          <IconCamaraGray class="w-12 h-12 absolute icon-camara" />

          <IconAddImage class="w-6 h-6 absolute icon-add" />
        </div>
        <div
          class="mt-6 div-exterior relative"
          @click="openModal({ modal: 'otroImperfecciones' })"
        >
          <IconCamaraGray class="w-12 h-12 absolute icon-camara" />

          <IconAddImage class="w-6 h-6 absolute icon-add" />
        </div>
        <div
          class="mt-6 div-exterior relative"
          @click="openModal({ modal: 'otroImperfecciones' })"
        >
          <IconCamaraGray class="w-12 h-12 absolute icon-camara" />

          <IconAddImage class="w-6 h-6 absolute icon-add" />
        </div>
        <div
          class="mt-6 div-exterior relative"
          @click="openModal({ modal: 'otroImperfecciones' })"
        >
          <IconCamaraGray class="w-12 h-12 absolute icon-camara" />

          <IconAddImage class="w-6 h-6 absolute icon-add" />
        </div>
      </article>
    </article>
    <article class="w-4/5 text-left mt-8">
      <h3 class="mb-5">Link Video (opcional)</h3>
      <section>
        <input
          v-model="video"
          type="url"
          class="border border-black w-10/12 rounded-md h-8 pl-2"
        />
      </section>
    </article>
  </section>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      video: 'https://youtu.be/EAoBEW24p3I',
    }
  },
  methods: {
    ...mapActions({
      openModal: 'modal/openModal',
    }),
  },
}
</script>

<style scoped>
.icon-camara {
  bottom: 23px;
  right: 26px;
}
.icon-add {
  top: 4px;
  right: 4px;
}
h1 {
  color: #444343;
  font-size: 20px;
  font-weight: bold;
}
h3 {
  color: #444343;
  font-size: 18px;
  font-weight: bold;
}
.p1 {
  right: 25px;
  bottom: 4px;
  color: white;
}
.p2 {
  right: 23px;
  bottom: 4px;
  color: white;
}
.p3 {
  right: 17px;
  bottom: 4px;
  color: white;
}
.p4 {
  right: 35px;
  bottom: 4px;
  color: white;
}
.p5 {
  right: 21px;
  bottom: 4px;
  color: white;
}
.div-exterior {
  width: 102px;
  height: 100px;
  background-color: #eaebef;
  border-radius: 8px;
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.75);
  cursor: pointer;
}
.title-image {
  height: 30%;
  width: 100%;
  background-color: black;
  opacity: 0.5;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
}
.div-interior1 {
  width: 102px;
  height: 100px;
  border-radius: 8px;
  background-image: url('~assets/img/Frente.svg');
  background-size: cover;
  display: flex;
  align-items: flex-end;
  flex-flow: column-reverse;
  cursor: pointer;
}
.div-interior2 {
  width: 102px;
  height: 100px;
  border-radius: 8px;
  background-image: url('~assets/img/Car-tablero.svg');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: flex-end;
  flex-flow: column-reverse;
  cursor: pointer;
}
.div-interior3 {
  width: 102px;
  height: 100px;
  border-radius: 8px;
  background-image: url('~assets/img/Car-interior.svg');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: flex-end;
  flex-flow: column-reverse;
  cursor: pointer;
}
.div-interior4 {
  width: 102px;
  height: 100px;
  border-radius: 8px;
  background-image: url('~assets/img/Baul.svg');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: flex-end;
  flex-flow: column-reverse;
  cursor: pointer;
}
.div-interior5 {
  width: 102px;
  height: 100px;
  border-radius: 8px;
  background-image: url('~assets/img/Pedales.svg');
  background-size: cover;
  background-origin: center;
  display: flex;
  align-items: flex-end;
  flex-flow: column-reverse;
  cursor: pointer;
}
.foto1 {
  width: 64px;
  margin: 0 auto;
  margin-top: 12px;
  padding-top: 19px;
}
.foto2 {
  width: 79px;
  margin: 0 auto;
  margin-top: 15px;
  padding-top: 19px;
}
.foto3 {
  width: 82px;
  margin: 0 auto;
  margin-top: 7px;
  padding-top: 19px;
}
.foto4 {
  width: 36px;
  margin: 0 auto;
  margin-top: 2px;
  padding-top: 19px;
}
.foto5 {
  width: 65px;
  margin: 0 auto;
  margin-top: 13px;
  padding-top: 19px;
}
.foto6 {
  width: 84px;
  margin: 0 auto;
  padding-top: 22px;
  border-radius: 6px;
}
.foto7 {
  width: 66px;
  margin: 0 auto;
  padding-top: 22px;
  border-radius: 6px;
}
.foto8 {
  width: 40px;
  margin: 0 auto;
  padding-top: 22px;
  border-radius: 6px;
}
.foto9 {
  width: 100px;
  margin: 0 auto;
  padding-top: 22px;
  border-radius: 6px;
}
.foto10 {
  width: 60px;
  margin: 0 auto;
  padding-top: 22px;
  border-radius: 6px;
}
.foto11 {
  width: 94px;
  margin: 0 auto;
  padding-top: 22px;
  border-radius: 6px;
}
</style>
