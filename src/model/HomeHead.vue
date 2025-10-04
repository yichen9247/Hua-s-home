<script setup>
    import config from '@/scripts/config';
</script>

<template>
    <section class="home-head">
        <div class="head-container">
            <img class="user-avatar" v-lazy="config.author.avatar" :alt="config.author.name" draggable="false">
            <h1 class="welcome-text">{{ config.home.data.welcome }}</h1>
        </div>
    </section>
</template>

<style lang="scss">
    @import url("./HomeHead.scss");
</style>