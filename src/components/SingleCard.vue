<template>
  <div>
    <img class="backdrop" :src="backdropImage()" alt="">
    <ul>
      <li>Titolo: {{ store.results[index].title }}</li>
      <li>Titolo originale: {{ store.results[index].originalTitle }}</li>
      <li>Lingua originale: {{ store.results[index].language }} <img class="flag" :src="getFlag(store.results[index].language)" alt=""></li>
      <li>
        Voto medio: 
        <i class="fa-solid fa-star" v-for="i in store.results[index].rateing"></i>
        <i class="fa-regular fa-star" v-for="i in (5 - store.results[index].rateing)"></i> 
      </li>
      <li>url: {{ store.results[index].backdropPath }}</li>
      <li>type: {{ store.results[index].type }}</li>
    </ul>
  </div>
</template>

<script>
  import { store } from '../store.js';
  export default {
    data() {
      return {
        store

      }
    },
    methods: {
      getFlag (code) {
        if (code in store.flags) {
          return store.flags[code]
        } else {
          return store.flags.xx
        }
      },
      backdropImage () {
        if (store.results[this.index].backdropPath != null) { 
          return 'https://image.tmdb.org/t/p/w300' + store.results[this.index].backdropPath
        } else {
          return 'https://variety.com/wp-content/uploads/2013/10/film-placeholder.jpg'
        }
      }
    },
    props: {
      index : Number
    }
  }
</script>

<style lang="scss" scoped>
  img.backdrop {
    width: 300px;
  }
</style>