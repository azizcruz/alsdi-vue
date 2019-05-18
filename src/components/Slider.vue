<template>
  <div class="alsdi-slider" :style="{ height: sliderHeight }">
    <div class="slick-slider">
      <div
        class="alsdi-slider-image"
        :style="{ backgroundImage: `url('${require('@/assets/img01.jpg')}')` }"
      ></div>
      <div
        class="alsdi-slider-image"
        :style="{ backgroundImage: `url('${require('@/assets/img01.jpg')}')` }"
      ></div>
      <div
        class="alsdi-slider-image"
        :style="{ backgroundImage: `url('${require('@/assets/img01.jpg')}')` }"
      ></div>
      <div
        class="alsdi-slider-image"
        :style="{ backgroundImage: `url('${require('@/assets/img01.jpg')}')` }"
      ></div>
    </div>
  </div>
</template>

<script>
import Slick from "vue-slick";
export default {
  components: {
    Slick
  },
  props: ["sliderHeight", "slideShows"],
  mounted() {
    $(".slick-slider")
      .not(".slick-initialized")
      .slick(this.slickOptions);
  },
  data() {
    return {
      slickOptions: {
        //options can be used from the plugin documentation
        slidesToShow: this.slideShows,
        infinite: true,
        accessibility: true,
        adaptiveHeight: false,
        arrows: true,
        draggable: true,
        edgeFriction: 0.2,
        swipe: true,
        rtl: false,
        prevArrow:
          '<div class="slick-prev alsdi-slick-arrows alsdi-prev-arrow"><i class="fas fa-backward fa-3x"></i></div>',
        nextArrow:
          '<div class="slick-next alsdi-slick-arrows alsdi-next-arrow"><i class="fas fa-forward fa-3x"></i></div>'
      }
    };
  },
  // All slick methods can be used too, example here
  methods: {
    next() {
      this.$refs.slick.next();
    },
    prev() {
      this.$refs.slick.prev();
    },
    reInit() {
      // Helpful if you have to deal with v-for to update dynamic lists
      this.$refs.slick.reSlick();
    }
  }
};
</script>

<style lang="scss">
@import url("https://use.fontawesome.com/releases/v5.8.2/css/all.css");
@import url("https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.css");
@import "@/assets/_alsdi-framework.scss";

.alsdi-slider {
  .slick-slider {
    max-width: 100%;
    height: 100%;
    }

    .alsdi-slider-image {
      background-size: cover;
      background-repeat: no-repeat;
      background-position: 50%;
      height: 100%;
    }

    .slick-list,
    .slick-track {
      height: 100%;
    }

    .slick-slide {
      & > div {
        height: 100%;
      }
    }
  }

</style>

