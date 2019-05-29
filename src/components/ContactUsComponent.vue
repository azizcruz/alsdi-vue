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
            <br />
            <h3><i class="far fa-envelope"></i> عنوان الايميل</h3>
            <p>test@test.com</p>
            <br />
            <h3><i class="fas fa-map-marker-alt"></i> العنوان</h3>
            <p>Kuwait-Stadt, Kuwait</p>
            <br />
            <h3><i class="fas fa-globe"></i> الموقع</h3>
            <p><a href="https://alsdi.com">www.alsdi.com</a></p>
          </div>
        </div>
      </div>
      <div
        class="contact-us-tab map-section container text-center"
        v-show="activeTab === 3"
      >
        <h3 class="">اضغط على الصورة للتوجه للعنوان</h3>
        <div class="d-flex justify-content-center address-image-wrapper">
          <div class="test">
            <a
              href="https://www.google.com/maps/place/%D9%85%D9%83%D8%AA%D8%A8+%D8%A3%D8%B3%D8%A7%D9%85%D8%A9+%D8%A7%D9%84%D8%B5%D8%AF%D9%8A+%D9%84%D9%84%D8%A7%D8%B3%D8%AA%D8%B4%D8%A7%D8%B1%D8%A7%D8%AA+%D8%A7%D9%84%D9%87%D9%86%D8%AF%D8%B3%D9%8A%D8%A9+Al-Sadi+Engineering+Consultant%E2%80%AD/@29.3786671,47.9950493,17.75z/data=!4m12!1m6!3m5!1s0x3fcf85caa39d288f:0x762a3eca2a9438c0!2z2YXZg9iq2Kgg2KPYs9in2YXYqSDYp9mE2LXYr9mKINmE2YTYp9iz2KrYtNin2LHYp9iqINin2YTZh9mG2K_Ys9mK2KkgQWwtU2FkaSBFbmdpbmVlcmluZyBDb25zdWx0YW50!8m2!3d29.378913!4d47.995612!3m4!1s0x3fcf85caa39d288f:0x762a3eca2a9438c0!8m2!3d29.378913!4d47.995612?hl=en-KW"
              target="_blank"
            >
              <img
                src="@/assets/location-img.jpeg"
                class="img-fluid alsdi-hoverable"
                alt="عنوان الصدي للاستشارات الهندسية"
              />
            </a>
          </div>
        </div>
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
    h3 {
      display: inline-block;
      &::after {
        content: "";
        display: block;
        width: 0;
        margin-top: 10px;
        height: 2px;
        background: #000;
        transition: width 0.3s;
      }
    }
    &:hover {
      h3 {
        &::after {
          width: 100%;
          //transition: width .3s;
        }
      }
      img {
        -webkit-transform: scale(0.9);
        -ms-transform: scale(0.9);
        transform: scale(0.9);
      }
    }
    .address-image-wrapper {
      a {
        img {
          border-radius: 8px;
          position: relative;
          -webkit-transition: all 0.5s ease-in-out;
          -o-transition: all 0.5s ease-in-out;
          transition: all 0.5s ease-in-out;
        }
      }
    }
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

