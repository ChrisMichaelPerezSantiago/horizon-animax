<template>
   <div class="container">
    <main class="Main">
      <div class="">
        <h2>Animes de TV/Letras</h2>
      </div>
      <div v-if="isLoading">
        <img class="loading" src="../assets/loading.gif" alt="loading">
      </div>
      <div v-else>
        <ul class="ListEpisodios AX Rows A06 C04 D03">
          <li v-for="(anime, index) in animesByLetter" :key="index">
            <Anime :animes="anime"/>
          </li>
        </ul>
      </div>
    </main>
  </div>
</template>

<script>
  import {value , onCreated} from "vue-function-api";
  import {useState , useStore , useRouter} from '@u3u/vue-hooks';
  import Anime from "./Anime";
  import LetterBox from "./LetterBox";

  export default {
    name: "LetterBox",
    components:{
      Anime,
      LetterBox
    },
    setup(){
      const store = useStore();
      const {route} = useRouter();

      const letter = value(route.value.params.letter);

      const state = {
        ...useState(["animesByLetter" , "isLoading"])
      };
      onCreated(() =>{
        store.value.dispatch("GET_LETTER_ANIME" , {
          letter: letter.value,
          page: 1 // TEMPORARY VALUE
        });
      });

      return{
        ...state
      }
    }
  };
</script>