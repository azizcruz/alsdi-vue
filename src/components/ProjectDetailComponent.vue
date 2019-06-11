<template>
  <div class="alsdi-project-detail">
    <div class="project-detail-header d-flex flex-wrap">
      <div class="image-side">
        <img
          :src="projectData.project_images.image[1].image"
          class="img-fluid"
          :alt="projectData.project_name"
          data-aos="fade-right" data-aos-duration="1000"
        />
      </div>
      <div
        class="content-side d-flex justify-content-center align-items-center p-3"
      >
        <div class="titles-content w-50">
          <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">{{ projectData.project_name }}</p>
          <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">{{ projectData.date_created }}</p>
          <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">{{ projectData.project_address }}</p>
        </div>
        <div class="titles d-flex w-50 flex-column">
          <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">اسم المشروع</p>
          <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">تاريخ الانشاء</p>
          <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">عنوان المشروع</p>
        </div>
      </div>
    </div>
    <div class="gallery-images">
      <div class="gallery-title-section mb-4">
        <h3 class="text-center" data-aos="fade-up" data-aos-duration="1000">صور المشروع</h3>
      </div>
      <div class="images-in-gallery-section">
        <gallery
          :images="images"
          :index="index"
          @close="index = null"
        ></gallery>

        <div class="images d-flex flex-wrap justify-content-between">
          <div
            class="image"
            v-for="(image, imageIndex) in images"
            data-aos="fade-left" data-aos-duration="1000" :data-aos-delay="imageIndex * 100"
            :key="imageIndex"
            @click="index = imageIndex"
            :style="{
              backgroundImage: 'url(' + image + ')',
              width: '300px',
              height: '300px'
            }"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import gallery from "vue-gallery";

export default {
  components: {
    gallery
  },
  data() {
    return {
      projectData: null,
      images: [],
      index: null
    };
  },
  mounted() {
    axios
      .get(
        `https://zikosama.pythonanywhere.com/api/ar/projects/${
          this.$route.params.id
        }/`
      )
      .then(data => {
        this.projectData = data.data;
        this.setUpImages();
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
    setUpImages() {
      this.projectData.project_images.image.map(image => {
        this.images.push(image.image);
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/_colors.scss";
@import "@/assets/_alsdi-framework.scss";
.alsdi-project-detail {
  color: $alsdi-white;
  padding: 1rem;


  .image-side {
    min-width: 50%;
    max-width: 50%;
    @media (max-width: 768px) {
      min-width: 100%;
      max-width: 100%;
    }
  }
  .content-side {
    min-width: 50%;
    max-width: 50%;
    @media (max-width: 768px) {
      min-width: 100%;
      max-width: 100%;
    }

    p {
      font-size: 1.2rem;
    }
  }

  .gallery-images {
    margin: 2.25rem 0;
    .images-in-gallery-section {
      .images {
        .image {
          max-width: 31.3333%;
          min-width: 31.3333%;
          min-height: 23vw;
          max-height: 23vw;
          margin-bottom: 2.5rem;
          cursor: pointer;
          -webkit-transition: all 0.3s ease-in-out;
          -o-transition: all 0.3s ease-in-out;
          transition: all 0.3s ease-in-out;
          &:hover {
            background-position: 30% 80%;
          }
          @media (max-width: 768px) {
            min-width: 100%;
            max-width: 100%;
            min-height: 80vw;
            max-height: 80vw;
            margin: 5px 0;
          }
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center center;
        }
      }
    }
  }
}
</style>

