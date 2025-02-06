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
    import config from '@/scripts/config';
    import { markRaw, reactive, ref } from 'vue';

    import HomeLayout from '@/layout/HomeLayout.vue';
    import PhotoLayout from '@/layout/PhotoLayout.vue';
    import AboutLayout from '@/layout/AboutLayout.vue';
    import OutSorLayout from '@/layout/OutSorLayout.vue';
    import FriendLayout from '@/layout/FriendLayout.vue';
    import WebsiteLayout from '@/layout/WebsiteLayout.vue';
    import ProjectLayout from '@/layout/ProjectLayout.vue';

    const tabList = reactive([{
        key: 'home',
        label: config.home.name,
        layout: markRaw(HomeLayout)
    }, {
        key: 'project',
        label: config.project.name,
        layout: markRaw(ProjectLayout)
    }, {
        key: 'outsor',
        label: config.outsor.name,
        layout: markRaw(OutSorLayout)
    }, {
        key: 'photo',
        label: config.photos.name,
        layout: markRaw(PhotoLayout)
    }, {
        key: 'website',
        label: config.website.name,
        layout: markRaw(WebsiteLayout)
    }, {
        key: 'friends',
        label: config.friend.name,
        layout: markRaw(FriendLayout)
    }, {
        key: 'about',
        label: config.about.name,
        layout: markRaw(AboutLayout)
    }]);

    const tabSelect = ref('home');
</script>

<style lang="scss">
    @import url("./Content.scss");
</style>