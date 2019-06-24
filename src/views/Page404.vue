<template>
  <div
    class="page-not-found h-100 d-flex justify-content-center align-items-center"
  >
    <div class="not-found-wrapper">
      <h1>
        <i class="fas fa-exclamation-triangle"></i> Not Found 404
        <i class="fas fa-exclamation-triangle"></i>
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "page-not-found"
};
</script>

<style lang="scss">
@import "@/assets/_colors.scss";
.not-found-wrapper {
  padding: 20px;
  background-color: $alsdi-gold;
  h1 {
    color: $alsdi-black;
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
