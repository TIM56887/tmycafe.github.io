<script setup lang="ts">
// @ts-expect-error map no type
import L from 'leaflet'

import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { toast } from 'vue3-toastify'

import markerIconUrl from '@/../node_modules/leaflet/dist/images/marker-icon.png'

import markerIconRetinaUrl from '@/../node_modules/leaflet/dist/images/marker-icon-2x.png'

import markerShadowUrl from '@/../node_modules/leaflet/dist/images/marker-shadow.png'

import Star from '@/components/Star.vue'

L.Icon.Default.prototype.options.iconUrl = markerIconUrl
L.Icon.Default.prototype.options.iconRetinaUrl = markerIconRetinaUrl
L.Icon.Default.prototype.options.shadowUrl = markerShadowUrl
L.Icon.Default.imagePath = ''

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

const copyMessage = ref('')

function copyAddress() {
  if (query.address) {
    navigator.clipboard.writeText(query.address as string)
      .then(() => {
        copyMessage.value = '地址已複製到剪貼簿'
        toast('地址已複製到剪貼簿', {
          theme: 'colored',
          type: 'default',
          pauseOnFocusLoss: false,
          autoClose: 1000,
          hideProgressBar: true,
          transition: 'flip',
          dangerouslyHTMLString: true,
        })
        setTimeout(() => {
          copyMessage.value = ''
        }, 3000)
      })
      .catch((err) => {
        console.error('無法複製地址: ', err)
        copyMessage.value = '無法複製地址，請手動複製'
        setTimeout(() => {
          copyMessage.value = ''
        }, 3000)
      })
  }
  else {
    copyMessage.value = '沒有可用的地址'
    setTimeout(() => {
      copyMessage.value = ''
    }, 3000)
  }
}
</script>

<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" md="6" order="md-2">
        <iframe
          id="inlineFrameExample"
          title="Inline Frame Example"
          width="100%"
          height="200"
          :src="query.url as string"
          class="mt-4"
        />
        <v-card
          :title="(query.name as string)"
        >
          <template #subtitle>
            <div>
              <h2>{{ query.mrt }}</h2>
              <div>
                <h2 @click="copyAddress">
                  {{ query.address }}
                </h2>
                <v-btn icon="mdi-content-copy" @click="copyAddress" />
              </div>
            </div>
          </template>
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
      <v-col cols="12" md="6" order="md-1">
        <div ref="mapContainer" class="mapContainer" />
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
  .mapContainer {
    height: 80vh;
    width: 100%;
  }

  @media (max-width: 960px) {
    .mapContainer {
      height: 50vh;
    }
  }

  .copy-message {
    color: green;
    font-size: 0.9em;
    margin-top: 5px;
  }
</style>
