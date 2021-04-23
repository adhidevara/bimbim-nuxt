<template>
  <div class="xl:mx-64 px-4">

    <modal name="modal-pricelist" :adaptive="true" height="auto" width="500" :scrollable="true" @before-open="beforeOpen" @before-close="beforeClose">
      <div class="px-5 py-3 border-teal-700 border-t-8 border-l-8 border-r-8">
        <font-awesome-icon class="text-teal-700" :icon="['fas', 'money-bill-wave']"/>
        <div class="text-center font-sans mx-auto">
          <h1 class="text-teal-700 mt-3">
            <span class="font-extrabold text-5xl xs:text-4xl">Daftar </span>
            <span class="font-semibold text-4xl xs:text-3xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-4xl 2xl:text-4xl">Harga</span>
          </h1>
        </div>
        <div class="text-left mt-3">
          <ValidationObserver ref="observer" v-slot="{ invalid }">
            <form @submit.prevent="submitPrice">
              <h1 class="text-teal-700 font-bold">Masukkan Jenjang Pendidikan</h1>
              <ValidationProvider mode="aggressive" rules="required" v-slot="{ errors }" class="w-1/2 mr-1">
                <v-select tag="input" class="w-full" :options="pendidikan" placeholder="Pendidikan" v-model="cariPrice.pendidikan"></v-select>
                <span class="text-red-600 text-sm">{{ errors[0] }}</span>
              </ValidationProvider>
              <h1 class="text-teal-700 font-bold">Masukkan Kota</h1>
              <ValidationProvider mode="aggressive" rules="required" v-slot="{ errors }" class="w-1/2 mr-1">
                <v-select tag="input" class="w-full" :options="kota" placeholder="Kota" v-model="cariPrice.kota"></v-select>
                <span class="text-red-600 text-sm">{{ errors[0] }}</span>
              </ValidationProvider>
              <button :disabled="invalid" type="submit" class="mt-3 hover:bg-teal-800 disabled:opacity-50 cursor-pointer w-full rounded-full bg-teal-700 text-white py-1">
                <svg v-if="priceOnLoad" class="h-8 w-8 mx-auto" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="background: none; shape-rendering: auto;" width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                  <path fill="none" stroke="#fff" stroke-width="7" stroke-dasharray="177.0463604736328 79.54256774902345" d="M24.3 30C11.4 30 5 43.3 5 50s6.4 20 19.3 20c19.3 0 32.1-40 51.4-40 C88.6 30 95 43.3 95 50s-6.4 20-19.3 20C56.4 70 43.6 30 24.3 30z" stroke-linecap="round" style="transform:scale(1.0);transform-origin:50px 50px">
                    <animate attributeName="stroke-dashoffset" repeatCount="indefinite" dur="1.5384615384615383s" keyTimes="0;1" values="0;256.58892822265625"></animate>
                  </path>
                </svg>
                <span v-else>Cek Harga</span>
              </button>
            </form>
          </ValidationObserver>
          <div class="text-center p-2 mt-3" v-if="priceIsLoad == true">
            <div class="text-orange-500">
              <font-awesome-icon class="text-orange-500" :icon="['fas', 'map-marker-alt']"/>
              {{ price.kota }} - {{ cariPrice.pendidikan }} <span class="font-bold">Rp.{{ formatPrice(price.harga) }}/<small>Bimbingan</small></span>
            </div>
          </div>
        </div>
      </div>
      <button @click.prevent="hide('modal-pricelist')" class="text-center w-full text-white bg-teal-700 hover:bg-teal-800 p-3">Tutup</button>
    </modal>

    <modal name="modal-detail" :adaptive="true" height="auto" width="500" :scrollable="true" @before-open="beforeOpen" @before-close="beforeClose">
      <div class="px-5 py-3 border-teal-700 border-t-8 border-l-8 border-r-8">
        <font-awesome-icon class="text-teal-700" :icon="['fas', 'exclamation-circle']"/>
        <div class="text-center font-sans mx-auto">
          <h1 class="text-teal-700 mt-3">
            <span class="font-extrabold text-5xl xs:text-4xl">Detail </span>
            <span class="font-semibold text-4xl xs:text-3xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-4xl 2xl:text-4xl">Informasi</span>
          </h1>
        </div>
        <div class="flex flex-col mt-5 mb-5 bg-gray-300 p-3 rounded-full">
          <span class="text-center mt-1"><font-awesome-icon class="text-teal-700 text-2xl" :icon="['fas', 'check-circle']"/></span>
          <span class="text-center">Mitra yang memiliki tanda ini telah di Verifikasi oleh Tim BimBim</span>
        </div>
      </div>
      <button @click.prevent="hide('modal-detail')" class="text-center w-full text-white bg-teal-700 hover:bg-teal-800 p-3">Tutup</button>
    </modal>

    <div class="text-left font-sans mx-auto mt-10">
      <h1 class="text-teal-700">
        <span class="font-extrabold text-5xl xs:text-4xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-5xl 2xl:text-5xl">BIM GURU<br></span>
        <span class="font-semibold text-4xl xs:text-3xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-4xl 2xl:text-4xl">{{ info }}</span>
      </h1>
    </div>
    <div class="bg-teal-700 mt-5 rounded-xl">
      <div class="max-w-7xl mx-auto py-5 px-4 lg:flex lg:items-center lg:justify-between">
        <h2 class="font-extrabold tracking-tight text-white">
          <span class="block text-xl">Bingung soal harga?</span>
          <span class="block text-3xl">Cek disini!</span>
        </h2>
        <div class="mt-2 flex lg:mt-0 lg:flex-shrink-0">
          <div class="inline-flex rounded-md shadow">
            <a href="#" @click.prevent="show('modal-pricelist')" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-600 hover:bg-teal-900">
              PriceList
            </a>
          </div>
          <div class="ml-3 inline-flex rounded-md shadow">
            <a href="#" @click.prevent="show('modal-detail')" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50">
              Detail Info
            </a>
          </div>
        </div>
      </div>
    </div>
    <MitraBimGuru :mitras="mitras" @refetch="getMitra" v-if="isLoad == true" class="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-10">
      <template v-slot:mitra="{ mitra }">
        <div class="transform hover:scale-105 w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
          <div class="flex items-end justify-end h-56 w-full bg-center bg-cover" :style="{ backgroundImage: 'url(' + mitra.foto + ')' }">
              <nuxt-link :to="`bimguru/${mitra.slug}`" class="p-2 rounded-full bg-teal-700 text-white mx-5 w-full -mb-4 hover:bg-teal-500 focus:outline-none focus:bg-teal-500 text-center">
                  <font-awesome-icon class="text-white" :icon="['fas', 'pencil-alt']"/> Ajukan Bimbingan
              </nuxt-link>
          </div>
          <div class="px-5 py-3 mt-5">
              <h3 class="text-teal-700 text-center border-b-2 pb-2 border-teal-700 uppercase font-bold text-xl">
                {{ mitra.nama }}
                <span v-if="mitra.is_verified == 1"><font-awesome-icon class="text-teal-700" :icon="['fas', 'check-circle']"/></span>
              </h3>
              <h4 class="text-sm font-base text-teal-700 mt-3"><font-awesome-icon :icon="['fas', 'map-marker-alt']"/> {{ mitra.kota }}</h4>
              <p class="text-teal-700 text-justify font-semibold mt-3">
                {{ mitra.title }}
              </p>
          </div>
        </div>
      </template>
    </MitraBimGuru>
    <div v-else class="mx-auto">
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto; background: none; display: block; shape-rendering: auto;" width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
        <path fill="none" stroke="#2c7a7b" stroke-width="7" stroke-dasharray="177.0463604736328 79.54256774902345" d="M24.3 30C11.4 30 5 43.3 5 50s6.4 20 19.3 20c19.3 0 32.1-40 51.4-40 C88.6 30 95 43.3 95 50s-6.4 20-19.3 20C56.4 70 43.6 30 24.3 30z" stroke-linecap="round" style="transform:scale(0.8);transform-origin:50px 50px">
          <animate attributeName="stroke-dashoffset" repeatCount="indefinite" dur="1.5384615384615383s" keyTimes="0;1" values="0;256.58892822265625"></animate>
        </path>
      </svg>
    </div>
  </div>
