<template>
    <div class="mobile-layout mobile-mySkill">
        <div class="section-header">
            <h2 class="section-title">{{ config.mySkill.name }}</h2>
            <div class="title-underline"></div>
        </div>
        <div class="skill-grid">
            <div class="skill-category" v-for="(block, index) in config.mySkill.data" :key="index" :style="{ '--delay': index * 0.1 + 's' }">
                <div class="category-header">
                    <div class="category-icon">
                        <img class="icon" :src="block.icon" :alt="block.name">
                    </div>
                    <h3 class="category-name">{{ block.name }}</h3>
                    <div class="skill-count">{{ block.data.length }} 项</div>
                </div>
                <div class="skill-grid">
                    <div
                        class="skill-item"
                        v-for="(item, skillIndex) in block.data"
                        :key="skillIndex"
                        :style="{ '--item-delay': skillIndex * 0.03 + 's' }"
                    >
                        <!-- <div class="skill-icon">
                            <div class="icon-dots">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div> -->
                        <span class="skill-name">{{ item }}</span>
                        <div class="skill-level">
                            <div class="level-bar">
                                <div class="level-fill" :style="{ '--width': '100%' }"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import config from '@/scripts/config';
    import TitleBox from '@/model/TitleBox.vue';
</script>

<style lang="scss">
    @import url("./MobileMySkill.scss");
</style>