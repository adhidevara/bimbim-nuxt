<template>
  <div class="bg-teal-700 md:h-screen text-sm max-w-full">
    <div class="flex flex-wrap mx-1 overflow-hidden sm:mx-px md:mx-1 mt-20 xl:mx-64 p-4">
      <div class="my-1 px-1 w-2/5 overflow-hidden xs:my-px xs:px-px xs:w-full sm:my-px sm:px-px sm:w-full md:my-1 md:px-1 md:w-1/2 lg:w-2/5 xl:w-2/5">
        <img class="w-32" src="https://dl.dropboxusercontent.com/s/qa3vm8ippsgima5/locmain-bw.png?dl=0">
        <p class="text-justify text-white md:mt-4"><span class="font-bold">bimbim</span> adalah platform penghubung antara guru pembimbing dan siswa atau orang tua serta untuk memfasilitasi guru honorer, mahasiswa, fresh graduate dan tenaga pendidikan mendapatkan tempat untuk mencari siswa bimbingan secara mudah dan efisien baik akademik maupun non akademik. Melalui <span class="font-bold">bimbim</span> guru/pelatih pembimbing dapat menawarkan jasa bimbinganya. Melalui <span class="font-bold">bimbim</span> siswa/orang tua dapat menemukan pembimbing secara mudah dan berkualitas.</p>
      </div>
      <div class="my-1 px-1 w-1/4 overflow-hidden xs:my-px xs:px-px xs:w-full sm:my-px sm:px-px sm:w-full md:my-1 md:px-1 md:w-1/2 lg:w-1/5 xl:w-1/5">
        <div class="xs:mt-3 md:text-right md:my-3 md:mx-5 lg:text-left text-white flex flex-col">
          <h1 class="font-bold text-2xl md:mb-2">Menu</h1>
          <nuxt-link class="hover:text-teal-400" to="/produk">Produk</nuxt-link>
          <nuxt-link class="hover:text-teal-400" to="/tentangkami">Tentang Kami</nuxt-link>
          <nuxt-link class="hover:text-teal-400" to="/mitra">Kemitraan</nuxt-link>
          <nuxt-link class="hover:text-teal-400" to="/privasi">Kebijakan Privasi</nuxt-link>
          <nuxt-link class="hover:text-teal-400" to="/syaratketentuan">Syarat & Ketentuan</nuxt-link>
        </div>
      </div>
      <div class="my-1 px-1 w-1/4 overflow-hidden xs:my-px xs:px-px xs:w-full sm:my-px sm:px-px sm:w-full md:my-1 md:px-1 md:w-1/2 lg:w-1/5 xl:w-1/5">
        <div class="xs:mt-3 md:text-left md:mb-3 lg:text-left text-white flex flex-col">
          <h1 class="font-bold text-2xl md:mb-2">Produk Kami</h1>
          <nuxt-link class="hover:text-teal-400" to="/bimguru">BimGuru</nuxt-link>
          <nuxt-link class="hover:text-teal-400" to="/bimpelatih">BimPelatih</nuxt-link>
          <nuxt-link class="hover:text-teal-400" to="/bimkonseling">BimKonseling</nuxt-link>
          <nuxt-link class="hover:text-teal-400" to="/bimevent">BimEvent</nuxt-link>
        </div>
      </div>
      <div class="my-1 px-1 w-1/4 overflow-hidden xs:my-px xs:px-px xs:w-full sm:my-px sm:px-px sm:w-full md:my-1 md:px-1 md:w-1/2 lg:w-1/5 xl:w-1/5">
        <div class="xs:mt-3 md:text-right md:my-3 md:mx-5 lg:text-left text-white">
          <h1 class="font-bold text-2xl md:mb-2 hover:text-teal-400"><nuxt-link to="/kontak">Kontak Kami</nuxt-link></h1>
          <div class="social flex space-x-3 mt-1 mb-2 md:float-right lg:float-none">
            <a href="#" target="_blank">
              <svg
                aria-hidden="true" focusable="false"
                data-prefix="fab" data-icon="instagram"
                class="h-5 w-5 fill-current text-white hover:text-teal-300" role="img"
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
              </svg>
            </a>
            <a href="https://wa.me/6282241511112/" target="_blank">
              <svg
                aria-hidden="true" focusable="false"
                data-prefix="fab" data-icon="whatsapp"
                class="h-5 w-5 fill-current text-white hover:text-teal-300" role="img"
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="m17.507 14.307-.009.075c-2.199-1.096-2.429-1.242-2.713-.816-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.77-1.66-2.07-.293-.506.32-.578.878-1.634.1-.21.049-.375-.025-.524-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.576-.05-.997-.042-1.368.344-1.614 1.774-1.207 3.604.174 5.55 2.714 3.552 4.16 4.206 6.804 5.114.714.227 1.365.195 1.88.121.574-.091 1.767-.721 2.016-1.426.255-.705.255-1.29.18-1.425-.074-.135-.27-.21-.57-.345z"/><path d="m20.52 3.449c-7.689-7.433-20.414-2.042-20.419 8.444 0 2.096.549 4.14 1.595 5.945l-1.696 6.162 6.335-1.652c7.905 4.27 17.661-1.4 17.665-10.449 0-3.176-1.24-6.165-3.495-8.411zm1.482 8.417c-.006 7.633-8.385 12.4-15.012 8.504l-.36-.214-3.75.975 1.005-3.645-.239-.375c-4.124-6.565.614-15.145 8.426-15.145 2.654 0 5.145 1.035 7.021 2.91 1.875 1.859 2.909 4.35 2.909 6.99z"/>
              </svg>
            </a>
            <a href="#" target="_blank">
              <svg
                aria-hidden="true" focusable="false"
                data-prefix="fab" data-icon="twitter"
                class="h-5 w-5 fill-current text-white hover:text-teal-300" role="img"
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
              </svg>
            </a>
            <a href="#" target="_blank">
              <svg
                aria-hidden="true" focusable="false"
                data-prefix="fab" data-icon="facebook-f"
                class="h-5 w-5 fill-current text-white hover:text-teal-300" role="img"
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                <path fill="currentColor" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
              </svg>
            </a>
            <a href="#" target="_blank">
              <svg
                aria-hidden="true" focusable="false"
                data-prefix="fab" data-icon="youtube"
                class="h-5 w-5 fill-current text-white hover:text-teal-300" role="img"
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <path fill="currentColor" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
              </svg>
            </a>
          </div>
          <div class="flex flex-row md:float-right">
            <svg class="h-6 w-8 md:float-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
            </svg>&nbsp;
            <p>Jl. Moh. Yamin No.5, Trenggalek, Jawa Timur 66315</p>
          </div>
        </div>
      </div>
      <div class="my-1 px-1 w-full overflow-hidden xs:my-px xs:px-px xs:w-full sm:my-px sm:px-px sm:w-full md:my-1 md:px-1 md:w-full lg:w-full xl:w-full text-center text-white font-normal text-xs border-t-2">
        <img class="mx-auto w-20 mt-2" src="https://dl.dropboxusercontent.com/s/qa3vm8ippsgima5/locmain-bw.png?dl=0">
        <p>Sincerely, bimbim from Indonesia, BIMBIM © 2021, All Right Reserved</p>
      </div>
    </div>
  </div>
</template>
