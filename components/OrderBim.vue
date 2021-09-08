<template>
  <div>
    <div v-for="order in orders" :key="order.id_order">
      <slot name="order" v-bind:order="order"></slot>
    </div>
    <div v-if="orders.length" v-observe-visibility="handleBottom"></div>
  </div>
</template>

<script>
export default {
  props: {
    orders: {
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