</template>

<script>
import { ValidationProvider, ValidationObserver } from "vee-validate";

export default {
  auth: false,
  components: {
    ValidationProvider, ValidationObserver
  },
  data() {
    return {
      mitras: [],
      price: [],
      cariPrice: {
        pendidikan: null,
        kota: null
      },
      priceIsLoad: false,
      priceOnLoad: false,
      isLoad: true,
      info: "Guru Privat",
      pendidikan: ['SD', 'SMP', 'SMA-10', 'SMA-11', 'SMA-12'],
      kota: ['Trenggalek', 'Malang', 'Surabaya']
    }
  },
  mounted() {
    this.getMitra(1)
  },
  methods: {
    async getMitra(page) {
      let getGuru = await this.$axios.get(`/bimapi/api/mitra/getGuru?page=${page}`)
      .then(result => {
        this.isLoad = true
        this.mitras.push(...result.data.data)
      })
      .catch(error => {
        this.isLoad = false
        this.info = "Terjadi Kesalahan"
        console.error(error)
      })
    },
    async submitPrice() {
      const isValid = await this.$refs.observer.validate();
      if (!isValid) {
        this.$toast.show({
          type:'danger',
          title: 'Form tidak sesuai',
          message: 'Periksa form yang anda isi!',
        })
      }else{
        this.priceOnLoad = true
        await this.$axios.get('/bimapi/sanctum/csrf-cookie').then(response => {
          this.$axios.post(`/bimapi/api/price/getPrice`,this.cariPrice)
          .then(result => {
            this.priceIsLoad = true
            this.priceOnLoad = false
            this.price = result.data.data[0]
          })
          .catch(error => {
            console.error(error)
          })
        })
        .catch(error => {
            console.error(error)
        })
      }
    },
    formatPrice(value) {
        let val = (value/1).toFixed(2).replace('.', ',')
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    },

    show(modal) {
      this.$modal.show(modal)
    },
    hide(modal) {
      this.$modal.hide(modal)
      this.priceIsLoad = false,
      this.priceOnLoad = false,
      this.cariPrice.pendidikan = null
      this.cariPrice.kota = null
    },
    beforeOpen (event) {
      console.log('Opening...')
    },
    beforeClose (event) {
      this.priceIsLoad = false,
      this.priceOnLoad = false,
      this.cariPrice.pendidikan = null
      this.cariPrice.kota = null
    },
  },
}
</script>
