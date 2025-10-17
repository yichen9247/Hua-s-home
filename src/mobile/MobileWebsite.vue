<template>
    <div class="mobile-layout mobile-website">
        <div class="section-header">
            <h2 class="section-title">{{ config.website.name }}</h2>
            <div class="title-underline"></div>
        </div>
        <div class="website-grid">
            <div
                class="website-card"
                v-for="(item, index) in config.website.data"
                :key="index"
                @click="openOtherSite(item.link)"
                :style="{ '--delay': index * 0.1 + 's' }"
            >
                <div class="card-content">
                    <div class="card-header">
                        <h3 class="website-name">{{ item.name }}</h3>
                        <div class="website-icon">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                            </svg>
                        </div>
                    </div>
                    <p class="website-desc">{{ item.desc }}</p>
                </div>
                <div class="card-glow"></div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import config from '@/scripts/config';
    import { openOtherSite } from '@/scripts/utils';
</script>

<style lang="scss">
    @import url("./MobileWebsite.scss");
</style>