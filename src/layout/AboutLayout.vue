<template>
    <div class="layout-container layout-anbout">
        <div class="user-description">
            <p class="description">各位好，我是Hua，具备全栈开发能力的准大一新生，主攻现代前端工程化方向。擅长使用Vue/React生态体系（Vite/Next.js）构建响应式Web应用，对TypeScript工程化与前端状态管理有实战经验。坚持Clean Code原则，熟悉Git协作流程与CI/CD部署，近期正深入Node.js后端开发以完善全栈能力。我的GitHub持续更新技术实践，欢迎通过Issue或PR进行技术探讨。</p>
            <h2 class="title" align="center">IDE THAT I'M USEING</h2>
            <div class="badge-box">
                <img class="badge" v-for="(item, index) in useingIdeList" :key="index" :src="`https://img.shields.io/badge/${item.logo}-${item.name}-blue?style=for-the-badge&logo=${item.logo}`" :alt="item.name" draggable="false">
            </div>
            <h2 class="title" align="center">CONTACT ME</h2>
            <div class="badge-box">
                <img class="badge" v-for="(item, index) in contactList" :key="index" :src="`https://img.shields.io/badge/${item.logo}-${item.name}-blue?style=for-the-badge&logo=${item.logo}`" :alt="item.name" draggable="false">
            </div>
        </div>
    </div>
</template>

<script setup>
    import { reactive } from 'vue';

    const useingIdeList = reactive([{
        name: 'VS Code',
        logo: 'Microsoft',
    }, {
        name: 'Visual Studio',
        logo: 'Microsoft',
    }, {
        name: 'IDEA',
        logo: 'IntelliJ',
    }]);

    const contactList = reactive([{
        name: '865252486',
        logo: 'QQ',
    }, {
        name: 'yichen9247',
        logo: 'WeChat',
    }]);
</script>

<style lang="scss">
    @import url("./AboutLayout.scss");
</style>