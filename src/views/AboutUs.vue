<template>
  <div class="alsdi-about-us p-3 page">
    <div class="row">
      <div class="col-sm-4">
        <AboutUsImages :comingData="aboutUsData.sections.slice(0, 4)" />
      </div>
      <div class="col-sm-8">
        <AboutUsInfo :comingData="aboutUsData.sections.slice(0, 4)" />
      </div>
    </div>
    <AboutUsManagerWord :comingData="aboutUsData.sections[5]" />
    <AboutUsStrategy :comingData="aboutUsData.sections[6]" />
  </div>
</template>

<script>
import AboutUsImages from "@/components/about_us/AboutUsImages";
import AboutUsInfo from "@/components/about_us/AboutUsInfo";
import AboutUsManagerWord from "@/components/about_us/AboutUsManagerWord";
import AboutUsStrategy from "@/components/about_us/AboutUsStrategy";
import { mapGetters } from "vuex";

export default {
  name: "about-us",
  components: {
    AboutUsImages,
    AboutUsInfo,
    AboutUsManagerWord,
    AboutUsStrategy
  },
  computed: {
    ...mapGetters(["aboutUsData"])
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/_colors.scss";
@import "@/assets/_alsdi-framework.scss";

.alsdi-about-us {
  background-color: $alsdi-black;
  color: $alsdi-white;
}
</style>

