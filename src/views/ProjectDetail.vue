<template>
    <div class="project-detail">
        <div :class="{'isLoading': isLoading, 'spinner': true}"></div>
        <ProjectDetailComponent :projectID="$route.params.id" />
    </div>
</template>

<script>
import ProjectDetailComponent from '@/components/ProjectDetailComponent'
import { mapGetters } from 'vuex'

export default {
    name: "project-detail",
    components: {
        ProjectDetailComponent
    },
  computed: {
    ...mapGetters(["isLoading"])
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/_alsdi-framework.scss";

</style>

