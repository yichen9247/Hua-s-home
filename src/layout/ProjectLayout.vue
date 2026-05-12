<template>
    <div class="layout-container layout-project" v-loading="loading" style="animation: unset;">
        <el-result icon="error" title="获取数据失败" v-if="error">
            <template #extra>
                <el-button type="primary" @click="router.push({
                    name: 'home'
                })">返回主页</el-button>
            </template>
        </el-result>
        <div class="project-list" v-else-if="!loading">
            <div class="project-list-item" v-for="
                (item, index) in reposList
            " :key="index" @click="openOtherSite(item.html_url)">
                <p class="item-name">{{ item.name }}</p>
                <p class="item-desc">{{ item.description }}</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import router from '@/router';
    import { getGithubRepos } from '@/api';
    import { GithubReponseType } from 'types';
    import { onMounted, ref, reactive } from 'vue';
    import { openOtherSite } from '@/scripts/utils';

    const error = ref<boolean>(false);
    const loading = ref<boolean>(true);
    const reposList = reactive<GithubReponseType[]>([]);

    onMounted(async (): Promise<void> => {
        await getGithubRepos().then((response: GithubReponseType[]) => {
            reposList.splice(0, reposList.length, ...response);
        }).catch((): void => {
            error.value = true;
        }).finally((): boolean => loading.value = false);
    });
</script>

<style lang="scss">
    @import url("./ProjectLayout.scss");
</style>