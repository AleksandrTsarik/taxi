<template>
  <Header />
  <main>
    <Index />
  </main>
  <Footer />
</template>
<script>
import Index from "./page/index.vue";
import Header from "./components/TheHeader.vue";
import Footer from "./components/TheFooter.vue";
export default {
  components: {
    Index,
    Header,
    Footer,
  },
};
</script>
<style lang="scss">
#app {
  display: flex;
  height: 100vh;
  flex-direction: column;
}
main {
  flex-grow: 1;
}
</style>
