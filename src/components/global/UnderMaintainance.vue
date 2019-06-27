<template>
  <div
    class="under-maintainance d-flex justify-content-center align-items-center"
  >
    <div class="under-maintainance-text text-center">
      <div><i class="fas fa-tools fa-5x"></i></div>
      <br />
      <h1>الموقع تحت الصيانة, سنعود قريبا</h1>
      <p>يمكنكم التواصل معنا </p>
      <p><a href="mailto:admin@alsdi.com">admin@alsdi.com</a></p>
      <p><a href="tel:+96550987444">+96550987444</a></p>
      <p>
        <a
          class="nav-link"
          href="https://wa.me/+96550987444"
          target="_blank"
        >
          <i class="fab fa-whatsapp fa-2x"></i>
        </a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "under-maintainance"
};
</script>

<style lang="scss" scoped>
@import "@/assets/_colors.scss";
.under-maintainance {
  background-color: $alsdi-black;
  color: $alsdi-white;
  min-height: 100vh;
  a {
      color: $alsdi-white;
  }
  h1, a, p {
    font-size: 4rem;
    @media (max-width: 992px) {
      font-size: 3rem;
    }
    @media (max-width: 768px) {
      font-size: 2rem;
    }
    @media (max-width: 576px) {
      font-size: 1rem;
    }
  }
}
</style>

