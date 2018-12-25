<template>
  <transition name="search">
    <div class="search">
      <header class="g-header-container">
        <search-header @query="getQuery"></search-header>
      </header>
      <div class="g-content-container">
        <div class="word-container" >
          <p v-if="!isVisible" class="description">请在上方输入要展示日语的中文</p>
          <div v-else @click="readWord(content.wordJa)">
            <p class="content-word-detail">{{content.wordJa}}</p>
            <p class="content-word-read">{{content.roma}}<i class="iconfont icon-laba"></i></p>
            <my-audio ref="myAudio" :word="content.wordJa"></my-audio>
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
  import SearchHeader from './header';
  import { READ_API_URL } from '@/api/config.js';
  import { getJpanese } from '@/api/search';
  import { getWordAudio } from '@/api/content.js';
  import MyAudio from 'components/audio';

  export default {
    name: 'Search',
    data() {
      return {
        content: {},
        isVisible: false
      };
    },
    created() {
      this.READ_API_URL = READ_API_URL;
    },
    methods: {
      getQuery(query) {
        if(query.length !== 0) {
          getJpanese(query)
            .then((data) => {

              this.content = data;
              this.isVisible = true;
            });
        }

      },
      readWord() {
        this.$refs.myAudio.readWord();
      }
    },
    components: {
      SearchHeader,
      MyAudio
    }
  };
</script>

<style lang="scss" scoped>
  @import "~assets/scss/mixins";

  .search {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: $search-z-index;
    background-color: $bgc-theme;
  }

  .search-enter-active,
  .search-leave-active {
    transition: all 0.3s;
  }

  .search-enter,
  .search-leave-to {
    transform: translate3d(100%, 0, 0);
  }

  .g-content-container {
    padding-top: $navbar-height;
    height: 100%;
    background-color: #ededed;;
  }

  .word-container {
    padding: 10px;
    background: #fff;
    margin: 0 auto;
    margin-top: 50px;
    width: 80%;
    height: 60%;
    box-shadow: 1px 1px 4px #aaaaaa;
  }

  .word-container > div > p {
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
