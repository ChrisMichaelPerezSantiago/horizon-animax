<template>
<div class="container">
  <div class="page-title">
    Últimos Animes agregados
    <br>
  </div>
  <div class="movie-list">
    <div class="row">

      <!--
      <div class="col-6 col-sm-4 col-md-3">
        <img src="" class="img-fluid" alt="">
        <div class="movie-list-title"></div>
        <div><i class="fas fa-star"></i></div>
        <div></div>
      </div>
      -->

    </div>
  </div>
</div>
</template>

<script>
  import {onCreated} from 'vue-function-api';
  import {useState , useStore} from '@u3u/vue-hooks'

  export default {
    name: "home",
    setup(){
      const store = useStore();
      const state = {
        ...useState(['latestAnimes' , 'isLoading'])
      };
      onCreated(() =>{
        store.value.dispatch('GET_LATEST_ANIME')
      });
      return{
        ...state
      }
    }
  };
</script>
