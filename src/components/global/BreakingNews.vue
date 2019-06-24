<template>
  <div class="ticker box">
    <article class="media d-flex align-items-stretch">
      <div class="media-content text-right">
        <transition name="fade" mode="out-in">
          <template v-for="(n, index) in latestNews">
            <div class="news" v-if="news[index]" :key="index">
              {{ n.title }}
            </div>
          </template>
        </transition>
      </div>
      <div class="breaking-news d-flex align-items-center">
        <div class="time pl-2">
          {{ getCurrentTime() }}<span class="pl-2 pr-2 time-sep">|</span>
        </div>
        اخر الاخبار
      </div>
    </article>
  </div>
</template>

<script>
export default {
  name: "breaking-news",
  props: ["latestNews"],
  data() {
    return {
      tickerLocation: 0,
      news: [true, ...Array(this.latestNews.length - 1).fill(false)]
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
      var time = today.getHours() + ":" + today.getMinutes();
      return time;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/_colors.scss";

.breaking-news {
  background-color: $alsdi-gold;
  color: $alsdi-black;
  padding: 5px;
  -webkit-box-flex: 0;
  -ms-flex: 0 1 160px;
  flex: 0 1 160px;
}

.media-content {
  -webkit-box-flex: 1;
  -ms-flex: 1;
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
