<template>
    <div class="layout-container layout-project">
        <div class="project-list">
            <div class="project-list-item" v-for="(item, index) in config.project.data" :key="index" @click="openOtherSite(item.repo)">
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
    @import url("./ProjectLayout.scss");
</style>