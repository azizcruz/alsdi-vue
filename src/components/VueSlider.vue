<template>
  <div class="alsdi-vue-slider text-center alsdi-section">
    <h1 class="alsdi-header pb-2">خدماتنا</h1>
    <carousel
      :perPageCustom="[[320, 1], [768, 3], [1440, 4]]"
      :loop="true"
      :centerMode="true"
      :autoplay="true"
      :paginationEnabled="false"
      :navigationEnabled="true"
      navigationNextLabel='<i class="fas fa-chevron-right fa-3x"></i>'
      navigationPrevLabel='<i class="fas fa-chevron-left fa-3x"></i>'
    >
      <slide>
        <div
          class="card alsdi-card alsdi-card-background-image"
          :style="{
            backgroundImage: `url('${require('@/assets/img04.jpg')}')`
          }"
        >
          <div class="card-body d-flex align-items-center h-100">
            <div class="overlay"></div>
            <div class="alsdi-card-content">
              <h3 class="card-title">فقط لتعبئة المكان</h3>
              <p class="card-text">
                ف حقيقة وأساس تلك السعادة البشرية، فلا أحد يرفض أو يكره أو يتجنب
                الشعور بالسعادة، ولكن بفضل
              </p>
            </div>
          </div>
        </div>
      </slide>
      <slide>
        <div
          class="card alsdi-card alsdi-card-background-image"
          :style="{
            backgroundImage: `url('${require('@/assets/img05.jpg')}')`
          }"
        >
          <div class="card-body d-flex align-items-center h-100">
            <div class="overlay"></div>
            <div class="alsdi-card-content">
              <h3 class="card-title">فقط لتعبئة المكان</h3>
              <p class="card-text">
                ف حقيقة وأساس تلك السعادة البشرية، فلا أحد يرفض أو يكره أو يتجنب
                الشعور بالسعادة، ولكن بفضل
              </p>
            </div>
          </div>
        </div>
      </slide>
      <slide>
        <div
          class="card alsdi-card alsdi-card-background-image"
          :style="{
            backgroundImage: `url('${require('@/assets/img06.jpg')}')`
          }"
        >
          <div class="card-body d-flex align-items-center h-100">
            <div class="overlay"></div>
            <div class="alsdi-card-content">
              <h3 class="card-title">فقط لتعبئة المكان</h3>
              <p class="card-text">
                ف حقيقة وأساس تلك السعادة البشرية، فلا أحد يرفض أو يكره أو يتجنب
                الشعور بالسعادة، ولكن بفضل
              </p>
            </div>
          </div>
        </div>
      </slide>
      <slide>
        <div
          class="card alsdi-card alsdi-card-background-image"
          :style="{
            backgroundImage: `url('${require('@/assets/img02.jpg')}')`
          }"
        >
          <div class="card-body d-flex align-items-center h-100">
            <div class="overlay"></div>
            <div class="alsdi-card-content">
              <h3 class="card-title">فقط لتعبئة المكان</h3>
              <p class="card-text">
                ف حقيقة وأساس تلك السعادة البشرية، فلا أحد يرفض أو يكره أو يتجنب
                الشعور بالسعادة، ولكن بفضل
              </p>
            </div>
          </div>
        </div>
      </slide>
      <slide>
        <div
          class="card alsdi-card alsdi-card-background-image"
          :style="{
            backgroundImage: `url('${require('@/assets/img03.jpg')}')`
          }"
        >
          <div class="card-body d-flex align-items-center h-100">
            <div class="overlay"></div>
            <div class="alsdi-card-content">
              <h3 class="card-title">فقط لتعبئة المكان</h3>
              <p class="card-text">
                ف حقيقة وأساس تلك السعادة البشرية، فلا أحد يرفض أو يكره أو يتجنب
                الشعور بالسعادة، ولكن بفضل
              </p>
            </div>
          </div>
        </div>
      </slide>
      <slide>
        <div
          class="card alsdi-card alsdi-card-background-image"
          :style="{
            backgroundImage: `url('${require('@/assets/img04.jpg')}')`
          }"
        >
          <div class="card-body d-flex align-items-center h-100">
            <div class="overlay"></div>
            <div class="alsdi-card-content">
              <h3 class="card-title">فقط لتعبئة المكان</h3>
              <p class="card-text">
                ف حقيقة وأساس تلك السعادة البشرية، فلا أحد يرفض أو يكره أو يتجنب
                الشعور بالسعادة، ولكن بفضل
              </p>
            </div>
          </div>
        </div>
      </slide>
      <slide>
        <div
          class="card alsdi-card alsdi-card-background-image"
          :style="{
            backgroundImage: `url('${require('@/assets/img04.jpg')}')`
          }"
        >
          <div class="card-body d-flex align-items-center h-100">
            <div class="overlay"></div>
            <div class="alsdi-card-content">
              <h3 class="card-title">فقط لتعبئة المكان</h3>
              <p class="card-text">
                ف حقيقة وأساس تلك السعادة البشرية، فلا أحد يرفض أو يكره أو يتجنب
                الشعور بالسعادة، ولكن بفضل
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
  }
};
</script>

<style lang="scss">
@import "@/assets/_alsdi-framework.scss";
@import url("https://use.fontawesome.com/releases/v5.8.2/css/all.css");
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
  }
}
</style>

