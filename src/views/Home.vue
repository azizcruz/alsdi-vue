<template>
  <div class="home d-flex flex-column page">
    <Slider
      :sliderHeight="100 + 'vh'"
      :slideShows="1"
      :sliderData="mainpageData.sections[0].sliders[0]"
    />
    <ShortAboutUS />
    <VueSlider />
    <Statistics />
    <ContactUsSection />
  </div>
</template>

<script>
import Slider from "@/components/Slider";
import VueSlider from "@/components/VueSlider";
import ShortAboutUS from "@/components/ShortAboutUs";
import Statistics from "@/components/Statistics";
import ContactUsSection from "@/components/ContactUsSection";
import Footer from "@/components/Footer";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "home",
  data() {
    return {
      sliders: []
    }
  },
  components: {
    Slider,
    ShortAboutUS,
    VueSlider,
    Statistics,
    ContactUsSection
  },
  mounted() {
    this.sliders = this.mainpageData.sections[0].sliders[0]
  },
  computed: {
    ...mapGetters(["mainpageData"])
  }
};
</script>

<style lang="scss" scoped>
</style>

