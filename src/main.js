import { createApp } from 'vue'
import App from './App.vue'
import Counter from './components/Count.vue'
import router from './router';
import './assets/main.css'
import { createPinia } from 'pinia';

const app = createApp(App);

app.component('Counter',Counter);  // Global Registration of Components (Tree Shaking issue)
app.use(router);
app.use(createPinia());
app.mount('#app')
