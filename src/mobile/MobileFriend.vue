<template>
    <div class="mobile-layout mobile-friend">
        <div class="section-header">
            <h2 class="section-title">{{ config.friend.name }}</h2>
            <div class="title-underline"></div>
        </div>
        <div class="friends-grid">
            <div
                class="friend-card"
                v-for="(item, index) in config.friend.data"
                :key="index"
                @click="openOtherSite(item.link)"
                :style="{ '--delay': index * 0.1 + 's' }"
            >
                <div class="friend-avatar">
                    <img class="avatar-img" v-lazy="item.src" :alt="item.name" draggable="false">
                    <div class="avatar-status"></div>
                </div>
                <div class="friend-info">
                    <h3 class="friend-name">{{ item.name }}</h3>
                    <p class="friend-desc">{{ item.desc }}</p>
                </div>
                <div class="friend-action">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    </svg>
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