<template>
   <div class="container">
     <LetterBox/>
    <main class="Main">
      <div class="alert alert-info" role="alert">
        Resultados para "{{query}}"
      </div>
      <div v-if="isLoading">
        <img class="loading" src="../assets/loading.gif" alt="loading">
      </div>
      <div v-else>
        <ul class="ListEpisodios AX Rows A06 C04 D03">
          <li v-for="(anime, index) in searchAnime" :key="index">
            <Anime :animes="anime"/>
          </li>
        </ul>
      </div>
    </main>
  </div>
</template>


<script>
  import {onCreated} from "vue-function-api"
  import {useState , useRouter , useStore} from '@u3u/vue-hooks';
  import Anime from "../components/Anime.vue";
  import LetterBox from "../components/LetterBox.vue";

  export default{
    name: 'AnimeSearched',
    components:{
      Anime,
      LetterBox
    },
    setup(){
      const store = useStore();
      const {route} = useRouter();

      const state = {
        ...useState(['searchAnime' , 'isLoading'])
      };

      const query = route.value.params.query;

      onCreated(() =>{
        store.value.dispatch('GET_ANIME_SEARCH' , query.value);
      });

      return{
        ...state,

        query,
      }
    }
  };
</script>
