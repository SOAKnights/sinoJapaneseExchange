<template>
  <transition name="camera">
    <div class="camera">
      <header class="g-header-container">
        <camera-header></camera-header>
      </header>
      <div class="g-content-container">
        <div class="camera-container">
          <p v-if="!isVisible" class="description" @click="getPhoto">请点击此处选择一张图片<input ref="photo" class="display-none" type="file" accept="image/*" capture="camera"></p>
          <div v-else @click="readWord(content.wordJa)">
            <p class="content-word-detail">{{content.wordJa}}</p>
            <p class="content-word-read">{{content.roma}}<i class="iconfont icon-laba"></i></p>
            <audio class="display-none" :src="READ_API_URL+content.wordJa"></audio>
            <p class="content-word-chn">
              {{content.wordZh}}
            </p>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  import CameraHeader from './header';

  export default {
    name: 'Camera',
    data() {
     return {
       content: {},
       isVisible: false
     };
    },
    methods: {
      getPhoto() {
        this.$refs.photo.click();
      }
    },
    components: {
      CameraHeader
    }

  };
</script>

<style lang="scss" scoped>
  @import "~assets/scss/mixins";

  .display-none {
    display: none;
  }

  .camera {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: $search-z-index;
    background-color: $bgc-theme;
  }

  .camera-enter-active,
  .camera-leave-active {
    transition: all 0.3s;
  }

  .camera-enter,
  .camera-leave-to {
    transform: translate3d(100%, 0, 0);
  }

  .g-content-container {
    padding-top: $navbar-height;
    height: 100%;
    background-color: #ededed;
  }

  .camera-container {
    padding: 10px;
    background: #fff;
    margin: 0 auto;
    margin-top: 50px;
    width: 80%;
    height: 60%;
    box-shadow: 1px 1px 4px #aaaaaa;
  }

  .camera-container > div > p {
    margin: 10px 0;
    color: #fc693d;
    text-align: center;
  }

  .content-word-detail {
    word-break: break-all;
    padding: 5px;
    font-size: 50px;
  }

  .content-word-read {
    padding: 5px;
    font-size: 18px;
  }

  .content-word-chn {
    font-size: 20px;
    padding: 10px;
  }
  .description{
    text-align: center;
    padding-top: 50%;
    font-size: 15px;
  }

</style>
