import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import ArcoVue from '@arco-design/web-vue';
import ArcoVueIcon from '@arco-design/web-vue/es/icon';
import '@arco-design/web-vue/dist/arco.css';

import {} from 'animate.css';

import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(ArcoVue);
app.use(ArcoVueIcon);
app.use(createPinia());
app.use(router);

app.mount('#app');
