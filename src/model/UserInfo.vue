<template>
    <div class="model-user">
        <div class="user-contianer">
            <div class="avatar-box">
                <img class="avatar-img" :src="config.author.avatar" alt="Hua" draggable="false">
            </div>
            <p class="user-profile username">{{ config.author.name }}</p>
            <p class="user-profile userdesc">{{ config.author.description }}</p>
        </div>
        <!-- <footer class="footer-container" v-if="config.footer.showIcp">
            <p style="font-size: 15px;">
                <a href="https://beian.miit.gov.cn" rel="noreferrer" target="_blank">{{ config.footer.icpText }}</a>
            </p>
            <p>
                <img :src="beianIcon" alt="">
                <a href="https://beian.mps.gov.cn/#/query/webSearch?code=51050402000373" rel="noreferrer" target="_blank">川公网安备51050402000373号</a>
            </p>
        </footer> -->
    </div>
</template>

<script setup>
    import config from '@/scripts/config';
    import beianIcon from "@/assets/beian.png"
</script>

<style lang="scss">
    @import url("./UserInfo.scss");
</style>