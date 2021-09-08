<template>
<div>
  <div class="xl:mx-64 p-4">
    <div class="relative py-3 mt-10 xs:p-1">
      <div class="absolute inset-0 bg-gradient-to-r from-teal-400 to-teal-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 xs:rounded-3xl mt-5">
      </div>
        <div class="relative p-3 mt-5 bg-white shadow-lg xs:rounded-3xl">

          <div class="text-center font-sans mx-auto mt-3 lg:mb-5">
            <h1 class="text-teal-700">
              <span class="font-extrabold text-5xl xs:text-4xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-5xl 2xl:text-5xl">Bimbingan</span>
              <span class="font-semibold text-4xl xs:text-3xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-4xl 2xl:text-4xl">Saya</span>
            </h1>
          </div>

          <modal name="modal-upload" :adaptive="true" height="auto" width="500" :scrollable="true" :clickToClose="false">
            <div class="px-5 py-3 border-teal-700 border-t-8 border-l-8 border-r-8" :class="{ 'border-b-8' : progress < 100 }">
              <font-awesome-icon class="text-teal-700" :icon="['fas', 'info']"/>
              <svg v-if="progress < 100" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto; background: none; display: block; shape-rendering: auto;" width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                <path fill="none" stroke="#2c7a7b" stroke-width="7" stroke-dasharray="177.0463604736328 79.54256774902345" d="M24.3 30C11.4 30 5 43.3 5 50s6.4 20 19.3 20c19.3 0 32.1-40 51.4-40 C88.6 30 95 43.3 95 50s-6.4 20-19.3 20C56.4 70 43.6 30 24.3 30z" stroke-linecap="round" style="transform:scale(0.8);transform-origin:50px 50px">
                  <animate attributeName="stroke-dashoffset" repeatCount="indefinite" dur="1.5384615384615383s" keyTimes="0;1" values="0;256.58892822265625"></animate>
                </path>
              </svg>
              <svg v-if="progress == 100" xmlns="http://www.w3.org/2000/svg" class="h-64 w-64 mx-auto" viewBox="0 0 20 20" fill="#2c7a7b">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              <div class="text-center font-sans mx-auto">
                <h1 class="text-teal-700 -mt-5">
                  <span class="font-extrabold text-5xl xs:text-4xl">{{ progress }}</span>
                  <span class="font-semibold text-4xl xs:text-3xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-4xl 2xl:text-4xl">%</span>
                </h1>
              </div>
              <p v-if="progress < 100" class="font-semibold text-xl text-teal-700 text-center">Mohon Tunggu, data anda sedang diproses...</p>
              <p v-if="progress == 100" class="font-semibold text-xl text-teal-700 text-center">Data berhasil diterima, mohon tunggu tim kami akan memverifikasi pembayaran anda!</p>
            </div>
            <div class="flex">
              <button v-if="progress == 100" @click="hide('modal-upload')" class="text-center w-full text-white bg-teal-700 hover:bg-teal-800 p-3">Selesai</button>
            </div>
          </modal>

          <OrderBim :orders="orders" @refetch="getOrder" v-if="isLoad == true">
            <template v-slot:order="{ order }">
              <div class="max-w-full  bg-white flex flex-col rounded overflow-hidden shadow-lg my-5">
                <modal :name="order.id_order+'modal-bayar'" :adaptive="true" height="auto" width="500" scrollable @before-open="beforeOpen" @before-close="beforeClose">
                  <div class="overflow-auto h-full">
                    <div class="px-5 py-3 border-teal-700 border-t-8 border-l-8 border-r-8">
                      <font-awesome-icon class="text-teal-700" :icon="['fas', 'exclamation']"/>
                      <div class="text-center font-sans mx-auto">
                        <h1 class="text-teal-700 mt-3">
                          <span class="font-extrabold text-5xl xs:text-4xl">Bayar</span>
                          <span class="font-semibold text-4xl xs:text-3xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-4xl 2xl:text-4xl"> Sekarang</span>
                        </h1>
                      </div>
                      <div class="text-left font-bold font-sans mx-auto">
                        <h1 class="mt-3">Langkah - langkah bayar :
                          <h1 class="mt-3"><span class="mr-1">1.</span> Scan untuk membayar</h1>
                          <h1 class="mt-3"><span class="mr-1">2.</span> Pastikan masuk ke halaman e-wallet anda <span class="text-orange-500">({{ order.metode_tf }})</span> dan muncul <span class="text-teal-700">BIMBIM Indonesia</span></h1>
                          <h1 class="mt-3"><span class="mr-1">3.</span> Masukkan nominal berikut ini : <span class="text-orange-500 text-2xl">Rp. {{ formatPrice(order.tarif) }}</span></h1>
                          <h1 class="mt-3"><span class="mr-1">4.</span> Screenshot dan Unggah bukti bayar di tombol "Unggah disini"</h1>
                          <img class="mx-auto mt-3" src="https://dl.dropboxusercontent.com/s/nycarqfbzyv1ogf/qris_bimbim.jpg?dl=0">
                        </h1>
                      </div>
                    </div>
                    <button @click.prevent="hide(order.id_order+'modal-bayar')" class="text-center w-full text-white bg-teal-700 hover:bg-teal-800 p-3">Tutup</button>
                  </div>
                </modal>

                <modal :name="order.id_order+'modal-bri'" :adaptive="true" height="auto" width="500" scrollable @before-open="beforeOpen" @before-close="beforeClose">
                  <div class="overflow-auto h-full">
                    <div class="px-5 py-3 border-teal-700 border-t-8 border-l-8 border-r-8">
                      <font-awesome-icon class="text-teal-700" :icon="['fas', 'exclamation']"/>
                      <div class="text-center font-sans mx-auto">
                        <h1 class="text-teal-700 mt-3">
                          <span class="font-extrabold text-5xl xs:text-4xl">Bayar</span>
                          <span class="font-semibold text-4xl xs:text-3xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-4xl 2xl:text-4xl"> Sekarang</span>
                        </h1>
                      </div>
                      <div class="text-left font-bold font-sans mx-auto">
                        <h1 class="mt-3">Langkah - langkah bayar :
                          <img class="mx-auto mt-3" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/BANK_BRI_logo.svg/2560px-BANK_BRI_logo.svg.png">
                          <h1 class="mt-3"><span class="mr-1">1.</span> Transfer ke Rekening dibawah ini :</h1>
                          <h1 class="mt-3"><span class="mr-1">Atas nama : </span><span class="text-teal-700 text-2xl">Tubagus Wijaya</span></h1>
                          <h1 class="mt-0"><span class="mr-1">No. Rekening : </span><span class="text-teal-700 text-2xl">017701033615500</span></h1>
                          <h1 class="mt-0"><span class="mr-1">Nominal : </span><span class="text-orange-500 text-2xl">Rp. {{ formatPrice(order.tarif) }}</span></h1>
                          <h1 class="mt-3"><span class="mr-1">2.</span> Screenshot / Foto bukti pembayaran dan Unggah bukti bayar di tombol "Unggah disini"</h1>
                        </h1>
                      </div>
                    </div>
                    <button @click.prevent="hide(order.id_order+'modal-bri')" class="text-center w-full text-white bg-teal-700 hover:bg-teal-800 p-3">Tutup</button>
                  </div>
                </modal>

                <modal :name="order.id_order+'modal-buktitf'" :adaptive="true" height="auto" width="500" scrollable @before-open="beforeOpen" @before-close="beforeClose">
                  <div class="overflow-auto h-full">
                    <div class="px-5 py-3 border-teal-700 border-t-8 border-l-8 border-r-8">
                      <font-awesome-icon class="text-teal-700" :icon="['fas', 'exclamation']"/>
                      <div class="text-center font-sans mx-auto">
                        <h1 class="text-teal-700 mt-3">
                          <span class="font-extrabold text-5xl xs:text-4xl">Bukti</span>
                          <span class="font-semibold text-4xl xs:text-3xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-4xl 2xl:text-4xl"> Pembayaran</span>
                        </h1>
                      </div>
                      <div class="text-left font-bold font-sans mx-auto">
                        <img class="mx-auto mt-3" :src="order.bukti_tf">
                      </div>
                    </div>
                    <button @click.prevent="hide(order.id_order+'modal-buktitf')" class="text-center w-full text-white bg-teal-700 hover:bg-teal-800 p-3">Tutup</button>
                  </div>
                </modal>

                <div class="flex flex-row items-baseline flex-wrap p-2"
                :class="
                  {
                  'bg-gradient-to-bl from-red-400 to-red-600' : order.status_order == 'unverified' && order.bukti_tf == null,
                  'bg-gradient-to-bl from-orange-400 to-orange-600' : order.status_order == 'unverified' && order.bukti_tf !== null,
                  'bg-gradient-to-bl from-teal-400 to-teal-600' :  order.status_order == 'verified' && order.bukti_tf !== null,
                  }"
                >
                  <font-awesome-icon class="text-gray-100" :icon="['fas', 'book']"/>
                  <h1 class="ml-2 uppercase font-bold text-gray-100" v-if="order.id_bidang == 1">BIMGURU</h1>
                  <h1 class="ml-2 uppercase font-bold text-gray-100" v-if="order.id_bidang == 2">BIMPELATIH</h1>
                  <h1 class="ml-2 uppercase font-bold text-gray-100" v-if="order.id_bidang == 3">BIMEVENT</h1>
                  <h1 class="ml-2 uppercase font-bold text-gray-100" v-if="order.id_bidang == 4">BIMKONSELING</h1>
                  <p class="ml-2 font-normal text-gray-100">{{ $moment(order.tgl_order).format('L') }} <small>(No.Order : BIMOR-{{ order.id_order }})</small></p>
                </div>
                <div class="mt-2 flex justify-start bg-white p-2">
                  <div class="flex mx-2 ml-6 h8 px-2 flex-row items-baseline rounded-full bg-gray-100 p-1">
                    <font-awesome-icon v-if="order.id_bidang == 1" class="text-gray-500" :icon="['fas', 'chalkboard-teacher']"/>
                    <font-awesome-icon v-if="order.id_bidang == 2" class="text-gray-500" :icon="['fas', 'running']"/>
                    <font-awesome-icon v-if="order.id_bidang == 3" class="text-gray-500" :icon="['fas', 'calendar-alt']"/>
                    <font-awesome-icon v-if="order.id_bidang == 4" class="text-gray-500" :icon="['fas', 'user-graduate']"/>
                    <p class="font-normal text-sm ml-1 text-gray-500">{{ order.mitra.nama }}</p>
                  </div>
                </div>
                <div class="mt-2 flex sm:flex-row mx-6 sm:justify-between flex-wrap ">
                  <div class="flex flex-row place-items-center p-2">
                    <img v-if="order.id_bidang == 1" alt="BIMGURU" class="w-10 h-10" src="https://dl.dropboxusercontent.com/s/rj1fe8gw7dbuula/n-bgr.png?dl=0" style="opacity: 1; transform-origin: 0% 50% 0px; transform: none;" />
                    <img v-if="order.id_bidang == 2" alt="BIMPELATIH" class="w-10 h-10" src="https://dl.dropboxusercontent.com/s/iba29wmcilffxh2/n-bmp.png?dl=0" style="opacity: 1; transform-origin: 0% 50% 0px; transform: none;" />
                    <img v-if="order.id_bidang == 3" alt="BIMEVENT" class="w-10 h-10" src="https://dl.dropboxusercontent.com/s/b5jxn9ipl53dhze/n-bmv.png?dl=0" style="opacity: 1; transform-origin: 0% 50% 0px; transform: none;" />
                    <img v-if="order.id_bidang == 4" alt="BIMKONSELING" class="w-10 h-10" src="https://dl.dropboxusercontent.com/s/1sgyqehvfc7zlms/n-bmk.png?dl=0" style="opacity: 1; transform-origin: 0% 50% 0px; transform: none;" />
                    <div class="flex flex-col ml-2">
                      <p class="text-xs font-bold uppercase" v-if="order.mitra.id_bidang == 1">BIMBINGAN BELAJAR ({{ order.pelajar.pendidikan }})</p>
                      <p class="text-xs font-bold uppercase" v-if="order.mitra.id_bidang == 2">BIMBINGAN PELATIHAN (KURSUS) ({{ order.pelajar.pendidikan }})</p>
                      <p class="text-xs font-bold uppercase" v-if="order.mitra.id_bidang == 3">BIMEVENT</p>
                      <p class="text-xs font-bold uppercase" v-if="order.mitra.id_bidang == 4">BIMBINGAN KONSELING AKADEMIK</p>
                      <p class="text-xs text-gray-500">{{ order.mitra.kota }}</p>
                      <div class="text-xs text-gray-500">Rp. {{ formatPrice(order.tarif) }}</div>
                    </div>
                  </div>

                  <div class="flex flex-col p-2">
                    <p class="font-bold">{{ $moment(order.waktu_bimbingan).format('LLLL') }}</p>
                    <p class="text-gray-500"><span class="font-bold">{{ order.pelajar.nama }}</span> ({{ order.pelajar.email }})</p>
                    <p class="text-gray-500">{{ order.pelajar.alamat }}, {{ order.pelajar.kota }}, {{ order.pelajar.provinsi }}</p>
                  </div>
                  <div class="flex flex-col flex-wrap p-2">
                    <p class="font-bold">Status Bimbingan</p>
                    <p v-for="dor in order.detail_order.slice().reverse()" :key="dor.id_detail_order" class="text-gray-500">
                      <span class="font-bold capitalize">{{ dor.keterangan }} (<small>{{ $moment(dor.created_at).format('L H:m') }}</small>)</span>
                    </p>
                  </div>
                </div>
                <div class="mt-4 bg-gray-100 flex flex-row flex-wrap md:flex-nowrap justify-between items-baseline">
                  <div class="flex mx-6 py-4 flex-row flex-wrap">
                    <svg v-if="order.status_order == 'unverified'" xmlns="http://www.w3.org/2000/svg" class="w-12 h-10 p-2 mx-2 self-center bg-gray-400 rounded-full fill-current text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                    </svg>
                    <svg v-if="order.status_order == 'verified'" xmlns="http://www.w3.org/2000/svg" class="w-12 h-10 p-2 mx-2 self-center bg-gray-400 rounded-full fill-current text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                    <div class="text-sm mx-2 flex flex-col" v-if="order.status_order == 'unverified'">
                      <p class="">Unggah Bukti</p>
                      <p class="font-bold">Pembayaran</p>
                      <p class="text-xs text-gray-500">{{ order.metode_tf }}</p>
                    </div>
                    <div class="text-sm mx-2 flex flex-col" v-if="order.status_order == 'verified'">
                      <p class="">Bukti Pembayaran</p>
                      <p class="font-bold">Terverifikasi</p>
                      <p class="text-xs text-gray-500">OVO</p>
                    </div>
                    <input type="file" :id="order.id_order+'bukti_tf'" :name="order.id_order+'bukti_tf'" :ref="order.id_order+'bukti_tf'" class="hidden" @change="bukti_tf($event, order.id_order, order.id_order+'bukti_tf')" multiple/>
                    <label v-if="order.bukti_tf == null" :for="order.id_order+'bukti_tf'" class="w-32 h-11 rounded flex border-solid border bg-white mx-2 justify-center place-items-center cursor-pointer hover:shadow-md"><div class="text-sm">Unggah Disini</div></label>
                    <button @click.prevent="show(order.id_order+'modal-buktitf')" v-if="order.bukti_tf !== null" class="w-32 h-11 rounded flex border-solid border bg-white mx-2 justify-center place-items-center hover:shadow-md"><div class="text-sm">Lihat Bukti Bayar</div></button>
                  </div>
                  <div class="md:border-l-2 mx-6 md:border-dotted flex flex-row py-4 mr-6 flex-wrap">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-12 h-10 p-2 mx-2 self-center bg-teal-700 rounded-full fill-current text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                      <path fill-rule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clip-rule="evenodd" />
                    </svg>
                    <div class="text-sm mx-2 flex flex-col">
                      <p>Total Bayar</p>
                      <p class="font-bold">Rp. {{ formatPrice(order.tarif) }}</p>
                      <p class="text-xs text-gray-500">One-Time Payment</p>
                    </div>
                    <button v-if="order.metode_tf !== 'Bank BRI' && order.bukti_tf == null" @click.prevent="show(order.id_order+'modal-bayar')" class="w-32 h-11 rounded flex border-solid border text-white bg-teal-700 mx-2 justify-center place-items-center hover:shadow-md"><div class="">Bayar Sekarang</div></button>
                    <button v-if="order.metode_tf == 'Bank BRI' && order.bukti_tf == null" @click.prevent="show(order.id_order+'modal-bri')" class="w-32 h-11 rounded flex border-solid border text-white bg-teal-700 mx-2 justify-center place-items-center hover:shadow-md"><div class="">Bayar Sekarang</div></button>
                  </div>
                </div>
              </div>
            </template>
          </OrderBim>

          </div>
        </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  auth: true,
  data() {
    return {
      orders: [],
      pictBukti_tf: [],
      pictBukti_tfs: false,
      nameBuktiTf: null,
      orderNow: null,
      isLoad: true,
      progress: 0
    }
  },
  head() {
    return {
      title: 'BIMBIM Indonesia - BIMBINGAN SAYA',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=0' },
        { hid: 'description', name: 'description', content: 'Bim Guru merupakan fitur untuk mencari guru akademik untuk para siswa yang ingin les privat sendiri maupun berkelompok' },
        { name: 'theme-color', content: '#006d71' },
        { name: "msapplication-TileImage", content: "/locig.png" },
        { name: "msapplication-TileColor", content: "#006d71" },
      ],
    }
  },
  mounted() {
    this.getOrder(1)
  },
  methods: {
    async getOrder(page) {
      let getOrder = await this.$axios.get(`/bimapi/api/order/getOrder/`+this.$auth.user.id_pelajar+`?page=${page}`)
      .then(result => {
        this.isLoad = true
        this.orders.push(...result.data.data.data)
      })
      .catch(error => {
        this.isLoad = false
        console.error(error)
      })
    },
    formatPrice(value) {
        let val = (value/1).toFixed(0).replace('.', ',')
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    },
    createImage(file) {
      var image = new Image();
      var reader = new FileReader();

      reader.onload = (e) => {
        this.pictBukti_tfs = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    bukti_tf(event, id_order, ref){
      var files = event.target.files || event.dataTransfer.files;
      if (!files.length){ return }
      if (files[0].type == 'image/jpeg' || files[0].type == 'image/png'){
        this.pictBukti_tf = this.$refs[ref].files[0]
        this.nameBuktiTf = files[0].name
        this.orderNow = id_order
        this.createImage(files[0])
        this.uploadBuktiTF()
      }
      else{
        this.pictBukti_tf = false
        this.$toast.show({
          type:'danger',
          title: 'Format file tidak sesuai🖐',
          message: 'Periksa file anda, format harus JPG,JPEG,PNG!',
          timeout: false,
        })
      }
    },
    async uploadBuktiTF() {
      let form = new FormData();

      form.append('bukti_tf', this.pictBukti_tf);
      form.append('nama_file', this.nameBuktiTf);
      form.append('id_order', this.orderNow);

      const config = {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        onUploadProgress: (progressEvent) => this.progress = Math.round((progressEvent.loaded * 100) / progressEvent.total)
      };

      await this.$axios.get('/bimapi/sanctum/csrf-cookie').then(response => {
        this.$axios.post('/bimapi/api/order/uploadBuktiTf', form, config)
        .then(result => {
          this.show('modal-upload')
          this.orders = []
          this.getOrder(1)
        })
        .catch(error => console.error(error))
      })
      .then(result => console.log())
      .catch(error => console.error(error))

    },

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
      console.log('Closing...')
    },
    //Modal
  },
}
</script>
