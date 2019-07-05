<template>
  <div class="important-sites d-flex flex-wrap">
    <SiteLogo :siteLink="`#`" :siteName="`Lorem Esso`" :imgLogo="`https://vignette.wikia.nocookie.net/lostpedia/images/b/b8/U-Boot-Logo.png/revision/latest?cb=20090524211525&path-prefix=de`" />
    <SiteLogo :siteLink="`#`" :siteName="`Bodo Ksso`" :imgLogo="`https://www.freepnglogos.com/uploads/orange-letter-d-dr-odd-logo-png-16.png`"/>
    <SiteLogo :siteLink="`#`" :siteName="`Ono Loo`" :imgLogo="`https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/08/designcrowd-logo.png?auto=format&q=60&fit=max&w=930`"/>
    <SiteLogo :siteLink="`#`" :siteName="`Coffee Goo`" :imgLogo="`https://www.stickpng.com/assets/images/580b57fcd9996e24bc43c513.png`"/>
  </div>
</template>

<script>
import SiteLogo from "@/components/important-sites/SiteLogo";
export default {
  name: "important-sites",
  components: {
    SiteLogo
  }
};
</script>

<style lang="scss" scoped>
</style>

