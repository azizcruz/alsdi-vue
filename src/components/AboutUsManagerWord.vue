<template>
  <div class="about-us-manager-word text-right mb-3">
    <h3 class="mt-3 mb-3 font-weight-bold">كلمة من المدير العام</h3>
    <div
      class="manager-word d-flex flex-wrap"
      :style="{
        backgroundImage: `url('${require('@/assets/manager-img.jpg')}')`,
        backgroundPosition: 'center'
      }"
    >
      <div class="manager-image col-sm-12 col-md-5"></div>
      <div class="manager-text text-justify text-right col-sm-12 col-md-7 p-3 pl-5">
        <h3>Lorem ipsum dolor sit.</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero
          deserunt voluptatibus, dolorum, voluptate et natus voluptatem iure
          officia voluptatum at dolor illo perspiciatis ex quas dolore, esse
          harum inventore corporis. Quod iure adipisci, architecto iusto vero
          pariatur ipsum blanditiis quis sint repudiandae expedita excepturi
          unde laudantium necessitatibus ex, quibusdam tenetur.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "@/assets/_colors.scss";
@import "@/assets/_alsdi-framework.scss";

.about-us-manager-word {
  background-size: contain;
  background-repeat: no-repeat;
  .manager-image {
    @media screen and (max-width: 768px){
      min-height: 400px;
    }
  }
  .manager-text {
    min-height: 600px;
    background-color: $alsdi-black;
    color: $alsdi-gold;
    border-top-left-radius: 30%;
    // border-bottom-left-radius: 30%;
  }
}
</style>

