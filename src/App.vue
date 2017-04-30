<template>
  <div id="app">
    <navbar></navbar>
      <router-view :key="$route.path"></router-view>
    <footerbar></footerbar>
  </div>
</template>

<script>
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default {
  name: 'app',
  components: {
    navbar: Navbar,
    footerbar: Footer,
  },
};
</script>

<style lang="scss">
  @import 'index.scss';
</style>
