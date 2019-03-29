import Vue from 'vue';
import App from './App.vue';
import VueResource from 'vue-resource';
import Vuetify from 'vuetify';
import Meta from 'vue-meta';

import 'vuetify/dist/vuetify.min.css';

Vue.use(VueResource);
Vue.use(Vuetify);
Vue.use(Meta)

new Vue({
  el: '#app',
  render: h => h(App)
})
