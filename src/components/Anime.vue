<template>
  <div>
    <router-link :to="{name: 'AnimeVideo' , params:{id: anime.id , type: anime.type , title: anime.title , state: anime.state , synopsis: anime.synopsis}}">
      <a :style="{ 'background-image': 'url(' + animes.poster + ')' }" :title="animes.title" class="fas fa-play">
        <span class="Image"><img :src="animes.poster" :alt="animes.title"></span>
        <span class="Capi">{{animes.state}}</span>
        <strong class="Title">{{animes.title}}</strong>
      </a>
    </router-link>
  </div>  
</template>

<script>
  import { value } from 'vue-function-api';

  export default {
    name: "Anime",
    props:{
      animes: Object
    },
    setup(props){
      /**
       * animes: [{title , id , poster , type , synopsis , state}]
       */
      const anime = value(props.animes)

      return{
        anime
      }
    }
  }
</script>

