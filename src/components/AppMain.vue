<template>
  <main class="d-flex justify-content-center align-items-center">
    <div class="wrapper">
      <div :class="(store.results.length != 0 ? 'd-block' : 'd-none')" class="header-results">
        <h1 class="mb-0">Risultati</h1>
        <h4 class="mt-0">Elementi trovati : {{ store.results.length }}</h4>
      </div>
      <div class="body-results">
        <ol class="list-unstyled">
          <li v-for="item in store.results" :key="store.results.indexOf(item)">
            <SingleCard :index = "store.results.indexOf(item)"/>
          </li>
        </ol>
      </div>
    </div>
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
  .header-results {

  }

  ol>li {
    margin: 1rem 0;
  }
</style>