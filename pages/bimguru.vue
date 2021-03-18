<template>
  <div class="xl:mx-64 px-4">
    <div class="text-center font-sans mx-auto mt-10">
      <h1 class="text-teal-700">
        <span class="font-extrabold text-5xl xs:text-4xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-5xl 2xl:text-5xl">BIM GURU<br></span>
        <span class="font-semibold text-4xl xs:text-3xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-4xl 2xl:text-4xl">List Mitra</span>
      </h1>
    </div>
    <div class="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-10">
      <MitraBimGuru v-for="mitra in mitras" :key="mitra.id_mitra" :mitra="mitra"/>
      <!-- <div v-for="mitra in mitras" :key="mitra.id_mitra">{{ mitra.nama }}</div> -->
    </div>
  </div>
</template>

<script>
export default {
  auth: false,
  data() {
    return {
      mitras: []
    }
  },
  mounted() {
    this.getMitra()
  },
  methods: {
    async getMitra() {
      this.mitras = await this.$axios.get('/bimapi/api/mitra/getMitra')
      .then(result => result.data[0])
      .catch(error => console.log(error))
    }
  },
}
</script>
