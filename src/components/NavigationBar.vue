<template>
  <nav class="main-nav">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
  </nav>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.main-nav {
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  font-size: 20px;
  text-align: center;
  margin-top: 0;
  margin-bottom: 2rem;
  background: #5D3FD3;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.03);
}

.main-nav a.router-link-exact-active {
  color: var(--color-text);
}

.main-nav a.router-link-exact-active:hover {
  background-color: transparent;
}

.main-nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
  color: #FF6B6B;
}

.main-nav a:first-of-type {
  border: 0;
}
</style>
