<script setup lang="ts">
// @ts-expect-error map no type
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Star from '@/components/Star.vue'

const mapContainer = ref(null)
const route = useRoute()
const router = useRouter()
const query = route.query
onMounted(() => {
  if (!route.query.name) {
    router.push('/list')
  }
  else {
    const map = L.map(mapContainer.value, {
      center: [route.query.latitude, route.query.longitude],
      zoom: 20,
    })

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map)
    L.marker([route.query.latitude, route.query.longitude], {
      draggable: true,
    }).addTo(map)
  }
})

const wifi = Math.trunc(Number(query.wifi))
const seat = Math.trunc(Number(query.seat))
const tasty = Math.trunc(Number(query.tasty))
const cheap = Math.trunc(Number(query.cheap))
const music = Math.trunc(Number(query.music))
</script>

<template>
  <v-container grid-list-xl>
    <v-layout row wrap height="90vh">
      <v-row align="center">
        <v-col>
          <div ref="mapContainer" class="mapContainer">
          <!--  -->
          </div>
        </v-col>
        <v-col>
          <iframe
            id="inlineFrameExample"
            title="Inline Frame Example"
            width="300"
            height="200"
            :src="query.url as string"
          />

          <v-card
            :title="query.name as string"
            :subtitle="query.mrt as string? query.mrt as string: query.address as string"
          >
            <template #text>
              <h2>評分</h2>
              <div>wifi：<Star :stars="wifi" /></div>
              <div>seat：<Star :stars="seat" /></div>
              <div>tasty：<Star :stars="tasty" /></div>
              <div>cheap：<Star :stars="cheap" /></div>
              <div>music：<Star :stars="music" /></div>
              <div>limited_time：{{ query.limited_time }}</div>
            </template>
          </v-card>
        </v-col>
      </v-row>
    </v-layout>
  </v-container>
</template>

<style scoped>
.mapContainer{
    height: 80vh
}
</style>
