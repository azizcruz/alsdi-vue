<template>
    <div class="alsdi-our-services">
        <OurServicesHeaderImage />
        <OurServicesMenu />
        <OurServicesSection />
    </div>
</template>

<script>
import OurServicesHeaderImage from '@/components/OurServicesHeaderImage';
import OurServicesMenu from '@/components/OurServicesMenu';
import OurServicesSection from '@/components/OurServicesSection'

export default {
    name: "our-services",
    components: {
        OurServicesHeaderImage,
        OurServicesMenu,
        OurServicesSection
    }
}
</script>

<style>

</style>
