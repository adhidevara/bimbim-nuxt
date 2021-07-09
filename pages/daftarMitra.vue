<template>
  <div class="xl:mx-64 p-4">
    <modal name="modal-submit" :adaptive="true" height="auto" width="500" :scrollable="true" :clickToClose="false">
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
            <span class="font-extrabold text-5xl xs:text-4xl">{{ this.progress }}</span>
            <span class="font-semibold text-4xl xs:text-3xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-4xl 2xl:text-4xl">%</span>
          </h1>
        </div>
        <p v-if="progress < 100" class="font-semibold text-xl text-teal-700 text-center">Mohon Tunggu, data anda sedang diproses...</p>
        <p v-if="progress == 100" class="font-semibold text-xl text-teal-700 text-center">Data berhasil diterima, mohon tunggu 1x24 tim kami akan menghubungi melalui email anda!</p>
      </div>
      <div class="flex">
        <button v-if="progress == 100" @click="hide('modal-submit')" class="text-center w-full text-white bg-teal-700 hover:bg-teal-800 p-3">Selesai</button>
      </div>
    </modal>
    <div class="relative py-3 mt-10 xs:p-1">
      <div class="absolute inset-0 bg-gradient-to-r from-teal-400 to-teal-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 xs:rounded-3xl mt-5">
      </div>
        <div class="relative mt-5 bg-white shadow-lg xs:rounded-3xl h-full">

          <div class="text-center font-sans mx-auto mt-3 lg:mb-5">
            <h1 class="text-teal-700 pt-10">
              <span class="font-extrabold text-5xl xs:text-4xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-5xl 2xl:text-5xl">Pendaftaran</span>
              <span class="font-semibold text-4xl xs:text-3xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-4xl 2xl:text-4xl">Kemitraan</span>
            </h1>
          </div>

          <ValidationObserver ref="observer">  <!-- v-slot="{ invalid }" -->
            <form-wizard tag="form" shape="square" @on-complete="onComplete" stepSize="md" errorColor="red" transition="bounce" color="#006d71" title="Mari bergabung menjadi mitra pengajar kami" subtitle="Dapatkan pengalaman baru dengan mengajar di BIMBIM" nextButtonText="Selanjutnya" backButtonText="Kembali" finishButtonText="Kirim">
              <tab-content title="Data Diri" icon="ti ti-user" class="flex flex-wrap -mx-1 overflow-hidden">
                <div class="border-r-2 border-teal-700 mb-2 pt-3 rounded bg-gray-200 lg:w-1/4 md:w-1/2 xs:w-full">
                  <label class="block text-gray-700 text-sm font-bold mb-2 ml-3" for="nama">Nama Lengkap</label>
                  <ValidationProvider mode="aggressive" rules="required|min:4" v-slot="{ errors }">
                    <span v-if="errors[0]" class="text-red-600 text-sm w-full">&nbsp;&nbsp;&nbsp;{{ errors[0] }}</span>
                    <input type="text" v-model="register.nama" id="nama" placeholder="John Doe" class="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-teal-700 transition duration-500 px-3 pb-3" :class="{ 'border-red-600' : errors[0] }"/>
                  </ValidationProvider>
                </div>
                <div class="border-r-2 border-teal-700 mb-2 pt-3 rounded bg-gray-200 lg:w-1/4 md:w-1/2 xs:w-full">
                  <label class="block text-gray-700 text-sm font-bold mb-2 ml-3" for="email">Email</label>
                  <ValidationProvider mode="aggressive" rules="required|email" v-slot="{ errors }">
                    <span v-if="errors[0]" class="text-red-600 text-sm w-full">&nbsp;&nbsp;&nbsp;{{ errors[0] }}</span>
                    <input type="email" v-model="register.email" id="email" placeholder="contoh@email.com" class="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-teal-700 transition duration-500 px-3 pb-3" :class="{ 'border-red-600' : errors[0] }"/>
                  </ValidationProvider>
                </div>
                <div class="border-r-2 border-teal-700 mb-2 pt-3 rounded bg-gray-200 lg:w-1/4 md:w-1/2 xs:w-full">
                  <label class="block text-gray-700 text-sm font-bold mb-2 ml-3" for="no_telepon">No Telepon</label>
                  <ValidationProvider mode="aggressive" rules="required|numeric|minmax:3,13" v-slot="{ errors }">
                    <span v-if="errors[0]" class="text-red-600 text-sm w-full">&nbsp;&nbsp;&nbsp;{{ errors[0] }}</span>
                    <input type="text" v-model="register.no_telepon" id="no_telepon" placeholder="081234567890" class="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-teal-700 transition duration-500 px-3 pb-3" :class="{ 'border-red-600' : errors[0] }"/>
                  </ValidationProvider>
                </div>
                <div class="border-r-2 border-teal-700 mb-2 pt-3 rounded bg-gray-200 lg:w-1/4 md:w-1/2 xs:w-full">
                  <label class="block text-gray-700 text-sm font-bold mb-2 ml-3" for="jk">Jenis Kelamin</label>
                  <ValidationProvider mode="aggressive" rules="required" v-slot="{ errors }">
                    <span v-if="errors[0]" class="text-red-600 text-sm w-full">&nbsp;&nbsp;&nbsp;{{ errors[0] }}</span>
                    <v-select tag="input" class="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-teal-700 transition duration-500 px-3 pb-3" :class="{ 'border-red-600' : errors[0] }" :options="jk" v-model="register.jk" id="jk" placeholder="Pilih Jenis Kelamin"></v-select>
                  </ValidationProvider>
                </div>
                <div class="border-r-2 border-teal-700 mb-2 pt-3 rounded bg-gray-200 lg:w-full md:w-full xs:w-full">
                  <label class="block text-gray-700 text-sm font-bold mb-2 ml-3" for="date">Tanggal Lahir</label>
                  <ValidationProvider name="date" vid="date" mode="aggressive" rules="required" v-slot="{ errors }">
                    <span v-if="errors[0]" class="text-red-600 text-sm w-full">&nbsp;&nbsp;&nbsp;{{ errors[0] }}</span>
                    <input type="date" v-model="register.tanggal" class="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-teal-700 transition duration-500 px-3 pb-3" :class="{ 'border-red-600' : errors[0] }"/>
                  </ValidationProvider>
                </div>
                <div class="border-r-2 border-teal-700 mb-2 pt-3 rounded bg-gray-200 lg:w-1/2 md:w-1/2 xs:w-full">
                  <label class="block text-gray-700 text-sm font-bold mb-2 ml-3" for="password">Password</label>
                  <ValidationProvider mode="aggressive" rules="required|confirmed:password|minmax:6,12" v-slot="{ errors }">
                    <span v-if="errors[0]" class="text-red-600 text-sm w-full">&nbsp;&nbsp;&nbsp;{{ errors[0] }}</span>
                    <input type="password" v-model="register.password" id="password" autocomplete="on" placeholder="•••" ref="password" class="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-teal-700 transition duration-500 px-3 pb-3" :class="{ 'border-red-600' : errors[0] }"/>
                  </ValidationProvider>
                </div>
                <div class="border-r-2 border-teal-700 mb-2 pt-3 rounded bg-gray-200 lg:w-1/2 md:w-1/2 xs:w-full">
                  <label class="block text-gray-700 text-sm font-bold mb-2 ml-3" for="password">Ulangi Password</label>
                  <ValidationProvider name="password" vid="password" mode="aggressive" rules="required|minmax:6,12" v-slot="{ errors }">
                    <span v-if="errors[0]" class="text-red-600 text-sm w-full">&nbsp;&nbsp;&nbsp;{{ errors[0] }}</span>
                    <input type="password" v-model="register.c_password" id="c_password" autocomplete="on" placeholder="•••" ref="password" class="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-teal-700 transition duration-500 px-3 pb-3" :class="{ 'border-red-600' : errors[0] }"/>
                  </ValidationProvider>
                </div>
              </tab-content>
              <tab-content title="Tempat Tinggal" icon="ti ti-map-alt" class="flex flex-wrap -mx-1 overflow-hidden">
                <div class="border-r-2 border-teal-700 mb-2 pt-3 rounded bg-gray-200 lg:w-1/4 md:w-1/2 xs:w-full h-full">
                  <label class="block text-gray-700 text-sm font-bold mb-2 ml-3" for="provinsi">Provinsi</label>
                  <ValidationProvider mode="aggressive" rules="required" v-slot="{ errors }">
                    <span v-if="errors[0]" class="text-red-600 text-sm w-full">&nbsp;&nbsp;&nbsp;{{ errors[0] }}</span>
                    <v-select tag="input" :clearable="false" @input="getKota(register.provinsi.id_provinsi)" id="provinsi" class="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-teal-700 transition duration-500 px-3 pb-3" :class="{ 'border-red-600' : errors[0] }" label="nama" :options="provinsi" v-model="register.provinsi" placeholder="Pilih Provinsi"></v-select>
                  </ValidationProvider>
                </div>
                <div class="border-r-2 border-teal-700 mb-2 pt-3 rounded bg-gray-200 lg:w-1/4 md:w-1/2 xs:w-full">
                  <label class="block text-gray-700 text-sm font-bold mb-2 ml-3">Kota</label>
                  <ValidationProvider mode="aggressive" rules="required" v-slot="{ errors }">
                    <span v-if="errors[0]" class="text-red-600 text-sm w-full">&nbsp;&nbsp;&nbsp;{{ errors[0] }}</span>
                    <v-select tag="input" :clearable="false" @input="getKecamatan(register.kota.id_kota)" class="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-teal-700 transition duration-500 px-3 pb-3" :class="{ 'border-red-600' : errors[0] }" label="nama" :options="kota" v-model="register.kota" placeholder="Pilih Kota"></v-select>
                  </ValidationProvider>
                </div>
                <div class="border-r-2 border-teal-700 mb-2 pt-3 rounded bg-gray-200 lg:w-1/4 md:w-1/2 xs:w-full">
                  <label class="block text-gray-700 text-sm font-bold mb-2 ml-3" for="kecamatan">Kecamatan</label>
                  <ValidationProvider mode="aggressive" rules="required" v-slot="{ errors }">
                    <span v-if="errors[0]" class="text-red-600 text-sm w-full">&nbsp;&nbsp;&nbsp;{{ errors[0] }}</span>
                    <v-select tag="input" :clearable="false" @input="getKelurahan(register.kecamatan.id_kecamatan)" id="kecamatan" class="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-teal-700 transition duration-500 px-3 pb-3" :class="{ 'border-red-600' : errors[0] }" label="nama" :options="kecamatan" v-model="register.kecamatan" placeholder="Pilih Kecamatan"></v-select>
                  </ValidationProvider>
                </div>
                <div class="border-r-2 border-teal-700 mb-2 pt-3 rounded bg-gray-200 lg:w-1/4 md:w-1/2 xs:w-full">
                  <label class="block text-gray-700 text-sm font-bold mb-2 ml-3" for="kelurahan">Kelurahan</label>
                  <ValidationProvider mode="aggressive" rules="required" v-slot="{ errors }">
                    <span v-if="errors[0]" class="text-red-600 text-sm w-full">&nbsp;&nbsp;&nbsp;{{ errors[0] }}</span>
                    <v-select tag="input" :clearable="false" id="kelurahan" class="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-teal-700 transition duration-500 px-3 pb-3" :class="{ 'border-red-600' : errors[0] }" label="nama" :options="kelurahan" v-model="register.kelurahan" placeholder="Pilih Kelurahan"></v-select>
                  </ValidationProvider>
                </div>
                <div class="border-r-2 border-teal-700 mb-2 pt-3 rounded bg-gray-200 lg:w-1/2 md:w-1/2 xs:w-full">
                  <label class="block text-gray-700 text-sm font-bold mb-2 ml-3" for="alamat">Alamat Lengkap</label>
                  <ValidationProvider mode="aggressive" rules="required|minmax:4,100" v-slot="{ errors }">
                    <span v-if="errors[0]" class="text-red-600 text-sm w-full">&nbsp;&nbsp;&nbsp;{{ errors[0] }}</span>
                    <input type="text" v-model="register.alamat" id="alamat" placeholder="Jl. Anggrek No.1" class="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-teal-700 transition duration-500 px-3 pb-3" :class="{ 'border-red-600' : errors[0] }"/>
                  </ValidationProvider>
                </div>
                <div class="border-r-2 border-teal-700 mb-2 pt-3 rounded bg-gray-200 lg:w-1/2 md:w-1/2 xs:w-full">
                  <label class="block text-gray-700 text-sm font-bold mb-2 ml-3" for="kode_pos">Kode Pos</label>
                  <ValidationProvider mode="aggressive" rules="required|numeric|minmax:3,6" v-slot="{ errors }">
                    <span v-if="errors[0]" class="text-red-600 text-sm w-full">&nbsp;&nbsp;&nbsp;{{ errors[0] }}</span>
                    <input type="text" v-model="register.kodePos" id="kode_pos" placeholder="77123" class="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-teal-700 transition duration-500 px-3 pb-3" :class="{ 'border-red-600' : errors[0] }"/>
                  </ValidationProvider>
                </div>
              </tab-content>
              <tab-content title="Pendidikan Terakhir" icon="ti ti-medall-alt" class="flex flex-wrap -mx-1 overflow-hidden">
                <div class="border-r-2 border-teal-700 mb-2 pt-3 rounded bg-gray-200 lg:w-1/2 md:w-1/2 xs:w-full">
                  <label class="block text-gray-700 text-sm font-bold mb-2 ml-3" for="institusi">Institusi</label>
                  <ValidationProvider mode="aggressive" rules="required" v-slot="{ errors }">
                    <span v-if="errors[0]" class="text-red-600 text-sm w-full">&nbsp;&nbsp;&nbsp;{{ errors[0] }}</span>
                    <input type="text" v-model="register.institusi" id="institusi" placeholder="SMP/SMA/Universitas" class="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-teal-700 transition duration-500 px-3 pb-3" :class="{ 'border-red-600' : errors[0] }"/>
                  </ValidationProvider>
                </div>
                <div class="border-r-2 border-teal-700 mb-2 pt-3 rounded bg-gray-200 lg:w-1/2 md:w-1/2 xs:w-full">
                  <label class="block text-gray-700 text-sm font-bold mb-2 ml-3" for="prodi">Program Studi</label>
                  <ValidationProvider mode="aggressive" rules="required" v-slot="{ errors }">
                    <span v-if="errors[0]" class="text-red-600 text-sm w-full">&nbsp;&nbsp;&nbsp;{{ errors[0] }}</span>
                    <input type="text" v-model="register.prodi" id="prodi" placeholder="IPA/IPS/Bahasa/Teknik/S1 Pendidikan" class="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-teal-700 transition duration-500 px-3 pb-3" :class="{ 'border-red-600' : errors[0] }"/>
                  </ValidationProvider>
                </div>
                <div class="border-r-2 border-teal-700 mb-2 pt-3 rounded bg-gray-200 lg:w-1/2 md:w-1/2 xs:w-full">
                  <label class="block text-gray-700 text-sm font-bold mb-2 ml-3" for="ipk">Nilai Terakhir <small>(koma gunakan TITIK cth: 3.55)</small></label>
                  <ValidationProvider mode="aggressive" rules="required" v-slot="{ errors }">
                    <span v-if="errors[0]" class="text-red-600 text-sm w-full">&nbsp;&nbsp;&nbsp;{{ errors[0] }}</span>
                    <input type="text" v-model="register.ipk" id="ipk" placeholder="IPK/NUN/NEM" class="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-teal-700 transition duration-500 px-3 pb-3" :class="{ 'border-red-600' : errors[0] }"/>
                  </ValidationProvider>
                </div>
                <div class="border-r-2 border-teal-700 mb-2 pt-3 rounded bg-gray-200 lg:w-1/2 md:w-1/2 xs:w-full">
                  <label class="block text-gray-700 text-sm font-bold mb-2 ml-3" for="status_studi">Status Studi</label>
                  <ValidationProvider mode="aggressive" rules="required" v-slot="{ errors }">
                    <span v-if="errors[0]" class="text-red-600 text-sm w-full">&nbsp;&nbsp;&nbsp;{{ errors[0] }}</span>
                    <v-select tag="input" class="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-teal-700 transition duration-500 px-3 pb-3" :class="{ 'border-red-600' : errors[0] }" :options="status_studi" v-model="register.status_studi" placeholder="Pilih Status Studi"></v-select>
                  </ValidationProvider>
                </div>
              </tab-content>
              <tab-content title="Unggah Berkas & Selesai" icon="ti ti-check" class="flex flex-wrap -mx-1 overflow-hidden">
                <div class="border-r-2 border-teal-700 mb-2 pt-3 rounded bg-gray-200 lg:w-1/2 md:w-1/2 xs:w-full">
                  <div class="block text-gray-700 text-sm font-bold mb-2 ml-3">Unggah Foto Profil Anda <small>(JPEG\JPG\PNG min. 2MB)</small></div>
                  <label :class="{'bg-red-600 hover:bg-red-900' : !e_foto, 'bg-teal-700 hover:bg-teal-900' : e_foto}" class="block text-center rounded-full cursor-pointer text-white px-3 py-1 m-3" for="foto">
                    <font-awesome-icon class="text-white" :icon="['fas', 'camera']"/> {{ nameFoto }}
                  </label>
                  <input type="file" id="foto" name="foto" ref="foto" class="hidden" @change="fotoFiles($event)" multiple/>
                  <div v-if="foto" class="bg-white m-3 block bg-center bg-cover rounded-xl bg-scroll" style="height: 300px;" :style="{ backgroundImage: 'url(' + foto + ')' }">
                  </div>
                </div>
                <div class="border-r-2 border-teal-700 mb-2 pt-3 rounded bg-gray-200 lg:w-1/2 md:w-1/2 xs:w-full">
                  <div class="block text-gray-700 text-sm font-bold mb-2 ml-3">Unggah CV Anda <small>(PDF min. 2MB)</small></div>
                  <label :class="{'bg-red-600 hover:bg-red-900' : !e_cv, 'bg-teal-700 hover:bg-teal-900' : e_cv}" class="block text-center rounded-full cursor-pointer text-white px-3 py-1 m-3" for="cv">
                    <font-awesome-icon class="text-white" :icon="['fas', 'file']"/> {{ nameCV }}
                  </label>
                  <input type="file" id="cv" name="cv" ref="cv" class="hidden" @change="cvFiles($event)" multiple/>
                </div>
                <div class="border-r-2 border-teal-700 mb-2 pt-3 rounded bg-gray-200 lg:w-1/2 md:w-1/2 xs:w-full">
                  <label class="block text-gray-700 text-sm font-bold mb-2 ml-3" for="video">Link Youtube Video Singkat Perkenalan <a href="https://support.google.com/youtube/answer/57741?co=GENIE.Platform%3DDesktop&hl=id" target="_blank"><small class="text-orange-500 hover:text-orange-700"><font-awesome-icon class="text-current" :icon="['fas', 'exclamation-circle']"/> Cara Mendapatkan Link Youtube</small></a></label>
                  <ValidationProvider mode="aggressive" :rules="{ regex:/http(?:s?):\/\/(?:www\.)?youtu(?:be\.com\/watch\?v=|\.be\/)([\w\-\_]*)(&(amp;)?‌​[\w\?‌​=]*)?/ }" v-slot="{ errors }">
                    <span v-if="errors[0]" class="text-red-600 text-sm w-full">&nbsp;&nbsp;&nbsp;{{ errors[0] }}</span>
                    <input class="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-teal-700 transition duration-500 px-3 pb-3" :class="{ 'border-red-600' : errors[0] }" v-model="register.video" placeholder="Contoh: (https://www.youtube.com/watch?v=l3BfJ_QI9nI)"/>
                  </ValidationProvider>
                </div>
                <div class="border-r-2 border-teal-700 mb-2 pt-3 rounded bg-gray-200 lg:w-1/2 md:w-1/2 xs:w-full">
                  <label class="block text-gray-700 text-sm font-bold mb-2 ml-3" for="bidang">Pilih Bidang Mengajar Anda <nuxt-link to="/produk" target="_blank"><small class="text-orange-500 hover:text-orange-700"><font-awesome-icon class="text-current" :icon="['fas', 'exclamation-circle']"/> Info Bidang</small></nuxt-link></label>
                  <ValidationProvider mode="aggressive" rules="required" v-slot="{ errors }">
                    <span v-if="errors[0]" class="text-red-600 text-sm w-full">&nbsp;&nbsp;&nbsp;{{ errors[0] }}</span>
                    <v-select tag="input" class="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-teal-700 transition duration-500 px-3 pb-3" :class="{ 'border-red-600' : errors[0] }" :options="bidang" v-model="register.bidang" placeholder="Pilih Bidang"></v-select>
                  </ValidationProvider>
                </div>
                <div
                  v-if="register.bidang == 'BIM PELATIH'"
                  class="border-r-2 border-teal-700 mb-2 pt-3 rounded bg-gray-200 lg:w-1/2 md:w-1/2 xs:w-full">
                  <label class="block text-gray-700 text-sm font-bold mb-2 ml-3" for="price">Tarif per Sesi</label>
                  <ValidationProvider mode="aggressive" rules="required|numeric" v-slot="{ errors }">
                    <span v-if="errors[0]" class="text-red-600 text-sm w-full">&nbsp;&nbsp;&nbsp;{{ errors[0] }}</span>
                    <input class="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-teal-700 transition duration-500 px-3 pb-3" :class="{ 'border-red-600' : errors[0] }" v-model="register.tarif" placeholder="Contoh: (120.000)"></input>
                  </ValidationProvider>
                </div>
                <div
                  :class="{'lg:w-full': register.bidang !== 'BIM PELATIH', 'md:w-full': register.bidang !== 'BIM PELATIH'}"
                  class="border-r-2 border-teal-700 mb-2 pt-3 rounded bg-gray-200 lg:w-1/2 md:w-1/2 xs:w-full">
                  <label class="block text-gray-700 text-sm font-bold mb-2 ml-3" for="mapel">Masukkan Mata Pelajaran/Pelatihan Anda <small class="text-orange-500 hover:text-orange-700"><font-awesome-icon class="text-current" :icon="['fas', 'exclamation-circle']"/> Ketikkan dan tekan ENTER</small></label>
                  <ValidationProvider mode="aggressive" rules="required" v-slot="{ errors }">
                    <span v-if="errors[0]" class="text-red-600 text-sm w-full">&nbsp;&nbsp;&nbsp;{{ errors[0] }}</span>
                    <v-select tag="input" class="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-teal-700 transition duration-500 px-3 pb-3" :class="{ 'border-red-600' : errors[0] }" taggable multiple :map-keydown="mapeluHandlers" v-model="register.mapel_unggulan" placeholder="Matematika | IPA | IPS | Gitar | Piano | Renang"></v-select>
                  </ValidationProvider>
                </div>
                <div class="border-r-2 border-teal-700 mb-2 pt-3 rounded bg-gray-200 lg:w-full md:w-full xs:w-full">
                  <label class="block text-gray-700 text-sm font-bold mb-2 ml-3" for="title">Tuliskan Perkenalan Pendek Anda Pada Siswa <small>(4 -100 Karakter)</small></label>
                  <ValidationProvider mode="aggressive" rules="required|minmax:4,100" v-slot="{ errors }">
                    <span v-if="errors[0]" class="text-red-600 text-sm w-full">&nbsp;&nbsp;&nbsp;{{ errors[0] }}</span>
                    <input type="text" v-model="register.title" class="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-teal-700 px-3 pb-3" :class="{ 'border-red-600' : errors[0] }" placeholder="Contoh: (Hai, Saya John Doe, S.Pd. Seorang Guru yang sudah berpengalaman lulusan S1 dari Universitas Pendidikan...)" />
                  </ValidationProvider>
                </div>
                <div class="border-r-2 border-teal-700 mb-2 pt-3 rounded bg-gray-200 lg:w-full md:w-full xs:w-full">
                  <label class="block text-gray-700 text-sm font-bold mb-2 ml-3" for="deskripsi">Tuliskan Deskripsi Lengkap Mengenai Anda</label>
                  <ValidationProvider mode="aggressive" rules="required|min:4" v-slot="{ errors }">
                    <span v-if="errors[0]" class="text-red-600 text-sm w-full">&nbsp;&nbsp;&nbsp;{{ errors[0] }}</span>
                    <textarea type="text" rows="6" v-model="register.deskripsi" id="deskripsi" class="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-teal-700 transition duration-500 px-3 pb-3" :class="{ 'border-red-600' : errors[0] }" placeholder="Contoh: (John Doe, S.Pd. atau dikenal dengan Mr. John adalah seorang Praktisi Pendidikan Nasional asal Trenggalek. Praktisi berusia 24 tahun ini telah berkecimpung dalam dunia pendidkan sejak 2012. Pada bulan September 2013, Mr. John bergabung dengan Organisasi Pendidikan, lembaga kursus dan pelatihan terbesar di Indonesia, sebagai Instruktur Pendidikan. Dalam aktifitasnya, Mr. John memberikan pelatihan Bahasa Inggris untuk semua jenjang usia dari Taman Kanak-Kanak, Sekolah Dasar hingga Professional. Saat ini, Mr. John berperan aktif dalam memberikan pelatihan Bahasa Inggris di lembaga pendidikan atau perusahaan di Indonesia ataupun di seluruh dunia secara online ataupun offline.)"></textarea>
                  </ValidationProvider>
                </div>
                <div class="border-r-2 border-teal-700 mb-2 pt-3 rounded bg-gray-200 lg:w-full md:w-full xs:w-full">
                  <ValidationProvider mode="aggressive" :rules="{ required: { allowFalse: false } }" v-slot="{ errors }">
                    <span v-if="errors[0]" class="text-red-600 text-sm w-full">&nbsp;&nbsp;&nbsp;Anda belum menyetujui Ketentuan Pengguna dan MOU Kemitraan</span>
                    <label class="block text-gray-700 text-sm font-bold mb-2 ml-3" for="mou">
                      <input type="checkbox" rows="6" v-model="register.mou" id="mou" class="transition duration-500" :class="{ 'border-red-600' : errors[0] }"/>
                      Saya telah membaca dan setuju dengan <nuxt-link to="/privasi" target="_blank" class="text-teal-700 hover:text-teal-900">Ketentuan Pengguna</nuxt-link> dan <nuxt-link to="/mou-kemitraan" target="_blank" class="text-teal-700 hover:text-teal-900">MOU Kemitraan</nuxt-link>
                    </label>
                  </ValidationProvider>
                </div>
              </tab-content>
            </form-wizard>
        </ValidationObserver>
        <div v-if="loading" class="loading-page">
          <p>Loading...</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.vs__dropdown-menu {
  position: initial;
}
@keyframes fadeInRight {
   0% {
      opacity: 0;
      transform: translateX(20px);
   }
   100% {
      opacity: 1;
      transform: translateX(0);
   }
}
@keyframes bounceIn {
  from, 20%, 40%, 60%, 80%, to {
    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
  }

  0% {
    opacity: 0;
    transform: scale3d(.3, .3, .3);
  }

  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    transform: scale3d(.9, .9, .9);
  }

  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    transform: scale3d(.97, .97, .97);
  }

  to {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
}
 .bounce-leave-active {
   transition: opacity 0.5s;
 }
