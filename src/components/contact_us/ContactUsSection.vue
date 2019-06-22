<template>
  <div class="alsdi-contact-us mt-3 d-flex flex-wrap">
    <div
      class="alsdi-contact-us-image col-xs-12 col-md-6 p-0"
      data-aos="fade-left" data-aos-duration="1000"
      :style="{
        backgroundImage: `url(${comingData.image})`
      }"
    >
      <div class="contact-us-img"></div>
    </div>
    <div class="alsdi-contact-us-text col-xs-12 col-md-6 p-0">
      <div
        class="alsdi-contact-card h-100 d-flex flex-column justify-content-center align-items-center"
      >
        <div data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="600">
        <h1 class="mb-3 bold">{{ comingData.section_header }}</h1>
        <h3>:عنواننا</h3>
        <p>{{ contactData.address }}</p>
        <h3>:اتصل بنا</h3>
        <p>{{ contactData.telephone_number1 }} - {{ contactData.telephone_number2 }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'comingData',
    'contactData'
  ]
};
</script>

<style lang="scss" scoped>
@import "@/assets/_alsdi-framework.scss";
@import "@/assets/_colors.scss";

.alsdi-contact-us {
  min-height: 600px;
  overflow: hidden;

  .alsdi-contact-us-image {
      min-height: 400px;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: 30%;
    .contact-us-img {
      background-size: cover;
      background-attachment: fixed;
      background-position: 50%;
      background-repeat: no-repeat;
      height: 100%;
    }
  }

  .alsdi-contact-us-text {
    color: $alsdi-black !important;
    min-height: 400px;
  }
}
</style>

