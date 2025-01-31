
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import router from './router'
import Application from './Application.vue'

const application = createApp(Application);

application.use(createPinia());
application.use(router);

application.mount('#application')
