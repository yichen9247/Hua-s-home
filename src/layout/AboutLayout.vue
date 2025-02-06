<template>
    <div class="layout-container layout-anbout">
        <div class="user-description">
            <p class="description">{{ config.about.data }}</p>
            <h2 class="title" align="center">IDE THAT I'M USEING</h2>
            <div class="badge-box">
                <img class="badge" v-for="(item, index) in config.about.useingIdeList" :key="index" :src="`https://img.shields.io/badge/${item.logo}-${item.name}-blue?style=for-the-badge&logo=${item.logo}`" :alt="item.name" draggable="false">
            </div>
            <h2 class="title" align="center">CONTACT ME</h2>
            <div class="badge-box">
                <img class="badge" v-for="(item, index) in config.about.contactList" :key="index" :src="`https://img.shields.io/badge/${item.logo}-${item.name}-blue?style=for-the-badge&logo=${item.logo}`" :alt="item.name" draggable="false">
            </div>
        </div>
    </div>
</template>

<script setup>
    import config from '@/scripts/config';
</script>

<style lang="scss">
    @import url("./AboutLayout.scss");
</style>