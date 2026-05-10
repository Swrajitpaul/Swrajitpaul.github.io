<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()

const isActive = (prefix) =>
  prefix === '/' ? route.path === '/' : route.path.startsWith(prefix)
</script>

<template>
  <nav>
    <div class="nav-buttons">
      <RouterLink to="/" class="btn" :class="{ active: isActive('/') }">HOME</RouterLink>
      <RouterLink to="/about" class="btn" :class="{ active: isActive('/about') }">ABOUT ME</RouterLink>
    </div>
  </nav>
</template>

<style scoped>
nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: var(--bg);
  z-index: 100;
}

.nav-buttons {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.25rem;
  padding: 0.5rem;
}

@media (max-width: 600px) {
  .nav-buttons :deep(.btn) {
    padding: 0.5rem 0.6rem;
    font-size: 0.85rem;
  }
}
</style>
