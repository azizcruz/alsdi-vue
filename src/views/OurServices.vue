<template>
  <div class="alsdi-our-services">
    <VerticalSliderShow :sliderData="ourServicesData.sections[0].sliders[0].slides" :navlinksData="ourServicesData.sections[1].blocks" />
  </div>
</template>

<script>
import VerticalSliderShow from "@/components/VerticalSliderShow";
import { mapGetters } from "vuex";

export default {
  name: "our-services",
  components: {
    VerticalSliderShow
  },
  computed: {
    ...mapGetters(["ourServicesData"])
  }
};
</script>

<style>
</style>
