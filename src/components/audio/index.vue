<template>
  <audio ref="audio" class="display-none" :src="READ_API_URL+word" crossOrigin="anonymous"></audio>
</template>

<script>
  import { READ_API_URL } from '@/api/config.js';

  export default {
    name: 'myAudio',
    data() {
      return {
        READ_API_URL: READ_API_URL
      };
    },
    props: {
      word: {
        type:String,
        default: ''
      }
    },
    methods: {
      readWord() {
        this.$refs.audio.play();
      }
    }
  };
</script>

<style scoped>
  .display-none {
    display: none;
  }
</style>
