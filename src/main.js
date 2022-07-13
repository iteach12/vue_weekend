import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import mixins from './mixins';
import './index.css';

const app = createApp(App);
app.use(router);
app.mixin(mixins);
app.mount('#app');
