<template>
  <div class="page">
    <section>
      <img class="portrait" src="/rooftop.jpg" alt="Swrajit Paul">
      <p>Software Engineer based in New York City.</p>
    </section>

    <section>
      <h2>Education</h2>
      <p>
        <strong>Computer Science B.S.</strong><br>
        Queens College, City University of New York · 2014 – 2019
      </p>
      <p>
        <strong>Advanced Diploma · Aerospace Engineering</strong><br>
        Brooklyn Technical High School
      </p>
    </section>

    <section>
      <h2>Experience</h2>
      <p><strong>Mastercard</strong> · New York City</p>
      <p>Web Developer · 2023 – Present</p>
      <p>Android Engineer · 2022 – 2023</p>
      <p>SDET · 2019 – 2022</p>
    </section>

    <section>
      <h2>Contact</h2>
      <p>347-924-6438</p>
      <p><a href="mailto:swrajitpaul@gmail.com">swrajitpaul@gmail.com</a></p>
      <p><a href="https://github.com/Swrajitpaul" target="_blank" rel="noopener">github.com/Swrajitpaul</a></p>
    </section>
  </div>
</template>

<style scoped>
.portrait {
  display: block;
  margin: 0 auto 1rem;
  max-width: 240px;
  width: 100%;
  height: auto;
  box-shadow: 0 2px 12px rgba(0,0,0,0.18);
  transition: transform 0.2s;
}

.portrait:hover {
  transform: scale(1.05);
}
</style>
