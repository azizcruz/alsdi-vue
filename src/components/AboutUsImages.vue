<template>
    <div class="about-us-image">
        <img
          v-for="(image, index) in comingData"
          :key="index"
          :src="image.blocks[0].image"
          class="img-fluid"
          :alt="image.blocks[0].header"
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
