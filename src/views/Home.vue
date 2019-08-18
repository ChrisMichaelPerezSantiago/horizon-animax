<template>
<div class="container-fluid">
  <div class="row my-5">
    <div class="col-sm">
      One of three columns
    </div>
    <div class="col-sm">
      One of three columns
    </div>
    <div class="col-sm">
      <div class="side-box">
        <h6>Animes agregados</h6>
      </div>
      <div class="side-box">
        <ul >
          <i class="fas fa-play"></i><br>
          <i class="fas fa-play"></i>
        </ul>
      </div>
    </div>
  </div>
</div>
</template>

<script>
  import {onCreated} from 'vue-function-api';
  import {useState , useStore} from '@u3u/vue-hooks';
  import Anime from '../components/Anime';

  export default {
    name: "home",
    components:{
      Anime
    },
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
