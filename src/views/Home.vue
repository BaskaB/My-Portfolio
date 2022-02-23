<template>
  <div class="home">
    <header>
      <div class="bg-wrap">
        <img v-lazy="'/images/header/bg.jpg'"  alt="Sunset" />
      </div>
      <div class="header-overlay">
        <div data-aos="fade-right" data-aos-duration="800" data-aos-delay="400" class="logo-wrap">
          <img :src="'/images/header/logo.png'" alt="Baška-logo" />
        </div>
        <div class="social-wrap">
          <a
            data-aos="fade-left" data-aos-duration="800" data-aos-delay="600"
            href="https://www.instagram.com/_zajkousko_/"
            target="_blank"
            class="ig-wrap"
          >
            <img :src="'/images/header/instagram.png'" alt="Instagram-logo" />
          </a>
          <a
            data-aos="fade-left" data-aos-duration="800" data-aos-delay="800"
            href="https://www.linkedin.com/in/baska-babicova/"
            target="_blank"
            class="in-wrap"
          >
            <img :src="'/images/header/linkedin.png'" alt="Linkedin-logo" />
          </a>
          <a
            data-aos="fade-left" data-aos-duration="800" data-aos-delay="1000"
            href="https://github.com/BaskaB"
            target="_blank"
            class="git-wrap"
          >
            <img :src="'/images/header/git.png'" alt="Github-logo" />
          </a>
        </div>
        <div data-aos="fade-right" data-aos-duration="800" data-aos-delay="1200" class="menu-wrap">
          <a href="#about-me">About me</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
        </div>
      </div>
    </header>
    <section class="about-me" id="about-me">
      <div class="img-wrap" data-aos="fade-right">
        <img v-lazy="'/images/about-me/girl.png'" alt="Girl-photo" />
      </div>
      <div class="text-wrap">
        <h1 data-aos="fade-up">About me</h1>
        <h3 data-aos="fade-up">
          Hi, my name is Baška! I am junior frontend developer and also a
          graphic designer...
        </h3>
        <p data-aos="fade-up">
          In my opinion, every job is special opportunity to learn something new
          and that's what I'am looking for. My goal is to learn new technologies
          and get better with those I've already worked before. Currently I'am a
          freelancer since 2020 and I really love to work on meaningful
          projects.
        </p>
      </div>
    </section>
    <section class="skills" id="skills">
      <div class="bg-wrap">
        <img v-lazy="'/images/skills/skills-bg.jpg'" alt="Dark forest" />
      </div>
      <div class="skills-content">
        <div class="title-wrap">
          <h2>My skills</h2>
        </div>
        <div class="flip-cards">
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <div class="text-wrap">
                  <h3>CODING</h3>
                </div>
                <div class="img-wrap">
                  <img
                    v-lazy="'/images/skills/flip-cards/coding-icon.png'"
                    alt="Coding-logo"
                  />
                </div>
              </div>
              <div class="flip-card-back">
                <div class="text-wrap">
                  <h3>Frontend development</h3>
                  <p>
                    My language of choice is javascript, most of my web apps
                    uses Vue.js with Scss. I see myself as frontend developer
                    but php is no fear for me.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <div class="text-wrap">
                  <h3>GRAPHIC</h3>
                </div>
                <div class="img-wrap">
                  <img
                    v-lazy="'/images/skills/flip-cards/pen.png'"
                    alt="Graphic designe-logo"
                  />
                </div>
              </div>
              <div class="flip-card-back">
                <div class="text-wrap">
                  <h3>Graphic design</h3>
                  <p>
                    Graphic design is my favorite hobby. After many completed
                    courses, I spend most of the time in Blender. I love
                    creating, modeling and sculpting objects, it is so much fun.
                    On the other hand, I do not despise Photoshop or
                    Illustrator.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <div class="text-wrap">
                  <h3>UI</h3>
                </div>
                <div class="img-wrap">
                  <img v-lazy="'/images/skills/flip-cards/UI.png'" alt="UI-logo" />
                </div>
              </div>
              <div class="flip-card-back">
                <div class="text-wrap">
                  <h3>User interface</h3>
                  <p>
                    Every page has to be special and that is my third super
                    power. My head is full of great ideas. I know how to match
                    colors and design user friendly website in no time. This
                    portfolio is my proof.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Projects />
    <footer>
      <div class="text-wrap">
        <h3>If you like my portfolio, just send me an email :)</h3>
        <a
          href="mailto:barb.babicova@gmail.com?Subject=Hi, You have an amazing porfolio!"
          >barb.babicova@gmail.com</a
        >
      </div>
      <div class="img-wrap">
        <img v-lazy="'/images/footer/heart.png'" alt="Heart" />
      </div>
    </footer>
  </div>
</template>

<script>
// @ is an alias to /v-lazy
import Projects from "../components/Projects.vue";

export default {
  name: "Home",
  components: {
    Projects,
  },
};
</script>
