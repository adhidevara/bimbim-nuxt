<template>
  <div>
    <section class="block fixed inset-x-0 bottom-0 z-10 bg-gradient-to-b from-teal-700 via-teal-500 to-teal-700 shadow-inner">
      <div class="flex justify-between lg:mx-64">
        <nuxt-link to="/produk" class="w-full text-white focus:text-teal-400 hover:text-teal-400 justify-center inline-block text-center pt-2 pb-1">
          <div class="lg:w-8 md:w-6 sm:w-6 xs:w-6 mx-auto">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <span class="block font-semibold lg:text-xl md:text-lg sm:text-base">Produk</span>
        </nuxt-link>
        <nuxt-link to="/cari" class="w-full text-white focus:text-teal-400 hover:text-teal-400 justify-center inline-block text-center pt-2 pb-1">
          <div class="lg:w-8 md:w-6 sm:w-6 xs:w-6 mx-auto">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
            </svg>
          </div>
          <span class="block font-semibold lg:text-xl md:text-lg sm:text-base">Cari</span>
        </nuxt-link>
        <nuxt-link to="/" class="w-full text-white focus:text-teal-400 hover:text-teal-400 justify-center inline-block text-center pt-2 pb-1">
          <div class="lg:w-8 md:w-6 sm:w-6 xs:w-6 mx-auto">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </div>
          <span class="block font-semibold lg:text-xl md:text-lg sm:text-base">Home</span>
        </nuxt-link>
        <nuxt-link to="/kontak" class="w-full text-white focus:text-teal-400 hover:text-teal-400 justify-center inline-block text-center pt-2 pb-1">
          <div class="lg:w-8 md:w-6 sm:w-6 xs:w-6 mx-auto">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <span class="block font-semibold lg:text-xl md:text-lg sm:text-base">Bantuan</span>
        </nuxt-link>
        <nuxt-link to="/profil" class="w-full text-white focus:text-teal-400 hover:text-teal-400 justify-center inline-block text-center pt-2 pb-1">
          <div class="lg:w-8 md:w-6 sm:w-6 xs:w-6 mx-auto">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <span class="block font-semibold lg:text-xl md:text-lg sm:text-base">Masuk</span>
        </nuxt-link>
      </div>
    </section>
  </div>
</template>
