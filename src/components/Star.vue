<script setup lang="ts">
defineProps({
  stars: {
    type: Number,
    default: 0,
  },
})
</script>

<template>
  <span>
    <div v-if="stars > 0">
      <v-icon v-for="star, index in stars" :key="index">
        mdi-star
      </v-icon>
    </div>

    <div v-if="stars < 1">0</div>

  </span>
</template>

<style scoped>

</style>
