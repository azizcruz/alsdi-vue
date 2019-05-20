<template>
   <div class="alsdi-statistics text-center">
       <h1 class="alsdi-header pb-2">احصائياتنا</h1>
       <Timeline />
   </div>
</template>

<script>
import Timeline from '@/components/Timeline'
export default {
    components: {
        Timeline
    }
}
</script>

<style lang="scss" scoped>
@import "@/assets/_alsdi-framework.scss";

</style>
