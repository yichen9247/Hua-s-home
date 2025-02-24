<template>
    <div class="main-container">
        <div class="main-box" v-if="!applicationStore.isDeviceMobile">
            <UserInfo style="width: 280px; min-width: 280px;"/>
            <Content/>
        </div>
        <div class="strat-box" v-else>
            <component v-for="(item, index) in mobileLayoutList" :key="index" :is="item"/>
            <FootBox/>
        </div>
    </div>
</template>

<script setup>
    import { markRaw, reactive } from 'vue';
    import Content from '@/model/Content.vue';
    import FootBox from '@/model/FootBox.vue';
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