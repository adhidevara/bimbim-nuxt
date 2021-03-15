<template>
  <div class="xl:mx-64 px-4">
    <div class="text-center font-sans mx-auto mt-10">
      <h1 class="text-teal-700">
        <span class="font-extrabold text-5xl xs:text-4xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-5xl 2xl:text-5xl">Ingin Bermitra<br></span>
        <span class="font-semibold text-4xl xs:text-3xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-4xl 2xl:text-4xl">dengan bimbim?</span>
      </h1>
    </div>
    <div class="flex flex-wrap overflow-hidden mt-4 -mb-20">
      <div class="w-1/2 overflow-hidden xs:w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2">
        <img class="mx-auto max-w-xl xs:w-full" data-src="https://dl.dropboxusercontent.com/s/e7dnevcqnhe65ah/mitrasamp.png?dl=0" alt="" title="" v-lazy-load>
      </div>
      <div class="w-1/2 overflow-hidden xs:w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2 md:pr-4">
        <div class="xs:mt-5 md:mt-20">
          <p class="text-justify text-xl font-semibold my-auto text-teal-700">Bergabunglah menjadi mitra Pengajar, Pelatih sesuai kompetensi yang anda miliki. Kami akan membantu anda mewujudkan keinginan anda untuk menjadi tenaga pengajar yang berkompeten di bidangnya</p>
        </div>
        <hr class="border-2 rounded-lg mt-5">
        <div class="mt-10 mb-5">
          <nuxt-link to="/daftarMitra" class="block text-center rounded-full p-3 bg-teal-700 text-white font-bold">
          <font-awesome-icon class="text-white" :icon="['fas', 'pencil-alt']"/>
          Daftar Mitra
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  auth: false
}
</script>
