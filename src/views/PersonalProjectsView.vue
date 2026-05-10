<script setup>
import ProjectsSubNav from '../components/ProjectsSubNav.vue'
</script>

<template>
  <div class="page">
    <ProjectsSubNav />

    <section>
      <h2>App to Web</h2>
      <p>
        <span class="label">Description:</span> Android app that opens this website.<br>
        <span class="label">Technologies used:</span> Android Studio, Kotlin
      </p>
      <a href="https://github.com/Swrajitpaul/MockApp" class="download" target="_blank" rel="noopener">View Here &raquo;</a>
    </section>

    <section>
      <h2>My Projects App</h2>
      <p>
        <span class="label">Description:</span> Android app that shows my projects.<br>
        <span class="label">Technologies used:</span> Android Studio, Kotlin
      </p>
      <a href="https://github.com/Swrajitpaul/MyProjectsApp" class="download" target="_blank" rel="noopener">View Here &raquo;</a>
    </section>

    <section>
      <h2>Profile Website</h2>
      <p>
        <span class="label">Description:</span> This portfolio website, built to
        showcase my abilities and document the work I've done over the years.
        The source is on GitHub.<br>
        <span class="label">Technologies used:</span> Vue 3, Vite, JavaScript
      </p>
      <a href="https://github.com/Swrajitpaul/Swrajitpaul.github.io" class="download" target="_blank" rel="noopener">View Here &raquo;</a>
    </section>
  </div>
</template>

<style scoped>
.label {
  font-style: italic;
}
</style>
