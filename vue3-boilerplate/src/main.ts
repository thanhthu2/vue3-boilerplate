import { AuthLayout, DefaultLayout } from '@/layouts'


import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { Quasar } from 'quasar'
// Import icon libraries
import '@quasar/extras/roboto-font/roboto-font.css';
// Import Quasar css
import 'quasar/src/css/index.sass'

import App from './App.vue'
import router from './routes'
import { ScreenLayout } from './routes/screen-layouts';

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(Quasar, {
    plugins: {},
    config: {
        brand: {
            primary: '#ec5990',
            // ...
        }
    }// import Quasar plugins and add here
})

app.component(ScreenLayout.AUTH_LAYOUT, AuthLayout);
app.component(ScreenLayout.DEFAULT_LAYOUT, DefaultLayout);

app.mount('#app')
