<template>
  <section class="about">
    <h1 class="about-title">About Me</h1>
    <p class="about-desc">
      I am a <span class="highlight">junior software engineer</span> who is passionate about <span class="highlight">creating websites</span> and <span class="highlight">developing apps</span>.
    </p>
    <div class="about-links">
      <a href="https://www.linkedin.com/in/swrajitpaul" target="_blank" rel="noopener" class="about-link linkedin">LinkedIn</a>
      <a href="https://github.com/Swrajitpaul" target="_blank" rel="noopener" class="about-link github">GitHub</a>
    </div>
    <div class="about-email">
      <span class="about-link email">swrajitpaul@gmail.com</span>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped>
.about {
  width: 100vw;
  min-height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #444;
  background: none;
  padding: 2rem 1rem;
}

.about-title {
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 1rem;
  color: #5D3FD3;
  letter-spacing: 0.05em;
}

.about-desc {
  font-size: 1.3rem;
  max-width: 600px;
  line-height: 1.6;
  color: #333;
}

.highlight {
  color: #FF6B6B;
  font-weight: 700;
}

.about-links {
  margin-top: 2rem;
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
}

.about-link {
  font-size: 1.1rem;
  color: #5D3FD3;
  text-decoration: none;
  font-weight: 700;
  border-bottom: 2px solid transparent;
  transition: color 0.2s, border-color 0.2s;
}

.about-link:hover {
  color: #FF6B6B;
  border-bottom: 2px solid #FF6B6B;
}

.about-link.github {
  color: #222;
}

.about-link.email {
  color: #43BCCD;
}

.about-email {
  margin-top: 1rem;
  text-align: center;
  width: 100%;
}
</style>
