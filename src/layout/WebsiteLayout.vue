<template>
    <div class="layout-container layout-website">
        <div class="website-list">
            <div class="website-list-item" v-for="(item, index) in config.website.data" :key="index" @click="openOtherSite(item.link)">
                <p class="item-name">{{ item.name }}</p>
                <p class="item-desc">{{ item.desc }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
    import config from '@/scripts/config';
    import { openOtherSite } from '@/scripts/utils';
</script>

<style lang="scss">
    @import url("./WebsiteLayout.scss");
</style>