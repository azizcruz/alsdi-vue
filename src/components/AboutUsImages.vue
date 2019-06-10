<template>
    <div class="about-us-image">
        <img
          v-for="(image, index) in comingData"
          :key="index"
          :src="image.blocks[0].image"
          class="img-fluid"
          :alt="image.blocks[0].header"
          data-aos="fade-up" data-aos-duration="1000" :data-aos-delay="index * 150"
        />
    </div>
</template>

<script>
export default {
  props: [
    'comingData'
  ]
}
</script>

<style lang="scss" scoped>
@import "@/assets/_colors.scss";
@import "@/assets/_alsdi-framework.scss";

</style>
