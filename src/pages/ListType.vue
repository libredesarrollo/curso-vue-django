<template>
    <h1>Listado Tipos</h1>

    <router-link :to="{ name: 'list-category' }">Categorías</router-link>

<n-table :bordered="true" :single-line="false">
    <thead>
      <tr>
        <th>Título</th>
        <th>Acciones</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="t in tipes" :key="t.id">
        <td>{{ t.title }}</td>
        <td>
            __
        </td>
      </tr>
    </tbody>
  </n-table>

</template>
<script>
export default {
    data(){
        return {
            tipes:[]
        }
    },
    mounted(){
        this.$axios.get("http://localhost:8000/api/type/?format=json")
        .then((res)=>{
            //console.log(res.data.results)
            this.tipes = res.data.results
        })
    }
}
</script>