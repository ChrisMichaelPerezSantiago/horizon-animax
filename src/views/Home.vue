<template>
  <div class="container">
    <LetterBox/> <!-- LETTER BOX -->
    <main class="Main">
      <div class="">
        <h2>Últimas series</h2>
      </div>
      <div v-if="!isLoading">
        <img class="loading" src="../assets/loading.gif" alt="loading">
      </div>
      <div v-else>
        <ul class="ListEpisodios AX Rows A06 C04 D03">
          <li v-for="(anime, index) in latestAnimes" :key="index">
            <Anime :animes="anime"/>
          </li>
        </ul>
      </div>
    </main>
  </div>
</template>

<script>
import { onCreated } from "vue-function-api";
import { useState, useStore } from "@u3u/vue-hooks";
import Anime from "../components/Anime";
import LetterBox from "../components/LetterBox";

export default {
  name: "home",
  components: {
    Anime,
    LetterBox
  },
  setup() {
    const store = useStore();
    const state = {
      ...useState(["latestAnimes", "isLoading"])
    };
    onCreated(() => {
      store.value.dispatch("GET_LATEST_ANIME");
    });

    return {
      ...state
    };
  }
};
</script>