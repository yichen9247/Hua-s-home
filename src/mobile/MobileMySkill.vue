<template>
    <div class="mobile-layout mobile-mySkill">
        <TitleBox :title="config.mySkill.name"/>
        <div class="skill-main">
            <div class="skill-block" v-for="(block, index) in config.mySkill.data" :key="index">
                <p class="block-name">{{ block.name }}</p>
                <div class="skill-list">
                    <span class="skill-item" v-for="(item, index) in block.data" :key="index">{{ item }}</span>
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