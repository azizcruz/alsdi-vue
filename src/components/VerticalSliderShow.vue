<template>
  <div class="vertical-slider-section">
    <ul class="vertical-slider-section-menu d-flex list-unstyled">
      <li v-for="(data, index) in navlinksData" :class="data.paragraph" :key="index" @click="slideTo(index)">
        <i :class="data.icon"></i>
      </li>
    </ul>
    <hooper
      :vertical="true"
      style="height: 100vh"
      :itemsToShow="1"
      :centerMode="true"
      :transition="500"
      ref="carousel"
      @slide="changeActive"
    >
      <slide
      v-for="(slide, index) in sliderData"
      :key="index"
      >
        <div
          class="vertical-slider-section-image d-flex flex-column"
        >
          <div class="overlay"></div>
          <div
            class="image-section alsdi-shadow align-self-md-end"
            :style="{
              backgroundImage: `url(${slide.image})`
            }"
          ></div>
          <div
            class="text-section d-flex flex-column justify-content-center alsdi-shadow text-right p-5"
          >
            <h1>{{ slide.header }}</h1>
            <p class="text-justify text-right">
              {{ slide.paragraph }}
            </p>
          </div>
        </div>
      </slide>
    </hooper>
  </div>
</template>


<script>
import { Hooper, Slide, Pagination as HooperPagination } from "hooper";
import "hooper/dist/hooper.css";

export default {
  props: [
    "sliderData",
    "iconsArray",
    "sliderData",
    "navlinksData"
  ],
  components: {
    Hooper,
    Slide,
    HooperPagination
  },
   data () {
    return {
      carouselData: 0,
    }
  },
  methods: {
    slideTo(index) {
      this.$refs.carousel.slideTo(index);
    },
    changeActive(data) {
      let currentElement = $('.vertical-slider-section-menu').children().eq(data.currentSlide);
      $(".vertical-slider-section-menu li.active").removeClass('active')
      currentElement.addClass('active')
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/_colors.scss";
@import "@/assets/_alsdi-framework.scss";

.vertical-slider-section {
  .vertical-slider-section-menu {
    position: fixed;
    left: 0;
    top: 0;
    background-color: #fff;
    padding: 10px;
    z-index: 100000;

    li {
      cursor: pointer;
      margin-right: 10px;
      &.active {
        i {
          color: $alsdi-gold;
        }
      }
    }
  }
  .vertical-slider-section-image {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 100%;
    position: relative;
    padding: 10px;

    .overlay {
      background-color: rgba(0, 0, 0, 0.3);
    }

    .image-section {
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      height: 50%;
      width: 50%;
      @media screen and (max-width: 768px) {
        width: 100%;
      }
      border-radius: 10px;
    }
    .text-section {
      background-color: $alsdi-white;
      height: 50%;
      width: 50%;
      @media screen and (max-width: 768px) {
        width: 100%;
        margin-top: 10px;
      }
      border-radius: 10px;
    }
  }
}
</style>

