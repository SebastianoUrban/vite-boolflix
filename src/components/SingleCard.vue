<template>
  <div>
    <img :src="'https://image.tmdb.org/t/p/w300'+store.results[index].backdropPath" alt="">
    <ul>
      <li>Titolo: {{ store.results[index].title }}</li>
      <li>Titolo originale: {{ store.results[index].originalTitle }}</li>
      <li>Lingua originale: {{ store.results[index].language }} <img class="flag" :src="getFlag(store.results[index].language)" alt=""></li>
      <li>Voto medio: {{ store.results[index].rateing }}</li>
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
      }
    },
    props: {
      index : Number
    }
  }
</script>

<style lang="scss" scoped>

</style>