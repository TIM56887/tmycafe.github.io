<script setup lang="ts">

</script>

<template>
  <span class="scrollNav text-white">scroll</span>
</template>

<style scoped>
.scrollNav {
    animation: equallyBound 1.4s ease infinite;
    transform: (50%,50%);
    position: absolute;
    left: 49%;
    bottom: 100px;
    font-size: xx-small;
}
@keyframes equallyBound  {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(10px);
  }
}
@keyframes lineMove {
        0% {
            height: 2px;
            transform: translateY(-120px);
        }
        50% {
            height: 120px;
            transform: translateY(50px);
        }
        100% {
            height: 1px;
            transform: translateY(30px);
        }
    }
.scrollNav:after {
        content: "";
        position: absolute;
        display: inline-block;
        width: 1px;
        height: 80px;
        background-color: rgb(190, 190, 190);
        left: 18px;
        bottom: -130px;
        animation: lineMove .9s ease-in-out infinite;
        animation-duration: 0.9s;
        animation-timing-function: ease-in-out;
        animation-delay: 0s;
        animation-iteration-count: infinite;
        animation-direction: normal;
        animation-fill-mode: none;
        animation-play-state: running;
        animation-name: lineMove;
        animation-timeline: auto;
        animation-range-start: normal;
        animation-range-end: normal;
    }
</style>
