<template>
  <div class="home d-flex flex-column page">
    <BreakingNews />
    <Slider
      :sliderHeight="100 + 'vh'"
      :slideShows="1"
      :sliderData="mainpageData.sections[0].sliders[0]"
    />
    <ShortAboutUS :comingData="mainpageData.sections[1]" />
    <VueSlider
      :sliderData="mainpageData.sections[2].sliders[0]"
      :comingData="mainpageData.sections[2]"
    />
    <Statistics :comingData="mainpageData.sections[3]" />
    <ContactUsSection
      :comingData="mainpageData.sections[4]"
      :contactData="mainpageData.contact_us[0]"
    />
  </div>
</template>

<script>
import Slider from "@/components/sliders/Slider";
import VueSlider from "@/components/sliders/VueSlider";
import ShortAboutUS from "@/components/sections/ShortAboutUs";
import Statistics from "@/components/sections/Statistics";
import ContactUsSection from "@/components/contact_us/ContactUsSection";
import BreakingNews from "@/components/global/BreakingNews";
import { mapGetters } from "vuex";

export default {
  name: "home",
  components: {
    Slider,
    ShortAboutUS,
    VueSlider,
    Statistics,
    ContactUsSection,
    BreakingNews
  },
  computed: {
    ...mapGetters(["mainpageData"])
  }
};
</script>

<style lang="scss" scoped>
</style>

