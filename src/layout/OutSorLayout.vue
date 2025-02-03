<template>
    <div class="layout-container layout-outsor">
        <div class="outsor-list">
            <div class="outsor-list-item" v-for="(item, index) in outsorList" :key="index">
                <div class="item-image">
                    <img class="screenshot" :src="item.image" :alt="item.name" @click="previewImage({
                        src: item.image,
                        html: item.name
                    })" draggable="false">
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
    import { reactive } from 'vue';
    import { previewImage } from '@/scripts/utils';

    import Image_01 from "@/photo/outsor/PixPin_2025-02-02_23-16-24.png"
    import Image_02 from "@/photo/outsor/PixPin_2025-02-02_23-41-10.png"
    import Image_03 from "@/photo/outsor/PixPin_2025-02-02_23-49-41.png"
    import Image_04 from "@/photo/outsor/PixPin_2025-02-03_12-23-26.png"

    const outsorList = reactive([{
        name: '梦希操作系统官网',
        desc: '技术栈：Vite + Vue3（前端）',
        image: Image_01,
    }, {
        name: 'AIDE PRO官网',
        desc: '技术栈：Vite + Vue3 + Axios（前端）',
        image: Image_02,
    }, {
        name: 'AIDE PRO后台',
        desc: '技术栈：Spring + Mybatis + Redis（后端）',
        image: Image_03,
    }, {
        name: '智慧管理云平台',
        desc: '技术栈：Vite + Vue3 + Nodejs（全栈）',
        image: Image_04,
    }]);
</script>

<style lang="scss">
    @import url("./OutSorLayout.scss");
</style>
