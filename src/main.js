import Vue from 'vue';

import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';

Vue.use(MintUI);

import './lib/mui/css/mui.min.css';
import './css/mobile-initial.css';
import app from './app.vue';
// import router from './router.js'

let vm = new Vue({
    el: '#container_',
    render: c => c(app)
    // router: router
});