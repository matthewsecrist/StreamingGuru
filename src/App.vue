<template>
  <div id="app">
    <navbar></navbar>
    <router-view :key="$route.path"></router-view>
  </div>
</template>

<script>
import Navbar from './components/Navbar';

export default {
  name: 'app',
  components: {
    navbar: Navbar,
  },
};
</script>

<style lang="scss">
  @import 'index.scss';
</style>
