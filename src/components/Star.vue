<script setup lang="ts">
const props = defineProps({
  stars: Number,
})
</script>

<template>
  <span>
    <template v-if="stars > 0">
      <v-icon v-for="star, index in stars" :key="index">
        mdi-star
      </v-icon>
    </template>
    <template v-if="stars < 1">
      0
    </template>
  </span>
</template>

<style scoped>

</style>
