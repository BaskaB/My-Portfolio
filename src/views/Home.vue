<template>
<div class="home">
  <header>
    <div class="bg-wrap">
      <img src="/images/header/bg.png" alt="">
    </div>
    <div class="header-overlay">
      <div class="logo-wrap">
        <img src="/images/header/logo.png" alt="">
      </div>
      <div class="social-wrap">
        <a href="#" class="ig-wrap">
          <img src="/images/header/instagram.png" alt="">
        </a>
        <a href="#" class="in-wrap">
          <img src="/images/header/linkedin.png" alt="">
        </a>
        <a href="#" class="git-wrap">
          <img src="/images/header/git.png" alt="">
        </a>
      </div>
      <div class="menu-wrap">
        <a href="#">About me</a>
        <a href="#">Skills</a>
        <a href="#">Projects</a>
      </div>
    </div>
  </header>
  <section class="about-me">
    <div class="img-wrap">
      <img src="/images/about-me/girl.png" alt="">
    </div>
    <div class="text-wrap">
      <h1>About me</h1>
      <h3>Hi, my name is Baška! I am junior frontend developer and also a 3D graphic...</h3>
      <p>Tiramisu cheesecake bonbon toffee ice cream candy. Candy canes chocolate cake soufflé jujubes biscuit. Ice cream gummies sweet danish brownie liquorice powder bear claw. Muffin gingerbread cheesecake chupa chups soufflé wafer brownie jelly-o. Pie wafer marzipan sweet halvah. Cake soufflé chocolate bar dessert pudding carrot cake.</p>
    </div>
  </section>
  <section class="skills">
    <div class="bg-wrap">
      <img src="/images/skills/skills-bg.png" alt="">
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
            <img src="/images/skills/flip-cards/coding-icon.png" alt="">
            </div>
          </div>
          <div class="flip-card-back">
            <div class="text-wrap">
            <h3>Frontend development</h3>
            <p>Icing croissant topping chocolate bar soufflé.Pie topping fruitcake cupcake bonbon. Pudding apple pie pudding chocolate bar donut pastry tiramisu brownie.</p>
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
            <img src="/images/skills/flip-cards/pen.png" alt="">
            </div>
          </div>
          <div class="flip-card-back">
            <div class="text-wrap">
            <h3>Graphic design</h3>
            <p>Shortbread cookie icing toffee toffee halvah cake topping jelly beans. Jelly-o macaroon carrot cake gummies jelly-o dessert. Pie topping fruitcake cupcake bonbon. </p>
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
            <img src="/images/skills/flip-cards/UI.png" alt="">
            </div>
          </div>
          <div class="flip-card-back">
            <div class="text-wrap">
            <h3>User interface</h3>
            <p> Pudding apple pie pudding chocolate bar donut pastry tiramisu brownie.</p>
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
    <h3>If you liked my portfolio, you can contact me on</h3>
    <a href="mailto:barb.babicova@gmail.com?Subject=Hi, You have an amazing porfolio!">barb.babicova@gmail.com</a>
  </div>
  <div class="img-wrap">
    <img src="/images/footer/heart.png" alt="Heart">
  </div>
</footer>
</div>
</template>

<script>
// @ is an alias to /src
import Projects from "../components/Projects.vue"

export default {
  name: 'Home',
  components: {
    Projects
  }
}
</script>
