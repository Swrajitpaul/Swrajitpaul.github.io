<template>
  <section class="home">
    <h1 class="welcome">
      <span class="fade">
        <span v-for="(char, i) in welcomeToArr" :key="'w'+i" :style="{ color: randomColors[i] }">{{ char }}</span>
      </span><br>
      <span class="pop">
        <span v-for="(char, i) in swrajitsArr" :key="'s'+i" :style="{ color: randomColors[i + welcomeToArr.length] }">{{ char }}</span>
      </span><br>
      <span class="slide">
        <span v-for="(char, i) in websiteArr" :key="'wb'+i" :style="{ color: randomColors[i + welcomeToArr.length + swrajitsArr.length] }">{{ char }}</span>
      </span>
    </h1>
  </section>
</template>

<script setup lang="ts">

const welcomeTo = 'Welcome to'
const swrajits = "Swrajit's"
const website = 'Website'

const welcomeToArr = welcomeTo.split('')
const swrajitsArr = swrajits.split('')
const websiteArr = website.split('')

function getRandomColor() {
  const colors = ['#5D3FD3', '#FF6B6B', '#FFD93D', '#43BCCD', '#00C896', '#FF8C42', '#FF3C6E', '#1B9AAA', '#F46036', '#2E294E']
  return colors[Math.floor(Math.random() * colors.length)]
}

const totalLength = welcomeToArr.length + swrajitsArr.length + websiteArr.length
const randomColors = Array.from({ length: totalLength }, getRandomColor)
</script>

<style scoped>
.home {
  width: 100vw;
  min-height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #444;
  background: none;
  z-index: 1;
}

.welcome {
  font-size: 3.2rem;
  font-weight: 800;
  letter-spacing: 0.1em;
  line-height: 1.15;
  margin-bottom: 0.5em;
  font-family: 'Brush Script MT', 'Pacifico', 'Dancing Script', cursive, sans-serif;
}

.welcome .fade,
.welcome .pop,
.welcome .slide {
  font-size: 1.1em;
  font-weight: 700;
  letter-spacing: 0.2em;
  display: inline-block;
  margin: 0.2em 0;
  border: none;
  padding: 0;
  transition: color 0.2s;
}

.welcome span span {
  transition: color 0.3s;
}

.welcome .fade:hover,
.welcome .pop:hover,
.welcome .slide:hover {
  opacity: 0.8;
}

@media (max-width: 600px) {
  .home {
    min-height: 100dvh;
    padding: 0 1rem;
  }
  .welcome {
    font-size: 2rem;
  }
}
</style>
