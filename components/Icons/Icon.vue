<template>
  <Component :is="icon_component" class="icon__default fill-current" />
</template>

<script>
export default {
  name: 'Icon',
  props: {
    icon: {
      type: String,
      required: false,
      default: 'Facebook',
    },
  },
  computed: {
    icon_component() {
      return () => import('~/components/Icons/Icon' + this.icon + '.vue')
    },
  },
}
</script>

<style>
.icon__default {
  color: #797979;
  @apply fill-current;
}
</style>
