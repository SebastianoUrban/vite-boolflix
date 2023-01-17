<template>
  <main class="results">
    <div class="container-fluid wrapper">
      <MainSearch v-if="store.searchMode == true"/>
      <MainHome v-if="store.searchMode == false"/>
    </div>
  </main>
</template>

<script>
  import { store } from '../store.js';
  import MainSearch from "../components/MainSearch.vue";
  import MainHome from "../components/MainHome.vue";

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
      MainSearch,
      MainHome
    },
  }
</script>

<style lang="scss" scoped>
  main {
    color: white;
    background-color: black;
    height: calc(100vh - 80px);
    overflow-y: auto;
  }
</style>