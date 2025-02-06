<template>
    <div class="model-footbox">
        <p class="copyright" v-html="config.footer.copyright"></p>
        <p v-if="config.footer.showThemeBy">Theme By <a href="https://github.com/yichen9247/Hua-s-home" target="_blank">Hua's home</a></p>
    </div>
</template>

<script setup>
    import config from '@/scripts/config';
</script>

<style lang="scss">
    @import url("./FootBox.scss");
</style>