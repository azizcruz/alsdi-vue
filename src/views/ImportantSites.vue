<template>
  <div class="important-sites d-flex flex-wrap">
    <template v-for="(siteLogo, index) in importantSitesData">
      <SiteLogo :siteLink="`#`" :siteName="``" :key="index"  :imgLogo="`${siteLogo.image}`"/>
    </template>
  </div>
</template>

<script>
import SiteLogo from "@/components/important-sites/SiteLogo";
import { mapGetters } from "vuex";

export default {
  name: "important-sites",
  components: {
    SiteLogo
  },
  mounted() {
    console.log(this.importantSitesData)
  },
  computed: {
    ...mapGetters(["importantSitesData"])
  }
};
</script>

<style lang="scss" scoped>
</style>

