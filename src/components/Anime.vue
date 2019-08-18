<template>
  <div>
    <img :src="anime.poster" class="img-fluid" alt="">
  </div>   
</template>

<script>
  import { value } from 'vue-function-api';

  export default {
    name: "Anime",
    props:{
      anime: Object
    },
    setup(props){
      /**
       * anime: [{title , id , poster , type , synopsis , state}]
       */
      const anime = value(props.anime)

      return{
        anime
      }
    }
  }
</script>

