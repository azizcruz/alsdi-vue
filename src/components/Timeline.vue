<template>
  <div class="alsdi-timeline">
    <section class="timeline">
      <ul>
        <li>
          <div>
            <div class="discovery">
              <h1>Discovery</h1>
              <p>
                Laws of motion
              </p>
            </div>
          </div>
        </li>
        <li>
          <div>
            <div class="discovery">
              <h1>Discovery</h1>
              <p>
                Laws of motion
              </p>
            </div>
          </div>
        </li>
        <li>
          <div>
            <div class="discovery">
              <h1>Discovery</h1>
              <p>
                Laws of motion
              </p>
            </div>
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  mounted() {
    var items = document.querySelectorAll(".alsdi-timeline .timeline li");

    function isElementInViewport(el) {
      var rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <=
          (window.innerWidth || document.documentElement.clientWidth)
      );
    }

    function callbackFunc() {
      for (var i = 0; i < items.length; i++) {
        if (isElementInViewport(items[i])) {
          if (!items[i].classList.contains("in-view")) {
            items[i].classList.add("in-view");
          }
        } else if (items[i].classList.contains("in-view")) {
          items[i].classList.remove("in-view");
        }
      }
    }

    window.addEventListener("load", callbackFunc);
    window.addEventListener("scroll", callbackFunc);
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/_colors.scss";

.alsdi-timeline {
  $primary-color: #fff;
  $background-color: linear-gradient(54deg, #9164ff, #8bfff4);
  $text-color: #3c3f64;

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font: normal 16px/1.5 "Titillium Web", sans-serif;
    background: $alsdi-black;
    color: $alsdi-gold;
    overflow-x: hidden;
    padding-bottom: 50px;
  }

  // STYLING
  .timeline {
    ul {
      li {
        list-style-type: none;
        position: relative;
        width: 6px;
        margin: 0 auto;
        padding-top: 50px;
        background: $alsdi-black;
        &::after {
          content: "";
          position: absolute;
          left: 50%;
          bottom: 0;
          transform: translateX(-50%) rotate(45deg);
          width: 20px;
          height: 20px;
          z-index: 2;
          background: $alsdi-gold;
        }
        div {
          position: relative;
          bottom: 0;
          width: 400px;
          padding: 20px;
          background: $alsdi-gold;
          border-radius: 5px;
          display: flex;
          align-items: center;
          time {
            position: absolute;
            background: $alsdi-black;
            width: 80px;
            height: 30px;
            top: -15px;
            border-radius: 5px;
            display: flex;
            justify-content: center;
            align-items: center;
            letter-spacing: 2px;
          }
          div {
            height: 100px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            p {
              text-align: center;
            }
          }
          .discovery {
            margin-right: 10px;
          }
          .scientist {
          }
        }
        &:nth-of-type(odd) {
          > div {
            left: 45px;
          }
        }
        &:nth-of-type(even) {
          > div {
            left: -439px;
          }
        }
      }
    }
  }

  // ANIMATION
  .timeline {
    ul {
      li {
        div {
          visibility: hidden;
          opacity: 0;
          transition: all 0.5s ease-in-out;
        }
        &:nth-of-type(odd) {
          div {
            transform: translate3d(100px, -10px, 0) rotate(10deg);
          }
        }
        &:nth-of-type(even) {
          div {
            transform: translate3d(-100px, -10px, 0) rotate(10deg);
          }
        }
        &.in-view {
          div {
            transform: none;
            visibility: visible;
            opacity: 1;
          }
        }
      }
    }
  }

  @media screen and (max-width: 900px) {
    .timeline {
      ul {
        li {
          div {
            width: 250px;
            flex-direction: column;
            div {
              width: 80%;
              margin: 10px;
            }
          }
          &:nth-of-type(even) {
            > div {
              left: -289px;
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 600px) {
    .timeline {
      ul {
        li {
          margin-left: 20px;
          div {
            width: calc(100vw - 91px);
          }
          &:nth-of-type(even) {
            > div {
              left: 45px;
            }
          }
        }
      }
    }
  }
}
</style>
