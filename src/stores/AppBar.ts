import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import { useWindowScroll } from '@vueuse/core'


export const useAppBarStore = defineStore('appbar', () => {
  const { y } = useWindowScroll()
  const hide = ref(false)
  const onTop = computed(() => y.value === 0)

  function show() {
    hide.value = true
  }

  return { hide, show, onTop }
})
