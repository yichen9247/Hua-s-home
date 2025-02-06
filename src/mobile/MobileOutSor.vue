<template>
    <div class="mobile-layout mobile-outsor">
        <TitleBox :title="config.outsor.name"/>
        <div class="outsor-list">
            <div class="outsor-list-item" v-for="(item, index) in config.outsor.data" :key="index" @click="previewImage({
                    src: item.image,
                    html: item.name
                })">
                <div class="item-image">
                    <img class="screenshot" :src="item.image" :alt="item.name" draggable="false">
                </div>
                <div class="item-content">
                    <p class="item-name">{{ item.name }}</p>
                    <p class="item-desc">{{ item.desc }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import config from '@/scripts/config';
    import TitleBox from '@/model/TitleBox.vue';
    import { previewImage } from '@/scripts/utils';
</script>

<style lang="scss">
    @import url("./MobileOutSor.scss");
</style>