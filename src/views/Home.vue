<template>
  <div class="home d-flex flex-column">
    <Slider :sliderHeight="100 + 'vh'" :slideShows="1" />
      <ShortAboutUS />
    <VueSlider />
  </div>
</template>

<script>
import Slider from '@/components/Slider'
import VueSlider from '@/components/VueSlider'
import ShortAboutUS from '@/components/ShortAboutUs'
export default {
  name: 'home',
  components: {
    Slider,
    ShortAboutUS,
    VueSlider,
  }
}
</script>

<style lang="scss" scoped>

</style>

