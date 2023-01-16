<template>
  <header>
    <input type="text" name="search" v-model="store.searchText">
    <button @click="query()" >Cerca</button>
  </header>
</template>

<script>
  import axios from 'axios';
  import { store } from '../store.js';

  export default {
    data() {
      return {
        store
      }
    },
    methods: {
      queryMovie() {
        axios.get('https://api.themoviedb.org/3/search/movie?api_key=fd496a5d9593ae9ca1b97ac4b05d38cf&query='+store.searchText)
          .then( (response) => {
            console.log(response);
            response.data.results.forEach(film => {
              store.results.push({
                title : film.title,
                originalTitle : film.original_title,
                overview : film.overview,
                language : film.original_language,
                rateing : Math.ceil(film.vote_average / 2),
                backdropPath : film.backdrop_path,
                type : 'film'
              });
            });
          })
          .catch( (error) => {
            console.log('ERROR');
            console.log(error);
          })
      },
      queryTv() {
        axios.get('https://api.themoviedb.org/3/search/tv?api_key=fd496a5d9593ae9ca1b97ac4b05d38cf&language=it_IT&query='+store.searchText)
          .then( (response) => {
            console.log(response);
            response.data.results.forEach(tv => {
              store.results.push({
                title : tv.name,
                originalTitle : tv.original_name,
                overview : tv.overview,
                language : tv.original_language,
                rateing : Math.ceil(film.vote_average / 2),
                backdropPath : tv.backdrop_path,
                type : 'tv'
              });
            });
          })
          .catch( (error) => {
            console.log('ERROR');
            console.log(error);
          })
      },
      query () {
        store.results = [];
        this.queryMovie();
        this.queryTv();
        store.searchText = '';
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>