<template>
    <div class="model-footbox">
        <a href="https://beian.miit.gov.cn" target="_blank" v-if="config.footer.showIcp">{{ config.footer.icpText }}</a>
        <p>
            <!-- <img class="beian-icon" :src="beianIcon" alt="川公网安备51050402000373号"> -->
            <a href="https://beian.mps.gov.cn/#/query/webSearch?code=51050402000373" rel="noreferrer" target="_blank">川公网安备51050402000373号</a>
        </p>
    </div>
</template>

<script setup>
    import config from '@/scripts/config';
</script>

<style lang="scss">
    @import url("./FootBox.scss");
</style>