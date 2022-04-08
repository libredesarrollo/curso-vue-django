<template>
    <h1>Listado</h1>
</template>
<script>
export default {
    mounted(){
        this.$axios.get("http://localhost:8000/api/category/?format=json")
        .then((res)=>{
            console.log(res.data)
        })
    }
}
</script>