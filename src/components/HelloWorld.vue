<template>
  <h3>pinia测试</h3>
  <el-button type="primary" @click="addBtn">Primary</el-button>
    <el-icon><Lock /></el-icon>
  <span>{{ count }}</span>
  
</template>
<script lang="ts" setup>
import {testStore} from '@/store/test/index'
import { computed } from '@vue/runtime-core'
import { storeToRefs } from 'pinia'
// 获取store
const store = testStore()
// 获取count，但是这种方式数据会失去响应
// const{count}=storeToRefs(store)
const count = computed(()=>{
  return store.count
})
const addBtn = ()=>{
  store.count++
}
</script>
<style scoped>
.read-the-docs {
  color: #888;
}
</style>
