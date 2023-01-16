<template>
  <main>
    <h1>Risultati</h1>
      <ol>
        <li v-for="item in store.results" :key="store.results.indexOf(item)">
          <SingleCard :index = "store.results.indexOf(item)"/>
        </li>
      </ol>
  </main>
</template>

<script>
  import { store } from '../store.js';
  import SingleCard from "../components/SingleCard.vue";

  export default {
    data() {
      return {
        store
      }
    },
    methods: {

    },
    components: {
      SingleCard
    },
  }
</script>

<style lang="scss" scoped>
  ol>li {
    margin: 1rem 0;
  }
</style>