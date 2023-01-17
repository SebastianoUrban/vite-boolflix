<template>
  <main class="results">
    <div class="container-lg wrapper">
      <div class="row">
        <div :class="(store.results.length != 0 ? 'd-block' : 'd-none')" class="header-results col-12 d-flex justify-content-between align-items-center">
          <div>
            <h1 class="mb-0">Risultati</h1>
            <h4 class="mt-0">Elementi trovati : {{ store.results.length }}</h4>
          </div>
          <div>
            <i class="fa-solid fa-x" @click="cleanResults()" ></i>
          </div>
        </div>
      </div>
      <div class="row body-results g-3">
        <article v-for="item in store.results" :key="store.results.indexOf(item)" class="col-12 col-md-6 col-lg-4">
          <SingleCard :index = "store.results.indexOf(item)"/>
        </article>
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
      cleanResults () {
        store.results = [];
      }
    },
    components: {
      SingleCard
    },
  }
</script>

<style lang="scss" scoped>
  main {
    color: white;
    background-color: black;
    height: calc(100vh - 80px);
    overflow-y: auto;
    & .header-results {
      & h4 {
      font-size: 1.2rem;
      font-style: italic;
      }
      & i {
        font-size: 2rem;
      }
    }
  }

  ul>li {
    margin: 1rem 0;
  }
</style>