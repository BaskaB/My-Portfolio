<template>
  <section class="projects-slider">
    <Swiper
      :slides-per-view="1"
      :space-between="50"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
      loop
    >
      <SwiperSlide v-for="slide of slides" :key="slide.title">
        <div class="inner-wrap">
          <div class="img-wrap">
            <img :src="slide.image" alt="" />
          </div>
          <div class="text-wrap">
            <h2>{{ slide.title }}</h2>
            <p>{{ slide.text }}</p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </section>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue/swiper-vue.js";

// Import Swiper styles
import "swiper/swiper-bundle.min.css";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      slides: [
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
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };
    return {
      onSwiper,
      onSlideChange,
    };
  },
};
</script>

<style>
</style>