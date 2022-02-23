<template>
  <section class="projects" id="projects">
    <div
      v-for="project of projects"
      :key="project.name"
      class="project-wrap"
      :data-aos="project.aos"
      data-aos-duration="1000"
      data-aos-anchor-placement="center-bottom"
    >
      <div class="img-wrap">
        <img v-lazy="project.image" alt="Project photo in phone" />
      </div>
      <div class="text-wrap">
        <h2>{{ project.title }}</h2>
        <p>
          {{ project.text }} <br /><a :href="project.link" target="blank">{{
            project.linkText
          }}</a>
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          image: "/images/projects/cyberia.png",
          title: "Cyberia",
          text: "Awesomely designed single web page for very ambitious upcoming NFT project.",
          link: "https://entercyberia.com/",
          linkText: "See for yourself.",
          aos: "fade-left",
        },
        {
          image: "/images/projects/thermostar.png",
          title: "Thermostar",
          text: "Simple product presentation website about steam pressure cleaners. ",
          link: "https://thermostar.sk/",
          linkText: "Have a look. ",
          aos: "fade-right",
        },
        {
          image: "/images/projects/kopstav.png",
          title: "Cyro-Kopstav",
          text: "Excavation company website, that contains simple objects like gallery or contact form. ",
          link: "https://www.cyrokopstav.sk/",
          linkText: "Check it out",
          aos: "fade-left",
        },
      ],
    };
  },
};
</script>

<style>
</style>