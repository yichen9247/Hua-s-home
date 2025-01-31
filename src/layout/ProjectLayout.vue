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
    }, {
        name: 'Reomecho',
        repo: 'https://github.com/yichen9247/ReomEcho',
        desc: '一款基于Vue3编写的轻量级博客框架，旨在使用简洁的文档语言来编写博客文章，，基于 Typescript，Mybatis-Plus，Springboot, Vue3 和 Socket.io，Redis 等技术开发'
    }, {
        name: 'Randmusic',
        repo: 'https://github.com/yichen9247/Randmusic',
        desc: '一款基于网易云音乐嵌入型随机音乐播放器，使用PHP、Redis等技术进行编写'
    }, {
        name: 'Timextool',
        repo: 'https://github.com/yichen9247/Timextool',
        desc: '一个针对服务器运维开发的终端命令行工具，旨在让运维变得更加简单，提升运维及管理效率'
    }, {
        name: 'Windows11 React',
        repo: 'https://github.com/yichen9247/Windows11-React',
        desc: '一个基于React编写的高仿Windows11项目，不过已经很久没有维护了，预计会在未来进行重构'
    }]);
</script>

<style lang="scss">
    @import url("./ProjectLayout.scss");
</style>