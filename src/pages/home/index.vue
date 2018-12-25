<template>
  <div class="home">
    <header class="g-header-container">
      <home-header></home-header>
    </header>
    <div class="home-cover">
      <img src="@/assets/img/cover.jpg" alt="">
    </div>
    <router-link to="/content">
      <input type="button" class="home-button" value="开始学习">
    </router-link>
  </div>
</template>

<script>
  import HomeHeader from './header';

  export default {
    name: 'Home',
    components: {
      HomeHeader,
    }
  };
</script>

<style lang="scss" scoped>
  @import "~assets/scss/mixins";

  .home{
    overflow: hidden;
    width: 100%;
    height: 100%;
    background-color: $bgc-theme;
  }

  .home-container {
    height: 100%;
  }

  .home-cover {
    margin-top: $navbar-height;
    min-height: 500px;
  }
  .home-cover> img{
    width: 100%;
    height: 100%;
  }

  .home-button {
    display: block;
    height: 60px;
    width: 85%;
    border-radius: 5px;
    margin: 0 auto;
    font-size: 20px;
    color: #fff;
    background-color: #fc693d;
  }
  .home-button:active{
    background-color: #d25a34;
  }
</style>
