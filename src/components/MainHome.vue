<template>
  <HomeCategory :title="'Filem più votati'" :APIuri="'https://api.themoviedb.org/3/movie/top_rated?api_key=fd496a5d9593ae9ca1b97ac4b05d38cf&language=it-IT'"/>
  <HomeCategory :title="'Serie Tv più votate'" :APIuri="'https://api.themoviedb.org/3/tv/top_rated?api_key=fd496a5d9593ae9ca1b97ac4b05d38cf&language=it-IT'"/>
  <HomeCategory :title="'Filem popolari'" :APIuri="'https://api.themoviedb.org/3/movie/popular?api_key=fd496a5d9593ae9ca1b97ac4b05d38cf&language=it-IT'"/>
  <HomeCategory :title="'Serie Tv popolari'" :APIuri="'https://api.themoviedb.org/3/tv/popular?api_key=fd496a5d9593ae9ca1b97ac4b05d38cf&language=it-IT'"/>
</template>

<script>
  import axios from 'axios';
  import { store } from '../store.js';
  import HomeCategory from "./HomeCategory.vue";

  export default {
    data() {
      return {
        store
      }
    },
    methods: {
    },
    components: {
      HomeCategory
    },
    created () {
    }
  }
</script>

<style lang="scss" scoped>
  .header-results {
    & h4 {
    font-size: 1.2rem;
    font-style: italic;
    }
    & i {
      font-size: 2rem;
    }
  }
</style>