<template>
        <div class="alsdi-vue-slider">
        <carousel>
            <slide>
                Slide 1 Content
            </slide>
            <slide>
                Slide 2 Content
            </slide>
            <slide>
                Slide 1 Content
            </slide>
            <slide>
                Slide 2 Content
            </slide>
        </carousel>
        </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
export default {
    components: {
        Carousel,
        Slide
    }
}
</script>

<style scoped>
.alsdi-vue-slider {
    background-color: #fff;
}
</style>

