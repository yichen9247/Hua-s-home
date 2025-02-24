<template>
    <div class="layout-container layout-mySkill">
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
</script>


<style lang="scss">
    @import url("./MySkillLayout.scss");
</style>