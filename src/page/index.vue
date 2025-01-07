<template>
  <section class="section">
    <Banner />
  </section>
  <section class="section">
    <Offer />
  </section>
  <section class="section">
    <Taxi />
  </section>
  <section class="section">
    <Payments />
  </section>
  <section class="section"></section>
  <section class="section"></section>
</template>
<script>
import Banner from "@/components/TheBanner.vue";
import Offer from "@/components/TheOffer.vue";
import Taxi from "@/components/TheTaxi.vue";
import Payments from "@/components/ThePayments.vue";
export default {
  components: {
    Banner,
    Offer,
    Taxi,
    Payments,
  },
};
</script>
<style lang="scss"></style>
