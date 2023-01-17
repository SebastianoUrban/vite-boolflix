<template>
  <div class="row header-results">
    <h1 class="mb-3">{{ title }}</h1>
  </div>
  <div class="frame">
    <div class="row body-results g-3 mb-4 flex-nowrap">
      <article v-for="item in listShow" :key="listShow.indexOf(item)" class="col-12 col-md-6 col-lg-4 col-xl-3">
        <SingleCard :index = "listShow.indexOf(item)" :data="listShow"/>
      </article>
    </div>
    <button class="next" @click="scroll_right()"><i class="fa-solid fa-arrow-right"></i></button>
    <button class="prev" @click="scroll_left()"><i class="fa-solid fa-arrow-left"></i></button>
  </div>
</template>

<script>
  import axios from 'axios';
  import { store } from '../store.js';
  import SingleCard from "./SingleCard.vue";

  export default {
    data() {
      const vm = this;
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
      },
      scroll_left() {
        let content = document.querySelector(".body-results");
        content.scrollLeft -= 300;
      },
      scroll_right() {
        let content = document.querySelector(".body-results");
        content.scrollLeft += 300;
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
  .frame {
    position: relative;

  }
  .body-results {
    overflow-y: auto;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  button {
    position: absolute;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 2px solid white;
    background-color: black;
    color: white;
    font-size: 1.4rem;
    top: 50%;
    transform: translate(0, -20px);
  }
  button.prev {
  }
  button.next {
    right: 0%;
    
  }
</style>