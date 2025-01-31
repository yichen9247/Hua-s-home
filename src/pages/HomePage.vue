<template>
    <div class="main-container">
        <div class="main-box">
            <UserInfo style="width: 280px; min-width: 280px;"/>
            <Content/>
        </div>
    </div>
</template>

<script setup>
    import Content from '@/model/Content.vue';
    import UserInfo from '@/model/UserInfo.vue';
</script>

<style lang="scss">
    @import url("./index.scss");
</style>