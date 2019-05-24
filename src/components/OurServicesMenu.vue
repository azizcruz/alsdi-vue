<template>
  <div class="our-services-menu text-right">
    <scrollactive class="my-nav alsdi-our-services-nav">
      <div class="nav-wrappe">
          <a
        href="#enternal-designs"
        class="alsdi-our-services-link scrollactive-item"
      >
        <div class="service-block">
          <h3>تصميمات داخلية</h3>
        </div>
      </a>
      <a
        href="#enternal-designs"
        class="alsdi-our-services-link scrollactive-item"
      >
        <div class="service-block">
          <h3>تصميمات داخلية</h3>
        </div>
      </a>
      <a
        href="#enternal-designs"
        class="alsdi-our-services-link scrollactive-item"
      >
        <div class="service-block">
          <h3>تصميمات داخلية</h3>
        </div>
      </a>
      <a
        href="#enternal-designs"
        class="alsdi-our-services-link scrollactive-item"
      >
        <div class="service-block">
          <h3>تصميمات داخلية</h3>
        </div>
      </a>
      </div>
    </scrollactive>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "@/assets/_colors.scss";
@import "@/assets/_alsdi-framework.scss";

.our-services-menu {
  .alsdi-our-services-nav {
    position: fixed;
    right: 25%;
    top: 10px;
    z-index: 1001;

    a {
      padding: 10px;
      color: $alsdi-white;

      &:hover {
        text-decoration: none;
        color: $alsdi-white;
      }

      .service-block {
        border-right: 4px solid $alsdi-white;
        padding: 20px;
      }
    }
  }
}
</style>

