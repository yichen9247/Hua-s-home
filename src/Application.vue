<template>
    <router-view v-if="!applicationStore.isDeviceMobile"/>
    <NoDevice v-else/>
</template>

<script setup>
    import NoDevice from './pages/NoDevice.vue';
    import { useApplicationStore } from './stores/applicationStore';

    const applicationStore = useApplicationStore();
</script>

<style lang="scss">
    @import url("./assets/index.scss");
</style>