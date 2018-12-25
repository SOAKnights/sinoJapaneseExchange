<template>
  <me-navbar class="header">
    <i
      class="iconfont icon-jiantou"
      slot="left"
      @click="goBack"
    ></i>
    <me-search-box
      placeholder="点此搜索相关单词"
      slot="center"
      @query="query"
    ></me-search-box>
  </me-navbar>
</template>

<script>
  import MeNavbar from 'base/navbar';
  import MeSearchBox from 'base/search-box';

  export default {
    name: 'SearchHeader',
    components: {
      MeSearchBox,
      MeNavbar
    },
    methods: {
      query(query) {
        this.$emit('query',query);
      },
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
