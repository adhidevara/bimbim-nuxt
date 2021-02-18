<template>
  <div id="app">
    <TitleBar/>
    <Nuxt/>
    <NavBar/>
  </div>
</template>

<script>
import NavBar from '~/components/NavBar.vue'
import TitleBar from '~/components/TitleBar.vue'
export default {
  components: {
    NavBar,
    TitleBar
  }
}
</script>
