<template>
    <div class="mobile-layout mobile-project">
        <div class="section-header">
            <h2 class="section-title">{{ config.project.name }}</h2>
            <div class="title-underline"></div>
        </div>
        <div class="project-grid">
            <div
                class="project-card"
                v-for="(item, index) in config.project.data"
                :key="index"
                @click="openOtherSite(item.repo)"
                :style="{ '--delay': index * 0.1 + 's' }"
            >
                <div class="card-content">
                    <div class="card-header">
                        <h3 class="project-name">{{ item.name }}</h3>
                        <div class="project-icon">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                            </svg>
                        </div>
                    </div>
                    <p class="project-desc">{{ item.desc }}</p>
                </div>
                <div class="card-glow"></div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { onMounted } from 'vue';
    import config from '@/scripts/config';
    import { openOtherSite } from '@/scripts/utils';
    const handleTouchStart = (event) => {
        const touch = event.touches[0];
        const rect = event.currentTarget.getBoundingClientRect();
        const x = ((touch.clientX - rect.left) / rect.width) * 100;
        const y = ((touch.clientY - rect.top) / rect.height) * 100;

        event.currentTarget.style.setProperty('--touch-x', `${x}%`);
        event.currentTarget.style.setProperty('--touch-y', `${y}%`);
    };

    onMounted(() => {
        document.addEventListener('DOMContentLoaded', () => {
            const cards = document.querySelectorAll('.project-card');
            cards.forEach(card => {
                card.addEventListener('touchstart', handleTouchStart, { passive: true });
            });
        });
    });
</script>

<style lang="scss">
    @import url("./MobileProject.scss");
</style>