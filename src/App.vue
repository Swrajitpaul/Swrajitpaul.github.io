<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavigationBar from '@/components/NavigationBar.vue'
import PageFooter from '@/components/PageFooter.vue'
</script>

<template>
  <NavigationBar />
  <RouterView />
  <PageFooter />
</template>

<style>
body {
  background-color: #F6F0FF
}
</style>

