<template>
  <transition name="camera">
    <div class="camera">
      <header class="g-header-container">
        <camera-header></camera-header>
      </header>
      <div class="g-content-container">
        <div class="camera-container" @click="!isVisible && getPhoto()">
          <p v-if="!isVisible" class="description">
            请点击此处选择一张图片
            <input ref="photo" class="display-none" type="file" accept="image/*" multiple>
          </p>
          <div v-else>
            <img class="myImg" :src="file" alt="">
            <div v-for="(content,index) in contents" :key="index">
              <p class="content-word-detail" @click="readWord(index)">{{content}}</p>
              <i class="iconfont icon-laba"></i>
              <my-audio ref="myAudio" :word="content"></my-audio>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  import CameraHeader from './header';
  import { postPhoto } from 'api/camera';
  import MyAudio from 'components/audio';
  import { filetoDataURL } from 'assets/js/util';


  export default {
    name: 'Camera',
    data() {
      return {
        contents: [],
        isVisible: false,
        file: ''
      };
    },
    mounted() {
      this.$refs.photo.onchange = () => {
        filetoDataURL(this.$refs.photo.files[0], (result) => {
          this.file = result;
        });

        postPhoto(this.$refs.photo.files[0])
          .then((data) => {
            if (data.length === 0) {
              this.$messagebox({
                title: '提示',
                message: '请确认上传的图片中包含日文',
              });
            } else {
              this.isVisible = true;
              this.contents = data;

            }
          });
      };
    },
    methods: {
      getPhoto() {

        this.$refs.photo.click();
      },
      readWord(index) {

        this.$refs.myAudio[index].readWord();
      }
    },
    components: {
      CameraHeader,
      MyAudio
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
    min-height: 60%;
    max-height: 80%;
    overflow: scroll;
    box-shadow: 1px 1px 4px #aaaaaa;
  }

  .camera-container > div > div > p, .camera-container i {

    color: #fc693d;
    text-align: center;
  }

  .camera-container > div > div > p {
    margin: 10px 0;
  }

  .camera-container i {
    display: block;
  }

  .content-word-detail {
    word-break: break-all;
    padding: 5px;
    font-size: 50px;
  }

  .description {
    text-align: center;
    padding-top: 50%;
    font-size: 15px;
  }

  .myImg {
    width: 100%;
  }

</style>
