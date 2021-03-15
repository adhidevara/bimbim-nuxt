<template>
  <div class="px-4">
    <div class="relative py-3 sm:max-w-xl sm:mx-auto mt-10 xs:p-2">
      <div class="absolute inset-0 bg-gradient-to-r from-teal-400 to-teal-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 xs:rounded-3xl">
      </div>
      <div class="relative px-4 py-10 bg-white shadow-lg xs:rounded-3xl">
        <div class="max-w-md mx-auto">
          <div class="max-w-lg mx-auto p-3 md:p-5 my-4">
            <section>
                <h3 class="font-semibold text-2xl text-teal-700">Hi, <span class="font-bold text-3xl text-teal-700">Mari Bergabung</span></h3>
                <p class="text-gray-600 pt-2">Silahkan melakukan daftar akun.</p>
            </section>

            <section class="mt-10">
              <ValidationObserver ref="observer" v-slot="{ invalid }">
                <form class="flex flex-col" @submit.prevent="submit">
                  <div class="mb-6 pt-3 rounded bg-gray-200">
                    <label class="block text-gray-700 text-sm font-bold mb-2 ml-3" for="nama">Nama Lengkap</label>
                    <ValidationProvider mode="lazy" rules="required|min:4" v-slot="{ errors }">
                    <input type="text" v-model="register.nama" id="nama" placeholder="John Doe" class="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-teal-700 transition duration-500 px-3 pb-3" :class="{ 'border-red-600' : errors[0] }"/>
                    <span class="text-red-600 text-sm">{{ errors[0] }}</span>
                    </ValidationProvider>
                  </div>
                  <div class="mb-6 pt-3 rounded bg-gray-200">
                    <label class="block text-gray-700 text-sm font-bold mb-2 ml-3" for="email">Email</label>
                    <ValidationProvider mode="lazy" rules="required|email" v-slot="{ errors }">
                    <input type="email" v-model="register.email" id="email" placeholder="contoh@email.com" class="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-teal-700 transition duration-500 px-3 pb-3" :class="{ 'border-red-600' : errors[0] }"/>
                    <span class="text-red-600 text-sm">{{ errors[0] }}</span>
                    </ValidationProvider>
                  </div>
                  <div class="mb-6 pt-3 rounded bg-gray-200">
                    <label class="block text-gray-700 text-sm font-bold mb-2 ml-3" for="notelp">Nomor Telepon</label>
                    <ValidationProvider mode="lazy" rules="required|numeric|minmax:3,13" v-slot="{ errors }">
                    <input type="text" v-model="register.no_telepon" id="no_telepon" placeholder="081234567890" class="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-teal-700 transition duration-500 px-3 pb-3" :class="{ 'border-red-600' : errors[0] }"/>
                    <span class="text-red-600 text-sm">{{ errors[0] }}</span>
                    </ValidationProvider>
                  </div>
                  <div class="mb-6 pt-3 rounded bg-gray-200">
                    <label class="block text-gray-700 text-sm font-bold mb-2 ml-3" for="password">Password</label>
                    <ValidationProvider mode="aggressive" rules="required|confirmed:password|minmax:6,12" v-slot="{ errors }">
                    <input type="password" v-model="register.password" id="password" placeholder="•••" ref="password" class="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-teal-700 transition duration-500 px-3 pb-3" :class="{ 'border-red-600' : errors[0] }"/>
                    <span class="text-red-600 text-sm">{{ errors[0] }}</span>
                    </ValidationProvider>
                  </div>
                  <div class="mb-6 pt-3 rounded bg-gray-200">
                    <label class="block text-gray-700 text-sm font-bold mb-2 ml-3" for="password">Ulangi Password</label>
                    <ValidationProvider name="password" vid="password" mode="aggressive" rules="required|minmax:6,12" v-slot="{ errors }">
                    <input type="password" v-model="register.c_password" id="c_password" placeholder="•••" ref="password" class="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-teal-700 transition duration-500 px-3 pb-3" :class="{ 'border-red-600' : errors[0] }"/>
                    <span class="text-red-600 text-sm">{{ errors[0] }}</span>
                    </ValidationProvider>
                  </div>
                  <div class="flex justify-end">
                    <nuxt-link to="/login" class="text-sm text-teal-700 hover:text-teal-600 hover:underline mb-6">Sudah punya akun?</nuxt-link>
                  </div>
                  <button :disabled="invalid" class="disabled:opacity-50 bg-teal-700 hover:bg-teal-600 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200">
                    <img v-if="isLoading == true" class="h-10 w-10 mx-auto" src="/loading-2.svg"/>
                    <span v-else>Daftar</span>
                  </button>
                </form>
              </ValidationObserver>
            </section>
          </div>
        </div>
      </div>
    </div>

    <footer class="max-w-lg mx-auto flex justify-center text-teal-700 mt-10">
      <nuxt-link to="/kontak" class="hover:underline">Kontak</nuxt-link>
      <span class="mx-3">•</span>
      <nuxt-link to="/privasi" class="hover:underline">Kebijakan Privasi</nuxt-link>
    </footer>
  </div>
</template>

<script>
import { ValidationProvider, ValidationObserver } from "vee-validate";

export default {
  auth: 'guest',
  components: {
    ValidationProvider, ValidationObserver
  },
  data() {
    return {
      isLoading: false,
      register: {
        email: null,
        nama: null,
        no_telepon: null,
        password: null,
        c_password: null,
      }
    }
  },
  methods: {
    async submit() {
      //Form Validation
      const isValid = await this.$refs.observer.validate();
      if (!isValid) {
        this.$toast.show({
          type:'danger',
          title: 'Form tidak sesuai',
          message: 'Periksa form yang anda isi!',
        })
      }else{
        //Call Regist Method
        this.regist()
      }
    },
    regist(){
      //API Call Register
      this.isLoading = true
      this.$axios.get('/bimapi/sanctum/csrf-cookie').then(response => {
        this.$axios.post('/bimapi/api/user/register', {
          email: this.register.email,
          nama: this.register.nama,
          no_telepon: this.register.no_telepon,
          password: this.register.password,
          c_password: this.register.c_password,
        })
        .then(response => {
          //Call Logging In Method
          this.loggingIn()
        })
        .catch(error => this.isLoading = false);
      })
    },
    loggingIn(){
      //Logging In User
      this.$auth.loginWith('laravelSanctum', {
        data: {
          email: this.register.email,
          password: this.register.password
        }
      })
      .then(respone => {
        this.$router.push('/profil')
        if(this.$auth.user.is_verified == 0){
          this.$toast.show({
            type:'warning',
            title: 'Verifikasi Data Anda',
            message: 'Harap verifikasi profil anda terlebih dahulu!',
            timeout: false,
            primary: {
              label: 'Edit Profil',
              theme: 'white',
              action: () => this.$router.push('/editprofil'),
            },
            secondary: {
              label: 'Tutup',
              action: () => console.log(),
            },
          })
        }
        this.$toast.show({
          type: 'success',
          title: 'Login Berhasil',
          message: 'Hai, '+this.$auth.user.nama+' Selamat datang!',
        })
      })
      .catch(error => console.log(error))
    },
  },
}
</script>
