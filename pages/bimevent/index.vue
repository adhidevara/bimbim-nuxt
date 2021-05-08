<template>
  <div class="xl:mx-64 px-4">

    <div class="text-center font-sans mx-auto mt-10 mb-10">
      <h1 class="text-teal-700">
        <span class="font-extrabold text-5xl xs:text-4xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-5xl 2xl:text-5xl">BIM EVENT<br></span>
        <span class="font-semibold text-4xl xs:text-3xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-4xl 2xl:text-4xl">Event / Webinar / Talkshow</span>
      </h1>
    </div>
    <hr>
    <EventBimEvent :events="events" @refetch="getEvent" v-if="isLoad == true" class="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-10">
      <template v-slot:event="{ event }">
        <div class="transform hover:scale-105 w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
          <div class="flex items-end justify-end h-56 w-full bg-contain bg-no-repeat bg-center" :style="{ backgroundImage: 'url(' + event.foto + ')' }">
              <nuxt-link :to="`bimevent/${event.slug}`" class="p-2 rounded-full bg-teal-700 text-white mx-5 w-full -mb-4 hover:bg-teal-500 focus:outline-none focus:bg-teal-500 text-center">
                  <font-awesome-icon class="text-white" :icon="['fas', 'pencil-alt']"/> Lihat Event
              </nuxt-link>
          </div>
          <div class="px-5 py-3 mt-5">
              <h3 class="text-teal-700 text-center border-b-2 pb-2 border-teal-700 uppercase font-bold text-xl">
                {{ event.title }}
                <span v-if="event.is_verified == 1"><font-awesome-icon class="text-teal-700" :icon="['fas', 'check-circle']"/></span>
              </h3>
              <h4 class="text-sm font-base text-teal-700 mt-3"><font-awesome-icon :icon="['fas', 'calendar']"/> {{ $moment(event.start_tgl_event).format('LLLL') }}</h4>
              <h4 class="text-sm font-base text-teal-700 mt-3"><font-awesome-icon :icon="['fas', 'map-marker-alt']"/> {{ event.event_type }} di {{ event.lokasi }}</h4>
              <p class="text-teal-700 text-justify font-semibold mt-3">
                {{ event.deskripsi }}
              </p>
              <h4 class="text-sm font-base text-teal-700 mt-3"><font-awesome-icon :icon="['fas', 'id-badge']"/> {{ event.nama_cp }}</h4>
          </div>
        </div>
      </template>
    </EventBimEvent>
    <div v-else class="mx-auto">
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto; background: none; display: block; shape-rendering: auto;" width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
        <path fill="none" stroke="#2c7a7b" stroke-width="7" stroke-dasharray="177.0463604736328 79.54256774902345" d="M24.3 30C11.4 30 5 43.3 5 50s6.4 20 19.3 20c19.3 0 32.1-40 51.4-40 C88.6 30 95 43.3 95 50s-6.4 20-19.3 20C56.4 70 43.6 30 24.3 30z" stroke-linecap="round" style="transform:scale(0.8);transform-origin:50px 50px">
          <animate attributeName="stroke-dashoffset" repeatCount="indefinite" dur="1.5384615384615383s" keyTimes="0;1" values="0;256.58892822265625"></animate>
        </path>
      </svg>
    </div>
  </div>
</template>

<script>

export default {
  auth: false,
  data() {
    return {
      events: [],
      isLoad: true,
    }
  },
  mounted() {
    this.getEvent(1)
  },
  methods: {
    async getEvent(page) {
      let getEvent = await this.$axios.get(`/bimapi/api/event/getEvent?page=${page}`)
      .then(result => {
        this.isLoad = true
        this.events.push(...result.data.data)
      })
      .catch(error => {
        this.isLoad = false
        this.info = "Terjadi Kesalahan"
        console.error(error)
      })
    },
  },
}
</script>
