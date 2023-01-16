<template>
    <div class="wrapper">
      <input type="text" name="search" v-model="store.searchText">
      <button @click="queryTv()" >Cerca</button>
      <h1>Risultati</h1>
      <ol>
        <li v-for="item in store.results" :key="item.title">
          <ul>
            <li>Titolo: {{ item.title }}</li>
            <li>Titolo originale: {{ item.originalTitle }}</li>
            <li>Lingua originale: {{ item.language }} <img class="flag" :src="getFlag(item.language)" alt=""></li>
            <li>Voto medio: {{ item.rateing }}</li>
          </ul>
        </li>
      </ol>
    </div>
  </template>

<script>
  import axios from 'axios';
  import { store } from './store.js';

  export default {
    data() {
      return {
        store
      }
    },methods: {
      queryMovie() {
        axios.get('https://api.themoviedb.org/3/search/movie?api_key=fd496a5d9593ae9ca1b97ac4b05d38cf&query='+store.searchText)
          .then( (response) => {
            console.log(response);
            response.data.results.forEach(film => {
              store.results.push({
                title : film.title,
                originalTitle : film.original_title,
                language : film.original_language,
                rateing : film.vote_average
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
                language : tv.original_language,
                rateing : tv.vote_average
              });
            });
          })
          .catch( (error) => {
            console.log('ERROR');
            console.log(error);
          })
      },
      getFlag (code) {
        if (code in store.flags) {
          return store.flags[code]
        } else {
          return store.flags.xx
        }
      }
    },
    created () {
    },
  }
</script>

<style lang="scss">
  @use './style/general.scss' as *;
  @use './style/variables.scss' as * ;
  @import "/node_modules/bootstrap/scss/bootstrap";

  ol>li {
    margin: 1rem 0;
  }

  div.wrapper {
    margin: 2rem;
  }
</style>