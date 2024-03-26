<template>
    <div>
        <el-result icon="warning" title="404" sub-title="Not found">
            <template #extra>
                <!-- 点击返回首页 -->
                <el-button type="primary" @click="$router.push('/')">homePage</el-button>
            </template>
        </el-result>
    </div>
</template>