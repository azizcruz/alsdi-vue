<template>
  <div class="home d-flex flex-column page">
    <Slider :sliderHeight="100 + 'vh'" :slideShows="1" />
    <ShortAboutUS />
    <VueSlider />
    <Statistics />
    <ContactUsSection />
  </div>
</template>

<script>
import Slider from '@/components/Slider'
import VueSlider from '@/components/VueSlider'
import ShortAboutUS from '@/components/ShortAboutUs'
import Statistics from '@/components/Statistics'
import ContactUsSection from '@/components/ContactUsSection'
import Footer from '@/components/Footer'
export default {
  name: 'home',
  components: {
    Slider,
    ShortAboutUS,
    VueSlider,
    Statistics,
    ContactUsSection,
  }
}
</script>

<style lang="scss" scoped>

</style>

