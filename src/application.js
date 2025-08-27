
import { createApp } from 'vue';
import { createPinia } from 'pinia';

import router from './router';
import VueLazyLoad from 'vue3-lazyload';
import Application from './Application.vue';
import defaultImage from '@/assets/bg-light.jpg';

const application = createApp(Application);

application.use(createPinia());
application.use(router);
application.use(VueLazyLoad, {
    error: defaultImage,
    loading: defaultImage
}); // 图片懒加载插件

application.mount('#application');
console.log("\n %c Hua's home %c https://github.com/yichen9247/Hua-s-home \n", "color: #ffffff; background: #409EFF; padding:5px 0;", "background: rgb(216.8, 235.6, 255); padding: 5px 0; color: #ffffff;")