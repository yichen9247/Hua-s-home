<template>
    <div class="mobile-layout mobile-photos">
        <TitleBox :title="config.photos.name"/>
        <div class="photo-list">
            <img class="photo" loading="lazy" v-for="(item, index) in config.photos.data" :key="index" :src="item.src" :alt="item.alt" @click="previewImage({
                src: item.src,
                html: item.alt
            })" draggable="false"/>
        </div>
    </div>
</template>

<script setup>
    import config from '@/scripts/config';
    import TitleBox from '@/model/TitleBox.vue';
    import { previewImage } from '@/scripts/utils';
</script>

<style lang="scss">
    @import url("./MobilePhotos.scss");
</style>