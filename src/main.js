import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/store";
import { plugin } from 'vue-function-api';
import hooks from '@u3u/vue-hooks';

require('./assets/css/style.css');
require('./assets/css/notfound.css');
require('./assets/css/LatestList.css');


Vue.config.productionTip = false;

Vue.use(hooks);
Vue.use(plugin);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
