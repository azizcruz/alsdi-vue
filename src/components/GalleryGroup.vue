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
        v-for="(imageWrap, indexWrap) in imagesWrapper"
        :key="indexWrap"
      >
        <div
          class="image"
          v-for="(image, imageIndex) in imageWrap.images.slice(0, 3)"
          @click="setCurrentImages(imageIndex, imageWrap.images)"
          :key="imageIndex"
          :style="{
            backgroundImage: 'url(' + image + ')',
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
  data: function() {
    return {
      imagesWrapper: [
        {
          images: [
            "https://dummyimage.com/800/ffffff/000000",
            "https://dummyimage.com/1600/ffffff/000000",
            "https://dummyimage.com/1280/000000/ffffff",
            "https://dummyimage.com/400/000000/ffffff"
          ],
          text: "lorem 10"
        },
        {
          images: [
            "https://dummyimage.com/800/ff4fff/000000",
            "https://dummyimage.com/1600/ffffff/000000",
            "https://dummyimage.com/1280/000000/ffffff",
            "https://dummyimage.com/400/000000/ffffff"
          ],
          text: "lorem 10"
        }
      ],
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
      this.currentImages = currentImages;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/_alsdi-framework.scss";
@import "@/assets/_colors.scss";
.gallery-group {
  padding: 10px;
  .blueimp-gallery-display {
    display: none;
  }
  cursor: pointer;
  .b {
    position: relative;
    padding: 10px;
    .image {
      position: absolute;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center center;
      width: 60%;
      height: 60%;
      border-radius: 15px;
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
        width: 60%;
        height: 60%;
      }
    }

    // Extra large devices (large desktops, 1200px and up)
    @media (min-width: 1200px) {
      min-height: 18vw;
    }
  }
}
</style>
