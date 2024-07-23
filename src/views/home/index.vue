<script setup lang="ts">
import { useWindowScroll } from '@vueuse/core'
import { computed, ref, watch } from 'vue'

const { y } = useWindowScroll()
const onTop = computed(() => {
  if (y.value > 0) {
    return false
  }
  return true
})

const viewBoxClass = computed(() => ({
  'h-100': onTop.value,
  'w-100': onTop.value,
  'center': !onTop.value,
}))
</script>

<template>
  <v-container fluid class="ma-0 pa-0 position-relative" style="height: 100vh">
    <!--  -->
    <div class="position-absolute box w-75" :class="viewBoxClass" style="height: 35%;" />
    <div class="position-absolute box2 w-75" :class="viewBoxClass" style="height: 35%;" />
    <transition name="fade">
      <div v-show="onTop">
        <h2 class="text-h1 position-absolute font-weight-black opacity-90" style="top: 50%; left: 5%">
          Coffee Cause Life
        </h2>
        <h2 class="text-h5 position-absolute font-weight-black opacity-30" style="top: 80%; left: 5%">
          Coffee addiction: Do people consume too much caffeine?
        </h2>
        <h2 class="text-h4 position-absolute font-weight-black opacity-50" style="top: 70%; left: 50%">
          You Can Die From a Caffeine Overdose
        </h2>
        <h2 class="text-h3 position-absolute font-weight-black opacity-20" style="top: 20%; left: 30%">
          Caffeine Ruined My Life
        </h2>
        <h2 class="text-h5 position-absolute font-weight-black opacity-30" style="top: 30%; left: 20%">
          How I Quit Drinking Caffeine & Transformed My Life
        </h2>
        <h2 class="text-h1 position-absolute font-weight-black opacity-40" style="top: 26%; left: 80%">
          Caffeine is a SCAM
        </h2>
      </div>
    </transition>
    <transition name="fade">
      <div v-show="!onTop">
        <h1 class="text-h1 font-weight-black position-absolute" style="bottom: 25%; left: 50%; transform: translate(-50%,0);">
          Cafe in Taipei
        </h1>
      </div>
    </transition>
  </v-container>
  <v-container grid-list-xs>
    <v-layout row wrap>
      {{ y }}
    </v-layout>
  </v-container>
</template>

<style scoped>
@keyframes backgroundZoom {
  0% {
    background-size: 150% auto;
    opacity:0;
  }
  25% {

    opacity:1;
  }
  50%{

    opacity:1;
  }
  75%{
    opacity: 0;

  }
  to {
    opacity: 0;
    background-size: 120% auto;
  }
}

.box {
  background-image: url('/coffeeBackground.jpg');
  background-repeat: no-repeat;
  background-position: center;
  animation: backgroundZoom 10s infinite ;
  animation-timing-function: linear;
  opacity: 1;
  background-size: 150% auto;
  transition: all 0.3s;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.box2 {
  background-image: url('/coffeeBackground2.jpg');
  background-repeat: no-repeat;
  background-position: center;
  animation: backgroundZoom 10s infinite;
  animation-timing-function: linear;
  animation-delay: 5s;
  opacity: 0;
  background-size: 150% auto;
  transition: all 0.3s;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
