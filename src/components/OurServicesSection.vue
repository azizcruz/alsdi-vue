<template>
  <div class="our-services">
    <hooper
      :vertical="true"
      style="height: 100vh"
      :itemsToShow="1"
      :centerMode="true"
      :transition="500"
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
      <hooper-pagination slot="hooper-addons"></hooper-pagination>
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
  }
};
</script>

<style lang="scss">
@import "@/assets/_colors.scss";
@import "@/assets/_alsdi-framework.scss";
@import url("https://use.fontawesome.com/releases/v5.8.2/css/all.css");

.our-services {
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

