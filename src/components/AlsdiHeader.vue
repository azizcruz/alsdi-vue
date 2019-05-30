<template>
  <div class="side-header w-25 d-flex flex-column">
    <div
      class="logo-section d-flex justify-content-center align-items-center text-center"
    >
      <router-link to="/">
        <img src="@/assets/logo.png" class="alsdi-logo img-fluid" alt="شعار الصدي" />
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
        <router-link to="/our-services">
          <li>
            خدماتنا
          </li>
        </router-link>
        <router-link to="/our-projects">
          <li>
            مشاريعنا
          </li>
        </router-link>
        <router-link to="/gallery">
          <li>
            معرض الصور
          </li>
        </router-link>
        <router-link to="/contact-us">
          <li>
            تواصل معنا
          </li>
        </router-link>
      </ul>
    </div>
    <div class="d-flex justify-content-center social-icons mt-auto">
      <ul class="nav">
        <li class="nav-item">
          <a class="nav-link" href="#">
            <i class="fab fa-instagram fa-2x"></i>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            <i class="fab fa-twitter fa-2x"></i>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            <i class="fab fa-facebook-square fa-2x"></i>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            <i class="fab fa-snapchat fa-2x"></i>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            <i class="fab fa-whatsapp fa-2x"></i>
          </a>
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
    min-height: 20vh;
    border-bottom: 2px solid;
    padding: 20px;
    .alsdi-logo {
      max-width: 50%;
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

  .social-icons {
    .nav-item {
      a {
        color: $alsdi-gold;
        -webkit-transition: all 0.2s ease-in-out;
        -o-transition: all 0.2s ease-in-out;
        transition: all 0.2s ease-in-out;
        &:hover {
          color: $alsdi-white;
        }
      }
    }
  }
}
</style>

