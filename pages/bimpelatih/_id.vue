<template>
  <div>
    <modal name="modal-alamat-error" :adaptive="true" height="auto" width="500" scrollable @before-open="beforeOpen" @before-close="beforeClose">
      <div class="overflow-auto h-full">
        <div class="px-5 py-3 border-teal-700 border-t-8 border-l-8 border-r-8">
          <font-awesome-icon class="text-teal-700" :icon="['fas', 'exclamation']"/>
          <div class="text-center font-sans mx-auto">
            <h1 class="text-teal-700 mt-3">
              <span class="font-extrabold text-5xl xs:text-4xl">Verifikasi</span>
              <span class="font-semibold text-4xl xs:text-3xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-4xl 2xl:text-4xl"> Akun Anda</span>
            </h1>
          </div>
          <div class="text-center font-sans mx-auto">
            <h1 class="mt-3">
              <span class="">Harap lengkapi data anda dan melanjutkan Pengajuan Bimbingan</span>
            </h1>
          </div>
        </div>
        <div class="flex">
          <button @click.prevent="hide('modal-alamat-error')" class="text-center w-1/2 text-white bg-teal-700 hover:bg-teal-800 p-3">Tutup</button>
          <nuxt-link tag="button" to="/editprofil" class="text-center w-1/2 text-white bg-orange-700 hover:bg-orange-800 p-3">Update Profil</nuxt-link>
        </div>
      </div>
    </modal>

    <modal name="modal-form-order-error" :adaptive="true" height="auto" width="500" scrollable @before-open="beforeOpen" @before-close="beforeClose">
      <div class="overflow-auto h-full">
        <div class="px-5 py-3 border-teal-700 border-t-8 border-l-8 border-r-8">
          <font-awesome-icon class="text-teal-700" :icon="['fas', 'exclamation']"/>
          <div class="text-center font-sans mx-auto">
            <h1 class="text-teal-700 mt-3">
              <span class="font-extrabold text-5xl xs:text-4xl">Form Order</span>
              <span class="font-semibold text-4xl xs:text-3xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-4xl 2xl:text-4xl"> Tidak Sesuai</span>
            </h1>
          </div>
          <div class="text-center font-sans mx-auto">
            <h1 class="mt-3">
              <span class="">Tanggal, Waktu bimbingan dan Metode Pembayaran harus diisi</span>
            </h1>
          </div>
        </div>
        <button @click.prevent="hide('modal-form-order-error')" class="text-center w-full text-white bg-teal-700 hover:bg-teal-800 p-3">Tutup</button>
      </div>
    </modal>

    <modal name="modal-share" :adaptive="true" height="auto" width="500" scrollable @before-open="beforeOpen" @before-close="beforeClose">
      <div class="px-5 py-3 border-teal-700 border-t-8 border-l-8 border-r-8">
        <font-awesome-icon class="text-teal-700" :icon="['fas', 'share-square']"/>
        <div class="text-center font-sans mx-auto">
          <h1 class="text-teal-700 mt-3">
            <span class="font-extrabold text-5xl xs:text-4xl">Bagikan</span>
            <span class="font-semibold text-4xl xs:text-3xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-4xl 2xl:text-4xl">ke </span>
            <span class="font-extrabold text-5xl xs:text-4xl">Sosial Media</span>
          </h1>
        </div>
        <div class="flex flex-row justify-items-center items-center mx-auto mt-5">
          <div class="mx-auto space-x-2 text-4xl text-teal-700">
            <ShareNetwork
              @open="open"
              @change="change"
              @close="close"
              network="email"
              :url="url"
              :title="`👋Bimbingan bareng kak `+mitras.nama+` yuk di BIMGURU!!`"
              :description="`\n\nHai, `+`👋Bimbingan bareng kak `+mitras.nama+` yuk di BIMGURU!!\n\n`+mitras.deskripsi"
              :quote="`👋Bimbingan bareng kak `+mitras.nama+` yuk di BIMGURU!!\n`+mitras.deskripsi"
              hashtags="bimbimindonesia,bimbimid,bimguru,bimbingan,lesprivat"
            >
              <font-awesome-icon class="hover:text-teal-800 cursor-pointer" :icon="['fas', 'at']"/>
            </ShareNetwork>
            <ShareNetwork
              @open="open"
              @change="change"
              @close="close"
              network="sms"
              :url="url"
              :title="`👋Bimbingan bareng kak `+mitras.nama+` yuk di BIMGURU!!`"
              :description="`\n\nHai, `+`👋Bimbingan bareng kak `+mitras.nama+` yuk di BIMGURU!!\n\n`+mitras.deskripsi"
              :quote="`👋Bimbingan bareng kak `+mitras.nama+` yuk di BIMGURU!!\n`+mitras.deskripsi"
              hashtags="bimbimindonesia,bimbimid,bimguru,bimbingan,lesprivat"
            >
              <font-awesome-icon class="hover:text-teal-800 cursor-pointer" :icon="['fas', 'envelope']"/>
            </ShareNetwork>
            <ShareNetwork
              @open="open"
              @change="change"
              @close="close"
              network="facebook"
              :url="url"
              :title="`👋Bimbingan bareng kak `+mitras.nama+` yuk di BIMGURU!! `+mitras.deskripsi"
              :description="mitras.deskripsi"
              :quote="`👋Bimbingan bareng kak `+mitras.nama+` yuk di BIMGURU!!\n`+mitras.deskripsi"
              hashtags="bimbimindonesia,bimbimid,bimguru,bimbingan,lesprivat"
            >
              <font-awesome-icon class="hover:text-teal-800 cursor-pointer" :icon="['fab', 'facebook']"/>
            </ShareNetwork>
            <ShareNetwork
              @open="open"
              @change="change"
              @close="close"
              network="twitter"
              :url="url"
              :title="`👋Bimbingan bareng kak `+mitras.nama+` yuk di BIMGURU!!`"
              :description="mitras.deskripsi"
              :quote="`👋Bimbingan bareng kak `+mitras.nama+` yuk di BIMGURU!!`"
              hashtags="bimbimindonesia,bimbimid,bimguru,bimbingan,lesprivat"
              twitterUser="bimbimid"
            >
              <font-awesome-icon class="hover:text-teal-800 cursor-pointer" :icon="['fab', 'twitter']"/>
            </ShareNetwork>
          </div>
        </div>
        <div class="flex flex-row justify-items-center items-center mx-auto">
          <div class="mx-auto space-x-2 text-4xl text-teal-700">
            <ShareNetwork
              @open="open"
              @change="change"
              @close="close"
              network="whatsapp"
              :url="url"
              :title="`👋Hai saya `+mitras.nama+` yuk belajar bareng di BIMGURU!!`"
              :description="`\n\nHai, `+`👋Bimbingan bareng kak `+mitras.nama+` yuk di BIMGURU!!\n\n`+mitras.deskripsi"
              :quote="`👋Bimbingan bareng kak `+mitras.nama+` yuk di BIMGURU!!\n`+mitras.deskripsi"
              hashtags="bimbimindonesia,bimbimid,bimguru,bimbingan,lesprivat"
            >
              <font-awesome-icon class="hover:text-teal-800 cursor-pointer" :icon="['fab', 'whatsapp']"/>
            </ShareNetwork>
            <ShareNetwork
              @open="open"
              @change="change"
              @close="close"
              network="telegram"
              :url="url"
              :title="`👋Hai saya `+mitras.nama+` yuk belajar bareng di BIMGURU!!`"
              :description="`\n\nHai, `+`👋Bimbingan bareng kak `+mitras.nama+` yuk di BIMGURU!!\n\n`+mitras.deskripsi"
              :quote="`👋Bimbingan bareng kak `+mitras.nama+` yuk di BIMGURU!!\n`+mitras.deskripsi"
              hashtags="bimbimindonesia,bimbimid,bimguru,bimbingan,lesprivat"
            >
              <font-awesome-icon class="hover:text-teal-800 cursor-pointer" :icon="['fab', 'telegram']"/>
            </ShareNetwork>
            <ShareNetwork
              @open="open"
              @change="change"
              @close="close"
              network="line"
              :url="url"
              :title="`👋Hai saya `+mitras.nama+` yuk belajar bareng di BIMGURU!!`"
              :description="`\n\nHai, `+`👋Bimbingan bareng kak `+mitras.nama+` yuk di BIMGURU!!\n\n`+mitras.deskripsi"
              :quote="`👋Bimbingan bareng kak `+mitras.nama+` yuk di BIMGURU!!\n`+mitras.deskripsi"
              hashtags="bimbimindonesia,bimbimid,bimguru,bimbingan,lesprivat"
            >
              <font-awesome-icon class="hover:text-teal-800 cursor-pointer" :icon="['fab', 'line']"/>
            </ShareNetwork>
          </div>
        </div>
        <div class="flex mx-auto border-4 border-r-0 border-teal-700 p-2 bg-gray-300 mt-5 mb-5 rounded-r-full">
          <input class="bg-gray-300 w-5/6 select-text cursor-text pr-4" type="text" disabled v-model="url"/>
          <button @click="copyButton" class="bg-teal-700 text-white -m-2 text-center w-2/6 hover:bg-teal-800 rounded-l-full rounded-r-full">
          <font-awesome-icon v-if="copyBtn == 'Copy'" class="hover:text-teal-800 cursor-pointer" :icon="['fas', 'clone']"/>
          <font-awesome-icon v-else class="hover:text-teal-800 cursor-pointer" :icon="['fas', 'check']"/>
          {{ copyBtn }}
          </button>
        </div>
      </div>
      <button @click.prevent="hide('modal-share')" class="text-center w-full text-white bg-teal-700 hover:bg-teal-800 p-3">Tutup</button>
    </modal>

    <modal name="modal-detail" :adaptive="true" height="auto" width="500" scrollable @before-open="beforeOpen" @before-close="beforeClose">
      <div class="overflow-auto h-full">
        <div class="px-5 py-3 border-teal-700 border-t-8 border-l-8 border-r-8">
          <font-awesome-icon class="text-teal-700" :icon="['fas', 'exclamation']"/>
          <div class="text-center font-sans mx-auto">
            <h1 class="text-teal-700 mt-3">
              <span class="font-extrabold text-5xl xs:text-4xl">Detail</span>
              <span class="font-semibold text-4xl xs:text-3xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-4xl 2xl:text-4xl">Guru</span>
            </h1>
          </div>
          <div class="flex flex-col justify-items-center items-center mx-auto mt-5">
            <youtube
              class="border-8 border-teal-700 rounded-xl"
              :video-id="videoId"
              player-width="265"
              player-height="200"
            />
          </div>
          <div class="flex flex-wrap overflow-hidden justify-items-center items-center text-left bg-teal-700 p-3 rounded-xl text-white mt-3">
            <div class="w-full text-center font-sans transform scale-75">
              <h1 class="text-white">
                <span class="font-extrabold text-xl xs:text-4xl">Riwayat</span>
                <span class="font-semibold text-4xl xs:text-xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-4xl 2xl:text-4xl">Pendidikan</span>
              </h1>
            </div>
            <div class="w-1/2 overflow-hidden">
              Institusi :
            </div>
            <div class="w-1/2 overflow-hidden font-bold mt-2">
              {{ mitras.institusi }}
            </div>
            <div class="w-1/2 overflow-hidden">
              Prodi :
            </div>
            <div class="w-1/2 overflow-hidden font-bold mt-2">
              {{ mitras.prodi }}
            </div>
            <div class="w-1/2 overflow-hidden">
              IPK Terakhir :
            </div>
            <div class="w-1/2 overflow-hidden font-bold mt-2">
              {{ mitras.ipk }}
            </div>
            <div class="w-1/2 overflow-hidden">
              Status Studi :
            </div>
            <div class="w-1/2 overflow-hidden uppercase font-bold mt-2">
              {{ mitras.status_studi }}
            </div>
            <a :href="mitras.cv" target="_blank" class="w-full overflow-hidden text-center bg-orange-500 hover:bg-orange-700 cursor-pointer rounded-xl text-white p-3 font-bold mt-2">
              <font-awesome-icon v-if="mitras.is_verified == 1" class="text-current" :icon="['fas', 'download']" title="Unduh CV"/>
              Unduh CV
            </a>
          </div>
        </div>
        <button @click.prevent="hide('modal-detail')" class="text-center w-full text-white bg-teal-700 hover:bg-teal-800 p-3">Tutup</button>
      </div>
    </modal>

    <modal name="modal-order" :adaptive="true" height="auto" width="500" scrollable @before-open="beforeOpen" @before-close="beforeClose">
      <div class="overflow-auto h-full">
        <div class="px-5 py-3 border-teal-700 border-t-8 border-l-8 border-r-8">
          <font-awesome-icon class="text-teal-700" :icon="['fas', 'exclamation']"/>
          <div class="text-center font-sans mx-auto">
            <h1 class="text-teal-700 mt-3">
              <span class="font-extrabold text-5xl xs:text-4xl">Ajukan</span>
              <span class="font-semibold text-4xl xs:text-3xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-4xl 2xl:text-4xl">Bimbingan</span>
            </h1>
          </div>
          <div class="flex flex-col justify-items-center items-center mx-auto mt-5">
            <youtube
              class="border-8 border-teal-700 rounded-xl"
              :video-id="videoId"
              player-width="265"
              player-height="200"
            />
          </div>
          <div class="flex flex-wrap overflow-hidden justify-items-center items-center text-left bg-teal-700 p-3 rounded-xl text-white mt-3">
            <div class="w-full text-center font-sans transform scale-75">
              <h1 class="text-white">
                <span class="font-extrabold text-xl xs:text-4xl">Form</span>
                <span class="font-semibold text-4xl xs:text-xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-4xl 2xl:text-4xl">Pesanan</span>
              </h1>
            </div>
            <div class="border-r-2 border-teal-700 mb-2 pt-3 rounded bg-gray-200 lg:w-full md:w-full xs:w-full pt-2">
              <label class="block text-gray-700 text-sm font-bold mb-2 ml-3" for="tgl_bimbingan">Tanggal Bimbingan</label>
              <input type="date" v-model="order.tgl_bimbingan" class="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-teal-700 transition duration-500 px-3 pb-3"/>
            </div>
            <div class="border-r-2 border-teal-700 mb-2 pt-3 rounded bg-gray-200 lg:w-full md:w-full xs:w-full pt-2">
              <label class="block text-gray-700 text-sm font-bold mb-2 ml-3" for="waktu_bimbingan">Jam Bimbingan</label>
              <input type="time" v-model="order.waktu_bimbingan" class="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-teal-700 transition duration-500 px-3 pb-3"/>
            </div>

            <div class="border-r-2 border-teal-700 mb-2 pt-3 rounded bg-gray-200 lg:w-full md:w-full xs:w-full pt-2">
              <label class="block text-gray-700 text-sm font-bold mb-2 ml-3" for="metode_tf">Metode Pembayaran</label>
              <select v-model="order.metode_tf" class="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-teal-700 transition duration-500 px-3 pb-3">
                <option>Bank BRI</option>
                <option>OVO</option>
                <option>GOPAY</option>
                <option>DANA</option>
                <option>SHOPEE PAY</option>
                <option>LINK AJA</option>
                <option>WECHAT PAY</option>
              </select>
            </div>

            <div class="w-full text-sm overflow-hidden text-center">
              Pastikan anda telah memverifikasi akun anda dan telah memasukkan Alamat di Menu Profil :)
            </div>
            <button :disabled="clicked" @click.prevent="submitOrder()" class="w-full overflow-hidden text-center bg-orange-500 hover:bg-orange-700 cursor-pointer rounded-xl text-white p-3 font-bold mt-2">
              <font-awesome-icon class="text-current" :icon="['fas', 'pencil-alt']" title="Pesan Sekarang"/>
              Pesan Sekarang
            </button>
          </div>
        </div>
        <button @click.prevent="hide('modal-order')" class="text-center w-full text-white bg-teal-700 hover:bg-teal-800 p-3">Tutup</button>
      </div>
    </modal>

    <div class="xl:mx-64 p-4">
      <div class="relative py-3 mt-10 xs:p-1">
        <div class="absolute inset-0 bg-gradient-to-r from-teal-400 to-teal-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 xs:rounded-3xl mt-5">
        </div>
          <div class="relative p-3 mt-5 bg-white shadow-lg xs:rounded-3xl">

            <div class="text-center font-sans mx-auto mt-3 lg:mb-5">
              <h1 class="text-teal-700">
                <span class="font-extrabold text-5xl xs:text-4xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-5xl 2xl:text-5xl">Detail</span>
                <span class="font-semibold text-4xl xs:text-3xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-4xl 2xl:text-4xl">Guru</span>
              </h1>
            </div>

            <div class="flex flex-col md:flex-row">
            <div class="md:flex-1 items-center rounded-xl">
              <div class="rounded-full shadow-xl mx-auto mt-4 xs:w-48 xs:h-48 mb-4 md:h-64 md:w-64 bg-cover bg-center border-b-8 border-t-4 border-teal-700" :style="{'background-image' : 'url('+mitras.foto+')'}" data-not-lazy>
              </div>
            </div>
            <div class="md:flex-1 p-4">
              <div v-if="mitras.is_verified == 1" class="text-teal-700 font-semibold text-xs border-l-2 rounded-full mb-2 pl-1 border-teal-700">
                <font-awesome-icon v-if="mitras.is_verified == 1" class="text-current" :icon="['fas', 'check']" title="Mitra Terverifikasi"/>
                Mitra Terverifikasi
              </div>
              <h2 class="leading-tight tracking-tight font-bold text-teal-700 text-3xl md:text-3xl">
                {{ mitras.nama }}
              </h2>
              <p class="flex -space-x-2 font-bold text-orange-500 text-3xl md:text-3xl">
                <font-awesome-icon class="transform scale-75 cursor-pointer text-orange-500" :icon="['fas', 'star']" title="Rating" v-for="n in yellowStars" :key="n"/>
                <font-awesome-icon class="transform scale-75 cursor-pointer text-gray-500" :icon="['fas', 'star']" title="Rating" v-for="y in greyStars" :key="y"/>
              </p>
              <p class="mt-1 text-orange-500">
                <span class="text-md font-medium">&nbsp;{{ reviewStat.rate }}/<small>4 <a href="#" class="hover:underline">({{ reviewStat.jmlUlasan }} ulasan)</a></small></span>
              </p>
              <p class="mb-0 leading-tight tracking-tight font-bold text-teal-700 text-3xl md:text-3xl">
                <font-awesome-icon v-if="isLike == false" @click.prevent="isLike = !isLike" class="text-gray-300 transform scale-75 cursor-pointer hover:text-pink-500" :icon="['fas', 'heart']" title="Suka"/>
                <font-awesome-icon v-if="isLike == true" @click.prevent="isLike = !isLike" class="transform scale-75 cursor-pointer text-pink-500" :icon="['fas', 'heart']" title="Suka"/>
                <font-awesome-icon @click.prevent="show('modal-share')" tag="button" class="text-gray-300 transform scale-75 cursor-pointer hover:text-teal-700" :icon="['fas', 'share-square']" title="Bagikan"/>
              </p>
              <p class="text-gray-500 text-sm">
                <font-awesome-icon class="text-teal-700" :icon="['fas', 'map-marker-alt']"/>
                <a href="#" class="text-teal-700 hover:underline">
                  {{ mitras.kota }}
                </a>
              </p>
              <p class="text-gray-500 text-sm">
                <h4 class="text-lg font-base text-teal-700 mt-2"><span class="font-extrabold text-teal-700">Rp.</span> {{ formatPrice(mitras.tarif) }}<small>/sesi</small></h4>
              </p>

              <div class="mt-2">
                <span class="mr-1 rounded-full bg-gray-300 p-1 text-teal-700 text-sm" v-for="tmp in tagsMapel" :key="tmp.id_mapel_unggulan">
                  #{{ tmp.nama_mapel }}
                </span>
              </div>

              <h1 class="text-teal-700 text-justify mt-5 font-extrabold text-xl uppercase">{{ mitras.title }}</h1>
              <p class="text-teal-700 text-justify mt-1 mb-5 font-semibold">{{ mitras.deskripsi }}</p>

              <div class="flex-1 items-center pt-2 space-y-2">
                <button @click.prevent="show('modal-detail')" type="button" class="w-full h-14 px-6 py-2 font-semibold rounded-xl bg-gray-500 hover:bg-gray-600 text-white">
                  <font-awesome-icon class="text-white" :icon="['fas', 'bars']"/> Detail Guru
                </button>
                <button v-if="$auth.loggedIn" @click.prevent="show('modal-order')" type="button" class="w-full h-14 px-6 py-2 font-semibold rounded-xl bg-teal-700 hover:bg-teal-800 text-white">
                  <font-awesome-icon class="text-white" :icon="['fas', 'pencil-alt']"/> Ajukan Bimbingan
                </button>
                <nuxt-link v-if="$auth.loggedIn == false" to="/login" type="button" class="w-full h-14 px-6 py-2 font-semibold rounded-xl bg-teal-700 hover:bg-teal-800 text-white text-center">
                  <font-awesome-icon class="text-white" :icon="['fas', 'user-alt']"/> Login untuk Ajukan Bimbingan
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ValidationProvider, ValidationObserver } from "vee-validate"

