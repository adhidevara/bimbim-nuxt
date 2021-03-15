<template>
  <div class="xl:mx-64 mt-10 px-4">
    <div class="flex flex-wrap overflow-hidden">
      <div class="w-1/2 overflow-hidden xs:w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2">
        <div class="p-5">
          <img class="max-w-md mx-auto xs:w-full" src="~/assets/locmain.png">
        </div>
      </div>
      <div class="w-1/2 overflow-hidden xs:w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2">
        <div class="xs:text-center xs:mt-5 sm:text-center sm:mt-5 md:text-center lg:text-left border-b-2 border-gray-400">
          <h1 class="text-teal-700">
            <span class="font-semibold text-4xl xs:text-3xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-4xl 2xl:text-4xl">Apa itu </span>
            <span class="font-extrabold text-5xl xs:text-4xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-5xl 2xl:text-5xl">bimbim?</span>
          </h1>
        </div>
        <div class="text-teal-700 text-base mt-2">
          <p class="text-justify md:mt-4"><span class="font-bold">bimbim</span> adalah platform penghubung antara guru pembimbing dan siswa atau orang tua serta untuk memfasilitasi guru honorer, mahasiswa, fresh graduate dan tenaga pendidikan mendapatkan tempat untuk mencari siswa bimbingan secara mudah dan efisien baik akademik maupun non akademik. Melalui <span class="font-bold">bimbim</span> guru/pelatih pembimbing dapat menawarkan jasa bimbinganya. Melalui <span class="font-bold">bimbim</span> siswa/orang tua dapat menemukan pembimbing secara mudah dan berkualitas.</p>
        </div>
      </div>
      <div class="w-full overflow-hidden xs:w-full sm:w-full md:w-full lg:w-full xl:w-full">
        <VueSlickCarousel v-bind="settings" class="mt-10">
          <div class="bg-white rounded-lg px-2">
            <div class="w-96 border-t-8 border-2 border-teal-700 rounded-lg flex">
              <div class="w-1/3 pt-6 flex justify-center">
                <svg class="xs:h-12 xs:w-12 md:w-16 md:h-20 bg-teal-700 text-white p-3 rounded-full" fill="white" id="Capa_1" height="512" viewBox="0 0 512.006 512.006" width="512" xmlns="http://www.w3.org/2000/svg"><g><path d="m497.003 136.003c-8.291 0-15 6.709-15 15 0 11.006-4.109 21.515-11.235 29.65-9.657-6.736-20.854-13.321-31.654-19.739 7.505-11.9 11.889-25.646 11.889-39.911 0-8.291-6.709-15-15-15s-15 6.709-15 15c0 9.351-2.834 18.148-8.027 25.596-10.95-5.577-22.313-10.723-34.127-15.447 7.617-11.9 12.155-25.609 12.155-40.15 0-8.291-6.709-15-15-15s-15 6.709-15 15c0 11.19-4.285 21.654-11.625 29.852-29.293-8.958-60.432-14.852-93.375-14.852-104.561 0-194.418 55.225-250.551 101.558-6.387 5.273-7.295 14.736-2.021 21.123 5.288 6.387 14.722 7.31 21.123 2.021 52.339-43.198 135.795-94.702 231.449-94.702s179.11 51.504 231.449 94.702c6.427 5.283 15.85 4.341 21.123-2.021 5.273-6.387 4.365-15.85-2.021-21.123-3.638-3.003-7.784-6.099-11.691-9.159 10.84-13.27 17.141-29.943 17.141-47.399-.002-8.29-6.711-14.999-15.002-14.999z"/><path d="m256.003 196.003c-57.891 0-105 47.109-105 105s47.109 105 105 105 105-47.109 105-105-47.109-105-105-105zm55.605 85.605-60 60c-2.93 2.93-6.768 4.395-10.605 4.395s-7.676-1.465-10.605-4.395l-30-30c-5.859-5.859-5.859-15.352 0-21.211s15.352-5.859 21.211 0l19.395 19.395 49.395-49.395c5.859-5.859 15.352-5.859 21.211 0 5.858 5.86 5.858 15.352-.002 21.211z"/><path d="m121.003 301.003c0-74.443 60.557-135 135-135-137.681 0-247.607 119.897-252.177 124.995-5.098 5.698-5.098 14.312 0 20.01 4.57 5.098 114.496 124.995 252.177 124.995-74.443 0-135-60.557-135-135z"/><path d="m256.003 166.003c74.443 0 135 60.557 135 135s-60.557 135-135 135c137.681 0 247.606-119.897 252.177-124.995 5.098-5.698 5.098-14.312 0-20.01-4.571-5.098-114.496-124.995-252.177-124.995z"/></g></svg>
              </div>
              <div class="w-full pt-9 pr-4">
                <h3 class="font-bold text-teal-700 text-3xl mt-5">Visi</h3>
                <p class="py-4 text-sm text-teal-700 text-justify">
                  Menjadi platform penyedia layanan penghubung antara pembimbing dan siswa secara mudah, praktis, dan transparan.
                </p>
              </div>
            </div>
          </div>
          <div class="bg-white rounded-lg px-2">
            <div class="w-96 border-t-8 border-2 border-teal-700 rounded-lg flex">
              <div class="w-1/3 pt-6 flex justify-center">
                <svg class="xs:h-12 xs:w-12 md:w-16 md:h-20 bg-teal-700 text-white p-3 rounded-full" fill="white" id="Capa_1" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><g><path d="m79.384 326.459-79.384 79.838 63.669 21.035 79.804-79.805z"/><path d="m84.668 448.331 21.035 63.669 79.838-79.384-21.068-64.089z"/><path d="m420.692 112.519 26.675 42.305 64.633-154.824-154.823 64.633 42.305 26.675-16.816 16.816c-34.13-29.288-78.346-47.124-126.666-47.124-107.401 0-195 87.599-195 195 0 14.099 2.1 27.9 4.799 41.4l5.402-5.099 62.823 20.614c-8.137-17.355-13.024-36.512-13.024-56.915 0-74.443 60.557-135 135-135s135 60.557 135 135-60.557 135-135 135c-20.403 0-39.56-4.887-56.915-13.024l20.614 62.823-5.099 5.402c13.5 2.699 27.301 4.799 41.4 4.799 107.401 0 195-87.599 195-195 0-48.32-17.836-92.536-47.124-126.665z"/><path d="m256 361c57.891 0 105-47.109 105-105s-47.109-105-105-105-105 47.109-105 105c0 23.589 8.108 45.152 21.295 62.704l21.275-21.273c-7.912-11.883-12.57-26.116-12.57-41.431 0-41.353 33.647-75 75-75s75 33.647 75 75-33.647 75-75 75c-15.315 0-29.548-4.658-41.431-12.57l-21.273 21.275c17.552 13.187 39.115 21.295 62.704 21.295z"/><path d="m256 301c24.814 0 45-20.186 45-45s-20.186-45-45-45-45 20.186-45 45c0 6.982 1.734 13.513 4.583 19.417l29.918-29.916 20.999 20.999-29.916 29.918c5.903 2.848 12.434 4.582 19.416 4.582z"/></g></svg>
              </div>
              <div class="w-full pt-9 pr-4">
                <h3 class="font-bold text-teal-700 text-3xl mt-5">Misi</h3>
                <p class="py-4 text-sm text-teal-700 text-justify">
                  <ul>
                    <li class="border-b-2">Membuat inovasi platform yag mudah diakses oleh pembimbing dan siswa</li>
                    <li class="border-b-2">Menyediakan fitur unggulan untuk mempermudah menghubungkan layanan pembimbing dengan siswa</li>
                    <li class="">Memfasilitasi pembimbing dan siswa untuk terhubung secara mudah</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </VueSlickCarousel>
      </div>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  components: { VueSlickCarousel },
  auth: false,
  data() {
    return {
      settings: {
        "dots": true,
        "dotsClass": "slick-dots custom-dot-class",
        "edgeFriction": 0.35,
        "infinite": true,
        "speed": 500,
        "slidesToShow": 2,
        "slidesToScroll": 2,
        "swipeToSlide": true,
        "responsive": [
          {
            "breakpoint": 768,
            "settings": {
              "slidesToShow": 1,
              "slidesToScroll": 1,
              "initialSlide": 0,
            }
          },
          {
            "breakpoint": 460,
            "settings": {
              "slidesToShow": 1,
              "slidesToScroll": 1,
              "initialSlide": 0
            }
          },
        ]
      }
    }
  },
}
</script>
