<template>
  <me-navbar class="header">
    <i
      class="iconfont icon-jiantou"
      slot="left"
      @click="goBack"
    ></i>
  </me-navbar>
</template>

<script>
  import MeNavbar from 'base/navbar';

  export default {
    name: 'MicrophoneHeader',
    components: {
      MeNavbar
    },
    methods: {
      goBack() {
        this.$router.back();
      }
    }
  };
</script>

<style scoped>
  .header{
    box-shadow: 0px 0px 6px #aaaaaa;
  }
</style>
