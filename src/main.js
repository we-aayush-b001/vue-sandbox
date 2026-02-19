import { createApp } from 'vue'
import App from './App.vue'
import Counter from './components/Count.vue'
import router from './router';

const app = createApp(App);

app.component('Counter',Counter);  // Global Registration of Components (Tree Shaking issue)
app.use(router);
app.mount('#app')
