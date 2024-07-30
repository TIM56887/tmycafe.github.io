<script setup lang="ts">
const icons = [
  'mdi-facebook',
  'mdi-twitter',
  'mdi-linkedin',
  'mdi-instagram',
]
</script>

<template>
  <v-footer
    class="bg-gray-lighten-1 text-center d-flex flex-column"
  >
    <div>
      <v-btn
        v-for="icon in icons"
        :key="icon"
        :icon="icon"
        class="mx-4"
        variant="text"
      />
    </div>

    <div class="pt-0">
      How can someone actually create this ugly web and think it's good.
    </div>

    <v-divider />

    <div>
      {{ new Date().getFullYear() }} — <strong>TIMME</strong>
    </div>
  </v-footer>
</template>
