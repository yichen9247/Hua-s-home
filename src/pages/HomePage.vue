<template>
    <div class="main-container">
        <div class="main-box" v-if="!applicationStore.isDeviceMobile">
            <div class="content">
                <UserInfo style="width: 280px; min-width: 280px;"/>
                <Content/>
            </div>
            <footer class="footer" v-if="!applicationStore.isDeviceMobile">
                <span>
                    <img class="beian-icon" :src="beianIcon" alt="川公网安备51050402000373号">
                    <a href="https://beian.mps.gov.cn/#/query/webSearch?code=51050402000373" rel="noreferrer" target="_blank">川公网安备51050402000373号</a>
                </span>
                <a href="https://beian.miit.gov.cn" rel="noreferrer" target="_blank">{{ config.footer.icpText }}</a>
            </footer>
        </div>
        <div class="strat-box" v-else>
            <component v-for="(item, index) in mobileLayoutList" :key="index" :is="item"/>
            <FootBox/>
        </div>
    </div>
</template>

<script setup>
    import config from '@/scripts/config';
    import { markRaw, reactive } from 'vue';
    import Content from '@/model/Content.vue';
    import FootBox from '@/model/FootBox.vue';
    import beianIcon from "@/assets/beian.png";
    import UserInfo from '@/model/UserInfo.vue';
    import MobileHome from '@/mobile/MobileHome.vue';
    import MobileAbout from '@/mobile/MobileAbout.vue';
    import MobileOutSor from '@/mobile/MobileOutSor.vue';
    import MobilePhotos from '@/mobile/MobilePhotos.vue';
    import MobileFriend from '@/mobile/MobileFriend.vue';
    import MobileProject from '@/mobile/MobileProject.vue';
    import MobileMySkill from '@/mobile/MobileMySkill.vue';
    import MobileWebsite from '@/mobile/MobileWebsite.vue';
    import { useApplicationStore } from '@/stores/applicationStore';
    
    const mobileLayoutList = reactive([
        markRaw(MobileHome),markRaw(MobileProject),markRaw(MobileWebsite),markRaw(MobileOutSor),markRaw(MobileMySkill),markRaw(MobileFriend),markRaw(MobilePhotos),markRaw(MobileAbout)
    ]);
    const applicationStore = useApplicationStore();
</script>

<style lang="scss">
    @import url("./HomePage.scss");
</style>