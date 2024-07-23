<script setup lang="ts">
import AppBar from '@/components/AppBar/index.vue'
</script>

<template>
  <v-app>
    <AppBar />
    <v-main class="pa-0">
      <router-view />
    </v-main>
  </v-app>
</template>

<style scoped>

</style>
