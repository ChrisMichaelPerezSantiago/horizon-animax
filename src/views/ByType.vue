<template>
   <div class="container">
    <LetterBox/>
    <main class="Main">
      <!-- MOVIES -->
      <div class="alert alert-info" role="alert">
        Animes de TV/Tipo - Películas
      </div>
      <div v-if="isLoading">
        <img class="loading" src="../assets/loading.gif" alt="loading">
      </div>
      <div v-else>
        <ul class="ListEpisodios AX Rows A06 C04 D03">
          <li v-for="(anime, index) in movies.data" :key="index">
            <Anime :animes="anime"/>
          </li>
        </ul>
        <paginate
          class="pagination"
          v-model="pageMovies"
          :page-count="movies.total_pages"
          :page-range="3"
          :margin-pages="2"
          :click-handler="() => initMovies()"
          :prev-text="'Prev'"
          :next-text="'Next'"
          :container-class="'pagination'"
          :page-class="'page-item'"
        >
        </paginate>

        <!-- OVA -->
        <div id="OvasHeader" class="alert alert-info" role="alert">
          Animes de TV/Tipo - Ovas
        </div>
        <div v-if="isLoading">
          <img class="loading" src="../assets/loading.gif" alt="loading">
        </div>
        <div v-else>
          <ul class="ListEpisodios AX Rows A06 C04 D03">
            <li v-for="(anime, index) in ovas.data" :key="index">
              <Anime :animes="anime"/>
            </li>
          </ul>
          <paginate
            class="pagination"
            v-model="pageOvas"
            :page-count="ovas.total_pages"
            :page-range="3"
            :margin-pages="2"
            :click-handler="() => initOvas()"
            :prev-text="'Prev'"
            :next-text="'Next'"
            :container-class="'pagination'"
            :page-class="'page-item'"
          >
          </paginate>
        </div>

      </div>
    </main>
  </div>
</template>

<script>
  import {value , onCreated} from "vue-function-api";
  import {useState , useStore} from '@u3u/vue-hooks';
  import Anime from "../components/Anime";
  import LetterBox from "../components/LetterBox";


  export default {
    name: "ByType",
    components:{
      Anime,
      LetterBox
    },
    setup(){
      const store = useStore();

      const state = {
        ...useState(["movies" , "ovas" , "isLoading"])
      };

      const pageMovies = value(1);
      const pageOvas = value(1);

      const initMovies = () => {
        store.value.dispatch("GET_MOVIES" , pageMovies.value);
      };
      const initOvas = () => {
        store.value.dispatch("GET_ANIME_OVAS" , pageOvas.value);
      };

      onCreated(() =>{
        store.value.dispatch("GET_MOVIES" , pageMovies.value),
        store.value.dispatch("GET_ANIME_OVAS" , pageOvas.value)
      });

      return{
        ...state,

        initMovies,
        initOvas,
        pageMovies,
        pageOvas
      }
    }
  };
</script>