.bounce-enter-active {
  animation: bounceIn 0.5s;
}
.bounce-enter, .bounce-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0
}
</style>

<script>
import { ValidationProvider, ValidationObserver } from "vee-validate";
import { FormWizard, TabContent } from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'

export default {
  auth: false,
  components: {
    ValidationProvider, ValidationObserver, FormWizard, TabContent,
  },
  data() {
    return {
      register: {
        nama: null,
        email: null,
        no_telepon: null,
        jk: null,
        password: null,
        c_password: null,
        tanggal: null,
        alamat: null,
        provinsi: null,
        kota: null,
        kecamatan: null,
        kelurahan: null,
        kodePos: null,
        institusi: null,
        prodi: null,
        ipk: null,
        status_studi: null,
        video: null,
        bidang: null,
        tarif: 0,
        mapel_unggulan: [],
        title: null,
        deskripsi: null,
        foto: [],
        cv: [],
        mou: false,
      },
      jk: ["Pria", "Wanita"],
      status_studi: ["Mahasiswa Aktif", "Cuti", "Lulus"],
      bidang: ["BIM GURU", "BIM PELATIH"],
      provinsi: [],
      kota: [],
      kecamatan: [],
      kelurahan: [],
      kodePos: [],
      foto: false,
      e_foto: true,
      e_cv: true,
      nameFoto: "Upload Foto",
      nameCV: "Upload CV",
      progress: 0,
    }
  },
  head() {
    return {
      title: 'Pendaftaran Kemitraan',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=0' },
        { hid: 'description', name: 'description', content: 'Mari bergabung menjadi mitra pengajar kami dan Dapatkan pengalaman baru dengan mengajar di BIMBIM' },
        { name: 'theme-color', content: '#006d71' },
        { name: "msapplication-TileImage", content: "/locig.png" },
        { name: "msapplication-TileColor", content: "#006d71" },
      ],
    }
  },
  methods: {
    //Mapel Unggulan Handlers
    mapeluHandlers: (map, vm) => ({
      ...map, 50: e => {
        e.preventDefault();
        // if( e.key === '@' && vm.search.length > 0 ) {
        //   vm.search = `${vm.search}@gmail.com`;
        // }
        console.log(e)
      },
    }),

    //Modal
    show(modal) {
      this.$modal.show(modal)
    },
    hide(modal) {
      this.$modal.hide(modal)
      this.$router.push('/')
    },
    beforeOpen (event) {
      console.log('Opening...')
    },
    beforeClose (event) {
      this.copyBtn = 'Copy'
      console.log('Closing...')
    },
    //Modal

    //Send to BackEnd
    async onComplete() {
      const isValid = await this.$refs.observer.validate();
      if (!isValid) {
        this.$toast.show({
          type:'danger',
          title: 'Form tidak sesuai',
          message: 'Periksa form yang anda isi!',
        })
      }else{
        if (this.e_foto == false || this.e_cv == false || this.nameFoto == "Upload Foto" || this.nameCV == "Upload CV") {
          this.e_foto = false
          this.e_cv = false
          this.$toast.show({
            type:'danger',
            title: 'Anda Belum Upload Foto atau CV',
            message: 'Periksa berkas yang akan anda Upload!',
          })
        }
        else{
          this.show('modal-submit')
          this.submit()
        }
      }
    },
    async submit() {
      let form = new FormData();

      form.append('nama', this.register.nama)
      form.append('email', this.register.email)
      form.append('no_telepon', this.register.no_telepon)
      form.append('jk', this.register.jk)
      form.append('password', this.register.password)
      form.append('c_password', this.register.c_password)
      form.append('tanggal', this.register.tanggal)
      form.append('alamat', this.register.alamat)
      form.append('provinsi', this.register.provinsi.nama)
      form.append('kota', this.register.kota.nama)
      form.append('kecamatan', this.register.kecamatan.nama)
      form.append('kelurahan', this.register.kelurahan.nama)
      form.append('kodePos', this.register.kodePos)
      form.append('institusi', this.register.institusi)
      form.append('prodi', this.register.prodi)
      form.append('ipk', this.register.ipk)
      form.append('status_studi', this.register.status_studi)
      form.append('tarif', this.register.tarif)
      form.append('mapel_unggulan', this.register.mapel_unggulan)
      form.append('video', this.register.video)
      form.append('bidang', this.register.bidang)
      form.append('title', this.register.title)
      form.append('deskripsi', this.register.deskripsi)
      form.append('foto', this.register.foto);
      form.append('cv', this.register.cv);

      const config = {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        onUploadProgress: (progressEvent) => this.progress = Math.round((progressEvent.loaded * 100) / progressEvent.total)

      };
      await this.$axios.get('/bimapi/sanctum/csrf-cookie').then(response => {
        this.$axios.post('/bimapi/api/mitra/regisMitra', form, config)
        .then(result => {
          console.log()
        })
        .catch(error => console.error(error))
      })
      .then(result => console.log())
      .catch(error => console.error(error))
    },

    //Get Data Alamat
    async getProvinsi() {
      await this.$axios.get('/bimapi/api/daerah/getProvinsi')
      .then(result => {
        this.provinsi = result.data.provinsi
      })
      .catch(error => console.log(error))
    },
    async getKota(params) {
      await this.$axios.get('/bimapi/api/daerah/getKota/'+params)
      .then(result => {
        this.kota = result.data.kota_kabupaten
      })
      .catch(error => console.error(error))
    },
    async getKecamatan(params) {
      await this.$axios.get('/bimapi/api/daerah/getKecamatan/'+params)
      .then(result => {
        this.kecamatan = result.data.kecamatan
      })
      .catch(error => console.error(error))
    },
    async getKelurahan(params) {
      await this.$axios.get('/bimapi/api/daerah/getKelurahan/'+params)
      .then(result => {
        this.kelurahan = result.data.kelurahan
      })
      .catch(error => console.error(error))
    },

    //Selected Upload Foto & CV
    createImage(file) {
      var image = new Image();
      var reader = new FileReader();

      reader.onload = (e) => {
        this.foto = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    fotoFiles(event) {
      var files = event.target.files || event.dataTransfer.files;
      if (!files.length){ return }
      if (files[0].size <= 2000000){
        if (files[0].type == 'image/jpeg' || files[0].type == 'image/png'){
          this.register.foto = this.$refs.foto.files[0]
          this.e_foto = true
          this.nameFoto = files[0].name
          this.createImage(files[0])
        }
        else{
          this.e_foto = false
          this.foto = false
          this.$toast.show({
            type:'danger',
            title: 'Format file tidak sesuai🖐',
            message: 'Periksa foto anda format harus JPG,JPEG,PNG!',
            timeout: false,
          })
        }
      }
      else{
        this.e_foto = false
        this.foto = false
        this.$toast.show({
          type:'danger',
          title: 'Foto terlalu besar🖐',
          message: 'Periksa foto anda, ukuran harus dibawah 2MB!',
          timeout: false,
        })
      }
    },
    cvFiles(event) {
      var files = event.target.files || event.dataTransfer.files;
      if (!files.length){ return }
      if (files[0].size <= 2000000){
        if (files[0].type == 'application/pdf'){
          this.register.cv = this.$refs.cv.files[0]
          this.e_cv = true
          this.nameCV = files[0].name
        }
        else{
          this.e_cv = false
          this.$toast.show({
            type:'danger',
            title: 'Format file tidak sesuai🖐',
            message: 'Periksa file anda format harus PDF!',
            timeout: false,
          })
        }
      }
      else{
        this.e_cv = false
        this.$toast.show({
          type:'danger',
          title: 'File terlalu besar🖐',
          message: 'Periksa file anda, ukuran harus dibawah 2MB!',
          timeout: false,
        })
      }
    },
  },
  mounted() {
    this.getProvinsi()
  },
}
</script>
