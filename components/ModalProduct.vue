<template>
  <div class="flex flex-wrap -mx-1 overflow-hidden sm:-mx-1 md:-mx-1 lg:-mx-1 xl:-mx-1">
    <div class="my-1 px-1 w-1/2 overflow-hidden sm:my-1 sm:px-1 sm:w-1/2 md:my-1 md:px-1 md:w-1/2 lg:my-1 lg:px-1 lg:w-1/4 xl:my-1 xl:px-1 xl:w-1/4">
      <div @click="show('modal-bimguru')" class="mx-auto bg-white shadow-md p-4 border-2 rounded-lg lg:max-w-full md:w-56 sm:w-48 hover:bg-gray-100 hover:shadow-xl cursor-pointer">
        <img class="w-40 mx-auto" src="https://dl.dropboxusercontent.com/s/rj1fe8gw7dbuula/n-bgr.png?dl=0">
        <h1 class="text-teal-700 text-center">
          <span class="font-bold xs:text-lg sm:text-2xl md:text-2xl lg:text-2xl">BimGuru</span>
        </h1>
      </div>
    </div>
    <div class="my-1 px-1 w-1/2 overflow-hidden sm:my-1 sm:px-1 sm:w-1/2 md:my-1 md:px-1 md:w-1/2 lg:my-1 lg:px-1 lg:w-1/4 xl:my-1 xl:px-1 xl:w-1/4">
      <div @click="show('modal-bimpelatih')" class="mx-auto bg-white shadow-md p-4 border-2 rounded-lg lg:max-w-full md:w-56 sm:w-48 hover:bg-gray-100 hover:shadow-xl cursor-pointer">
        <img class="w-40 mx-auto" src="https://dl.dropboxusercontent.com/s/iba29wmcilffxh2/n-bmp.png?dl=0">
        <h1 class="text-teal-700 text-center">
          <span class="font-bold xs:text-lg sm:text-2xl md:text-2xl lg:text-2xl">BimPelatih</span>
        </h1>
      </div>
    </div>
    <div class="my-1 px-1 w-1/2 overflow-hidden sm:my-1 sm:px-1 sm:w-1/2 md:my-1 md:px-1 md:w-1/2 lg:my-1 lg:px-1 lg:w-1/4 xl:my-1 xl:px-1 xl:w-1/4">
      <div @click="show('modal-bimkonseling')" class="mx-auto bg-white shadow-md p-4 border-2 rounded-lg lg:max-w-full md:w-56 sm:w-48 hover:bg-gray-100 hover:shadow-xl cursor-pointer">
        <img class="w-40 mx-auto" src="https://dl.dropboxusercontent.com/s/1sgyqehvfc7zlms/n-bmk.png?dl=0">
        <h1 class="text-teal-700 text-center">
          <span class="font-bold xs:text-md sm:text-2xl md:text-2xl lg:text-2xl">BimKonseling</span>
        </h1>
      </div>
    </div>
    <div class="my-1 px-1 w-1/2 overflow-hidden sm:my-1 sm:px-1 sm:w-1/2 md:my-1 md:px-1 md:w-1/2 lg:my-1 lg:px-1 lg:w-1/4 xl:my-1 xl:px-1 xl:w-1/4">
      <div @click="show('modal-bimevent')" class="mx-auto bg-white shadow-md p-4 border-2 rounded-lg lg:max-w-full md:w-56 sm:w-48 hover:bg-gray-100 hover:shadow-xl cursor-pointer">
        <img class="w-40 mx-auto" src="https://dl.dropboxusercontent.com/s/b5jxn9ipl53dhze/n-bmv.png?dl=0">
        <h1 class="text-teal-700 text-center">
          <span class="font-bold xs:text-lg sm:text-2xl md:text-2xl lg:text-2xl">BimEvent</span>
        </h1>
      </div>
    </div>
    <div class="text-center font-sans mx-auto">
      <h1 class="text-teal-700">
        <span class="font-semibold text-4xl xs:text-3xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-4xl 2xl:text-4xl">Bersama </span>
        <span class="font-extrabold text-5xl xs:text-4xl">bimbim!</span>
      </h1>
    </div>

    <div v-for="data in datas" :key="data.type">
      <modal :name="data.type" :adaptive="true" height="auto" width="500" :scrollable="true" @before-open="beforeOpen" @before-close="beforeClose">
        <div class="px-5 py-3 border-teal-700 border-t-8 border-l-8 border-r-8">
          <font-awesome-icon class="text-teal-700" :icon="['fas', 'info']"/>
          <img :src="data.logo" class="mx-auto"/>
          <div class="text-center font-sans mx-auto">
            <h1 class="text-teal-700 -mt-5">
              <span class="font-extrabold text-5xl xs:text-4xl">Bim</span>
              <span class="font-semibold text-4xl xs:text-3xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-4xl 2xl:text-4xl">{{ data.title }}</span>
            </h1>
          </div>
          <p class="font-semibold text-xl text-teal-700 text-justify">{{ data.body }}</p>
        </div>
        <div class="flex">
        <button @click="hide(data.type)" class="text-center w-1/2 text-white bg-teal-700 hover:bg-teal-800 p-3">Tutup</button>
        <nuxt-link :to="data.action" class="text-center w-1/2 text-white bg-teal-700 hover:bg-teal-800 p-3">Ke Bim{{ data.title }}</nuxt-link>
        </div>
      </modal>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      datas: [
        {
          type: 'modal-bimguru',
          logo: "https://dl.dropboxusercontent.com/s/rj1fe8gw7dbuula/n-bgr.png?dl=0",
          title: "Guru",
          body: "Bim Guru merupakan fitur untuk mencari guru akademik untuk para siswa yang ingin les privat sendiri maupun berkelompok",
          action: "/bimguru"
        },
        {
          type: 'modal-bimpelatih',
          logo: "https://dl.dropboxusercontent.com/s/iba29wmcilffxh2/n-bmp.png?dl=0",
          title: "Pelatih",
          body: "Bim Pelatih merupakan fitur untuk mencari pelatih non-akademik untuk para siswa yang ingin mencari pelatih atau private trainer bisa menggunakan fitur ini",
          action: "/bimpelatih"
        },
        {
          type: 'modal-bimkonseling',
          logo: "https://dl.dropboxusercontent.com/s/1sgyqehvfc7zlms/n-bmk.png?dl=0",
          title: "Konseling",
          body: "Bim Konseling merupakan fitur untuk membantu anda dalam menemukan konselor atau dapat bertukar cerita kepada konselor untuk membantu masalah anda",
          action: "/bimkonseling"
        },
        {
          type: 'modal-bimevent',
          logo: "https://dl.dropboxusercontent.com/s/b5jxn9ipl53dhze/n-bmv.png?dl=0",
          title: "Event",
          body: "Bim Event merupakan fitur untuk mencari event-event menarik yang ada di bimbim untuk menunjang aktifitas akademik anda",
          action: "/bimevent"
        }
      ],
    }
  },
  methods: {
    show(modal) {
      this.$modal.show(modal)
    },
    hide(modal) {
      this.$modal.hide(modal)
    },
    beforeOpen (event) {
      console.log('Opening...')
    },
    beforeClose (event) {
      console.log('Closing...')
    }
  },
}
</script>
