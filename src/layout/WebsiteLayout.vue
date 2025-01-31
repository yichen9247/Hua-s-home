<template>
    <div class="layout-container layout-website">
        <div class="website-list">
            <div class="website-list-item" v-for="(item, index) in websiteList" :key="index" @click="openOtherSite(item.link)">
                <p class="item-name">{{ item.name }}</p>
                <p class="item-desc">{{ item.desc }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { reactive } from 'vue';
    import { openOtherSite } from '@/scripts/utils';

    const websiteList = reactive([{
        name: 'Handsock演示站点',
        link: 'https://handsock.xiaokolomi.cn',
        desc: '项目HandSock的演示站点，因服务器即将到期，后端服务将在两个月之后关闭'
    }, {
        name: 'Handsock官方文档',
        link: 'https://doc.handsock.xiaokolomi.cn',
        desc: '项目HandSock的官方文档，不会搭建或者想要了解本项目的可以进入文档查看'
    }, {
        name: 'Reomecho我的博客',
        link: 'https://boke.xiaokolomi.cn/',
        desc: '项目Reomecho的演示站点，同时也是我的个人博客，此站点将在未来进行重构'
    }, {
        name: 'Reomecho官方网站',
        link: 'https://office.boke.xiaokolomi.cn',
        desc: '项目Reomecho的官方网站，不会搭建或者想要了解本项目的可以进入网站查看'
    }, {
        name: '逐梦音乐工作站',
        link: 'https://ai.music.xiaokolomi.cn',
        desc: '一个聚合AI音乐的网站，在这里你可以找到另类的AI歌曲，发现音乐的不同唱法'
    }, {
        name: '头像生成工作站',
        link: 'https://avatar.xiaokolomi.cn',
        desc: '一个可以随机生成不同风格的头像网站，你可以随机生成不同形状和颜色的头像'
    }, {
        name: 'SPlayer音乐网站',
        link: 'https://music.xiaokolomi.cn',
        desc: '基于开源项目SPlayer搭建的网易云在线音乐网站，界面美观且操作简单'
    }, {
        name: 'Excalidraw在线绘图',
        link: 'https://board.xiaokolomi.cn',
        desc: '基于开源项目Excalidraw-Pro搭建的在线绘图网站，界面美观且操作简单'
    }]);
</script>

<style lang="scss">
    @import url("./WebsiteLayout.scss");
</style>