<template>
  <div class="home d-flex flex-column page">
    <Slider
      :sliderHeight="100 + 'vh'"
      :slideShows="1"
      :sliderData="mainpageData.sections[0].sliders[0]"
    />
    <ShortAboutUS :comingData="mainpageData.sections[1]" />
    <VueSlider :sliderData="mainpageData.sections[2].sliders[0]" :comingData="mainpageData.sections[2]" />
    <Statistics :comingData="mainpageData.sections[3]" />
    <ContactUsSection :comingData="mainpageData.sections[4]" :contactData="mainpageData.contact_us[0]" />
  </div>
</template>

<script>
import Slider from "@/components/Slider";
import VueSlider from "@/components/VueSlider";
import ShortAboutUS from "@/components/ShortAboutUs";
import Statistics from "@/components/Statistics";
import ContactUsSection from "@/components/ContactUsSection";
import Footer from "@/components/Footer";
import {mapGetters } from "vuex";

export default {
  name: "home",
  components: {
    Slider,
    ShortAboutUS,
    VueSlider,
    Statistics,
    ContactUsSection
  },
  computed: {
    ...mapGetters(["mainpageData"])
  }
};
</script>

<style lang="scss" scoped>
</style>

