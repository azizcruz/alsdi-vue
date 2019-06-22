<template>
  <VerticalSliderShow
    :sliderData="ourProjectsData.sections[0].sliders[0].slides"
    :navlinksData="ourProjectsData.sections[1].blocks"
  />
</template>

<script>
import VerticalSliderShow from "@/components/sliders/VerticalSliderShow";
import { mapGetters } from "vuex";

export default {
  name: "our-projects",
  components: {
    VerticalSliderShow
  },
  computed: {
    ...mapGetters(["ourProjectsData"])
  }
};
</script>

<style lang="scss">
</style>

