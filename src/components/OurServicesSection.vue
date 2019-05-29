<template>
  <div class="our-services">
    <ul class="test">
      <li v-for="(data, index) in someData" :class="data.active" :key="index" @click="slideTo(index)">
        <i :class="data.icon"></i>
      </li>
    </ul>
    <hooper
      :vertical="true"
      style="height: 100vh"
      :itemsToShow="1"
      :centerMode="true"
      :transition="500"
      ref="carousel"
      @slide="changeActive"
    >
      <slide>
        <div
          class="our-services-section d-flex flex-column"
          :style="{
            backgroundImage: `url('${require('@/assets/img08.jpeg')}')`
          }"
        >
          <div class="overlay"></div>
          <div
            class="image-section alsdi-shadow align-self-md-end"
            :style="{
              backgroundImage: `url('${require('@/assets/img02.jpg')}')`
            }"
          ></div>
          <div
            class="text-section d-flex flex-column justify-content-center alsdi-shadow text-right p-3"
          >
            <h1>تصميمات داخلية</h1>
            <p class="text-justify text-right">
              أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم
              فينايم,كيواس نوستريد أكسير سيتاشن يللأمكو لابورأس نيسي يت أليكيوب
              أكس أيا كوممودو كونسيكيوات . ديواس أيوتي أريري دولار إن
              ريبريهينديرأيت فوليوبتاتي فيلايت أيسسي كايلليوم دولار أيو فيجايت
              نيولا باراياتيور. أيكسسيبتيور ساينت أوككايكات كيوبايداتات نون
              بروايدينت ,سيونت ان كيولبا كيو أوفيسيا ديسيريونتموليت انيم أيدي
              ايست لابوريوم.
            </p>
          </div>
        </div>
      </slide>
      <slide>
        <div
          class="our-services-section d-flex flex-column"
          :style="{
            backgroundImage: `url('${require('@/assets/img09.jpeg')}')`
          }"
        >
          <div class="overlay"></div>
        <div
            class="image-section alsdi-shadow align-self-md-end"
            :style="{
              backgroundImage: `url('${require('@/assets/img03.jpg')}')`
            }"
          ></div>
          <div
            class="text-section d-flex flex-column justify-content-center alsdi-shadow text-right p-3"
          >
            <h1>تصميمات خارجية</h1>
            <p class="text-justify text-right">
              أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم
              فينايم,كيواس نوستريد أكسير سيتاشن يللأمكو لابورأس نيسي يت أليكيوب
              أكس أيا كوممودو كونسيكيوات . ديواس أيوتي أريري دولار إن
              ريبريهينديرأيت فوليوبتاتي فيلايت أيسسي كايلليوم دولار أيو فيجايت
              نيولا باراياتيور. أيكسسيبتيور ساينت أوككايكات كيوبايداتات نون
              بروايدينت ,سيونت ان كيولبا كيو أوفيسيا ديسيريونتموليت انيم أيدي
              ايست لابوريوم.
            </p>
          </div>
        </div>
      </slide>
      <slide>
        <div
          class="our-services-section d-flex flex-column"
          :style="{
            backgroundImage: `url('${require('@/assets/img10.jpeg')}')`
          }"
        >
          <div class="overlay"></div>
        <div
            class="image-section alsdi-shadow align-self-md-end"
            :style="{
              backgroundImage: `url('${require('@/assets/img04.jpg')}')`
            }"
          ></div>
          <div
            class="text-section d-flex flex-column justify-content-center alsdi-shadow text-right p-3"
          >
            <h1>هيكلة المشروع</h1>
            <p class="text-justify text-right">
              أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم
              فينايم,كيواس نوستريد أكسير سيتاشن يللأمكو لابورأس نيسي يت أليكيوب
              أكس أيا كوممودو كونسيكيوات . ديواس أيوتي أريري دولار إن
              ريبريهينديرأيت فوليوبتاتي فيلايت أيسسي كايلليوم دولار أيو فيجايت
              نيولا باراياتيور. أيكسسيبتيور ساينت أوككايكات كيوبايداتات نون
              بروايدينت ,سيونت ان كيولبا كيو أوفيسيا ديسيريونتموليت انيم أيدي
              ايست لابوريوم.
            </p>
          </div>
        </div>
      </slide>
    </hooper>
  </div>
</template>


<script>
import { Hooper, Slide, Pagination as HooperPagination } from "hooper";
import "hooper/dist/hooper.css";

export default {
  props: {
    image: String
  },
  components: {
    Hooper,
    Slide,
    HooperPagination
  },
   data () {
    return {
      carouselData: 0,
      someData: [
        {
          icon: "fas fa-home fa-2x",
          active: "active"
        },
        {
          icon: "fas fa-ruler-horizontal fa-2x",
          active: false
        },
        {
          icon: "fab fa-keycdn fa-2x",
          active: false
        },
      ]
    }
  },
  methods: {
    slideTo(index) {
      this.$refs.carousel.slideTo(index);
    },
    changeActive(data) {
      let currentElement = $('.test').children().eq(data.currentSlide);
      $(".test li.active").removeClass('active')
      currentElement.addClass('active')
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/_colors.scss";
@import "@/assets/_alsdi-framework.scss";

.our-services {
  .test {
    position: fixed;
    left: 0;
    top: 44%;
    background-color: #fff;
    padding: 10px;
    z-index: 100000;

    li {
      cursor: pointer;
      margin-bottom: 10px;
      &.active {
        i {
          color: $alsdi-gold;
        }
      }
    }
  }
  .our-services-section {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 100%;
    position: relative;
    padding: 10px;

    .overlay {
      background-color: rgba(0, 0, 0, 0.3);
    }

    .image-section {
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      height: 50%;
      width: 50%;
      @media screen and (max-width: 768px) {
        width: 100%;
      }
      border-radius: 10px;
    }
    .text-section {
      background-color: $alsdi-white;
      height: 50%;
      width: 50%;
      @media screen and (max-width: 768px) {
        width: 100%;
        margin-top: 10px;
      }
      border-radius: 10px;
    }
  }
}
</style>

