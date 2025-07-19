<template>
  <footer class="footer">
    &copy; {{ new Date().getFullYear() }} Swrajit Paul. All rights reserved.
  </footer>
</template>

<script setup lang="ts">
</script>

<style scoped>
.footer {
  width: 100vw;
  position: fixed;
  left: 0;
  bottom: 0;
  text-align: center;
  padding: 1rem 0;
  color: #888;
  font-size: 1rem;
  background: none;
  background-color: #F6F0FF;
  z-index: 10;
}
</style>
