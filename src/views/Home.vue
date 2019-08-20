<template>
  <div class="container">
    <LetterBox/>
  </div>
</template>

<script>
  import {onCreated} from 'vue-function-api';
  import {useState , useStore} from '@u3u/vue-hooks';
  import Anime from '../components/Anime';
  import LetterBox from '../components/LetterBox';
  export default {
    name: "home",
    components:{
      Anime,
      LetterBox
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