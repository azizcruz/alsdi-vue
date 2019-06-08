<template>
  <div class="about-us-rows-info">
    <div
      v-for="(dataBlock, index) in comingData"
      :key="index"
      class="about-us-row text-right p-3 d-flex"
    >
      <div class="about-us-text">
        <h3 class="font-weight-bold">{{ dataBlock.blocks[0].header }}</h3>
        <p class="text-justify text-right">
          {{ dataBlock.blocks[0].paragraph }}
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

<style lang="scss" scoped>
@import "@/assets/_colors.scss";
@import "@/assets/_alsdi-framework.scss";

.about-us-rows-info {
  .about-us-row {
    cursor: pointer;
    -webkit-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    &:hover {
      -webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
        0 6px 20px 0 rgba(0, 0, 0, 0.19);
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
        0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
  }
}
</style>
