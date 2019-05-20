<template>
  <div class="home d-flex flex-column">
    <Slider :sliderHeight="100 + 'vh'" :slideShows="1" />
    <ShortAboutUS />
    <VueSlider />
    <Statistics />
  </div>
</template>

<script>
import Slider from '@/components/Slider'
import VueSlider from '@/components/VueSlider'
import ShortAboutUS from '@/components/ShortAboutUs'
import Statistics from '@/components/Statistics'
export default {
  name: 'home',
  components: {
    Slider,
    ShortAboutUS,
    VueSlider,
    Statistics
  }
}
</script>

<style lang="scss" scoped>

</style>

