<template>
  <n-space justify="center">
    <n-layout has-sider>
      <n-layout-sider>
        <n-menu :options="options"> </n-menu>
      </n-layout-sider>

      <n-layout>
        <n-layout-header> Título </n-layout-header>
        <n-layout-content>
          <router-view></router-view>
        </n-layout-content>
        <!-- <n-layout-footer>Pie de página</n-layout-footer> -->
      </n-layout>
    </n-layout>
  </n-space>
</template>

<script>
import { h } from "vue";
import { RouterLink } from "vue-router";

export default {
  name: "App",
  data() {
    return {
      options: [],
    };
  },
  mounted() {
    
    this.categories();
    this.types();
  },
  methods: {
    types() {
      this.$axios
        .get("http://localhost:8000/api/type/?format=json")
        .then((res) => {
          const optionType = [
            {
              label: () =>
                h(
                  RouterLink,
                  {
                    to: {
                      name: "list-type",
                    },
                  },
                  { default: () => "Listado" }
                ),
              key: "list type",
            },
          ];
          res.data.results.forEach((t) => {
      
            optionType.push({
              label: t.title,
              key: "t " + t.id,
            });
          });

          this.options.push({
            label: "Type",
            key: "2 parent",
            children: optionType,
          });
        });
    },
    categories() {
      this.$axios
        .get("http://localhost:8000/api/category/?format=json")
        .then((res) => {
          const optionCate = [
            {
              label: () =>
                h(
                  RouterLink,
                  {
                    to: {
                      name: "list-category",
                    },
                  },
                  { default: () => "Listado" }
                ),
              key: "list cate",
            },
          ];
          res.data.results.forEach((c) => {
        
            optionCate.push({
              label: c.title,
              key: "c " + c.id,
            });
          });

          this.options.push({
            label: "Categorías",
            key: "1 parent",
            children: optionCate,
          });
        });
    },
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