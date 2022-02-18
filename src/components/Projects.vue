<template>
  <section class="projects">
    <div v-for="project of projects" :key="project.name" class="project-wrap">
      <div class="img-wrap">
        <img :src="project.image" alt="" />
      </div>
      <div class="text-wrap">
        <h2>{{ project.title }}</h2>
        <p>{{ project.text }}</p>
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
          text: "Muffin pastry candy canes caramels cookie dragée soufflé. Caramels candy halvah lemon drops croissant gummi bears.",
        },
        {
          image: "/images/projects/thermostar.png",
          title: "Thermostar",
          text: "Muffin pastry candy canes caramels cookie dragée soufflé. Caramels candy halvah lemon drops croissant gummi bears.",
        },
        {
          image: "/images/projects/kopstav.png",
          title: "Cyro-Kopstav",
          text: "Muffin pastry candy canes caramels cookie dragée soufflé. Caramels candy halvah lemon drops croissant gummi bears.",
        },
      ],
    };
  },
};
</script>

<style>
</style>