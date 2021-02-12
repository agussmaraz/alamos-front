<template>
  <section>
    <article class="overflow-y-auto py-48">
      <div
        v-for="(item, index) in filterName"
        :key="index"
        class="checkbox div-checkout px-3"
      >
        <input
          :id="item.model"
          v-model="item.status"
          type="checkbox"
          :name="item.model"
          class="input-div. w-4 h-5 md:h-6"
          @change="change(item)"
        />
        <label :for="item.model" class="pl-1">{{ item.name }}</label>
      </div>
    </article>
  </section>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: 'MotoSeguridad',
  props: {
    busqueda: {
      required: true,
      type: String,
    },
  },
  data() {
    return {
      array: [
        {
          name: 'Alarma',
          model: 'alarma',
          status: false,
        },
        {
          name: 'Chaleco',
          model: 'chaleco',
          status: false,
        },
        {
          name: 'Faros Halógenos',
          model: 'halogenos',
          status: false,
        },
        {
          name: 'Faros Led',
          model: 'led',
          status: false,
        },
        {
          name: 'Fenos ABS',
          model: 'abs',
          status: false,
        },
      ],
    }
  },
  computed: {
    ...mapState({
      caracteristicas: (state) => state.items.seguridad,
    }),
    filterName() {
      const data = this.array.filter((e) => {
        if (e.name.toLowerCase().includes(this.busqueda)) {
          return true
        } else {
          return false
        }
      })
      return data
    },
  },
  created() {
    this.checked()
  },
  methods: {
    ...mapActions({
      getData: 'items/getData',
    }),
    change(param) {
      this.getData(param)
      for (let index = 0; index < this.array.length; index++) {
        const element = this.array[index]
        if (element.status === true) {
          this.$emit('checkbox', true)
        }
      }
    },
    checked() {
      for (let index = 0; index < this.caracteristicas.length; index++) {
        const element = this.caracteristicas[index]
        const checked = this.array.find((e) => e.model === element.model)
        checked.status = true
      }
    },
  },
}
</script>

<style scoped>
.a {
  color: white;
  outline: none;
}
.button-sig {
  position: fixed;
  bottom: 100px;
  left: 109px;
}
input {
  outline: none;
}
::placeholder {
  color: #8d8c8c;
}
nav {
  background-color: #e5e5e5;
}
.arrow {
  fill: black;
}
.title {
  width: 67%;
}
.div-checkout {
  border-bottom: solid rgba(218, 218, 218, 0.2) 1px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  height: 53px;
  color: #353535;
  margin-bottom: 10px;
}
.input-div {
  height: 35px;
  width: 35px;
}

.checkbox {
  position: relative;
  display: block;
}
.checkbox input[type='checkbox'] {
  width: auto;
  opacity: 0.00000001;
  position: absolute;
  left: 0;
  margin-left: -20px;
}
.checkbox label {
  position: relative;
}
.checkbox label:before {
  content: '';
  position: absolute;
  right: 0;
  top: 0;
  width: 35px;
  height: 35px;
  transition: transform 0.28s ease;
  border-radius: 10px;
  border: 1px solid #353535;
}
.checkbox label:after {
  content: '';
  display: block;
  width: 18px;
  height: 10px;
  border-bottom: 2px solid #ed1a3b;
  border-left: 2px solid #ed1a3b;
  transform: rotate(-45deg) scale(0);
  -webkit-transform: rotate(-45deg) scale(0);
  transition: transform ease 0.25s;
  will-change: transform;
  position: absolute;
  top: 9px;
  right: 8px;
}
.checkbox input[type='checkbox']:checked ~ label::before {
  background-color: white;
  color: #ed1a3b;
}
.checkbox input[type='checkbox']:checked ~ label::after {
  -webkit-transform: rotate(-45deg) scale(1);
  transform: rotate(-45deg) scale(1);
}
.checkbox label {
  min-height: 34px;
  display: flex;
  margin-bottom: 0;
  font-weight: normal;
  cursor: pointer;
  align-items: center;
}
.checkbox label span {
  position: absolute;
  top: 50%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
}
.checkbox input[type='checkbox']:focus + label::before {
  outline: 0;
}
</style>
