<template>
  <div class="about-us-manager-word mb-3">
    <h3 class="mt-3 mb-3 font-weight-bold" data-aos="fade-up" data-aos-duration="1000">
      {{ comingData.blocks[0].header }}
    </h3>
    <div
      class="manager-word d-flex flex-wrap"
      :style="{
        backgroundImage: `url(${comingData.blocks[0].image})`,
        backgroundPosition: 'center'
      }"
    >
      <div
        class="manager-image col-sm-12 col-md-5"
      ></div>
      <div
        class="manager-text d-flex justify-content-center align-items-center flex-column col-sm-12 col-md-7 p-3 pl-5"
        data-aos="fade-left"
        data-aos-duration="500"
        data-aos-offset="500"
      >
        <h3>{{ comingData.blocks[0].icon }}</h3>
        <p>
          {{ comingData.blocks[0].paragraph }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["comingData"]
};
</script>

<style lang="scss">
@import "@/assets/_colors.scss";
@import "@/assets/_alsdi-framework.scss";

.about-us-manager-word {
  background-size: contain;
  background-repeat: no-repeat;
  .manager-image {
    @media screen and (max-width: 768px) {
      min-height: 400px;
    }
  }
  .manager-text {
    min-height: 600px;
    background-color: $alsdi-black;
    color: $alsdi-gold;
    border-top-left-radius: 75%;
    // border-bottom-left-radius: 30%;
  }
}
</style>

