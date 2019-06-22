<template>
  <div class="alsdi-contact-us">
    <ContactUsComponent :comingData="contactUsData.contact_us[0]" />
  </div>
</template>

<script>
import ContactUsComponent from "@/components/contact_us/ContactUsComponent";
import { mapGetters } from "vuex";

export default {
  name: "contact-us",
  components: {
    ContactUsComponent
  },
  computed: {
    ...mapGetters(["contactUsData"])
  }
};
</script>

<style lang="scss">
</style>

