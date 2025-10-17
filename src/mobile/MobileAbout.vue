<template>
    <div class="mobile-layout mobile-about">
        <div class="section-header">
            <h2 class="section-title">{{ config.about.name }}</h2>
            <div class="title-underline"></div>
        </div>
        <div class="about-content">
            <div class="bio-card">
                <div class="bio-text">
                    <p class="description">{{ config.about.data }}</p>
                </div>
            </div>
            <div class="contact-section">
                <div class="contact-cards">
                    <!-- Email -->
                    <div class="contact-card">
                        <div class="contact-icon" @click="openOtherSite('mailto:' + config.author.email)">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                <path d="M3 8L12 13L21 8V5C21 4.46957 20.7893 3.96086 20.4142 3.58579C20.0391 3.21071 19.5304 3 19 3H5C4.46957 3 3.96086 3.21071 3.58579 3.58579C3.21071 3.96086 3 4.46957 3 5V8Z" stroke="currentColor" stroke-width="2"/>
                                <path d="M3 8L12 13L21 8M3 8V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H19C19.5304 21 20.0391 20.7893 20.4142 20.4142C20.7893 20.0391 21 19.5304 21 19V8" stroke="currentColor" stroke-width="2"/>
                            </svg>
                        </div>
                        <span class="contact-text">Email</span>
                    </div>
                    <!-- Github -->
                    <div class="contact-card" @click="openOtherSite('https://github.com/' + config.author.github)">
                        <div class="contact-icon">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" fill="currentColor"/>
                            </svg>
                        </div>
                        <span class="contact-text">GitHub</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import config from '@/scripts/config';
    import { openOtherSite } from '@/scripts/utils';
</script>

<style lang="scss">
    @import url("./MobileAbout.scss");
</style>