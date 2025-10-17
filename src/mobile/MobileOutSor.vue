<template>
    <div class="mobile-layout mobile-outsor">
        <div class="section-header">
            <h2 class="section-title">{{ config.outsor.name }}</h2>
            <div class="title-underline"></div>
        </div>
        <div class="portfolio-grid">
            <div
                class="portfolio-card"
                v-for="(item, index) in config.outsor.data"
                :key="index"
                @click="previewImage({ src: item.image, html: item.name })"
                :style="{ '--delay': index * 0.15 + 's' }"
            >
                <div class="card-image">
                    <img class="screenshot" v-lazy="item.image" :alt="item.name" draggable="false">
                    <div class="image-overlay">
                        <div class="view-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M1 12S5 4 12 4S23 12 23 12S19 20 12 20S1 12 1 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="2"/>
                            </svg>
                        </div>
                    </div>
                </div>
                <div class="card-content">
                    <h3 class="project-name">{{ item.name }}</h3>
                    <p class="project-desc">{{ item.desc }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import config from '@/scripts/config';
    import { previewImage } from '@/scripts/utils';
</script>

<style lang="scss">
    @import url("./MobileOutSor.scss");
</style>