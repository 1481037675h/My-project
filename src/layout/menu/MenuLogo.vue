<template>
  <div class="logo">
    <img :src="MenuLogo" />
    <span v-if="show" class="logo-title">{{ title }}</span>
  </div>
</template>
<script setup lang="ts">
import { ref, watch } from "vue";
import MenuLogo from "@/assets/MenuLogo.png";
const title = ref("乐活健身管理系统");
const props = defineProps({
  isCollapsed: {
    require: true,
    type: Boolean,
  },
});
const show = ref(true);
watch(
  () => props.isCollapsed,
  (collapsed: boolean) => {
    if (!collapsed) {
      setTimeout(() => {
        show.value = !collapsed;
      }, 300);
    } else {
      show.value = !collapsed;
    }
  }
);
</script>
<style scoped lang="scss">
.logo {
  display: flex;
  width: 100%;
  height: 50px;
  line-height: 50px;
  background: #2b2f3a;
  text-align: center;
  cursor: pointer;
  align-items: center;
  img {
    width: 36px;
    height: 60px;
    margin-right: 8px;
    margin-left: 12px;
  }
  .logo-title {
    color: #fff;
    font-weight: 800;
    line-height: 60px;
    font-size: 16px;
    font-weight: 600;
    font-family: heiti;
    color: #d6d9de;
  }
}
</style>
