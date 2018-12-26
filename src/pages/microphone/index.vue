<template>
  <transition name="camera">
    <div class="camera">
      <header class="g-header-container">
        <camera-header></camera-header>
      </header>
      <div class="g-content-container">
        <div class="camera-container" @click="!isVisible && getSound()">
          <p v-if="!isVisible" class="description">
            请点击此处进行录音
            <input type="file" ref="mySound" class="display-none" accept="audio/*" capture="microphone">
          </p>
          <div v-else>

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
    name: 'Microphone',
    data() {
      return {
        content: [],
        isVisible: false
      };
    },
    mounted() {
      this.$refs.mySound.onchange = () => {
        filetoDataURL(this.$refs.mySound.files[0], (result) => {
          console.log(result, this.$refs.mySound.files[0]);
        });

      };
    },
    methods: {
      // 录音
      getSound() {
        if (this.hasGetUserMedia()) {
          //不使用供应商前缀
          const mediaDevices = navigator.mediaDevices || navigator;
          mediaDevices.getUserMedia({ audio: true }).then((mediaStream) => {
            console.log(mediaStream);

          }).catch((err) => {
            if (err) {
              alert('设备拒绝访问');
              console.log(err)
            }

          });
        }
        else {
          alert('您的浏览器不支持getUserMedia方法');
        }
        // this.$refs.mySound.click();
      },
      readWord(index) {

        this.$refs.myAudio[index].readWord();
      },
      hasGetUserMedia() {
        //请注意:在Opera浏览器中不使用前缀
        return !!(navigator.getUserMedia || navigator.webkitGetUserMedia ||
          navigator.mozGetUserMedia || navigator.msGetUserMedia);
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
