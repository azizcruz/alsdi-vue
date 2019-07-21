<template>
  <div class="alsdi-booking-form">
    <div class="f-flex flex-column justify-content-center">
      <div class="contact-us-tab contact-form container">
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
        <form
          data-aos="fade-up"
          data-aos-duration="1000"
          :data-aos-delay="300"
          :class="{ sentStyle: sent }"
        >
          <h3
            class="text-center"
            data-aos="fade-up"
            data-aos-duration="1000"
          ></h3>
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
            <br />
            <div class="form-group">
              <label for="exampleFormControlInput1">ايميل *</label>
              <input
                type="email"
                name="email"
                class="form-control"
                id="exampleFormControlInput0"
                placeholder="name@example.com"
                v-model="formData.email"
                v-validate="'required|email'"
              />
              <transition
                name="error-anim"
                enter-active-class="animated tada"
                leave-active-class="animated fadeOutDown"
              >
                <div v-if="errors.has('email')">
                  {{ errors.first("email") }}
                </div>
              </transition>
            </div>
            <div class="form-group">
              <label for="exampleFormControlInput0">الاسم كامل</label>
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
                id="exampleFormControlInput1"
                v-validate="{ required: true, regex: /^([0-9]+)$/ }"
                v-model="formData.phoneNum"
              />
              <transition
                name="error-anim"
                enter-active-class="animated tada"
                leave-active-class="animated fadeOutDown"
              >
                <div v-if="errors.has('phone')">
                  {{ errors.first("phone") }}
                </div>
              </transition>
            </div>

            <div class="form-group">
              <label for="exampleFormControlInput1">عنوان المشروع *</label>
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
              <v-select
                :options="projectTypes"
                name="projType"
                v-validate="'required'"
                class="alsdi-custom-select"
                v-model="formData.projectType"
              ></v-select>
              <transition
                name="error-anim"
                enter-active-class="animated tada"
                leave-active-class="animated fadeOutDown"
              >
                <div v-if="errors.has('projType')" class="selectValidationMsg">
                  {{ errors.first("projType") }}
                </div>
              </transition>
            </div>

            <div class="form-group">
              <label for="exampleFormControlInput3">نطاق التسعير *</label>
              <v-select
                v-model="formData.quoutRange"
                name="projQuot"
                v-validate="'required'"
                :options="quoteRangeList"
                class="alsdi-custom-select"
              >
              </v-select>
              <transition
                name="error-anim"
                enter-active-class="animated tada"
                leave-active-class="animated fadeOutDown"
              >
                <div v-if="errors.has('projQuot')" class="selectValidationMsg">
                  {{ errors.first("projQuot") }}
                </div>
              </transition>
            </div>

            <div
              class="form-group"
              v-show="formData.quoutRange === 'على المفتاح'"
            >
              <label
                for="exampleFormControlInput3"
                class="text-info font-weight-bold"
                >في حال كان نطاق التسعير على المفتاح يرجى اختيار مستوى
                التشطيب*</label
              >
              <v-select
                class="alsdi-custom-select"
                name="level"
                v-validate="'required'"
                :options="levelList"
                v-model="formData.level"
              >
              </v-select>
              <transition
                name="error-anim"
                enter-active-class="animated tada"
                leave-active-class="animated fadeOutDown"
              >
                <div v-if="errors.has('level')" class="selectValidationMsg">
                  {{ errors.first("level") }}
                </div>
              </transition>
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
                  name="file1"
                  @change="onSelectedFile"
                  data-vv-as="file"
                  v-validate="'size:10500'"
                />
                <p v-if="formData.file1">
                  <i class="fas fa-check-circle text-success"></i>
                </p>
                <p v-else>
                  <i class="fas fa-times text-danger"></i>
                </p>
                <transition
                  name="error-anim"
                  enter-active-class="animated tada"
                  leave-active-class="animated fadeOutDown"
                >
                  <div v-if="errors.has('file1')" class="fileValidationMsg">
                    {{ errors.first("file1") }}
                  </div>
                </transition>
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
                  id="inputGroupFile02"
                  name="file2"
                  v-validate="'required|size:10500'"
                  @change="onSelectedFile"
                />
                <p v-if="formData.file2">
                  <i class="fas fa-check-circle text-success"></i>
                </p>
                <p v-else>
                  <i class="fas fa-times text-danger"></i>
                </p>
                <transition
                  name="error-anim"
                  enter-active-class="animated tada"
                  leave-active-class="animated fadeOutDown"
                >
                  <div v-if="errors.has('file2')" class="fileValidationMsg">
                    {{ errors.first("file2") }}
                  </div>
                </transition>
                <label class="custom-file-label" for="inputGroupFile02"
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
                  name="file3"
                  id="inputGroupFile03"
                  v-validate="'required|size:10500'"
                  @change="onSelectedFile"
                />
                <p v-if="formData.file3">
                  <i class="fas fa-check-circle text-success"></i>
                </p>
                <p v-else>
                  <i class="fas fa-times text-danger"></i>
                </p>
                <transition
                  name="error-anim"
                  enter-active-class="animated tada"
                  leave-active-class="animated fadeOutDown"
                >
                  <div v-if="errors.has('file3')" class="fileValidationMsg">
                    {{ errors.first("file3") }}
                  </div>
                </transition>
                <label class="custom-file-label" for="inputGroupFile03"
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
                  name="file4"
                  v-validate="'required|size:10500'"
                  @change="onSelectedFile"
                  id="file04"
                />
                <p v-if="formData.file4">
                  <i class="fas fa-check-circle text-success"></i>
                </p>
                <p v-else>
                  <i class="fas fa-times text-danger"></i>
                </p>
                <transition
                  name="error-anim"
                  enter-active-class="animated tada"
                  leave-active-class="animated fadeOutDown"
                >
                  <div v-if="errors.has('file4')" class="fileValidationMsg">
                    {{ errors.first("file4") }}
                  </div>
                </transition>
                <label class="custom-file-label" for="file04"
                  >اختر ملف من جهازك</label
                >
              </div>
            </div>

            <div class="form-group file-upload">
              <p>رخصة البناء*</p>
              <div class="custom-file">
                <input
                  type="file"
                  name="file5"
                  class="custom-file-input"
                  id="inputGroupFile05"
                  v-validate="'required|size:10500'"
                  @change="onSelectedFile"
                />
                <p v-if="formData.file5">
                  <i class="fas fa-check-circle text-success"></i>
                </p>
                <p v-else>
                  <i class="fas fa-times text-danger"></i>
                </p>
                <transition
                  name="error-anim"
                  enter-active-class="animated tada"
                  leave-active-class="animated fadeOutDown"
                >
                  <div v-if="errors.has('file5')" class="fileValidationMsg">
                    {{ errors.first("file5") }}
                  </div>
                </transition>
                <label class="custom-file-label" for="inputGroupFile05"
                  >اختر ملف من جهازك</label
                >
              </div>
            </div>
          </fieldset>

          <div class="form-group">
            <label for="exampleFormControlTextarea1"
              >رسالة اضافية تود ارسالها لنا</label
            >
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              name="message"
              rows="3"
              v-model="formData.msg"
            ></textarea>
          </div>
          <button
            class="alsdi-button"
            @click.prevent="sendEmail()"
            :disabled="isDisabled"
          >
            ارسل
          </button>

          <div
            class="progressSection d-flex flex-column text-center mt-3"
            v-if="isUploading"
          >
            <p>{{ uploadingSendingMessage }}</p>
            <div class="progressBar">
              <div
                class="progressBar__fill"
                :style="{ width: progress_bar_counter + '%' }"
              ></div>
            </div>
          </div>
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
  mounted() {
    setInterval(() => {
      this.disableSendBtnUntilFieldsAreFilled();
    }, 1500);
  },
  data() {
    return {
      MAX_SIZE: 10,
      projectTypes: [
        "فيلا",
        "شاليه",
        "مطاعم",
        "محل",
        "مكاتب",
        "مبنى سكني",
        "مجمع تجاري",
        "عيادات طبية"
      ],
      quoteRangeList: ["هيكل فقط", "هيكل مع الخدمات", "على المفتاح"],
      levelList: ["تجاري", "متوسط", "عالي"],
      progress_bar_counter: 0,
      uploadingSendingMessage: "جاري الرفع",
      isUploading: false,
      activeTab: 1,
      formData: {
        email: "",
        fullName: "",
        phoneNum: "",
        projectType: "",
        quoutRange: "",
        level: 0,
        subject: "",
        msg: "",

        file1: null,
        file2: null,
        file3: null,
        file4: null,
        file5: null
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
          this.isDisabled = true;
          const fd = new FormData();
          for (let key in this.formData) {
            if (key.startsWith("file") && this.formData[key]) {
              fd.append(key, this.formData[key], this.formData[key].name);
            } else {
              fd.append(key, this.formData[key]);
            }
          }

          this.isUploading = true;
          this.isDisabled = true;
          axios
            .post(BASE_API_LANGUAGE.ar + "newbooking/", fd, {
              onUploadProgress: uploadEvent => {
                if (
                  Math.round((uploadEvent.loaded / uploadEvent.total) * 100) >
                  75
                ) {
                  this.progress_bar_counter = Math.round(
                    (uploadEvent.loaded / uploadEvent.total) * 100
                  );
                  this.uploadingSendingMessage = "جاري الرفع...";
                }
              }
            })
            .then(res => {
              // Reset Form.
              this.resetForm();
              this.progress_bar_counter = 100;
              this.uploadingSendingMessage = "تم الارسال";
              // Show sent message.
              this.showSentMessage();
            })
            .catch(err => {
              console.log(err);
              this.uploadingSendingMessage = "حدث خطأ ما، حاول مجددا";
            });
        }
      });
    },
    onSelectedFile(e) {
      if (e.target.files[0] !== undefined) {
        if (this.formatFileSize(e.target.files[0])) {
          let size = this.formatFileSize(e.target.files[0].size).split(" ")[0];
          let unit = this.formatFileSize(e.target.files[0].size).split(" ")[1];
          let file = e.target.files[0];
          if (this.checkFileSize(size, unit)) {
            this.formData[e.target.name] = file;
            console.log(e.target);
          } else {
            console.log("file is big");
          }
        }
      } else {
        this.formData[e.target.name] = "";
      }
    },
    resetForm() {
      this.formData.email = "";
      this.formData.fullName = "";
      this.formData.level = "";
      this.formData.phoneNum = "";
      this.formData.msg = "";
      this.formData.projectType = "";
      this.formData.quoutRange = "";
      this.formData.subject = "";
      this.formData.file1 = "";
      this.formData.file2 = "";
      this.formData.file3 = "";
      this.formData.file4 = "";
      this.formData.file5 = "";

      this.$validator.reset();
    },
    disableSendBtnUntilFieldsAreFilled() {
      if (
        this.formData.email !== "" &&
        this.formData.fullName !== "" &&
        this.formData.phoneNum !== "" &&
        this.formData.msg !== "" &&
        this.formData.projectType !== "" &&
        this.formData.quoutRange !== "" &&
        this.formData.file1 !== null &&
        this.formData.file2 !== null &&
        this.formData.file3 !== null &&
        this.formData.file4 !== null &&
        this.formData.file5 !== null
      ) {
        this.isDisabled = false;
      } else {
        this.isDisabled = true;
      }
    },
    showSentMessage() {
      this.sent = true;
    },
    sendingProcessSettings() {},
    formatFileSize(bytes, decimalPoint) {
      if (bytes == 0) return "0 Bytes";
      var k = 1000,
        dm = decimalPoint || 2,
        sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
        i = Math.floor(Math.log(bytes) / Math.log(k));
      return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
    },
    checkFileSize(size, unit) {
      if (unit !== "KB") {
        if (size > this.MAX_SIZE) {
          return false;
        }
      } else {
        return true;
      }
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/_colors.scss";
@import "@/assets/_alsdi-framework.scss";
@import url("https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css");
@import "vue-select/src/scss/vue-select.scss";

.alsdi-booking-form {
  background-color: $alsdi-black;
  color: $alsdi-white;
  padding: 20px;
  overflow-y: hidden;

  .sentStyle {
    height: 700px;
    overflow: hidden;
  }

  .alsdi-custom-select {
    background: transparent;
    border: 1px solid $alsdi-gold;
    color: $alsdi-gold !important;
    text-transform: lowercase;
    font-variant: small-caps;

    .vs__dropdown-toggle {
      cursor: pointer;
    }

    .vs__open-indicator {
      fill: $alsdi-gold;
    }
    .vs__selected {
      color: $alsdi-gold;
    }

    .vs__clear {
      fill: $alsdi-gold;
      margin-left: 5px;
    }

    [type="search"] {
      cursor: pointer;
    }
  }

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

.form-group {
  .invalid + div,
  .valid + div,
  .selectValidationMsg,
  .fileValidationMsg {
    background-color: #eb4d4b;
    color: white;
    font-weight: bold;
    padding: 10px;
    display: inline-block;
    position: relative;
    z-index: 2;
    bottom: 10px;
  }
  .valid + div,
  .selectValidationMsg,
  .fileValidationMsg {
    background-color: #eb4d4b;
  }
}

/*  Progress Bar */
.progressBar {
  position: relative;
  width: 50%;
  margin: 0 auto;
  background-color: gray;
  height: 7px;
}

.progressBar__fill {
  position: absolute;
  left: 0;
  background-color: gold;
  height: 100%;
  width: 0;
  border-radius: 3px;
}
</style>
