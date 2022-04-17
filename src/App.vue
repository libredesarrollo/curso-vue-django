<template>
  <n-config-provider :theme-overrides="themeOverrides">
    <n-layout class="mb-5">
      <n-layout-header>
        AppVue
        <MenuHeader />
      </n-layout-header>
    </n-layout>

    <n-space justify="center">
      <n-layout has-sider>
        <n-layout-sider><MenuSidebar /> </n-layout-sider>

        <n-layout>
          <n-layout-header> Título </n-layout-header>
          <n-layout-content class="p-2">
            <router-view></router-view>
          </n-layout-content>
          <!-- <n-layout-footer>Pie de página</n-layout-footer> -->
        </n-layout>
      </n-layout>
    </n-space>
  </n-config-provider>
</template>

<script>
import { NConfigProvider } from "naive-ui";

import MenuSidebar from "@/components/MenuSidebar";
import MenuHeader from "@/components/MenuHeader";

export default {
  components: {
    MenuSidebar,
    MenuHeader,
    NConfigProvider,
  },
  data() {
    return {
      themeOverrides: {
        common: {
          
        },
       
        Table: {
          tdColor:"#AAA"
        },
      },
    };
  },
};
</script>

<style>
.n-layout-header,
.n-layout-footer {
  background: rgba(128, 128, 128, 0.2);
  padding: 24px;
}
.n-layout-sider {
  background: rgba(128, 128, 128, 0.3);
}
.n-layout-content {
  background: rgba(128, 128, 128, 0.4);
}
</style>