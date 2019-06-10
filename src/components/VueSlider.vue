<template>
  <div class="alsdi-vue-slider text-center alsdi-section">
    <h1 class="alsdi-header pb-2" data-aos="fade-up" data-aos-duration="1000">{{ comingData.section_header }}</h1>
    <carousel
      :perPageCustom="[[320, 1], [768, 2], [1440, 4]]"
      :loop="true"
      :centerMode="true"
      :autoplay="true"
      :paginationEnabled="false"
      :navigationEnabled="true"
      navigationNextLabel='<i class="fas fa-chevron-right fa-3x"></i>'
      navigationPrevLabel='<i class="fas fa-chevron-left fa-3x"></i>'
      data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300"
    >
      <slide v-for="(slide, index) in sliderData.slides" :key="index">
        <div
          class="card alsdi-card alsdi-card-background-image"
          :style="{
            backgroundImage: `url(${slide.image})`
          }"
        >
          <div class="card-body d-flex align-items-center h-100">
            <div class="overlay"></div>
            <div class="alsdi-card-content">
              <h3 class="card-title">{{ slide.header }}</h3>
              <p class="card-text">
                {{ slide.paragraph }}
              </p>
            </div>
          </div>
        </div>
      </slide>
    </carousel>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
export default {
  components: {
    Carousel,
    Slide
  },
  props: [
    'sliderData',
    'comingData'
  ]
};
</script>

<style lang="scss">
@import "@/assets/_alsdi-framework.scss";
@import "@/assets/_colors.scss";

.alsdi-vue-slider {
  position: relative;

  .VueCarousel-navigation {
    position: absolute;
    left: 60px;
    top: -30px;

    .VueCarousel-navigation-next,
    .VueCarousel-navigation-prev {
      color: $alsdi-gold;
      right: -10px;
      background-color: rgba(0, 0, 0, .6);
      padding: 10px;
      -webkit-transition: all 0.2s ease-in-out;
      -o-transition: all 0.2s ease-in-out;
      transition: all 0.2s ease-in-out;
      &:focus {
        outline: none;
      }

      &:hover {
        color: darken($color: $alsdi-gold, $amount: 20%);
      }
    }
  }
  .card {
    margin: 15px;
    min-height: 400px;
  }
}
</style>

