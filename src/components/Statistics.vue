<template>
   <div class="alsdi-statistics text-center">
       <h1 class="alsdi-header pb-2" data-aos="fade-up" data-aos-duration="1000">{{ comingData.section_header }}</h1>
       <Timeline :comingData="comingData.blocks" />
   </div>
</template>

<script>
import Timeline from '@/components/Timeline'
import {mapGetters } from "vuex";

export default {
    components: {
        Timeline
    },
    props: [
        'comingData'
    ]
}
</script>

<style lang="scss" scoped>
@import "@/assets/_alsdi-framework.scss";

</style>
