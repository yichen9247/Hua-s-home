import HomePage from '@/pages/HomePage.vue'
import { isMobile } from '@/scripts/utils'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [{
        path: '/',
        name: 'home',
        component: () => import('@/layout/HomeLayout.vue'),
    }, {
        path: '/outsor',
        name: 'outsor',
        component: () => import('@/layout/OutSorLayout.vue'),
    }, {
        name: 'mySkill',
        path: '/mySkill',
        component: () => import('@/layout/MySkillLayout.vue'),
    }, {
        name: 'photo',
        path: '/photo',
        component: () => import('@/layout/PhotoLayout.vue'),
    }, {
        name: 'website',
        path: '/website',
        component: () => import('@/layout/WebsiteLayout.vue'),
    }, {
        name: 'friends',
        path: '/friends',
        component: () => import('@/layout/FriendLayout.vue'),
    }, {
        path: '/project',
        name: 'project',
        component: () => import('@/layout/ProjectLayout.vue'),
    }, {
        name: 'about',
        path: '/about',
        component: () => import('@/layout/AboutLayout.vue'),
    }, {
        path: "/:catchAll(.*)",
        component: HomePage,
    }],
});

router.beforeEach((to, from, next) => {
    if (!isMobile()) document.querySelector(".tab-content").scrollTo(0, 0);
    next();
});

export default router;
