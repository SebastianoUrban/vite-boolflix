<template>
  <div class="backdrop" :style="{ backgroundImage: 'url(' + backdropImage() + ')' }">
    <div class="wrapper">
      <ul class="list-unstyled p-3">
        <li class="title"> <span class="card-sutitle">Titolo:v</span> {{ store.results[index].title }}</li>
        <li class="original-title"><span class="card-sutitle">Titolo originale:</span> {{ store.results[index].originalTitle }}</li>
        <li class="overview"><span class="card-sutitle">Trama:</span> {{ store.results[index].overview }}</li>
        <li class="language"><span class="card-sutitle">Lingua originale:</span> {{ store.results[index].language }} <img class="flag" :src="getFlag(store.results[index].language)" alt=""></li>
        <li class="rateing">
          <span class="card-sutitle">Voto medio:</span> 
          <i class="fa-solid fa-star" v-for="i in store.results[index].rateing"></i>
          <i class="fa-regular fa-star" v-for="i in (5 - store.results[index].rateing)"></i> 
        </li>
      </ul>
    </div>
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
          return 'https://image.tmdb.org/t/p/w780' + store.results[this.index].backdropPath
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
  div.backdrop {
    width: 450px;
    height: 254px;
    background-size: cover;
    color: white;
    overflow: hidden;
    .wrapper {
      height: 100%;
      width: 100%;
      & ul{
        display: none;
      }
      &:hover {
        background-color: rgba($color: #000000, $alpha: 0.75);
        & ul{
          display: block;
        }
      }
    }
  }

  .overview {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4; /* number of lines to show */
            line-clamp: 4;
    -webkit-box-orient: vertical
  }

  .card-sutitle {
    font-weight: bold;
  }
</style>