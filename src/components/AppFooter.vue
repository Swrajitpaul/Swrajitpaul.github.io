<script setup>
const year = new Date().getFullYear()
</script>

<template>
  <footer>
    <p>© {{ year }} Swrajit Paul. All rights reserved.</p>
  </footer>
</template>

<style scoped>
footer {
  width: 100%;
  color: var(--accent);
  text-align: center;
  padding: 1rem;
  font-size: 0.875rem;
}

footer p {
  margin: 0;
}
</style>
