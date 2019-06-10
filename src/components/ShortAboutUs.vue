<template>
  <div
    class="alsdi-short-about-us"
    :style="{ backgroundImage: `url('${require('@/assets/bg-alsdi.jpeg')}')` }"
    data-aos="flip-up"
  >
    <div class="container-fluid">
      <div class="d-flex flex-wrap alsdi-short-wrapper">
        <div class="col-lg-3 col-sm-12 d-flex justify-content-center">
          <div
            class="short-about-us-image"
            data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="900"
            :style="{
              backgroundImage: `url(${comingData.blocks[0].image})`
            }"
          ></div>
        </div>
        <div class="col-lg-9 col-sm-12">
          <h1 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
            {{ comingData.blocks[0].header }}
          </h1>
          <p data-aos="fade-up" data-aos-duration="1000"  data-aos-delay="600">
            {{ comingData.blocks[0].paragraph }}
          </p>
          <router-link to="/about-us" data-aos="fade-up" data-aos-duration="1000"  data-aos-delay="1100">
            <button class="alsdi-button">اقرأ المزيد</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["comingData"]
};
</script>

<style lang="scss" scoped>
@import "@/assets/_colors.scss";
@import "@/assets/_alsdi-framework.scss";

.alsdi-short-about-us {
  padding: 10px 0;
  background-size: cover;
  background-position: 50%;
  background-repeat: no-repeat;
  background-attachment: fixed;
  width: 100%;
  height: 100%;
  .alsdi-short-wrapper {
    border: 1px solid $alsdi-gold;
    background-color: rgb(0, 0, 0, 0.6);
    @media only screen and (max-width: 767px) {
      padding: 20px;
    }
    @media only screen and (min-width: 768px) {
      padding: 50px;
    }

    h1 {
      color: $alsdi-gold;
    }

    p {
      color: $alsdi-white;
    }

    .short-about-us-image {
      background-size: cover;
      background-position: 50%;
      background-repeat: no-repeat;
      width: 250px;
      height: 250px;
    }
  }
}
</style>

