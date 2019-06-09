<template>
    <div class="project-detail">
        <ProjectDetailComponent :projectID="$route.params.id" />
    </div>
</template>

<script>
import ProjectDetailComponent from '@/components/ProjectDetailComponent'
export default {
    name: "project-detail",
    components: {
        ProjectDetailComponent
    }
}
</script>

<style lang="scss" scoped>

</style>

