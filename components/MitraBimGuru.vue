<template>
  <div class="transform hover:scale-105 w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
      <div
        class="flex items-end justify-end h-56 w-full bg-center bg-cover"
        :lazy-background="mitra.foto">
          <button class="p-2 rounded-full bg-teal-700 text-white mx-5 w-full -mb-4 hover:bg-teal-500 focus:outline-none focus:bg-teal-500">
              <font-awesome-icon class="text-white" :icon="['fas', 'pencil-alt']"/> Ajukan Bimbingan
          </button>
      </div>
      <div class="px-5 py-3 mt-5">
          <h3 class="text-teal-700 text-center border-b-2 pb-2 border-teal-700 uppercase font-bold text-xl">{{ mitra.nama }}</h3>
          <h4 class="text-sm font-base text-teal-700 mt-3"><font-awesome-icon :icon="['fas', 'map-marker-alt']"/> {{ mitra.kota }}</h4>
          <p class="text-teal-700 text-justify font-semibold mt-3">
            {{ mitra.deskripsi }}
          </p>
      </div>
  </div>
</template>

<script>
export default {
  props: {
    mitra: {
      type: Object,
      default: () => {}
    }
  },
}
</script>
