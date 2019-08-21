<template>
  <div>
     <select v-model="eps">
        <option v-for="(episode , index) in 
          Array.from({length: totalEps}, (v , k) => k + 1)"
          :value="episode"
          :key="index"
          >
          {{ episode }}
        </option>
      </select>
    <h1>{{videos}}</h1>
  </div>
</template>


<script>
  import {value , onCreated, watch} from 'vue-function-api';
  import {useState , useStore , useRouter} from '@u3u/vue-hooks';

  export default{
    name: "AnimeVideo",
    setup(){
      const store = useStore();
      const {route} = useRouter();


      const state = {
        ...useState(['videos' , 'isLoading'])
      };
      const params = {
        types:{ 
          totalEps: value(route.value.params.type.replace(/[^0-9]/g,'') || 25),
          content: value(route.value.params.type.split('/')[0].trim() || '')
        },
        id: value(route.value.params.id),
      };
      const eps = value(null);
      
      watch(() => 
        eps.value , (eps) =>{
        store.value.dispatch("GET_ANIME_VIDEO" , {
          id: params.id.value,
          eps: eps
        });
      });

      return{
        ...state,

        eps,
        totalEps: params.types.totalEps,
      }
    }
  };
</script>
