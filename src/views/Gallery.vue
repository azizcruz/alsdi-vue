<template>
  <div class="alsdi-gallery">
    <GalleryGroup :comingData="galleryData.sections[0].albums" />
  </div>
</template>

<script>
import GalleryGroup from "@/components/sections/GalleryGroup";
import { mapGetters } from "vuex";

export default {
  name: "alsdi-gallery",
  components: {
    GalleryGroup
  },
  computed: {
    ...mapGetters(["galleryData"])
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/_alsdi-framework.scss";
@import "@/assets/_colors.scss";
</style>

