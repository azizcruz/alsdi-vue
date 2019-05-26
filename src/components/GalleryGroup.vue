<template>
  <div class="gallery-group">
    <gallery :images="images" :index="index" @close="index = null"></gallery>
    <div class="d-flex flex-column flex-lg-row flex-lg-wrap h-100">
      <div class="col-2 d-flex justify-content-center justify-content-lg-start">
        <div class="images-group">
          <div
            class="image"
            v-for="(image, imageIndex) in images"
            :key="imageIndex"
            @click="index = imageIndex"
            :style="{
              backgroundImage: 'url(' + image + ')',
              width: '100px',
              height: '100px',
              zIndex: imageIndex,
              marginLeft: imageIndex / 3 + 'rem',
              marginTop: imageIndex / 3 + 'rem'
            }"
          ></div>
        </div>
      </div>
      <div class="col-2 d-flex justify-content-center justify-content-lg-start">
        <div class="images-group">
          <div
            class="image"
            v-for="(image, imageIndex) in images"
            :key="imageIndex"
            @click="index = imageIndex"
            :style="{
              backgroundImage: 'url(' + image + ')',
              width: '100px',
              height: '100px',
              zIndex: imageIndex,
              marginLeft: imageIndex / 3 + 'rem',
              marginTop: imageIndex / 3 + 'rem'
            }"
          ></div>
        </div>
      </div>
      <div class="col-2 d-flex justify-content-center justify-content-lg-start">
        <div class="images-group">
          <div
            class="image"
            v-for="(image, imageIndex) in images"
            :key="imageIndex"
            @click="index = imageIndex"
            :style="{
              backgroundImage: 'url(' + image + ')',
              width: '100px',
              height: '100px',
              zIndex: imageIndex,
              marginLeft: imageIndex / 3 + 'rem',
              marginTop: imageIndex / 3 + 'rem'
            }"
          ></div>
        </div>
      </div>
      <div class="col-2 d-flex justify-content-center justify-content-lg-start">
        <div class="images-group">
          <div
            class="image"
            v-for="(image, imageIndex) in images"
            :key="imageIndex"
            @click="index = imageIndex"
            :style="{
              backgroundImage: 'url(' + image + ')',
              width: '100px',
              height: '100px',
              zIndex: imageIndex,
              marginLeft: imageIndex / 3 + 'rem',
              marginTop: imageIndex / 3 + 'rem'
            }"
          ></div>
        </div>
      </div>
      <div class="col-2 d-flex justify-content-center justify-content-lg-start">
        <div class="images-group">
          <div
            class="image"
            v-for="(image, imageIndex) in images"
            :key="imageIndex"
            @click="index = imageIndex"
            :style="{
              backgroundImage: 'url(' + image + ')',
              width: '100px',
              height: '100px',
              zIndex: imageIndex,
              marginLeft: imageIndex / 3 + 'rem',
              marginTop: imageIndex / 3 + 'rem'
            }"
          ></div>
        </div>
      </div>
      <div class="col-2 d-flex justify-content-center justify-content-lg-start">
        <div class="images-group">
          <div
            class="image"
            v-for="(image, imageIndex) in images"
            :key="imageIndex"
            @click="index = imageIndex"
            :style="{
              backgroundImage: 'url(' + image + ')',
              width: '100px',
              height: '100px',
              zIndex: imageIndex,
              marginLeft: imageIndex / 3 + 'rem',
              marginTop: imageIndex / 3 + 'rem'
            }"
          ></div>
        </div>
      </div>
      <div class="col-2 d-flex justify-content-center justify-content-lg-start">
        <div class="images-group">
          <div
            class="image"
            v-for="(image, imageIndex) in images"
            :key="imageIndex"
            @click="index = imageIndex"
            :style="{
              backgroundImage: 'url(' + image + ')',
              width: '100px',
              height: '100px',
              zIndex: imageIndex,
              marginLeft: imageIndex / 3 + 'rem',
              marginTop: imageIndex / 3 + 'rem'
            }"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueGallery from "vue-gallery";
export default {
  data: function() {
    return {
      images: [
        "https://dummyimage.com/800/ffffff/000000",
        "https://dummyimage.com/1600/ffffff/000000",
        "https://dummyimage.com/1280/000000/ffffff",
        "https://dummyimage.com/400/000000/ffffff"
      ],
      index: null
    };
  },

  components: {
    gallery: VueGallery
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/_alsdi-framework.scss";
@import "@/assets/_colors.scss";
.gallery-group {
  padding: 20px;
  cursor: pointer;
  .h-100 {
    height: 100vh !important;
  }
  .images-group {
    position: relative;
    .image {
      position: absolute;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center center;
    }
  }
}
</style>
