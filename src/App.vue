<template>
  <div id="app">
    <navbar></navbar>
    <div class="container is fluid">
      <router-view></router-view>
    </div>
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
