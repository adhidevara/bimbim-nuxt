<template>
  <div class="px-4">
    <div class="text-center font-sans mx-auto mt-10">
      <h1 class="text-teal-700">
        <span class="font-extrabold text-5xl xs:text-4xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-5xl 2xl:text-5xl">Kontak</span>
        <span class="font-semibold text-4xl xs:text-3xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-4xl 2xl:text-4xl">Kami</span>
      </h1>
    </div>
    <div class="flex flex-wrap -mx-1 overflow-hidden sm:-mx-1 md:-mx-1 lg:-mx-1 xl:-mx-1">
      <div class="my-1 px-1 w-1/2 overflow-hidden sm:my-1 sm:px-1 sm:w-1/2 md:my-1 md:px-1 md:w-1/2 lg:my-1 lg:px-1 lg:w-1/4 xl:my-1 xl:px-1 xl:w-1/4">
        <div @click="modal(email.title, email.body, email.label, email.action)" class="mx-auto bg-white shadow-md p-4 border-2 rounded-lg lg:max-w-full md:w-56 sm:w-48 hover:bg-gray-100 hover:shadow-xl cursor-pointer">
          <svg class="xs:w-20 xs:h-20 md:h-40 md:w-40 mx-auto text-teal-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg>
          <h1 class="text-teal-700 text-center">
            <span class="font-bold xs:text-lg sm:text-2xl md:text-2xl lg:text-2xl">Email</span>
          </h1>
        </div>
      </div>
      <div class="my-1 px-1 w-1/2 overflow-hidden sm:my-1 sm:px-1 sm:w-1/2 md:my-1 md:px-1 md:w-1/2 lg:my-1 lg:px-1 lg:w-1/4 xl:my-1 xl:px-1 xl:w-1/4">
        <div @click="modal(whatsapp.title, whatsapp.body, whatsapp.label, whatsapp.action)" class="mx-auto bg-white shadow-md p-4 border-2 rounded-lg lg:max-w-full md:w-56 sm:w-48 hover:bg-gray-100 hover:shadow-xl cursor-pointer">
          <svg
            aria-hidden="true" focusable="false"
            data-prefix="fab" data-icon="whatsapp"
            class="xs:w-20 xs:h-20 md:h-40 md:w-40 mx-auto text-teal-700" role="img" fill="currentColor"
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="m17.507 14.307-.009.075c-2.199-1.096-2.429-1.242-2.713-.816-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.77-1.66-2.07-.293-.506.32-.578.878-1.634.1-.21.049-.375-.025-.524-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.576-.05-.997-.042-1.368.344-1.614 1.774-1.207 3.604.174 5.55 2.714 3.552 4.16 4.206 6.804 5.114.714.227 1.365.195 1.88.121.574-.091 1.767-.721 2.016-1.426.255-.705.255-1.29.18-1.425-.074-.135-.27-.21-.57-.345z"/><path d="m20.52 3.449c-7.689-7.433-20.414-2.042-20.419 8.444 0 2.096.549 4.14 1.595 5.945l-1.696 6.162 6.335-1.652c7.905 4.27 17.661-1.4 17.665-10.449 0-3.176-1.24-6.165-3.495-8.411zm1.482 8.417c-.006 7.633-8.385 12.4-15.012 8.504l-.36-.214-3.75.975 1.005-3.645-.239-.375c-4.124-6.565.614-15.145 8.426-15.145 2.654 0 5.145 1.035 7.021 2.91 1.875 1.859 2.909 4.35 2.909 6.99z"/>
          </svg>
          <h1 class="text-teal-700 text-center">
            <span class="font-bold xs:text-lg sm:text-2xl md:text-2xl lg:text-2xl">WhatsApp</span>
          </h1>
        </div>
      </div>
      <div class="my-1 px-1 w-1/2 overflow-hidden sm:my-1 sm:px-1 sm:w-1/2 md:my-1 md:px-1 md:w-1/2 lg:my-1 lg:px-1 lg:w-1/4 xl:my-1 xl:px-1 xl:w-1/4">
        <div @click="modal(notelp.title, notelp.body, notelp.label, notelp.action)" class="mx-auto bg-white shadow-md p-4 border-2 rounded-lg lg:max-w-full md:w-56 sm:w-48 hover:bg-gray-100 hover:shadow-xl cursor-pointer">
          <svg class="xs:w-20 xs:h-20 md:h-40 md:w-40 mx-auto text-teal-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
          </svg>
          <h1 class="text-teal-700 text-center">
            <span class="font-bold xs:text-md sm:text-2xl md:text-2xl lg:text-2xl">No Telepon</span>
          </h1>
        </div>
      </div>
      <div class="my-1 px-1 w-1/2 overflow-hidden sm:my-1 sm:px-1 sm:w-1/2 md:my-1 md:px-1 md:w-1/2 lg:my-1 lg:px-1 lg:w-1/4 xl:my-1 xl:px-1 xl:w-1/4">
        <div @click="modal(alamat.title, alamat.body, alamat.label, alamat.action)" class="mx-auto bg-white shadow-md p-4 border-2 rounded-lg lg:max-w-full md:w-56 sm:w-48 hover:bg-gray-100 hover:shadow-xl cursor-pointer">
          <svg class="xs:w-20 xs:h-20 md:h-40 md:w-40 mx-auto text-teal-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
          </svg>
          <h1 class="text-teal-700 text-center">
            <span class="font-bold xs:text-lg sm:text-2xl md:text-2xl lg:text-2xl">Alamat</span>
          </h1>
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
      email: {
        title: "Email",
        label: "Email Sekarang",
        body: "cs.bimbimindonesia@gmail.com",
        action: "mailto:cs.bimbimindonesia@gmail.com"
      },
      whatsapp: {
        title: "WhatsApp",
        label: "WhatsApp Sekarang",
        body: "Tubagus Wijaya +62-822-4151-1112",
        action: "https://wa.me/6282241511112/"
      },
      notelp: {
        title: "No Telepon",
        label: "Telepon Sekarang",
        body: "Tubagus Wijaya +62-822-4151-1112",
        action: "tel:+6282241511112"
      },
      alamat: {
        title: "Alamat",
        label: "Buka Maps",
        body: "Jl. Moh. Yamin No.5, Kab.Trenggalek, Jawa Timur, Indonesia 66315",
        action: "https://goo.gl/maps/va6ZtW6ZwVAwFqwXA"
      }
    }
  },
  methods: {
    modal: function (titles, bodys, labels, actions) {
      this.$modal.show({
        type: 'info',
        title: titles,
        body: bodys,
        primary: {
          label: labels,
          theme: 'indigo-dark',
          action: () => window.open(actions, "_blank")
        },
        secondary: {
          label: 'tutup',
          theme: 'red',
          action: () => console.log(),
        },
      })
    },
  },
}
</script>
