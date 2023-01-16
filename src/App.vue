<template>
    <div class="m-5">
      <AppHeader/>
      <AppMain/>
    </div>
  </template>

<script>
  import AppHeader from './components/AppHeader.vue';
  import AppMain from './components/AppMain.vue';

  export default {
    components: {
      AppHeader,
      AppMain
    },
    data() {
      return {
      }
    },methods: {
      
    },
    created () {
    },
  }
</script>

<style lang="scss">
  @use './style/general.scss' as *;
  @use './style/variables.scss' as * ;
  @use 'bootstrap/scss/bootstrap.scss' as *;


</style>