<template>
  <div class="side-header w-25 d-flex flex-column">
    <div
      class="logo-section d-flex justify-content-center align-items-center text-center"
    >
      <router-link to="/">
        <img src="@/assets/logo.png" class="alsdi-logo" alt="شعار الصدي" />
      </router-link>
    </div>
    <div class="navlinks-section">
      <ul class="list-unstyled">
        <router-link to="/">
          <li>
            الرئيسية
          </li>
        </router-link>
        <router-link to="/about-us">
          <li>
            من نحن
          </li>
        </router-link>
        <router-link  to="/our-services">
          <li>
            خدماتنا
          </li>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/assets/_colors.scss";

.side-header {
  background-color: $alsdi-black;
  color: $alsdi-gold;
  position: fixed;
  right: 0;
  top: 0;
  height: 100vh;

  .logo-section {
    height: 15vw;
    border-bottom: 2px solid;
    .alsdi-logo {
      width: 200px;
      height: 200px;
    }
  }

  .navlinks-section {
    background-color: $alsdi-black;
    padding-top: 2rem;
    ul {
      text-align: right;

      a {
        color: $alsdi-gold;
        font-size: 1.5rem;
        text-decoration: none;

        li {
          padding: 1rem;
          -webkit-transition: all 0.2s ease-in-out;
          -o-transition: all 0.2s ease-in-out;
          transition: all 0.2s ease-in-out;
        }
        &:hover {
          color: $alsdi-black;
          li {
            background-color: lighten($alsdi-gold, 10%);
            padding-right: 2rem;
          }
        }

        &.alsdi-is-active {
          color: $alsdi-black;
          li {
            background-color: lighten($alsdi-gold, 10%);
            padding-right: 2rem;
          }
        }
      }
    }
  }
}
</style>

