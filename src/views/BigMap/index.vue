<script setup lang="ts">
// @ts-expect-error noneed
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { nextTick, onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
// eslint-disable-next-line
import markerIconUrl from '@/../node_modules/leaflet/dist/images/marker-icon.png'
// eslint-disable-next-line
import markerIconRetinaUrl from '@/../node_modules/leaflet/dist/images/marker-icon-2x.png'
// eslint-disable-next-line
import markerShadowUrl from '@/../node_modules/leaflet/dist/images/marker-shadow.png'

import data from '@/data.json'

L.Icon.Default.prototype.options.iconUrl = markerIconUrl
L.Icon.Default.prototype.options.iconRetinaUrl = markerIconRetinaUrl
L.Icon.Default.prototype.options.shadowUrl = markerShadowUrl
L.Icon.Default.imagePath = ''
const overlay = ref(false)
const mapContainer = ref(null)
const $router = useRouter()
function goMap(data: any) {
  $router.push({
    path: '/map',
    query: data,
  })
}
onMounted(() => {
  const map = L.map(mapContainer.value, {
    center: [25.05665900, 121.52138500],
    zoom: 20,
    minZoom: 15,
  })

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map)
  // @ts-expect-error no need typescript here
  let markers = []

  function updateMarkers() {
    overlay.value = true
    const bounds = map.getBounds()

    // Remove all markers
    // @ts-expect-error no need typescript here
    markers.forEach(marker => map.removeLayer(marker))
    markers = []

    // Add markers that are within the current bounds
    data.forEach((i) => {
      const pointPosition = L.latLng(i.latitude, i.longitude)
      if (bounds.contains(pointPosition)) {
        const marker = L.marker([i.latitude, i.longitude], {
          title: i.name,
        }).addTo(map)
        markers.push({ marker, data: i })
      }
    })
    nextTick(() => {
      overlay.value = false
    })
  }

  // Initial load
  updateMarkers()

  // Update markers on move end
  map.on('moveend', updateMarkers)
  map.on('click', (e: any) => {
    const clickLatLng = e.latlng
    // @ts-expect-error no need typescript here
    markers.forEach(({ marker, data }) => {
      if (clickLatLng.distanceTo(marker.getLatLng()) < 20) { // 調整距離閾值
        overlay.value = true
        goMap(data)
      }
    })
  })
})
</script>

<template>
  <div ref="mapContainer" class="mapContainer">
    <!--  -->
    <v-overlay v-model="overlay" />
  </div>
</template>

<style scoped>
.mapContainer{
    height: 89vh;
    width: 100vw;
}
</style>
