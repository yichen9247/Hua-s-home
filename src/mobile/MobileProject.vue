<template>
    <div class="mobile-layout mobile-project">
        <div class="section-header">
            <h2 class="section-title">{{ config.project.name }}</h2>
            <div class="title-underline"></div>
        </div>
        <div class="project-grid" v-loading="loading">
            <el-result icon="error" title="获取数据失败" v-if="error"/>
            <div class="project-card" v-else v-for="
                (item, index) in reposList
            " :key="index" @click="openOtherSite(item.html_url)">
                <div class="card-content">
                    <div class="card-header">
                        <h3 class="project-name">{{ item.name }}</h3>
                        <div class="project-icon">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" />
                            </svg>
                        </div>
                    </div>
                    <p class="project-desc">{{ item.description }}</p>
                </div>
                <div class="card-glow"></div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import router from '@/router';
    import config from '@/scripts/config';
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
    @import url("./MobileProject.scss");
</style>