<template>
  <div class="home">
    <div v-if="isLoading">
      loading ...
    </div>
    <div v-else>
      <pre>{{latestAnimes}}</pre>
    </div>
  </div>
</template>

<script>
  import {onCreated} from 'vue-function-api';
  import {useState , useActions} from '@u3u/vue-hooks'

  export default {
    name: "home",
    setup(){
      const state = {
        ...useState(['latestAnimes' , 'isLoading'])
      };
      const actions = {
        ...useActions(['GET_LATEST_ANIME']),
      }
      onCreated(() =>{
        actions.GET_LATEST_ANIME();
      });

      return{
        ...state
      }
    }
  };
</script>
