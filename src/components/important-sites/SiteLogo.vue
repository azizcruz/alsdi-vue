<template>
  <div
    class="site-logo text-center d-flex align-items-center justify-content-center"
  >
    <a :href="siteLink" target="_blank">
      <div class="img-logo">
        <img :src="imgLogo" class="img-fluid" alt="" />
      </div>
      <div class="site-name">
        <h3>
          {{ siteName }}
        </h3>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: "site-logo",
  props: ["imgLogo", "siteName", "siteLink"]
};
</script>

<style lang="scss" scoped>
@import "@/assets/_colors.scss";

.site-logo {
  margin: 2rem;
  padding: 5rem;
  -webkit-transition: all 0.2s ease-in-out;
  -o-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
  -webkit-box-flex: 1;
  -ms-flex: 1 1 calc(100% / 4);
  flex: 1 1 calc(100% / 4);
  @media (max-width: 767px) {
    -webkit-box-flex: 1;
    -ms-flex: 1 1 calc(100%);
    flex: 1 1 calc(100%);
  }
  &:hover {
    background-color: rgba($color: #ebe9e9, $alpha: 0.6);
  }
  a {
    text-decoration: none;
    color: $alsdi-white;

    h3 {
      margin-top: 2rem;
    }
  }
}
</style>

