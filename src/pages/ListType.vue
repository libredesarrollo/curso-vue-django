<template>
    <h1>Listado Tipos</h1>

    <router-link :to="{ name: 'list-category' }">Categorías</router-link>

    <div v-for="c in tipes" :key="c.id">
        <p>{{ c.title }}</p>
    </div>

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