export default {
  auth: false,
  components: {
    ValidationProvider, ValidationObserver,
  },
  data() {
    return {
      order: {
        tgl_bimbingan: null,
        waktu_bimbingan: null,
        metode_tf: null,
      },
      mitras: [],
      reviewStat: [],
      tagsMapel: [],
      isLoad: false,
      info: "Mohon Tunggu",
      toogleModal: false,
      url: null,
      copyBtn: "Copy",
      isLike: false,
      yellowStars: 0,
      greyStars:0,
      videoId: null,
      clicked: false,
    }
  },
  head() {
    return {
      title: this.mitras.nama+' - BIMGURU',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=0' },
        { hid: 'description', name: 'description', content: this.mitras.title },
        { name: 'theme-color', content: '#006d71' },
        { name: "msapplication-TileImage", content: "/locig.png" },
        { name: "msapplication-TileColor", content: "#006d71" },
      ],
    }
  },
  methods: {
    formatPrice(value) {
        let val = (value/1).toFixed(0).replace('.', ',')
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    },
    
    submitOrder() {
      if (this.order.tgl_bimbingan == null || this.order.waktu_bimbingan == null || this.order.metode_tf == null){
        this.$modal.hide('modal-order')
        this.$modal.show('modal-form-order-error')
      }
      else{
        if (this.$auth.user.alamat == null){
          this.$modal.hide('modal-order')
          this.$modal.show('modal-alamat-error')
        }
        else{
          console.log('submited')
          this.checkOrder()
        }
      }
    },

    checkOrder(){
      this.$axios.get('/bimapi/sanctum/csrf-cookie').then(response => {
        this.$axios.post('/bimapi/api/order/checkOrder', {
          id_mitra: this.mitras.id_mitra,
          id_pelajar: this.$auth.user.id_pelajar,
        })
        .then(response => {
          this.clicked = true
          if (response.data.data == 'order available'){
            this.$router.push('/bimbingan')
          }
          else{
            this.createOrder()
            this.hide('modal-order')
          }
        })
        .catch(error => {
          console.error(error)
          this.clicked = true
        });
      })
    },

    createOrder(){
      this.$axios.get('/bimapi/sanctum/csrf-cookie').then(response => {
        this.$axios.post('/bimapi/api/order/createOrder', {
          id_mitra: this.mitras.id_mitra,
          id_pelajar: this.$auth.user.id_pelajar,
          id_bidang: this.mitras.id_bidang,
          kota: this.mitras.kota,
          tarif: this.mitras.tarif,
          pendidikan: this.$auth.user.pendidikan,
          tgl_bimbingan: this.order.tgl_bimbingan,
          waktu_bimbingan: this.order.waktu_bimbingan,
          metode_tf: this.order.metode_tf,
        })
        .then(response => {
          this.clicked = true
          this.$toast.show({
          type: 'success',
          title: 'Pesanan Bimbingan Berhasil',
          message: 'Yey, '+this.$auth.user.nama+' silahkan melanjutkan pembayaran',
          timeout: false,
          primary: {
              label: 'Bayar Sekarang',
              theme: 'white',
              action: () => this.$router.push('/bimbingan'),
            },
            secondary: {
              label: 'Tutup',
              action: () => console.log(),
            },
        })
        })
        .catch(error => {
          this.clicked = true
          console.error(error)
        });
      })
    },

    //API Get Data
    async getMitra() {
      this.mitras = await this.$axios.get('/bimapi/api/mitra/detailPelatih/'+this.$route.params.id)
      .then(result => {
        this.isLoad = true
        this.yellowStars = Math.floor(result.data.meta.rate)
        this.greyStars = 4 - this.yellowStars
        this.reviewStat = result.data.meta
        this.tagsMapel = result.data.data[0].mapel_unggulan
        this.videoId = result.data.meta.videoID
        return result.data.data[0]
      })
      .catch(error => {
        this.isLoad = false
        this.info = "Terjadi Kesalahan"
        console.log(error)
      })
    },
    //API Get Data

    shareUrl() {
      return this.url = process.env.main_url+this.$route.path
    },

    copyButton() {
      this.$copyText(this.url).then(
        this.copyBtn = 'Tersalin',
        this.$toast.show({
          type: 'success',
          title: 'Copied',
          message: 'Link berhasil disalin!',
        }),
        setTimeout(() => this.$modal.hide('modal-share'), 500),
      )
    },

    //share popup
    open(event) {
      console.log('share opened '+event)
    },
    change(event) {
      console.log('share onChanged '+event)
    },
    close(event) {
      console.log('share closed '+event)
    },
    //end share popup

    //Modal
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
      this.copyBtn = 'Copy'
      console.log('Closing...')
    },
    //Modal
  },
  mounted() {
    this.getMitra()
    this.shareUrl()
  },
}
</script>
