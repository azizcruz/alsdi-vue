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
        <li>
          <router-link to="/">الرئيسية</router-link>
        </li>
        <li>
          <router-link to="/about-us">من نحن</router-link>
        </li>
        <li>
          <router-link to="/our-services">مشاريعنا</router-link>
        </li>
        <li>
          <router-link to="/our-services">البوم الصور</router-link>
        </li>
        <li>
          <router-link to="/our-services">فرص العمل</router-link>
        </li>
        <li>
          <router-link to="/our-services">تواصل معنا</router-link>
        </li>
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
    height: 20vw;
    .alsdi-logo {
      width: 200px;
      height: 200px;
    }
  }

  .navlinks-section {
    background-color: $alsdi-black;
    ul {
      text-align: right;

      li {
        padding: 1rem;

        &:hover {
          background-color: lighten($alsdi-gold, 10%);
          a {
            transition: .3s ease-in-out;
            margin-right: 20px;
            color: lighten(#000000, 20%);
          }
        }

        a {
          color: $alsdi-gold;
          font-size: 1.5rem;
          text-decoration: none;
        }
      }
    }
  }
}
</style>

