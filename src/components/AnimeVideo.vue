<template>
  <div id="container" style="margin-top: -10px; padding-top: 0;">
    <span class="pbox"></span>
    <div id="reproductor-box">
      <div class="video-header">
        <h1>{{title}}</h1>
        <form class="video-section">
          <select class="container"  v-model="eps">
            <option v-for="(episode , index) in Array.from({length: totalEps}, (v , k) => k + 1)"
              :value="episode"
              :key="index"
            >
              {{ episode }}
            </option>
          </select>
            
        </form>              
      </div>
       <div class="embed-responsive embed-responsive-21by9">
          <iframe class="embed-responsive-item" id="_video" :src="videos.video"></iframe>
      </div>
    </div>        
  </div>
</template>


<script>
  import {value , onCreated, watch, onBeforeDestroy} from 'vue-function-api';
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
        title: value(route.value.params.title)
      };
      const eps = value(null);

      watch(() => 
        eps.value , (eps) =>{
          store.value.dispatch("GET_ANIME_VIDEO" , {
            id: params.id.value,
            eps: eps
          });
        }
      );

      
      /****
       * It needs to be fixed.
       *****/
      watch(() =>
        state.videos.video.value , (video) =>{
          console.log('hi');
          state.videos.video.value = video;
          let src = state.videos.video.value;
          display(src);
      });

      const createObjectURL = (object) =>{
          return (window.URL) 
            ? window.URL.createObjectURL(object)
            : window.webkitURL.createObjectURL(object);
      };
      const display = async(videoStream) =>{
          var video = document.getElementById('_video').src;
          let blob = await fetch(videoStream , {mode: 'no-cors'}).then(r => r.blob());
          var videoUrl = this.createObjectURL(blob);
          video.src = videoUrl;
          document.getElementById('_video').load();
          console.log("value: " , video.src);
      }
      
      return{
        ...state,

        eps,
        title: params.title,
        totalEps: params.types.totalEps,
      }
    }
  };
</script>

