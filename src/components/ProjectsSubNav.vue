<template>
  <div class="subnav">
    <RouterLink to="/projects" class="sub back" aria-label="Back to projects">&#8249;</RouterLink>
    <RouterLink to="/projects/personal" class="sub" active-class="active">Personal Projects</RouterLink>
    <RouterLink to="/projects/college" class="sub" active-class="active">College Projects</RouterLink>
  </div>
</template>

<style scoped>
.subnav {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 2rem;
}

.sub {
  display: inline-block;
  padding: 0.5rem 1rem;
  background-color: #efefef;
  color: var(--text);
  transition: color 0.15s ease;
}

.sub:hover,
.sub.active {
  color: var(--accent);
}

.back {
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0;
}
</style>
