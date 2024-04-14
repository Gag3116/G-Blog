<template>
  <div class="contact-page">
    <h1>Contact Me</h1>
    <contact-card
        :avatar="'src/assets/avatar.JPG'"

        :name="'Garry Li'"
        :pronouns="'(He/Him)'"
        :position="'Student'"
        :university="'Master of IT, University of Auckland'"
        :phone="'+64 274843523'"
        :email="'pli700@aucklanduni.ac.nz'"
        :address="'Auckland,1025'"
        :instagram="'garry_3116'"
    ></contact-card>
  </div>
</template>

<script>
import ContactCard from "@/components/ContactCard.vue";

export default {
  name: "ContactPage",
  components: {
    ContactCard
  }
};
</script>

<style scoped>
.contact-page {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  min-height: calc(100vh - 4rem);
}
</style>
