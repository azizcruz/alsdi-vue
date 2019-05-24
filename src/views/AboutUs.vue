<template>
  <div class="alsdi-about-us p-3 page">
    <div class="row">
      <div class="col-sm-4">
        <AboutUsImages />
      </div>
      <div class="col-sm-8">
        <AboutUsInfo />
      </div>
    </div>
    <AboutUsManagerWord />  
    <AboutUsStrategy />  
  </div>
</template>

<script>
import AboutUsImages from "@/components/AboutUsImages"
import AboutUsInfo from "@/components/AboutUsInfo"
import AboutUsManagerWord from "@/components/AboutUsManagerWord"
import AboutUsStrategy from "@/components/AboutUsStrategy"
export default {
  name: "about-us",
  components: {
    AboutUsImages,
    AboutUsInfo,
    AboutUsManagerWord,
    AboutUsStrategy
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/_colors.scss";
@import "@/assets/_alsdi-framework.scss";

.alsdi-about-us {
  background-color: $alsdi-gold;
}
</style>

