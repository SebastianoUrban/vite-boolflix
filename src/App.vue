<template>
    <div>
      <h1>Risultati</h1>
      <ol>
        <li v-for="item in output" :key="item.id">
          <ul>
            <li>Titolo: {{ item.title }}</li>
            <li>Titolo originale: {{ item.original_title }}</li>
            <li>Lingua originale: {{ item.original_language }}</li>
            <li>Voto medio: {{ item.vote_average }}</li>
          </ul>
        </li>
      </ol>
    </div>
  </template>

<script>
  import axios from 'axios';

  export default {
    data() {
      return {
        output : []
      }
    },methods: {
      query() {
        axios.get('https://api.themoviedb.org/3/search/movie?api_key=fd496a5d9593ae9ca1b97ac4b05d38cf&query=ritorno al futuro')
          .then( (response) => {
            console.log(response);
            this.output = response.data.results;
          })
          .catch( (error) => {
            console.log('ERROR');
            console.log(error);
          })
      }
    },
    created () {
      this.query();
    },
  }
</script>

<style lang="scss">
  @import "/node_modules/bootstrap/scss/bootstrap";

  ol>li {
    margin: 1rem 0;
  }
</style>