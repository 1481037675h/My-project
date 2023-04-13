<template>
  <el-container class="layout">
    <el-aside width="auto" height="auto" class="asside">
      <MenuBar></MenuBar>
    </el-aside>
    <el-container>
      <el-header height="50px" class="header">
        <Header></Header>
      </el-header>
      <el-main class="main">
        <Tabs></Tabs>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script setup lang="ts">
import Header from "../layout/header/Header.vue";
import MenuBar from "../layout/menu/MenuBar.vue";
import Tabs from "./tabs/Tabs.vue";
</script>
<style lang="scss">
.layout {
  height: 100%;
  width: 100%;
  .asside {
    // background-color: blueviolet;
    background-color: #304156;
  }
  .header {
    display: flex;
    align-items: center;
    background-color: #00c4b3;
  }
  .main {
    background-color: #fff;
    padding: 3px;
  }
}
</style>
