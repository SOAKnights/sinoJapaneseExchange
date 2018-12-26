<template>
  <me-navbar class="header" v-show="visible">
    <i class="iconfont icon-maikefeng" slot="left"></i>
    <div slot="center">
      <me-search-box
        placeholder="点此搜索相关单词"
        :fake="true"
        @query="getQuery"
        @click.native="goToSearch"
      ></me-search-box>

    </div>
    <i class="iconfont icon-xiangji" slot="right" @click="gotoCamera"></i>

  </me-navbar>
</template>

<script>
  import MeNavbar from 'base/navbar';
  import MeSearchBox from 'base/search-box';

  export default {
    name: 'HomeHeader',
    components: {
      MeNavbar,
      MeSearchBox
    },
    data() {
      return {
        visible: true,
      };
    },
    methods: {
      show() {
        this.visible = true;
      },
      hide() {
        this.visible = false;
      },
      getQuery(query) {
        console.log(query);
      },
      goToSearch() {
        this.$router.push('/search');
      },
      gotoCamera(){
        this.$router.push('/camera');
      },
      gotoMicrophone() {
        this.$router.push('/microphone');
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import "~assets/scss/mixins";

  .header {
    box-shadow: 0px 0px 6px #aaaaaa;
    &.mine-navbar {
      background-color: #fc693d;
    }

    .iconfont {
      color: $icon-color-default;
      font-size: $icon-font-size;
    }
  }

  .display-none {
    display: none;
  }
</style>
