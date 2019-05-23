<template>
    <div class="alsdi-slider" :style="{height: sliderHeight}">
        <div class="slick-slider">
            <div class="alsdi-slider-image" :style="{backgroundImage: `url('${require('@/assets/about-img01.jpeg')}')` }"></div>
            <div class="alsdi-slider-image" :style="{backgroundImage: `url('${require('@/assets/design01.jpg')}')` }"></div>
            <div class="alsdi-slider-image" :style="{backgroundImage: `url('${require('@/assets/img03.jpg')}')` }"></div>
            <div class="alsdi-slider-image" :style="{backgroundImage: `url('${require('@/assets/img05.jpg')}')` }"></div>
        </div>
        
    </div>
</template>

<script>
import Slick from 'vue-slick';
export default {
    components: {
        Slick,
    },
    props: [
        'sliderHeight',
        'slideShows'
    ],
    mounted() {
        $('.slick-slider').not('.slick-initialized').slick(this.slickOptions)
    },
     data() {
            return {
                    slickOptions: {
                        //options can be used from the plugin documentation
                        slidesToShow: this.slideShows,
                        infinite: true,
                        accessibility: true,
                        adaptiveHeight: false,
                        arrows: true,
                        draggable: true,
                        edgeFriction: .20,
                        autoplay: true,
                        autoplaySpeed: 4000,
                        swipe: true,
                        rtl: false,
                        prevArrow: '<span class="slick-prev alsdi-slick-arrows alsdi-prev-arrow"><i class="fas fa-chevron-left fa-3x"></i></span>',
                        nextArrow: '<span class="slick-prev alsdi-slick-arrows alsdi-next-arrow"><i class="fas fa-chevron-right fa-3x"></i></span>',
                    }
            }
    },
    // All slick methods can be used too, example here
    methods: {
            next() {
                    this.$refs.slick.next()
            },
            prev() {
                    this.$refs.slick.prev()
            },
            reInit() {
                    // Helpful if you have to deal with v-for to update dynamic lists
                    this.$refs.slick.reSlick()
            }
    }
}
</script>

<style lang="scss">
@import url('https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.css');
@import "@/assets/_alsdi-framework.scss";

.alsdi-slider {
    .slick-slider {
    max-width: 100%;
    height: 100%;

    .slick-arrow {
       
    }

    .alsdi-slider-image {
        background-size: cover;
        background-repeat: no-repeat;
        background-position: 50%;
        height: 100%;
    }

    .slick-list,
    .slick-track {
        height: 100%;
    }

    .slick-slide {
        & > div {
            height: 100%;
        }
    }

    
    }
}
</style>

