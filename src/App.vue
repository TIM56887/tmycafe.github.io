<script setup lang="ts">
import { useRoute } from 'vue-router'
import AppBar from '@/components/AppBar/index.vue'
import Footer from '@/components/Footer/index.vue'

const route = useRoute()
</script>

<template>
  <v-app>
    <AppBar />
    <!-- 首頁appbar才會覆蓋 -->
    <v-main :class="{ 'pa-0': route.path === '/' }">
      <router-view />
    </v-main>
    <br>
    <br>
    <Footer v-if="route.path !== '/bigmap'" />
  </v-app>
</template>

<style scoped>

</style>
