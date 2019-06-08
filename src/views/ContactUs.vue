<template>
  <div class="alsdi-contact-us">
     <ContactUsComponent :comingData="contactUsData.contact_us[0]" />
  </div>
</template>

<script>
import ContactUsSection from "@/components/ContactUsSection";
import ContactUsComponent from "@/components/ContactUsComponent";
import { mapGetters } from "vuex";


export default {
  name: "contact-us",
  components: {
    ContactUsSection,
    ContactUsComponent
  },
  computed: {
    ...mapGetters(["contactUsData"])
  }
 
};
</script>

<style lang="scss">

</style>

