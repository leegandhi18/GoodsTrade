<template>
  <v-app>
    <header-form />
    <footer-form />
  </v-app>
</template>

<script>
import FooterForm from "../components/FooterForm.vue";
import HeaderForm from "../components/HeaderForm.vue";

export default {
  components: {
    FooterForm,
    HeaderForm,
  },
};
</script>
