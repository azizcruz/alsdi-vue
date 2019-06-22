<template>
  <div class="about-us-rows-info">
    <div
      v-for="(dataBlock, index) in comingData"
      :key="index"
      class="about-us-row d-flex"
    >
      <div class="about-us-text">
        <h3 class="font-weight-bold" data-aos="fade-up" data-aos-duration="1000" :data-aos-delay="index * 100">{{ dataBlock.blocks[0].header }}</h3>
        <p class="" data-aos="fade-up" data-aos-duration="1000" :data-aos-delay="index * 150">
          {{ dataBlock.blocks[0].paragraph }}
        </p>
        <div class="container" data-aos="flip-left" data-aos-duration="2000"  data-aos-delay="600">
          <hr class="alsdi-separator">
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

.about-us-rows-info {
  .about-us-row {
    p {
      margin: 0;
    }
    cursor: pointer;
    -webkit-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
  }
}
</style>
