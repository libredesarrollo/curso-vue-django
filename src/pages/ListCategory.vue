<template>
  <!-- <h1>Listado Categorías</h1> -->

  <n-button type="primary">
    <router-link :to="{ name: 'save-category' }">Crear</router-link>
  </n-button>

  <n-table :bordered="true" :single-line="false" class="my-table">
    <thead>
      <tr>
        <th>Título</th>
        <th>Acciones</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="c in categories" :key="c.id">
        <td>{{ c.title }}</td>
        <td>
          <n-button type="primary">
            <router-link
              :to="{ name: 'list-element', params: { type: 'c', id: c.id } }"
              >Elementos</router-link
            >
          </n-button>

          <router-link :to="{ name: 'save-category', params: { id: c.id } }"
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
      categories: [],
    };
  },
  mounted() {
    this.$axios
      .get("http://localhost:8000/api/category/?format=json")
      .then((res) => {
        //console.log(res.data.results)
        this.categories = res.data.results;
      });
  },
};
</script>