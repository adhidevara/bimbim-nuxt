<template>
  <div>
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
              :title="`👋Mari bergabung ke event `+events.title+` yuk di BIMEVENT!!`"
              :description="`\n\nHai, `+`👋Mari bergabung ke event `+events.title+` yuk di BIMEVENT!!\n\n`+events.deskripsi"
              :quote="`👋Mari bergabung ke event `+events.title+` yuk di BIMEVENT!!\n`+events.deskripsi"
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
              :title="`👋Mari bergabung ke event `+events.title+` yuk di BIMEVENT!!`"
              :description="`\n\nHai, `+`👋Mari bergabung ke event `+events.title+` yuk di BIMEVENT!!\n\n`+events.deskripsi"
              :quote="`👋Mari bergabung ke event `+events.title+` yuk di BIMEVENT!!\n`+events.deskripsi"
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
              :title="`👋Mari bergabung ke event `+events.title+` yuk di BIMEVENT!! `+events.deskripsi"
              :description="events.deskripsi"
              :quote="`👋Mari bergabung ke event `+events.title+` yuk di BIMEVENT!!\n`+events.deskripsi"
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
              :title="`👋Mari bergabung ke event `+events.title+` yuk di BIMEVENT!!`"
              :description="events.deskripsi"
              :quote="`👋Mari bergabung ke event `+events.title+` yuk di BIMEVENT!!`"
              hashtags="bimbimindonesia,bimbimid,bimevent,bimbingan,lesprivat"
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
              :title="`👋Mari bergabung ke event `+events.title+` yuk ramein event-nya di BIMEVENT!!`"
              :description="`\n\nHai, `+`👋Mari bergabung ke event `+events.title+` yuk di BIMEVENT!!\n\n`+events.deskripsi"
              :quote="`👋Mari bergabung ke event `+events.title+` yuk di BIMEVENT!!\n`+events.deskripsi"
              hashtags="bimbimindonesia,bimbimid,bimevent,bimbingan,lesprivat"
            >
              <font-awesome-icon class="hover:text-teal-800 cursor-pointer" :icon="['fab', 'whatsapp']"/>
            </ShareNetwork>
            <ShareNetwork
              @open="open"
              @change="change"
              @close="close"
              network="telegram"
              :url="url"
              :title="`👋Mari bergabung ke event `+events.title+` yuk ramein event-nya di BIMEVENT!!`"
              :description="`\n\nHai, `+`👋Mari bergabung ke event `+events.title+` yuk di BIMEVENT!!\n\n`+events.deskripsi"
              :quote="`👋Mari bergabung ke event `+events.title+` yuk di BIMEVENT!!\n`+events.deskripsi"
              hashtags="bimbimindonesia,bimbimid,bimevent,bimbingan,lesprivat"
            >
              <font-awesome-icon class="hover:text-teal-800 cursor-pointer" :icon="['fab', 'telegram']"/>
            </ShareNetwork>
            <ShareNetwork
              @open="open"
              @change="change"
              @close="close"
              network="line"
              :url="url"
              :title="`👋Mari bergabung ke event `+events.title+` yuk ramein event-nya di BIMEVENT!!`"
              :description="`\n\nHai, `+`👋Mari bergabung ke event `+events.title+` yuk di BIMEVENT!!\n\n`+events.deskripsi"
              :quote="`👋Mari bergabung ke event `+events.title+` yuk di BIMEVENT!!\n`+events.deskripsi"
              hashtags="bimbimindonesia,bimbimid,bimevent,bimbingan,lesprivat"
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
              <span class="font-semibold text-4xl xs:text-3xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-4xl 2xl:text-4xl">Event</span>
            </h1>
          </div>
          <div class="flex flex-col justify-items-center items-center mx-auto mt-5">
            <youtube
              class="border-8 border-teal-700 rounded-xl"
              :video-id="events.video"
              player-width="265"
              player-height="200"
            />
          </div>
          <div class="flex flex-wrap overflow-hidden justify-items-center items-center text-left bg-teal-700 p-3 rounded-xl text-white mt-3">
            <div class="w-full text-center font-sans transform scale-75">
              <h1 class="text-white">
                <span class="font-extrabold text-xl xs:text-4xl">Informasi</span>
                <span class="font-semibold text-4xl xs:text-xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-4xl 2xl:text-4xl">Event</span>
              </h1>
            </div>
            <div class="w-full">
              <a v-if="events.sertif_link !== null" :href="events.sertif_link" target="_blank" class="bg-orange-700 hover:bg-orange-900 p-2 rounded-xl text-center block m-3">Sertifikat Peserta</a>
              <a v-if="events.event_link !== null" :href="events.event_link" target="_blank" class="bg-blue-700 p-2 hover:bg-blue-900 rounded-xl text-center block m-3">Lihat Event</a>
            </div>
          </div>
        </div>
        <button @click.prevent="hide('modal-detail')" class="text-center w-full text-white bg-teal-700 hover:bg-teal-800 p-3">Tutup</button>
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
                <span class="font-semibold text-4xl xs:text-3xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-4xl 2xl:text-4xl">Event</span>
              </h1>
            </div>

            <div class="flex flex-col md:flex-row">
            <div class="md:flex-1 items-center rounded-xl">
              <a :href="events.foto" target="_blank">
                <div class="transform scale-105 hover:scale-150 shadow-xl mx-auto mt-4 xs:w-48 xs:h-48 mb-4 md:h-64 md:w-64 bg-contain bg-no-repeat bg-center" :style="{'background-image' : 'url('+events.foto+')'}" data-not-lazy>
                </div>
              </a>
            </div>
            <div class="md:flex-1 p-4">
              <div v-if="events.is_verified == 1" class="text-teal-700 font-semibold text-xs border-l-2 rounded-full mb-2 pl-1 border-teal-700">
                <font-awesome-icon v-if="events.is_verified == 1" class="text-current" :icon="['fas', 'check']" title="Mitra Terverifikasi"/>
                Event Terverifikasi
              </div>
              <h2 class="leading-tight tracking-tight font-bold text-teal-700 text-3xl md:text-3xl">
                {{ events.title }}
              </h2>
              <!-- <p class="flex -space-x-2 font-bold text-orange-500 text-3xl md:text-3xl">
                <font-awesome-icon class="transform scale-75 cursor-pointer text-orange-500" :icon="['fas', 'star']" title="Rating" v-for="n in yellowStars" :key="n"/>
                <font-awesome-icon class="transform scale-75 cursor-pointer text-gray-500" :icon="['fas', 'star']" title="Rating" v-for="y in greyStars" :key="y"/>
              </p> -->
              <!-- <p class="mt-1 text-orange-500">
                <span class="text-md font-medium">&nbsp;{{ reviewStat.rate }}/<small>4 <a href="#" class="hover:underline">({{ reviewStat.jmlUlasan }} ulasan)</a></small></span>
              </p> -->
              <p class="mb-0 leading-tight tracking-tight font-bold text-teal-700 text-3xl md:text-3xl mt-3">
                <font-awesome-icon v-if="isLike == false" @click.prevent="isLike = !isLike" class="text-gray-300 transform scale-75 cursor-pointer hover:text-pink-500" :icon="['fas', 'heart']" title="Suka"/>
                <font-awesome-icon v-if="isLike == true" @click.prevent="isLike = !isLike" class="transform scale-75 cursor-pointer text-pink-500" :icon="['fas', 'heart']" title="Suka"/>
                <font-awesome-icon @click.prevent="show('modal-share')" tag="button" class="text-gray-300 transform scale-75 cursor-pointer hover:text-teal-700" :icon="['fas', 'share-square']" title="Bagikan"/>
              </p>
              <p class="text-teal-700 text-sm mt-3">
                <h4 class="text-teal-700"><font-awesome-icon :icon="['fas', 'calendar']"/> {{ $moment(events.start_tgl_event).format('LLLL') }}</h4>
                <h4 class="text-teal-700"><font-awesome-icon :icon="['fas', 'map-marker-alt']"/> {{ events.event_type }} di {{ events.lokasi }}</h4>
                <h4 class="text-teal-700"><font-awesome-icon :icon="['fas', 'id-badge']"/> {{ events.nama_cp }}</h4>
                <h4 v-if="events.isPaid == 0" class="text-teal-700"><font-awesome-icon :icon="['fas', 'money-bill-wave']"/> Rp. 0 <b>(Free)</b></h4>
                <h4 v-else class="text-teal-700"><font-awesome-icon :icon="['fas', 'money-bill-wave']"/> Rp. {{ formatPrice(events.price) }}</h4>
              </p>
              <h1 class="text-teal-700 mt-5 font-extrabold text-xl uppercase">Deskripsi</h1>
              <p class="text-teal-700 text-justify mt-1 mb-5 font-semibold">{{ events.deskripsi }}</p>

              <div class="flex-1 items-center pt-2 space-y-2">
                <button @click.prevent="show('modal-detail')" type="button" class="w-full h-14 px-6 py-2 font-semibold rounded-xl bg-gray-500 hover:bg-gray-600 text-white">
                  <font-awesome-icon class="text-white" :icon="['fas', 'bars']"/> Detail Event
                </button>
                <a v-if="dayExpiration < 0" :href="events.regis_link" target="_blank" tag="button" type="button" class="w-full h-14 px-6 py-2 font-semibold rounded-xl bg-teal-700 hover:bg-teal-800 text-white text-center">
                  <font-awesome-icon class="text-white" :icon="['fas', 'pencil-alt']"/> Daftar / Ikuti Event
                </a>
                <a v-else-if="dayExpiration >= 0" href="#" tag="button" type="button" class="w-full h-14 px-6 py-2 font-semibold rounded-xl bg-teal-700 hover:bg-teal-800 text-white text-center">
                  <font-awesome-icon class="text-white" :icon="['fas', 'check']"/> Event Telah Berlangsung
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  auth: false,
  data() {
    return {
      events: [],
      reviewStat: [],
      isLoad: false,
      info: "Mohon Tunggu",
      toogleModal: false,
      url: null,
      copyBtn: "Copy",
      isLike: false,
      yellowStars: 0,
      greyStars:0,
      videoId: "sdCCkFrkfIE",
      dayExpiration: null,
    }
  },
  methods: {
    getExpired() {
    },
    //API Get Data
    async getEvent() {
      this.events = await this.$axios.get('/bimapi/api/event/detailEvent/'+this.$route.params.id)
      .then(result => {
        this.isLoad = true
        var a = this.$moment();//now
        var b = this.$moment(result.data.data[0].start_tgl_event);
        this.dayExpiration = a.diff(b, 'days')
        // console.log(a)
        // console.log(b)
        // console.log(a.diff(b, 'days')) // 31
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

    formatPrice(value) {
        let val = (value/1).toFixed(2).replace('.', ',')
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    }
  },
  mounted() {
    this.getEvent()
    this.shareUrl()
  },
}
</script>
