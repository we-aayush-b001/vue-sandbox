import { createApp } from 'vue'
import App from './App.vue'
import Counter from './components/Count.vue'

const app = createApp(App);

app.component('Counter',Counter);  // Global Registration of Components (Tree Shaking issue)

app.mount('#app')
