<template>
  <div class="about-us-structure">
    <h3 class="font-weight-bold">{{ comingData.section_header }}</h3>
    <p>
      {{ comingData.section_paragraph }}
    </p>
    <div class="container company-structure">
      <div class="d-flex flex-wrap">
        <div
        v-for="(dataBlock, index) in comingData.blocks"
        :key="index"
          class="item alsdi-hoverable m-1 d-flex flex-column align-items-center justify-content-center"
        >
          <div class="icon-section mb-3">
            <i :class="dataBlock.icon"></i>
          </div>
          <div class="text-section">
            <h4>{{ dataBlock.header }}</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    "comingData",
  ]
};
</script>


<style lang="scss">
@import "@/assets/_colors.scss";
@import "@/assets/_alsdi-framework.scss";

.about-us-structure {
  .company-structure {
    .item {
      background-color: $alsdi-white;
      padding: 30px;
      height: 200px;
      color: $alsdi-black;
      border: 2px solid $alsdi-black;
      min-height: 200px;
      min-width: 200px;
      -webkit-box-flex: 1;
      -ms-flex: 1;
      flex: 1;
    }
  }
}
</style>

