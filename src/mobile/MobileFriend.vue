<template>
    <div class="mobile-layout mobile-friend">
        <TitleBox :title="config.friend.name"/>
        <div class="friend-list">
            <div class="friend-list-item" v-for="(item, index) in config.friend.data" :key="index" @click="openOtherSite(item.link)">
                <img class="item-avatar" loading="lazy" :src="item.src" :alt="item.name" draggable="false">
                <div class="item-content">
                    <p class="item-name">{{ item.name }}</p>
                    <p class="item-desc">{{ item.desc }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import config from '@/scripts/config';
    import TitleBox from '@/model/TitleBox.vue';
    import { openOtherSite } from '@/scripts/utils';
</script>

<style lang="scss">
    @import url("./MobileFriend.scss");
</style>