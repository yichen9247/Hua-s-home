<template>
    <div class="layout-container layout-photo">
        <div class="photo-list">
            <img class="photo" v-for="(item, index) in config.photos.data" :key="index" v-lazy="item.src" :alt="item.alt" @click="previewImage({
                src: item.src,
                html: item.alt
            })" draggable="false"/>
        </div>
    </div>
</template>

<script setup>
    import config from '@/scripts/config';
    import { previewImage } from '@/scripts/utils';
</script>

<style lang="scss">
    @import url("./PhotoLayout.scss");
</style>