<template>
  <div class="px-4">
    <div class="text-center font-sans mx-auto mt-10">
      <h1 class="text-teal-700">
        <span class="font-extrabold text-5xl xs:text-4xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-5xl 2xl:text-5xl">Produk</span>
        <span class="font-semibold text-4xl xs:text-3xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-4xl 2xl:text-4xl">Kami</span>
      </h1>
    </div>

    <ModalProduct/>

  </div>
</template>

<script>
export default {
  auth: false,
  head() {
    return {
      title: 'Produk - BIMBIM Indonesia',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=0' },
        { hid: 'description', name: 'description', content: 'Beberapa produk dari BIMBIM Indonesia antara lain BIMGURU, BIMPELATIH, BIMKONSELING, dan BIMEVENT' },
        { name: 'theme-color', content: '#006d71' },
        { name: "msapplication-TileImage", content: "/locig.png" },
        { name: "msapplication-TileColor", content: "#006d71" },
      ],
    }
  },
}
</script>
