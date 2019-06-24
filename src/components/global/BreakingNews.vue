<template>
  <div class="ticker box">
    <article class="media d-flex align-items-stretch">
      <div class="media-content text-right">
        <transition name="fade" tag="div" mode="out-in">
          <div class="news" href="#" v-if="news[0]" key="0">
            وروت آدمز الآثار السلبية الناتجة عن هذه التجربة مثل الكوابيس والأحلام المفزعة
          </div>
          <div class="news" href="#" v-if="news[1]" key="1">ث، مشيرة إلى أنها فتحت تحقيقاً بالأم</div>
          <div class="news" href="#" v-if="news[2]" key="2">
            وقالت آدمز إنها استيقظت من نومها لتجد نفسها وحيدة في مكان بارد مظلم، وما زال
          </div>
        </transition>
      </div>
      <div class="breaking-news d-flex align-items-center">
        <div class="time pl-2"
          >{{ getCurrentTime() }}<span class="pl-2 pr-2 time-sep">|</span></div>اخر الاخبار
      </div>
    </article>
  </div>
</template>

<script>
export default {
  name: "breaking-news",
  data() {
    return {
      tickerLocation: 0,
      news: [true, false, false]
    };
  },
  created: function() {
    setInterval(this.updateTicker, 5000);
  },
  methods: {
    updateTicker: function() {
      var removed = this.news.pop();
      this.news.unshift(removed);
    },
    getCurrentTime: function() {
        var today = new Date();
        var ampm = today.getHours() >= 12 ? 'pm' : 'am';
        var time = (today.getHours() % 12) + ":" + today.getMinutes() + " " + ampm;
        return time;
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/_colors.scss";

.breaking-news {
  background-color: $alsdi-gold;
  color: $alsdi-black;
  padding: 5px;
  flex: 0 1 180px;
}

.media-content {
  flex: 1;
  padding: 5px;
  text-align: left;
  max-width: 100%;
  word-wrap: break-word;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
}

.time {
  color: $alsdi-white;

  .time-sep {
    bottom: 1px;
    position: relative;
  }
}

.news {
  color: $alsdi-grey;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
