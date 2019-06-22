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
        <transition enter-active-class="animated fadeInDown">
          <div
            class="sent-message-wrapper d-flex justify-content-center align-items-center flex-column"
            id="sent-message-wrapper"
            v-if="sent"
          >
            <h1>تم ارسال الرسالة</h1>
            <i class="far fa-check-circle fa-3x"></i>
          </div>
        </transition>
        <h3 class="text-center" data-aos="fade-up" data-aos-duration="1000">
          ارسل رسالة استفسار
        </h3>
        <div data-aos="fade-left" data-aos-duration="1000" :data-aos-delay="600">
          تعني حقول الزامية *
        </div>
        <form data-aos="fade-up" data-aos-duration="1000" :data-aos-delay="300">
          <div class="form-group">
            <label for="exampleFormControlInput1">ايميل *</label>
            <input
              type="email"
              name="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
              v-model="formData.email"
              v-validate="'required|email'"
            />
            <transition
              name="error-anim"
              enter-active-class="animated tada"
              leave-active-class="animated fadeOutDown"
            >
              <div v-if="errors.has('email')">{{ errors.first("email") }}</div>
            </transition>
          </div>
          <div class="form-group">
            <label for="exampleFormControlInput2">الاسم كامل</label>
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput2"
              v-model="formData.fullName"
            />
          </div>
          <div class="form-group">
            <label for="exampleFormControlInput3">رقم الجوال *</label>
            <input
              type="text"
              name="phone"
              class="form-control"
              id="exampleFormControlInput3"
              v-validate="{ required: true, regex: /^([0-9]+)$/ }"
              v-model="formData.phoneNum"
            />
            <transition
              name="error-anim"
              enter-active-class="animated tada"
              leave-active-class="animated fadeOutDown"
            >
              <div v-if="errors.has('phone')">{{ errors.first("phone") }}</div>
            </transition>
          </div>

          <div class="form-group">
            <label for="exampleFormControlInput3">عنوان الرسالة *</label>
            <input
              type="text"
              name="subject"
              class="form-control"
              id="exampleFormControlInput3"
              v-validate="'required'"
              v-model="formData.subject"
            />
            <transition
              name="error-anim"
              enter-active-class="animated tada"
              leave-active-class="animated fadeOutDown"
            >
              <div v-if="errors.has('subject')">
                {{ errors.first("subject") }}
              </div>
            </transition>
          </div>

          <div class="form-group">
            <label for="exampleFormControlTextarea1">الرسالة *</label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              name="message"
              rows="3"
              v-validate="'required'"
              v-model="formData.msg"
            ></textarea>
            <transition
              name="error-anim"
              enter-active-class="animated tada"
              leave-active-class="animated fadeOutDown"
            >
              <div v-if="errors.has('message')">
                {{ errors.first("message") }}
              </div>
            </transition>
          </div>
          <button
            class="alsdi-button"
            @click.prevent="sendEmail()"
            :disabled="isDisabled"
          >
            ارسل
            <div class="sending-container" v-if="isSending">
              <div class="c1"></div>
              <div class="c2"></div>
            </div>
          </button>
        </form>
      </div>
      <div
        class="contact-us-tab info-section container"
        v-show="activeTab === 2"
      >
        <div class="d-flex align-items-center justify-content-center h-100 contact-info">
          <div class="text-center">
            <h3><i class="fas fa-phone-volume"></i> ارقام هواتفنا</h3>
            <p>
              {{ comingData.telephone_number1 }} -
              {{ comingData.telephone_number2 }}
            </p>
            <br />
            <h3><i class="far fa-envelope"></i> عنوان الايميل</h3>
            <a :href="`mailto:${comingData.email}`">
              <p>{{ comingData.email }}</p>
            </a>
            <br />
            <h3><i class="fas fa-map-marker-alt"></i> العنوان</h3>
            <p>{{ comingData.address }}</p>
            <br />
            <h3><i class="fas fa-globe"></i> الموقع</h3>
            <p><a href="/">www.alsdi.com</a></p>
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
import axios from "axios";
import { BASE_API_LANGUAGE } from "./../../BASE_DATA";

export default {
  name: "contact-us",
  props: ["comingData"],
  data() {
    return {
      activeTab: 1,
      formData: {
        email: "",
        fullName: "",
        phoneNum: "",
        subject: "",
        msg: ""
      },
      sent: false,
      isSending: false,
      isDisabled: false
    };
  },
  methods: {
    makeActive(section_tab) {
      this.activeTab = section_tab;
    },
    sendEmail() {
      this.$validator.validateAll().then(result => {
        if (result) {
          // Settings for sending process like disable button, show loading.
          this.sendingProcessSettings();
          // Send message using API endpoint.
          axios
            .post(BASE_API_LANGUAGE.ar + "sendmail/", this.formData)
            .then(res => {
              console.log(res);
              // Reset Form.
              this.resetForm();
              // Show sent message.
              this.showSentMessage();
            })
            .catch(err => {
              console.log(err);
            });
        } else {
          console.log("Error !!");
        }
      });
    },
    resetForm() {
      this.formData.email = "";
      this.formData.fullName = "";
      this.formData.phoneNum = "";
      this.formData.msg = "";
      this.$validator.reset();
    },
    showSentMessage() {
      this.sent = true;
      this.isSending = false;
      this.isDisabled = false;
    },
    sendingProcessSettings() {
      this.isSending = true;
      this.isDisabled = true;
    }
  }
};
</script>


<style lang="scss">
@import "@/assets/_colors.scss";
@import "@/assets/_alsdi-framework.scss";
@import url("https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css");

.alsdi-contact-us-tab {
  background-color: $alsdi-black;
  color: $alsdi-white;
  padding: 20px;
  overflow-y: hidden;

  .contact-us-tab {
    position: relative;

    .contact-info {
      a {
        text-decoration: none;
        color: $alsdi-white;
        &:hover {
          color: $alsdi-gold;
        }
      }
    }

    .sent-message-wrapper {
      position: absolute;
      max-width: 100%;
      min-width: 100%;
      max-height: 100%;
      min-height: 100%;
      background-color: $alsdi-black;
      z-index: 1;
    }
    h3 {
      display: inline-block;
      &::after {
        content: "";
        display: block;
        width: 0;
        margin-top: 10px;
        height: 2px;
        background: $alsdi-white;
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
    max-width: 600px;

    .invalid + div,
    .valid + div {
      background-color: #eb4d4b;
      color: white;
      font-weight: bold;
      padding: 10px;
      display: inline-block;
      position: relative;
      bottom: 10px;
    }
    .valid + div {
      background-color: #eb4d4b;
    }
  }

  .form-info-control {
    & > div {
      background-color: $alsdi-black;
      color: $alsdi-gold;
      border: 2px solid $alsdi-gold;
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
          color: $alsdi-white;
          right: -20px;
        }
      }
    }
  }
  .alsdi-button {
    position: relative;
    background-color: $alsdi-black;
    color: $alsdi-gold;
    &:hover {
      background-color: $alsdi-gold;
      color: $alsdi-black;
    }
    &:focus {
      outline: none;
    }
  }
}
</style>

