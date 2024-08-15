<template>
    <div class="container-movies d-middle p-100">

       <CardMovie 
            v-for="movie in listMovies"
            :id="movie.imdbID"
            :poster="movie.Poster"
            :title="movie.Title"
            :year="movie.Year"
            :type="movie.Type"
       />

    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import HTTP from "@/api/client-http.ts"

import CardMovie from "@/components/movies/CardMovie.vue"

onMounted(()=> {
    console.log('ListMovies mounted')
    fetchMovies()
})

const listMovies = ref([])


async function  fetchMovies() {
    const resp =  await HTTP.get('',{
        params: {
            s: 'harry potter'
        }
    })
    listMovies.value = resp.data.Search;
    console.log(resp)
}   
</script>

<style scoped lang="scss">
.container-movies {
    flex-wrap: wrap;
    gap: 20px
}
</style>