<template>
  <!-- <h1>Listado Categorías</h1> -->

  <n-button type="primary">
    <router-link :to="{ name: 'save-element' }">Crear</router-link>
  </n-button>
  <n-table :bordered="true" :single-line="false" class="my-table">
    <thead>
      <tr>
        <th>Id</th>
        <th>Título</th>
        <th>Precio</th>
        <th>Fecha</th>
        <th>Acciones</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="e in elements" :key="e.id">
        <td>{{ e.id }}</td>
        <td>{{ e.title }}</td>
        <td>{{ e.price }}</td>
        <td>{{ e.created }}</td>
        <td>
          <n-button type="primary">
            <router-link
              :to="{ name: 'detail-element', params: { slug: e.url_clean } }"
              >Ver</router-link
            >
          </n-button>

          <router-link class="ml-2" :to="{ name: 'save-element', params: { id: e.id } }"
            >Editar</router-link
          >
        </td>
      </tr>
    </tbody>
  </n-table>
</template>
<script>
export default {
  data() {
    return {
      elements: [],
    };
  },
  mounted() {
    let url = "http://localhost:8000/api/element/?format=json";

    if (this.$route.params.type == "c")
      url =
        "http://127.0.0.1:8000/api/category/" +
        this.$route.params.id +
        "/elements/?format=json";
    else if (this.$route.params.type == "t")
      url =
        "http://127.0.0.1:8000/api/type/" +
        this.$route.params.id +
        "/elements/?format=json";

    this.$axios.get(url).then((res) => {
      this.elements = res.data.results ? res.data.results : res.data;
    });
  },
};
</script>