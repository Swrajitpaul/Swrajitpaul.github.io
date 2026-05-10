<script setup>
import { ref, onMounted } from 'vue'

const INTRO_KEY = 'home-intro-seen'
const skipIntro = sessionStorage.getItem(INTRO_KEY) === '1'
const showName = ref(skipIntro)
const showCursor = ref(skipIntro)

onMounted(() => {
  if (skipIntro) return
  setTimeout(() => {
    showName.value = true
    sessionStorage.setItem(INTRO_KEY, '1')
  }, 600)
  setTimeout(() => (showCursor.value = true), 1400)
})
</script>

<template>
  <main class="hero">
    <h1>
      <Transition name="fade"><span v-if="showName">Swrajit Paul</span></Transition><span v-if="showCursor" class="cursor">|</span>
    </h1>
  </main>
</template>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

h1 {
  font: bold clamp(3.5rem, 12vw, 7rem) 'Dancing Script', cursive;
  margin: 0;
}

.cursor {
  color: var(--accent);
  font-weight: 300;
  margin-left: 2px;
  animation: blink 1s step-end infinite;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0; }
}
</style>
