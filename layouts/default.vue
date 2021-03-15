<template>
  <div id="app">
    <TitleBar/>
    <Nuxt/>
    <Footer/>
  </div>
</template>

<script>
import TitleBar from '~/components/TitleBar.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    TitleBar,
    Footer
  },
  mounted() {
    if($nuxt.isOffline){
      this.$modal.show({
        type: 'danger',
        title: 'Offline',
        body: 'Harap Periksa Koneksi Internet Anda!',
        primary: {
          label: 'tutup',
          theme: 'indigo-light',
          action: () => console.log(),
        },
      })
    }
    if(this.$auth.loggedIn == true){
      if(this.$auth.user.is_verified == 0){
        this.$toast.show({
          type:'warning',
          title: 'Verifikasi Data Anda',
          message: 'Harap verifikasi profil anda terlebih dahulu!',
          timeout: false,
          primary: {
            label: 'Edit Profil',
            theme: 'white',
            action: () => this.$router.push('/profil'),
          },
          secondary: {
            label: 'Tutup',
            action: () => console.log(),
          },
        })
      }
    }
  },
}
</script>
