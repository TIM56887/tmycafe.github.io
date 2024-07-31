<script setup lang="ts">
import { useWindowScroll } from '@vueuse/core'
import { computed, onMounted, ref, watch } from 'vue'
import { useAppBarStore } from '@/stores/AppBar'
import ScrollArrow from '@/components/ScrollArrow.vue'
import LineMap from '@/components/LineMap.vue'

const AppBarStore = useAppBarStore()
onMounted(() => {
  AppBarStore.hide = true
})

const doneStartAnimation = ref(false)
const viewBoxClass = computed(() => ({
  'h-100': AppBarStore.onTop && doneStartAnimation.value,
  'h-25': !(AppBarStore.onTop && doneStartAnimation.value),
  'w-100': AppBarStore.onTop && doneStartAnimation.value,
  'center': !AppBarStore.onTop && doneStartAnimation.value,
}))

function onAnimationEnd() {
  doneStartAnimation.value = true
  AppBarStore.show()
}
</script>

<template>
  <v-container fluid class="ma-0 pa-0 position-relative" style="height: 100vh">
    <!-- 輪播的兩個背景圖片 -->
    <div class="position-absolute box w-50" :class="viewBoxClass" />
    <div class="position-absolute box2 w-50" :class="viewBoxClass" />
    <!-- sroll提示文字 -->
    <ScrollArrow v-if="doneStartAnimation && AppBarStore.onTop" />
    <!-- 載入動畫 -->
    <div
      v-if="!doneStartAnimation"
      class="position-absolute box3 w-50 text-white d-flex align-end justify-end"
      style="height: 25%;"
      @animationend="onAnimationEnd"
    >
      <h1 class="me-10 mb-10 font-weight-black text-h2">
        Cafe Cause Life
      </h1>
    </div>
    <!-- 滾輪在最上面顯示的文字 -->
    <transition name="fade">
      <div v-show="AppBarStore.onTop && doneStartAnimation">
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
    <!-- 滾輪不再最上面顯示的文字 -->
    <transition name="fade">
      <div v-show="!AppBarStore.onTop && doneStartAnimation" class="position-absolute" style="bottom: 22%; left: 50%; transform: translate(-50%,0);">
        <h1 class="text-h1 font-weight-black text-center ">
          Cafe in Taipei
        </h1>
        <router-link to="/list">
          <h2 class="mt-5 text-grey-darken-2 hover:text-red">
            不確定去哪喝咖啡？我們蒐集了台北市捷運站咖啡廳資訊，讓您輕鬆找到下一個最愛！
          </h2>
        </router-link>
      </div>
    </transition>
  </v-container>
  <LineMap />
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
/* 兩個背景圖片樣式 */
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
/* 載入動畫框樣式 */
.box3 {
  background: linear-gradient(to right, rgb(224, 133, 72) 50%, white 50%);
  background-size: 200% 100%;
  animation: bgColorChange 1s  cubic-bezier(0.33, 0, 0.67, 1);
  transition: all 0.3s;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

@keyframes bgColorChange {
    0% {
        background-position: 100% 0;
    }
    20% {
        background-position: 0 0;
    }
    30% {
        background-position: 3% 0;
    }
    40% {
        background-position: 0 0;
    }
    50% {
        background-position: -3% 0;
    }
    80% {
        background-position: 0 0;
    }
    100% {
        background-position: -100% 0;
    }
}
/* 文字消失transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
