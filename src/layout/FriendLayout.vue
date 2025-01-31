<template>
    <div class="layout-container layout-friend">
        <div class="friend-list">
            <div class="friend-list-item" v-for="(item, index) in friendList" :key="index" @click="openOtherSite(item.link)">
                <img class="item-avatar" loading="lazy" :src="item.src" :alt="item.name">
                <div class="item-content">
                    <p class="item-name">{{ item.name }}</p>
                    <p class="item-desc">{{ item.desc }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { reactive } from 'vue';
    import { openOtherSite } from '@/scripts/utils';

    const friendList = reactive([{
        name: '张洪Heo',
        link: 'https://blog.zhheo.com',
        src: 'https://bu.dusays.com/2022/12/28/63ac2812183aa.png',
        desc: '分享设计与科技生活'
    }, {
        name: '小林笔记',
        link: 'https://m.senlinm.cn',
        src: 'https://senlinm.s3.us-east-005.backblazeb2.com/01.png',
        desc: '轻生活，秒上签'
    }]);
</script>

<style lang="scss">
    @import url("./FriendLayout.SCSS");
</style>