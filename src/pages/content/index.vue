<template>
  <div class="content-container">
    <div class="content-word">
      <router-link class="content-return" to="/home">
        <i class="iconfont icon-jiantou"></i>
      </router-link>
      <div @click="readWord">
        <p class="content-word-detail">{{content.wordJa}}</p>
        <p class="content-word-read">{{content.roma}}<i class="iconfont icon-laba"></i></p>
        <my-audio ref="myAudio" :word="content.wordJa"></my-audio>
        <p class="content-word-chn" :class="isVisible?'':'content-opacity-none'">
          {{content.wordZh}}
        </p>
      </div>
    </div>
    <div class="content-detail" @click="checkForDetail">
      <p class="description" v-if="!isVisible">点击屏幕显示中文和例句</p>
      <div class="detail-container" v-else>
        <div class="detail-group" v-for="(sentence,index) in content.sentences" :key="index">
          <p class="detail">{{sentence.senJa}}</p>
          <p class="detail">{{sentence.senZh}}</p>
        </div>
      </div>
      <div v-if="isVisible" class="img-container">
        <img :src="content.imgurl" alt="">
      </div>
    </div>
    <div class="content-button-group">
      <input type="button" @click="easyGetNextWord" value="太简单了">
      <input type="button" @click="getNextWord" value="下一个">
    </div>
  </div>
</template>

<script>
  import { getFragments, getWordAudio } from '@/api/content.js';
  import MyAudio from 'components/audio';
  import { MessageBox } from 'mint-ui';

  export default {
    name: 'MyContent',
    data() {
      return {
        isVisible: false,
        content: {},
        audioSrc: ''
      };
    },
    created() {
      this.groupIndex = 1;
      this.index = 0;
      this.getWordGroup(this.groupIndex);
    },
    methods: {
      checkForDetail() {
        this.isVisible = true;
        this.readWord(this.content.wordJa);
      },
      getWordGroup(id) {
        getFragments(id)
          .then((data) => {
            if (data.length !== 0) {
              this.index = 0;
              this.contents = data;
              this.content = this.contents[this.index];
            } else {
              this.hasFinished();
            }
          });
      },
      easyGetNextWord() {
        //从start的位置开始向后删除delCount个元素
        const maxIndex = this.index;
        if (this.index === this.contents.length - 1) {
          this.index = 0;
        }
        this.contents.splice(maxIndex, 1);
        if (this.contents.length === 0) {
          this.getWordGroup(++this.groupIndex);
        } else {
          this.isVisible = false;
          this.content = this.contents[this.index];
        }

      },
      getNextWord() {
        if (this.contents.length != 0) {
          this.isVisible = false;
          if (this.index < this.contents.length - 1) {
            this.content = this.contents[++this.index];
          } else {
            this.index = 0;
            this.content = this.contents[this.index];
          }
        } else {
          this.hasFinished();
        }

      },
      readWord() {
        this.$refs.myAudio.readWord();
      },
      hasFinished() {
        this.$messagebox({
          title: '提示',
          message: '你已经学完啦！',
        })
          .then(() => {
            this.$router.push('/home');
          });
      }
    },
    components: {
      MyAudio
    }
  };
</script>

<style scoped>
  .content-container {
    overflow: hidden;
    height: 100%;

  }

  .content-word {

    width: 100%;
    height: 30%;
    overflow: hidden;
    padding-top: 10%;
    background-color: #ededed;
  }

  .content-return {
    position: absolute;
    top: 10px;
    left: 10px;
    color: #757575;
    padding: 5px;
    border-radius: 5px;
    background-color: #fff;
  }

  .content-word > div > p {
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

  .content-detail {
    position: absolute;
    width: 100%;
    top: 30%;
    bottom: 100px;
    overflow: scroll;
    background-color: #fff;
    padding: 10px;
  }

  .content-detail > p.description {
    font-size: 18px;
    margin-top: 50%;
    text-align: center;
  }

  .detail-container > .detail-group {
    font-size: 20px;
    margin-bottom: 25px;
  }

  .detail-container > .detail-group > p.detail {
    margin-bottom: 8px;
  }

  .img-container {
    width: 100%;
    overflow: hidden;
  }

  .img-container > img {
    width: 100%;
  }

  .content-button-group {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100px;
    padding: 20px;
    background-color: #ededed;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
  }

  .content-button-group > input {
    border: 1px solid #c6c6c6;
    color: #000;
    background-color: #fff;
    border-radius: 4px;
    margin: 0 10px;
    width: 45%;
    height: 60px;
    font-size: 20px;
  }

  .content-button-group > input:active {
    background-color: #f8f8f8;
  }

  .content-opacity-none {
    opacity: 0;
  }

</style>
