<template>
    <h1>Listado Categorías</h1>

    <router-link :to="{ name: 'list-type' }">Tipos</router-link>

    <div v-for="c in categories" :key="c.id">
        <p>{{ c.title }}</p>
    </div>

</template>
<script>
export default {
    data(){
        return {
            categories:[]
        }
    },
    mounted(){
        this.$axios.get("http://localhost:8000/api/category/?format=json")
        .then((res)=>{
            //console.log(res.data.results)
            this.categories = res.data.results
        })
    }
}
</script>