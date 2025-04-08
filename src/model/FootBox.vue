<template>
    <div class="model-footbox">
        <p v-if="config.footer.showThemeBy">Theme by <a href="https://github.com/yichen9247/Hua-s-home" target="_blank">Hua's home</a></p>
        <a href="https://beian.miit.gov.cn" target="_blank" v-if="config.footer.showIcp">{{ config.footer.icpText }}</a>
    </div>
</template>

<script setup>
    import config from '@/scripts/config';
</script>

<style lang="scss">
    @import url("./FootBox.scss");
</style>