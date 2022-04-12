<template>
  <!-- <h1>Listado Categorías</h1> -->

  <router-link :to="{ name: 'list-type' }">Tipos</router-link>

  <n-table :bordered="true" :single-line="false">
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
            __
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