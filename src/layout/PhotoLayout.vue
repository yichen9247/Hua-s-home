<template>
    <div class="layout-container layout-photo">
        <div class="photo-list">
            <img class="photo" loading="lazy" v-for="(item, index) in photoList" :key="index" :src="item.src" :alt="item.alt" @click="previewImage({
                src: item.src,
                html: item.alt
            })">
        </div>
    </div>
</template>

<script setup>
    import { reactive } from 'vue';
    import { previewImage } from '@/scripts/utils';

    import Image01 from "@/photo/IMG_20240211_191014.jpg"
    import Image02 from "@/photo/IMG_20240209_145206.jpg"
    
    const photoList = reactive([{
        alt: 'Hua Image',
        src: Image01
    }, {
        alt: 'Hua Image',
        src: Image02
    }]);
</script>

<style lang="scss">
    @import url("./PhotoLayout.scss");
</style>