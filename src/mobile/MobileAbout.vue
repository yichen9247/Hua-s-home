<template>
    <div class="mobile-layout mobile-about">
        <TitleBox :title="config.about.name" style="margin-bottom: 5px;"/>
        <div class="user-description">
            <p class="description">{{ config.about.data }}</p>
        </div>
    </div>
</template>

<script setup>
    import config from '@/scripts/config';
    import TitleBox from '@/model/TitleBox.vue';
</script>

<style lang="scss">
    @import url("./MobileAbout.scss");
</style>