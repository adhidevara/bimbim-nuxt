<template>
  <div class="px-4">
    <div class="text-center font-sans mx-auto mt-10">
      <h1 class="text-teal-700">
        <span class="font-extrabold text-5xl xs:text-4xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-5xl 2xl:text-5xl">Produk</span>
        <span class="font-semibold text-4xl xs:text-3xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-4xl 2xl:text-4xl">Kami</span>
      </h1>
    </div>
    <div class="flex flex-wrap -mx-1 overflow-hidden sm:-mx-1 md:-mx-1 lg:-mx-1 xl:-mx-1">
      <div class="my-1 px-1 w-1/2 overflow-hidden sm:my-1 sm:px-1 sm:w-1/2 md:my-1 md:px-1 md:w-1/2 lg:my-1 lg:px-1 lg:w-1/4 xl:my-1 xl:px-1 xl:w-1/4">
        <div @click="modal(bimGuru.title, bimGuru.body)" class="mx-auto bg-white shadow-md p-4 border-2 rounded-lg lg:max-w-full md:w-56 sm:w-48 hover:bg-gray-100 hover:shadow-xl cursor-pointer">
          <img class="w-40 mx-auto" src="https://dl.dropboxusercontent.com/s/rj1fe8gw7dbuula/n-bgr.png?dl=0">
          <h1 class="text-teal-700 text-center">
            <span class="font-bold xs:text-lg sm:text-2xl md:text-2xl lg:text-2xl">BimGuru</span>
          </h1>
        </div>
      </div>
      <div class="my-1 px-1 w-1/2 overflow-hidden sm:my-1 sm:px-1 sm:w-1/2 md:my-1 md:px-1 md:w-1/2 lg:my-1 lg:px-1 lg:w-1/4 xl:my-1 xl:px-1 xl:w-1/4">
        <div @click="modal(bimPelatih.title, bimPelatih.body)" class="mx-auto bg-white shadow-md p-4 border-2 rounded-lg lg:max-w-full md:w-56 sm:w-48 hover:bg-gray-100 hover:shadow-xl cursor-pointer">
          <img class="w-40 mx-auto" src="https://dl.dropboxusercontent.com/s/iba29wmcilffxh2/n-bmp.png?dl=0">
          <h1 class="text-teal-700 text-center">
            <span class="font-bold xs:text-lg sm:text-2xl md:text-2xl lg:text-2xl">BimPelatih</span>
          </h1>
        </div>
      </div>
      <div class="my-1 px-1 w-1/2 overflow-hidden sm:my-1 sm:px-1 sm:w-1/2 md:my-1 md:px-1 md:w-1/2 lg:my-1 lg:px-1 lg:w-1/4 xl:my-1 xl:px-1 xl:w-1/4">
        <div @click="modal(bimKonseling.title, bimKonseling.body)" class="mx-auto bg-white shadow-md p-4 border-2 rounded-lg lg:max-w-full md:w-56 sm:w-48 hover:bg-gray-100 hover:shadow-xl cursor-pointer">
          <img class="w-40 mx-auto" src="https://dl.dropboxusercontent.com/s/1sgyqehvfc7zlms/n-bmk.png?dl=0">
          <h1 class="text-teal-700 text-center">
            <span class="font-bold xs:text-md sm:text-2xl md:text-2xl lg:text-2xl">BimKonseling</span>
          </h1>
        </div>
      </div>
      <div class="my-1 px-1 w-1/2 overflow-hidden sm:my-1 sm:px-1 sm:w-1/2 md:my-1 md:px-1 md:w-1/2 lg:my-1 lg:px-1 lg:w-1/4 xl:my-1 xl:px-1 xl:w-1/4">
        <div @click="modal(bimEvent.title, bimEvent.body)" class="mx-auto bg-white shadow-md p-4 border-2 rounded-lg lg:max-w-full md:w-56 sm:w-48 hover:bg-gray-100 hover:shadow-xl cursor-pointer">
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
    </div>
  </div>
</template>

<script>
export default {
  auth: false,
  data() {
    return {
      bimGuru: {
        title: "BimGuru",
        body: "Bim Guru merupakan fitur untuk mencari guru akademik untuk para siswa yang ingin les privat sendiri maupun berkelompok"
      },
      bimPelatih: {
        title: "BimPelatih",
        body: "Bim Pelatih merupakan fitur untuk mencari pelatih non-akademik untuk para siswa yang ingin mencari pelatih atau private trainer bisa menggunakan fitur ini"
      },
      bimKonseling: {
        title: "BimKonseling",
        body: "Bim Konseling merupakan fitur untuk membantu anda dalam menemukan konselor atau dapat bertukar cerita kepada konselor untuk membantu masalah anda"
      },
      bimEvent: {
        title: "BimEvent",
        body: "Bim Event merupakan fitur untuk mencari event-event menarik yang ada di bimbim untuk menunjang aktifitas akademik anda"
      }
    }
  },
  methods: {
    modal: function (titles, bodys) {
      this.$modal.show({
        type: 'info',
        title: titles,
        body: bodys,
        primary: {
          label: 'Tutup',
          theme: 'indigo-light',
          action: () => console.log(),
        },
      })
    },
  },
}
</script>
