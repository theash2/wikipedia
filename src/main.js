import { createApp } from 'vue';
import { globalRegister } from './global/index';
import App from './App.vue'
import router from './router/index'
const app = createApp(App);
app.use(router);
app.use(globalRegister);
app.mount('#app');
