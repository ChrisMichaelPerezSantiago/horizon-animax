<template>
   <div class="container">
    <main class="Main">
      <div class="alert alert-info" role="alert">
        Animes de TV/Letras
      </div>
      <div v-if="isLoading">
        <img class="loading" src="../assets/loading.gif" alt="loading">
      </div>
      <div v-else>
        <ul class="ListEpisodios AX Rows A06 C04 D03">
          <li v-for="(anime, index) in animesByLetter.data" :key="index">
            <Anime :animes="anime"/>
          </li>
        </ul>
        <paginate
          class="pagination"
          v-model="page"
          :page-count="animesByLetter.total_pages"
          :page-range="3"
          :margin-pages="2"
          :click-handler="() => init()"
          :prev-text="'Prev'"
          :next-text="'Next'"
          :container-class="'pagination'"
          :page-class="'page-item'"
        >
        </paginate>
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
    name: "ByLetter",
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

      const page = value(1);

      const init = () => {
        store.value.dispatch("GET_LETTER_ANIME" , {
          letter: letter.value,
          page: page.value // TEMPORARY VALUE
        });
      }

      onCreated(() =>{
        store.value.dispatch("GET_LETTER_ANIME" , {
          letter: letter.value,
          page: page.value // TEMPORARY VALUE
        });
      });

      return{
        ...state,

        init,
        page
      }
    }
  };
</script>