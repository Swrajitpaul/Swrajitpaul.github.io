<template>
  <div class="page">
    <section>
      <h2>About Me</h2>
      <p>
        My name is <strong>Swrajit Paul</strong>. I am a <strong>Web Developer</strong>
        at <strong>Mastercard</strong> in New York City. If you wish to contact me,
        please find my contact information at the bottom of this page. Thank you.
      </p>
      <img class="portrait" src="/rooftop.jpg" alt="Swrajit Paul">
    </section>

    <section>
      <h2>Education</h2>
      <h3>Computer Science B.S</h3>
      <p>
        <strong>Queens College, City University of New York</strong><br>
        August 2014 – May 2019
      </p>
      <h3>Advanced High School Diploma | Aerospace Engineering</h3>
      <p>
        <strong>Brooklyn Technical High School</strong><br>
        September 2010 – June 2014
      </p>
    </section>

    <section>
      <h2>Experience</h2>
      <p><strong>Mid-level Web Developer</strong> &middot; March 2025 – Present</p>
      <p><strong>Junior Web Developer</strong> &middot; February 2023 – February 2025</p>
      <p><strong>Junior Android Engineer</strong> &middot; July 2022 – Present</p>
      <p><strong>SDET — iOS &amp; Android team</strong> &middot; Feb 2020 – June 2022</p>
      <p><strong>SDET — Android team</strong> &middot; May 2019 – Feb 2020</p>
      <p><strong>Private Tutor</strong> &middot; Aug 2014 – Sep 2017, Aug 2018 – May 2019</p>
    </section>

    <section>
      <h2>Skills</h2>
      <h3>At Mastercard</h3>
      <p>
        Writing test cases, code reviews, automation with Espresso (Android),
        XCUITest (iOS), and Appium. Jenkins pipeline integration. Some iOS and
        Android development. Leading meetings and presenting work product.
      </p>
      <h3>Programming Languages</h3>
      <ul class="skills">
        <li>Java <em>(Intermediate)</em> — enterprise-level code</li>
        <li>C++ <em>(Intermediate)</em> — college projects</li>
        <li>Kotlin <em>(Intermediate)</em> — Android apps</li>
        <li>Python <em>(Beginner)</em> — currently learning ML</li>
        <li>SQL <em>(Beginner)</em></li>
        <li>HTML / CSS / JavaScript <em>(Beginner)</em></li>
        <li>Objective-C / Swift <em>(Beginner)</em> — automation tests</li>
      </ul>
      <h3>Soft Skills</h3>
      <p>
        Strong writing and communication. Quick to learn new skills. Team player
        across iOS and Android teams.
      </p>
    </section>

    <section>
      <h2>College Course Work</h2>
      <p>
        Discrete math &middot; Design and Analysis of Algorithms &middot; Data Structures &middot;
        Operating Systems &middot; Database &middot; Principles of Programming Languages &middot;
        Software Engineering &middot; Theory of Computation
      </p>
      <h3>Electives</h3>
      <p>
        Big Data Algorithms &middot; Modeling and Simulation &middot;
        Machine Learning in Quantitative Finance &middot; Image Processing &middot;
        Business Intelligence
      </p>
    </section>

    <section>
      <h2>Certificates / Awards</h2>
      <p><strong>Most Valuable Player — Mobile team (2021 &amp; 2022)</strong></p>
      <div class="awards">
        <a href="/SRC.jpg" target="_blank"><img src="/SRC.jpg" alt="MVP Award 2021"></a>
        <a href="/SRC22.jpg" target="_blank"><img src="/SRC22.jpg" alt="MVP Award 2022"></a>
      </div>
      <p><strong>Advanced High School Diploma — Aerospace Engineering</strong></p>
      <div class="awards">
        <a href="/aerospace.jpg" target="_blank"><img src="/aerospace.jpg" alt="High school diploma"></a>
      </div>
      <p><strong>Dean's List Award</strong></p>
      <div class="awards">
        <a href="/deanslist.jpg" target="_blank"><img src="/deanslist.jpg" alt="Dean's List award"></a>
      </div>
    </section>

    <section>
      <h2>Hobbies and Interests</h2>
      <p>
        Reading (general education and current events) &middot; Math (machine learning) &middot;
        Biking (indoor in winter) &middot; Programming puzzles (LeetCode etc.)
      </p>
    </section>

    <section>
      <h2>Contact</h2>
      <p>
        <em>Phone:</em> <strong>347-924-6438</strong><br>
        <em>Email:</em> <a href="mailto:swrajitpaul@gmail.com"><strong>swrajitpaul@gmail.com</strong></a>
      </p>
    </section>
  </div>
</template>

<style scoped>
.portrait {
  display: block;
  margin: 1rem auto;
  max-width: 240px;
  width: 100%;
  height: auto;
  border: 6px solid #000;
  transition: transform 0.2s;
}

.portrait:hover {
  transform: scale(1.05);
}

.skills {
  list-style: none;
  padding: 0;
  max-width: 500px;
  margin: 0 auto;
  text-align: left;
}

.skills li {
  padding: 0.25rem 0;
}

.awards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin: 1rem 0;
}

.awards img {
  max-width: 400px;
  width: 100%;
  height: auto;
  border: 6px solid #000;
  transition: transform 0.2s;
}

.awards img:hover {
  transform: scale(1.03);
}
</style>
