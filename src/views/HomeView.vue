<script setup>
import { ref, onMounted } from 'vue'

const skipIntro = sessionStorage.getItem('home-intro-seen') === '1'
const showH2 = ref(skipIntro)
const showH3 = ref(skipIntro)
const showLetter = ref(skipIntro)

onMounted(() => {
  if (skipIntro) return
  setTimeout(() => (showH2.value = true), 800)
  setTimeout(() => (showH3.value = true), 1500)
  setTimeout(() => (showLetter.value = true), 1750)
})
</script>

<template>
  <main class="hero">
    <Transition name="fade">
      <h2 v-if="showH2">Welcome to</h2>
    </Transition>
    <h1>
      SWRAJIT PAUL<Transition name="blink"><span v-if="showLetter" class="letter">'S</span></Transition>
    </h1>
    <Transition name="fade">
      <h3 v-if="showH3">Website</h3>
    </Transition>
  </main>
</template>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 2rem;
}

h1 {
  font: italic bold clamp(2.5rem, 9vw, 5rem) Georgia, serif;
  margin: 0;
}

h2,
h3 {
  color: var(--accent);
  font: italic bold clamp(1.5rem, 5vw, 3rem) Georgia, serif;
  margin: 0;
}

.letter {
  color: var(--accent);
  display: inline-block;
}

.blink-enter-active {
  animation: blinkIn 0.55s ease forwards;
}

@keyframes blinkIn {
  0%   { opacity: 0; }
  18%  { opacity: 1; }
  36%  { opacity: 0; }
  55%  { opacity: 1; }
  73%  { opacity: 0; }
  100% { opacity: 1; }
}
</style>
