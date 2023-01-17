<template>
  <header class="d-flex justify-content-center align-items-center">
    <div class="container-lg wrapper d-flex justify-content-between align-items-center">
      <div>
        <img class="netflix-logo" src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png" alt="">
      </div>
      <div class="search d-flex justify-content-center align-items-center">
        <input type="text" name="" v-model="store.searchText" class="me-3" >
        <button @click="query()" >Cerca</button>
      </div>
    </div>
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
                rateing : Math.ceil(tv.vote_average / 2),
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
  header {
    height: 80px;
    background-color: black;
  }

  div.search {
    input {
      border-radius: 10px;
      border: 2px solid white;
      height: 30px;
      background-color: rgb(29, 29, 29);
      color: white;
      padding: 0 10px;
    }
    button {
      border-radius: 10px;
      border: 2px solid white;
      height: 30px;
      background-color: rgb(29, 29, 29);
      color: white;
      padding: 0 10px;
    }
  }
  img.netflix-logo {
    height: 40px;
  }
</style>