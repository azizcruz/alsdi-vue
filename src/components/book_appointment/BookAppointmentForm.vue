<template>
  <div class="alsdi-contact-us-tab">
    <div class="f-flex flex-column justify-content-center">
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
        <form data-aos="fade-up" data-aos-duration="1000" :data-aos-delay="300">
          <h3 class="text-center" data-aos="fade-up" data-aos-duration="1000">
          </h3>
          <fieldset>
              <legend>
                  أسئلة شخصية وعن المشروع
              </legend>
              <div
            data-aos="fade-left"
            data-aos-duration="1000"
            :data-aos-delay="600"
          >
            تعني حقول الزامية *
          </div>
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
              name="fullName"
              class="form-control"
              id="exampleFormControlInput2"
              v-validate="'required'"
              v-model="formData.fullName"
            />
            <transition
              name="error-anim"
              enter-active-class="animated tada"
              leave-active-class="animated fadeOutDown"
            >
              <div v-if="errors.has('fullName')">
                {{ errors.first("fullName") }}
              </div>
            </transition>
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
            <label for="exampleFormControlInput3">عنوان المشروع *</label>
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
            <label for="exampleFormControlInput3">نوع المشروع *</label>
            <select class="custom-select" v-model="formData.projectType">
              <option value="">--- اختر نوع المشروع ---</option>
              <option value="villa">فيلا</option>
              <option value="chalet">شاليه</option>
              <option value="restaurants">مطاعم</option>
              <option value="shop">محل</option>
              <option value="offices">مكاتب</option>
              <option value="resident-bulding">مبنى سكني</option>
              <option value="mall">مجمع تجاري</option>
              <option value="medical-clinics">عيادات طبية</option>
            </select>
          </div>

          <div class="form-group">
            <label for="exampleFormControlInput3">نطاق التسعير *</label>
            <select class="custom-select" v-model="formData.quoutRange">
              <option value="">--- اختر نطاق التسعير ---</option>
              <option value="1">هيكل فقط</option>
              <option value="2">هيكل مع الخدمات</option>
              <option value="3">على المفتاح</option>
            </select>
          </div>

          <div class="form-group" v-show="formData.quoutRange === '3'">
            <label
              for="exampleFormControlInput3"
              class="text-info font-weight-bold"
              >في حال كان نطاق التسعير على المفتاح يرجى اختيار مستوى
              التشطيب*</label
            >
            <select class="custom-select" v-model="formData.level">
              <option value="">--- اختر مستوى التشطيب ---</option>
              <option value="1">تجاري</option>
              <option value="2">متوسط</option>
              <option value="3">عالي</option>
            </select>
          </div>
          </fieldset>

          <fieldset>
              <legend>المستندات المطلوبة</legend>
              <div class="form-group file-upload">
            <p>المخططات المعمارية*</p>
            <div class="custom-file">
              <input
                type="file"
                class="custom-file-input"
                id="inputGroupFile01"
              />
              <label class="custom-file-label" for="inputGroupFile01"
                >اختر ملف من جهازك</label
              >
            </div>
          </div>

          <div class="form-group file-upload">
            <p>المخططات الانشائية*</p>
            <div class="custom-file">
              <input
                type="file"
                class="custom-file-input"
                id="inputGroupFile01"
              />
              <label class="custom-file-label" for="inputGroupFile01"
                >اختر ملف من جهازك</label
              >
            </div>
          </div>

          <div class="form-group file-upload">
            <p>جداول الكميات*</p>
            <div class="custom-file">
              <input
                type="file"
                class="custom-file-input"
                id="inputGroupFile01"
              />
              <label class="custom-file-label" for="inputGroupFile01"
                >اختر ملف من جهازك</label
              >
            </div>
          </div>

          <div class="form-group file-upload">
            <p>المواصفات الفنية*</p>
            <div class="custom-file">
              <input
                type="file"
                class="custom-file-input"
                id="inputGroupFile01"
              />
              <label class="custom-file-label" for="inputGroupFile01"
                >اختر ملف من جهازك</label
              >
            </div>
          </div>

          <div class="form-group file-upload">
            <p>رخصة البناء*</p>
            <div class="custom-file">
              <input
                type="file"
                class="custom-file-input"
                id="inputGroupFile01"
              />
              <label class="custom-file-label" for="inputGroupFile01"
                >اختر ملف من جهازك</label
              >
            </div>
          </div>
          </fieldset>

          <div class="form-group">
            <label for="exampleFormControlTextarea1">رسالة اضافية تود ارسالها لنا</label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              name="message"
              rows="3"
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
        projectType: "",
        quoutRange: "",
        level: 0,
        subject: "",
        msg: ""
      },
      sent: false,
      isSending: false,
      isDisabled: false
    };
  },
  methods: {
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

