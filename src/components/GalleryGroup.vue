<template>
  <div class="gallery-group">
    <div class="d-flex flex-wrap align-items-between">
      <gallery
        :images="currentImages"
        :index="index"
        @close="index = null"
      ></gallery>
      <div
        class="b col-sm-12 col-md-6 col-lg-3 d-flex justify-content-center align-items-center"
        v-for="(imageWrap, indexWrap) in comingData"
        :key="indexWrap"
      >
        <div
          class="image"
          v-for="(image, imageIndex) in imageWrap.image.slice(0, 3)"
          @click="setCurrentImages(imageIndex, imageWrap.image)"
          :key="imageIndex"
          :style="{
            backgroundImage: 'url(' + image.image + ')',
            zIndex: imageIndex,
            top: imageIndex / 2 + 'rem',
            left: imageIndex / 2 + 'rem'
          }"
        >
          <div v-if="imageIndex == 2" class="album-name">
            <router-link to="/">
              تفاصيل المشروع
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueGallery from "vue-gallery";
export default {
  props: [
    "comingData",
  ],
  data: function() {
    return {
      currentImages: [],
      index: null
    };
  },

  components: {
    gallery: VueGallery
  },
  methods: {
    setCurrentImages(imageIndex, currentImages) {
      this.index = imageIndex;
      this.currentImages = []
      currentImages.map((i) => {
          this.currentImages.push(i.image)
      })
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/_alsdi-framework.scss";
@import "@/assets/_colors.scss";

.gallery-group {
  padding: 10px;
  .blueimp-gallery-display {
    display: none;
  }
  .blueimp-gallery {
    .close,
    .next,
    .prev {
      color: $alsdi-white !important;

      &:hover {
        color: $alsdi-gold !important;
      }
    }
  }
  cursor: pointer;
  .b {
    position: relative;
    padding: 10px;
    &:hover {
      .image {
        &:nth-child(1) {
          margin: 10px;
        }
        &:nth-child(2) {
          margin: 20px;
        }
        &:nth-child(3) {
          margin: 30px;
        }
      }
    }

    .image {
      position: absolute;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center center;
      border-radius: 15px;
      -webkit-transition: margin 0.3s ease-in-out;
      -o-transition: margin 0.3s ease-in-out;
      transition: margin 0.3s ease-in-out;
      .album-name {
        background-color: $alsdi-gold;
        padding: 10px;
        display: inline;
        position: absolute;
        bottom: 0;
        left: 10px;

        a {
          color: $alsdi-black;
        }
      }
    }
    // Small devices (landscape phones, 576px and up)
    @media (min-width: 320px) {
      min-height: 80vw;
      .image {
        width: 90%;
        height: 90%;
      }
    }

    // Medium devices (tablets, 768px and up)
    @media (min-width: 768px) {
      min-height: 35vw;
      .image {
        width: 80%;
        height: 80%;
      }
    }

    // Large devices (desktops, 992px and up)
    @media (min-width: 992px) {
      min-height: 18vw;
      .image {
        width: 80%;
        height: 80%;
      }
    }

    // Extra large devices (large desktops, 1200px and up)
    @media (min-width: 1200px) {
      min-height: 18vw;
      width: 60%;
      height: 60%;
    }
  }
}
</style>
