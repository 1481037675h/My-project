<template>
  <el-breadcrumb class="bred" :separator-icon="ArrowRight">
    <el-breadcrumb-item v-for="item in tabs">{{
      item.meta.title
    }}</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup lang="ts">
import { ArrowRight } from "@element-plus/icons-vue";
import { ref, watch, Ref } from "vue";
import { useRoute, RouteLocationMatched } from "vue-router";
//获取当前路由
const route = useRoute();
//面包屑数据 Ref:定义数据的类型
const tabs: Ref<RouteLocationMatched[]> = ref([]);
// 监听到路由发生变化后的操作
const getBreadcrumb = () => {
  // 找出存在title的菜单
  let mached = route.matched.filter((item) => item.meta && item.meta.title);
  // 判断第一个是不是首页，不是构造一个首页
  const first = mached[0];
  if (first.path !== "/dashboard") {
    // 构造首页，并放到mached
    mached = [{ path: "/dashboard", meta: { title: "首页" } } as any].concat(
      mached
    );
  }
  tabs.value = mached;
};
// 第一次进入加载
getBreadcrumb();
watch(
  () => route.path,
  () => getBreadcrumb()
);
</script>

<style scoped lang="scss">
//深度查找修改字体颜色
:deep(.el-breadcrumb__inner) {
  color: #fff !important;
}
.bred {
  margin-left: 20px;
}
</style>
