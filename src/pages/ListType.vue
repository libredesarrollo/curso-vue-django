<template>

  <n-button type="primary">
    <router-link :to="{ name: 'list-category' }">Categorías</router-link>
  </n-button>
  <n-table :bordered="true" :single-line="false" class="my-table">
    <thead>
      <tr>
        <th>Título</th>
        <th>Acciones</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="t in tipes" :key="t.id">
        <td>{{ t.title }}</td>
        <td>__</td>
      </tr>
    </tbody>
  </n-table>
</template>
<script>
export default {
  data() {
    return {
      tipes: [],
    };
  },
  mounted() {
    this.$axios
      .get("http://localhost:8000/api/type/?format=json")
      .then((res) => {
        //console.log(res.data.results)
        this.tipes = res.data.results;
      });
  },
};
</script>