<template>
    <div class="our-service-header-image"
    :style="{
        backgroundImage: `url('${require('@/assets/our-service-header.jpg')}')`}">
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.our-service-header-image {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 100%;
    background-attachment: fixed;
    min-height: 600px;
}
</style>

