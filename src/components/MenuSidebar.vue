<template>
  <n-menu :options="options"> </n-menu>
</template>

<script>
import { h } from "vue";
import { RouterLink } from "vue-router";
export default {
  name: "App",
  data() {
    return {
      options: [
        {
          label: () =>
            h(
              RouterLink,
              {
                to: {
                  name: "list-element",
                },
              },
              { default: () => "Elementos" }
            ),
          key: "list type",
        },
      ],
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
              label: () =>
                h(
                  RouterLink,
                  {
                    to: { name: 'list-element', params: { type: 't', id: t.id } },
                  },
                  { default: () => t.title }
                ),
              key: "t " + t.id,
            });
          });
          this.options.push({
            label: "Tipos",
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
              label: () =>
                h(
                  RouterLink,
                  {
                    to: { name: 'list-element', params: { type: 'c', id: c.id } },
                  },
                  { default: () => c.title }
                ),
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