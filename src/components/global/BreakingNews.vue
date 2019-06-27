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
          {{ currentTime }}<span class="pl-2 pr-2 time-sep">|</span>
        </div>
        اخر الاخبار
      </div>
    </article>
  </div>
</template>

<script>
import axios from "axios"
import { setInterval } from 'timers';

export default {
  name: "breaking-news",
  props: ["latestNews"],
  data() {
    return {
      tickerLocation: 0,
      news: [true, ...Array(this.latestNews.length - 1).fill(false)],
      currentTime: null
    };
  },
  created: function() {
    setInterval(this.updateTicker, 5000);
    this.getCurrentTime()
    setInterval(this.getCurrentTime, 60000)
  },
  methods: {
    updateTicker: function() {
      var removed = this.news.pop();
      this.news.unshift(removed);
    },
    getCurrentTime: function() {
      axios.get("https://worldtimeapi.org/api/timezone/Asia/Kuwait")
      .then(d => {
        this.extractCurrentTime(d.data.datetime)
      })
      .catch(err => {
        this.currentTime = "00:00"
        console.log(err)
      })
    },
    extractCurrentTime(timestamp) {
        var time = timestamp.split("T")
        time = time[1].split(".")[0]
        time = time.substring(0, 5)
        this.currentTime = time  
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
