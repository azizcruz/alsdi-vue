<template>
  <div class="alsdi-contact-us-tab">
    <div
      class="d-flex flex-column align-items-center text-center mb-5 form-info-control"
    >
      <div :class="{ 'active-section': activeTab == 1 }" @click="makeActive(1)">
        أرسل ايميل
      </div>
      <div :class="{ 'active-section': activeTab == 2 }" @click="makeActive(2)">
        وسائل التواصل
      </div>
      <div :class="{ 'active-section': activeTab == 3 }" @click="makeActive(3)">
        عنوان موقعنا
      </div>
    </div>
    <div class="f-flex flex-column">
      <div
        class="contact-us-tab contact-form container"
        v-show="activeTab === 1"
      >
        <h3 class="text-center">ارسل ايميل</h3>
        <form>
          <div class="form-group">
            <label for="exampleFormControlInput1">Email address</label>
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
          <div class="form-group">
            <label for="exampleFormControlInput2">Name</label>
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput2"
            />
          </div>
          <div class="form-group">
            <label for="exampleFormControlInput3">Phone</label>
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput3"
            />
          </div>

          <div class="form-group">
            <label for="exampleFormControlTextarea1">Message</label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
          <button class="alsdi-button" @click.prevent="">Send</button>
        </form>
      </div>
      <div
        class="contact-us-tab info-section container"
        v-show="activeTab === 2"
      >
        <div class="d-flex align-items-center justify-content-center h-100">
          <div class="text-center">
            <h3><i class="fas fa-phone-volume"></i> ارقام هواتفنا</h3>
            <p>22454730 - 22454733</p>
            <br>
            <h3><i class="far fa-envelope"></i> عنوان الايميل</h3>
            <p>test@test.com</p>
            <br>
            <h3><i class="fas fa-map-marker-alt"></i> العنوان</h3>
            <p>Kuwait-Stadt, Kuwait</p>
            <br>
            <h3><i class="fas fa-globe"></i> الموقع</h3>
            <p><a href="https://alsdi.com">www.alsdi.com</a></p>
          </div>
        </div>
      </div>
      <div
        class="contact-us-tab map-section container"
        v-show="activeTab === 3"
      >
        Map
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "contact-us",
  data() {
    return {
      activeTab: 1
    };
  },
  methods: {
    makeActive(section_tab) {
      this.activeTab = section_tab;
    }
  }
};
</script>


<style lang="scss">
@import "@/assets/_colors.scss";
@import "@/assets/_alsdi-framework.scss";

.alsdi-contact-us-tab {
  background-color: $alsdi-gold;
  padding: 20px;
  overflow-y: hidden;

  .contact-us-tab {
    height: 80vh;
  }

  .contact-form {
    padding: 10px;
  }

  .form-info-control {

    & > div {
      background-color: $alsdi-black;
      color: $alsdi-gold;
      padding: 10px;
      margin-bottom: 10px;
      width: 120px;
      max-width: 120px;
      position: relative;
      -webkit-transition: all 0.2s ease-in-out;
      -o-transition: all 0.2s ease-in-out;
      transition: all 0.2s ease-in-out;
      cursor: pointer;
      &:hover {
        background-color: lighten($color: $alsdi-black, $amount: 10%);
      }

      &.active-section {
        background-color: lighten($color: $alsdi-black, $amount: 10%);
        &::after {
          font-family: "FontAwesome" !important;
          content: "<";
          font-weight: bolder;
          font-size: 24px;
          bottom: 3px;
          position: absolute;
          color: $alsdi-black;
          right: -20px;
        }
      }
    }
  }
  .alsdi-button {
    background-color: $alsdi-black;
    color: $alsdi-gold;
  }
}
</style>

