<template>
  <div>
    <div v-for="mitra in mitras" :key="mitra.id_mitra">
      <slot name="mitra" v-bind:mitra="mitra"></slot>
    </div>
    <div v-if="mitras.length" v-observe-visibility="handleBottom"></div>
  </div>
</template>

<script>
export default {
  props: {
    mitras: {
      type: Array,
      default: () => {}
    }
  },
  data() {
    return {
      page: 1,
    }
  },
  methods: {
    handleBottom(isVisible) {
      if(!isVisible) { return }
      this.page++
      this.$emit('refetch', this.page)
    }
  },
}
</script>
