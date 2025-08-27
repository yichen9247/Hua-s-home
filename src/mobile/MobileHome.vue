<template>
    <div class="mobile-layout mobile-home">
        <div class="avatar-box">
            <img class="avatar-img" v-lazy="config.author.avatar" alt="Hua" draggable="false">
        </div>
        <p class="user-profile username">{{ config.author.name }}</p>
        <p class="user-profile userdesc">{{ config.author.description }}</p>
    </div>
</template>

<script setup>
    import config from '@/scripts/config';
</script>

<style lang="scss">
    @import url("./MobileHome.scss");
</style>
