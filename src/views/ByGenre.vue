<template>
   <div class="container">
    <main class="Main">
      <div class="alert alert-info" role="alert">
        Animes de TV/Genre/{{genres}}
      </div>
      <div v-if="isLoading">
        <img class="loading" src="../assets/loading.gif" alt="loading">
      </div>
      <div v-else>
        <ul class="ListEpisodios AX Rows A06 C04 D03">
          <li v-for="(anime, index) in animesByGenres.data" :key="index">
            <Anime :animes="anime"/>
          </li>
        </ul>
        <paginate
          class="pagination"
          v-model="page"
          :page-count="animesByGenres.total_pages"
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
  import Anime from "../components/Anime.vue";

  export default {
    name: "ByGenre",
    components:{
      Anime,
    },
    setup(){
      const store = useStore();
      const {route} = useRouter();

      const genres = value(route.value.params.genres);

      const state = {
        ...useState(["animesByGenres" , "isLoading"])
      };

      const page = value(1);

      const init = () => {
        store.value.dispatch("GET_ANIME_GENRES" , {
          genre: genres.value,
          page: page.value 
        });
      }

      onCreated(() =>{
        store.value.dispatch("GET_ANIME_GENRES" , {
          genre: genres.value,
          page: page.value 
        });
      });

      return{
        ...state,

        genres,
        init,
        page
      }
    }
  };
</script>