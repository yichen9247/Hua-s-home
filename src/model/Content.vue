<template>
    <div class="model-content">
        <div class="tab-container">
            <div class="tab-box" v-for="(item, index) in tabList" :key="index" @click="router.push({ name: item.key })">
                <span class="tab-name" :style="{ color: route.name === item.key ? 'var(--dominColor)' : '#858585' }">{{ item.label }}</span>
            </div>
        </div>
        <div class="tab-content">
            <router-view/>
        </div>
    </div>
</template>

<script setup>
    import { reactive } from 'vue';
    import config from '@/scripts/config';
    import { useRoute, useRouter } from 'vue-router';

    const route = useRoute();
    const router = useRouter();
    const tabList = reactive([{
        key: 'home',
        label: config.home.name
    }, {
        key: 'project',
        label: config.project.name
    }, {
        key: 'outsor',
        label: config.outsor.name
    }, {
        key: 'mySkill',
        label: config.mySkill.name
    }, {
        key: 'photo',
        label: config.photos.name
    }, {
        key: 'website',
        label: config.website.name
    }, {
        key: 'friends',
        label: config.friend.name
    }, {
        key: 'about',
        label: config.about.name
    }]);
</script>

<style lang="scss">
    @import url("./Content.scss");
</style>