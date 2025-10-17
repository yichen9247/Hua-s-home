<template>
    <div class="mobile-layout mobile-photos">
        <div class="section-header">
            <h2 class="section-title">{{ config.photos.name }}</h2>
            <div class="title-underline"></div>
        </div>
        <div class="gallery-container">
            <div class="photo-grid" :class="{ 'expanded': showMorePhoto }">
                <div
                    class="photo-item"
                    v-for="(item, index) in displayedPhotos"
                    :key="index"
                    @click="previewImage({ src: item.src, html: item.alt })"
                    :style="{ '--delay': index * 0.1 + 's' }"
                >
                    <div class="photo-wrapper">
                        <img class="photo-img" v-lazy="item.src" :alt="item.alt" draggable="false">
                        <div class="photo-overlay">
                            <div class="overlay-content">
                                <span class="photo-title">{{ item.alt }}</span>
                            </div>
                        </div>
                        <div class="photo-frame"></div>
                    </div>
                </div>
            </div>

            <div class="gallery-footer" v-if="config.photos.data.length > 3">
                <button
                    class="expand-btn"
                    @click="toggleMorePhotos"
                    :class="{ 'active': showMorePhoto }"
                >
                    <span class="btn-text">{{ showMorePhoto ? '收起相册' : '展开更多' }}</span>
                    <div class="btn-icon">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" :class="{ 'rotated': showMorePhoto }">
                            <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref, computed } from 'vue';
    import config from '@/scripts/config';
    import { previewImage } from '@/scripts/utils';

    const showMorePhoto = ref(false);

    const displayedPhotos = computed(() => {
        return showMorePhoto.value ? config.photos.data : config.photos.data.slice(0, 6);
    });

    const toggleMorePhotos = () => {
        showMorePhoto.value = !showMorePhoto.value;
    };
</script>

<style lang="scss">
    @import url("./MobilePhotos.scss");
</style>