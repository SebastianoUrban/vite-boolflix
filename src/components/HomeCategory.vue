<template>
  <div class="row header-results">
    <h1 class="mb-3">{{ title }}</h1>
  </div>
  <div class="row body-results g-3 mb-3">
    <article v-for="item in listShow" :key="listShow.indexOf(item)" class="col-12 col-md-6 col-lg-4 col-xl-3 col-xxl-2">
      <SingleCard :index = "listShow.indexOf(item)" :data="listShow"/>
    </article>
  </div>
</template>

<script>
  import axios from 'axios';
  import { store } from '../store.js';
  import SingleCard from "./SingleCard.vue";

  export default {
    data() {
      return {
        store,
        listShow : []
      }
    },
    methods: {
      queryAPI() {
        axios.get(this.APIuri)
          .then( (response) => {
            console.log(response);
            this.data = [];
            response.data.results.forEach(film => {
              this.listShow.push({
                title : (film.title ? film.title : film.name),
                originalTitle : (film.original_title ? film.original_title : film.original_name),
                overview : film.overview,
                language : film.original_language,
                rateing : Math.ceil(film.vote_average / 2),
                backdropPath : film.backdrop_path
              });
            });
          })
          .catch( (error) => {
            console.log('ERROR');
            console.log(error);
          })
      }
    },
    components: {
      SingleCard
    },
    created () {
      this.queryAPI();
    },
    props : {
      title : String,
      APIuri : String
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