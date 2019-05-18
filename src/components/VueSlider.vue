<template>
  <div class="alsdi-vue-slider text-center alsdi-section">
    <h1 class="alsdi-header pb-2">خدماتنا</h1>
    <carousel
      :perPageCustom="[[320, 1], [768, 3], [1440, 4]]"
      :loop="true"
      :centerMode="true"
      :autoplay="true"
      :paginationEnabled="false"
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
                ف حقيقة وأساس تلك السعادة البشرية، فلا أحد يرفض أو يكره أو يتجنب الشعور بالسعادة، ولكن بفضل</p>
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
                ف حقيقة وأساس تلك السعادة البشرية، فلا أحد يرفض أو يكره أو يتجنب الشعور بالسعادة، ولكن بفضل</p>
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
                ف حقيقة وأساس تلك السعادة البشرية، فلا أحد يرفض أو يكره أو يتجنب الشعور بالسعادة، ولكن بفضل</p>
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
                ف حقيقة وأساس تلك السعادة البشرية، فلا أحد يرفض أو يكره أو يتجنب الشعور بالسعادة، ولكن بفضل</p>
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
                ف حقيقة وأساس تلك السعادة البشرية، فلا أحد يرفض أو يكره أو يتجنب الشعور بالسعادة، ولكن بفضل</p>
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
                ف حقيقة وأساس تلك السعادة البشرية، فلا أحد يرفض أو يكره أو يتجنب الشعور بالسعادة، ولكن بفضل</p>
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
                ف حقيقة وأساس تلك السعادة البشرية، فلا أحد يرفض أو يكره أو يتجنب الشعور بالسعادة، ولكن بفضل</p>
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

<style scoped lang="scss">
@import "@/assets/_alsdi-framework.scss";

.alsdi-vue-slider {
  .card {
    margin: 15px;
  }
}
</style>

