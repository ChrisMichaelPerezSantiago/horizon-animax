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
