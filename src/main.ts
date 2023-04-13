import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router/index";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
//图标
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import { createPinia } from "pinia";
import zhCn from "element-plus/dist/locale/zh-cn.mjs";
import myconfirm from "./utils/myconfirm";
import objCoppy from "./utils/objCoppy";
const pinia = createPinia();
const app = createApp(App);
app
  .use(router)
  .use(ElementPlus, {
    locale: zhCn,
  })
  .use(pinia);
app.mount("#app");
//挂载全局属性
app.config.globalProperties.$objCoppy = objCoppy;
app.config.globalProperties.$myconfirm = myconfirm;
//全局注册图标组件
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
