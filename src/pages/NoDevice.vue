<template>
    <div class="nodevice-container">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" class="icon-info"><path fill="currentColor" d="M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64m67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344M590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"></path></svg>
        <span class="no-title">暂只支持电脑访问</span>
        <p class="no-description">使用电脑访问以获得最佳效果</p>
    </div>
</template>

<script setup>

</script>

<style lang="scss">
    div.nodevice-container {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        background-color: #ffffff;

        svg {
            width: 84px;
            height: 84px;
            color: #909399;
        }

        span.no-title {
            font-size: 20px;
            margin-top: 25px;
            line-height: 1.5;
            color: #303133;
        }

        p.no-description {
            font-size: 14px;
            margin-top: 10px;
            line-height: 1.5;
            color: #606266;
        }
    }
</style>