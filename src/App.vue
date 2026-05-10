<script setup>
import { ref, watch, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import NavBar from './components/NavBar.vue'
import AppFooter from './components/AppFooter.vue'

const INTRO_KEY = 'home-intro-seen'
const route = useRoute()
const navVisible = ref(false)
let timer = null

watch(
  () => route.path,
  (path) => {
    if (timer) clearTimeout(timer)
    const introSeen = sessionStorage.getItem(INTRO_KEY) === '1'
    if (path === '/' && !introSeen) {
      navVisible.value = false
      timer = setTimeout(() => {
        navVisible.value = true
        sessionStorage.setItem(INTRO_KEY, '1')
      }, 2500)
    } else {
      navVisible.value = true
    }
  },
  { immediate: true }
)

onUnmounted(() => {
  if (timer) clearTimeout(timer)
})
</script>

<template>
  <Transition name="fade">
    <NavBar v-if="navVisible" />
  </Transition>
  <RouterView />
  <Transition name="fade">
    <AppFooter v-if="navVisible" />
  </Transition>
</template>
