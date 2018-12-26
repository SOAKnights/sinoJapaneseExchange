import Vue from 'vue'
import Router from 'vue-router'
import Home from 'pages/home'
import Content from 'pages/content';
import Search from 'pages/search';
import Camera from 'pages/camera';
import Microphone from 'pages/microphone';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home,
      meta:{
        title:'中日交流' // 标题设置在这里
      }
    },
    {
      path: '/content',
      name: 'Content',
      component: Content
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/camera',
      name: 'Camera',
      component: Camera
    },
    {
      path: '/microphone',
      name: 'Microphone',
      component: Microphone
    },
    {
      path: '/*',
      redirect: "/home"
    }
  ]
})
