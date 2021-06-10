<template>
  <div>
    <div class="xl:mx-64 p-4">
      <!-- <ProfilBar/>-->
      <!-- <hr class="border-2 rounded-lg mt-5"> -->
      <BannerCarousel/>
      <hr class="border-2 rounded-lg mt-10">
      <Products/>
      <hr class="border-2 rounded-lg mt-5">
      <Keunggulan/>
      <hr class="border-2 rounded-lg mt-12">
      <Reviews/>
    </div>
  </div>
</template>

<script>
export default {
  auth: false,
  head() {
    return {
      title: 'BIMBIM Indonesia',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=0' },
        { hid: 'description', name: 'description', content: 'Bimbim adalah platform yang menghubungkan antara pembimbing privat dan siswa/orang tua. Bimbim memfasilitasi tenaga pendidik dari berbagai latar belakang seperti guru honorer, fresh graduate, atau pun mahasiswa untuk bertemu dengan siswa yang membutuhkan jasa bimbingan di bidang akademik maupun nonakademik. Melalui bimbim, siswa/orang tua dapat menemukan pembimbing privat secara mudah, efisien, serta harga yang terjangkau.' },
        { name: 'theme-color', content: '#006d71' },
        { name: "msapplication-TileImage", content: "/locig.png" },
        { name: "msapplication-TileColor", content: "#006d71" },
      ],
    }
  },
}
</script>
