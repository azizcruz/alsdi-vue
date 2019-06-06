<template>
  <div>
    <a href="#" class="menu-btn d-md-none">
      <span></span>
    </a>
    <div class="side-header d-flex flex-column">
      <div
        class="logo-section d-flex justify-content-center align-items-center text-center"
      >
        <router-link to="/">
          <img
            src="@/assets/logo.png"
            class="alsdi-logo img-fluid"
            alt="شعار الصدي"
          />
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
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: "side-header",
  data() {
    return {
      navlinks: ""
    }
  },
  mounted() {
    console.log(this.pages)    
    $(".menu-btn").on("click", function(e) {
      e.preventDefault();
      $(this).toggleClass("menu-btn_active");
      $(this).toggleClass("menu-btn-active");
      $('.side-header').toggleClass("active-side-header-for-mobile")
      $('.app').toggleClass("alsdi-overflow-hidden")
      if($(window).width() <= 768) {
        $('.logo-section').toggleClass('p-5')
      }
    });

    $(".side-header a").on('click', function() {
      $('.side-header').toggleClass("active-side-header-for-mobile")
      $('.menu-btn').toggleClass("menu-btn_active");
      $('.menu-btn').toggleClass("menu-btn-active");
      if($(window).width() <= 768) {
        $('.logo-section').toggleClass('p-5')
      }
    })
  },
  computed: {
    ...mapState([
      'pages'
    ])
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/_colors.scss";

.menu-btn {
  display: block;
  width: 70px;
  height: 70px;
  background-color: #fff;
  border-radius: 50%;
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 99999999999;

  &.menu-btn-active {
    span {
      &::before {
        background-color: #fff;
      }
      &::after {
        background-color: #fff;
      }
    }
    background-color: transparent;
  }
}

.menu-btn span,
.menu-btn span::before,
.menu-btn span::after {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -10px;
  margin-top: -1px;
  width: 20px;
  height: 2px;
  background-color: #222;
}

.menu-btn span::before,
.menu-btn span::after {
  content: "";
  display: block;
  transition: 0.2s;
}

.menu-btn span::before {
  transform: translateY(-5px);
}

.menu-btn span::after {
  transform: translateY(5px);
}

.menu-btn_active span {
  height: 0;
}

.menu-btn_active span:before {
  transform: rotate(45deg);
}

.menu-btn_active span:after {
  transform: rotate(-45deg);
}

.side-header {
  background-color: $alsdi-black;
  color: $alsdi-gold;
  position: fixed;
  right: 0;
  top: 0;
  height: 100vh;
  // Medium devices (tablets, 768px and up)
  @media (max-width: 768px) {
    width: 100%;
    display: none !important;
    &.active-side-header-for-mobile {
      display: flex !important;
      z-index: 999999;
      overflow-y: scroll;
    }
  }

  // Large devices (desktops, 992px and up)
  @media (min-width: 769px) {
    width: 25%;
  }

  .logo-section {
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

