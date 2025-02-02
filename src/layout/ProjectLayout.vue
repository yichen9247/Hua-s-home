<template>
    <div class="layout-container layout-project">
        <div class="project-list">
            <div class="project-list-item" v-for="(item, index) in projectList" :key="index" @click="openOtherSite(item.repo)">
                <p class="item-name">{{ item.name }}</p>
                <p class="item-desc">{{ item.desc }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { reactive } from 'vue';
    import { openOtherSite } from '@/scripts/utils';

    const projectList = reactive([{
        name: 'Handsock',
        repo: 'https://github.com/yichen9247/HandSock',
        desc: '一款有趣的聊天应用，基于 Typescript，Mybatis-Plus，Springboot, Vue3 和 Socket.io，Redis 等技术开发'
    }]);
</script>

<style lang="scss">
    @import url("./ProjectLayout.scss");
</style>