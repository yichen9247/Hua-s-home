<template>
    <div class="mobile-layout mobile-photos">
        <TitleBox :title="config.photos.name"/>
        <div class="photo-list">
            <img class="photo" v-for="(item, index) in showMorePhoto ? config.photos.data : config.photos.data.slice(0, 3)" :key="index" v-lazy="item.src" :alt="item.alt" @click="previewImage({
                src: item.src,
                html: item.alt
            })" draggable="false"/>
        </div>
        <button class="more-photo" v-if="config.photos.data.length > 3 && !showMorePhoto" @click="showMorePhoto = true">点击显示更多图片</button>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    import config from '@/scripts/config';
    import TitleBox from '@/model/TitleBox.vue';
    import { previewImage } from '@/scripts/utils';

    const showMorePhoto = ref(false);
</script>

<style lang="scss">
    @import url("./MobilePhotos.scss");
</style>