// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import 'babel-polyfill';
// import fastclick from 'fastclick';
// scss
import 'assets/scss/index.scss';

import Vue from 'vue';
import App from './App';
import router from './router';

import { MessageBox } from 'mint-ui';
import 'mint-ui/lib/style.css';
Vue.prototype.$messagebox = MessageBox;

// fastclick.attach(document.body);

Vue.config.productionTip = false;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
