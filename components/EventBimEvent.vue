<template>
  <div>
    <div v-for="event in events" :key="event.id_event">
      <slot name="event" v-bind:event="event"></slot>
    </div>
    <div v-if="events.length" v-observe-visibility="handleBottom"></div>
  </div>
</template>

<script>
export default {
  props: {
    events: {
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
