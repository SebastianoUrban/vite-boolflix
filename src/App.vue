<template>
    <div class="wrapper">
      <input type="text" name="search" v-model="store.searchText">
      <button @click="queryMovie()" >Cerca</button>
      <h1>Risultati</h1>
      <ol>
        <li v-for="item in store.results" :key="item.id">
          <ul>
            <li>Titolo: {{ item.title }}</li>
            <li>Titolo originale: {{ item.original_title }}</li>
            <li>Lingua originale: {{ item.original_language }} <img class="flag" :src="getFlag(item.original_language)" alt=""></li>
            <li>Voto medio: {{ item.vote_average }}</li>
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
            store.results = response.data.results;
            store.searchText = '';
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