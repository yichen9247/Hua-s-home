<template>
    <div class="model-content">
        <div class="tab-container">
            <div class="tab-box" v-for="(item, index) in tabList" :key="index" @click="tabSelect = item.key">
                <span class="tab-name" :style="{ color: tabSelect === item.key ? 'var(--dominColor)' : '#858585' }">{{ item.label }}</span>
            </div>
        </div>

        <div class="tab-content">
            <component :is="tabList.find(item => item.key === tabSelect).layout" />
        </div>
    </div>
</template>

<script setup>
    import { markRaw, reactive, ref } from 'vue';

    import HomeLayout from '@/layout/HomeLayout.vue';
    import PhotoLayout from '@/layout/PhotoLayout.vue';
    import AboutLayout from '@/layout/AboutLayout.vue';
    import FriendLayout from '@/layout/FriendLayout.vue';
    import WebsiteLayout from '@/layout/WebsiteLayout.vue';
    import ProjectLayout from '@/layout/ProjectLayout.vue';

    const tabList = reactive([{
        key: 'home',
        label: '主页',
        layout: markRaw(HomeLayout)
    }, {
        key: 'project',
        label: '项目',
        layout: markRaw(ProjectLayout)
    }, {
        key: 'photo',
        label: '相册',
        layout: markRaw(PhotoLayout)
    }, {
        key: 'website',
        label: '站点',
        layout: markRaw(WebsiteLayout)
    }, {
        key: 'friends',
        label: '友人',
        layout: markRaw(FriendLayout)
    }, {
        key: 'about',
        label: '关于',
        layout: markRaw(AboutLayout)
    }]);

    const tabSelect = ref('home');
</script>

<style lang="scss">
    @import url("./Content.scss");
</style>