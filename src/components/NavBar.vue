<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-nav" v-bind:class="{'navbarOpen': show }">
    <div class="container">

      <router-link to="/" class="navbar-brand">
        <img src="../assets/HA-logo.png" alt="Horizon Anime" id="logo">
      </router-link>

      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" v-on:click.prevent="toggleNavbar">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent" v-bind:class="{'show': show }">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/" ><i class="fas fa-compass"></i> Descubre</router-link>
          </li>
        </ul>
        <div class="search-bar">
          <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" v-model="query" type="search" placeholder="Buscar Anime ..." aria-label="Search">
            <button class="btn btn-main my-2 my-sm-0" @click.prevent="goto()" type="submit"><i class="fas fa-search"></i></button>
          </form>
        </div>
      </div>
    </div>
  </nav>
</template>


<script>
  import {value} from 'vue-function-api';
  import {useRouter} from '@u3u/vue-hooks';

  export default {
    name: "NavBar",
    setup(){
      const {router} = useRouter();

      const query = value("");

      let show = value(true);
      const toggleNavbar = () => show.value = !show.value;      

      const goto = () =>{
        let to = {name: 'AnimeSearched' , params:{query: query}}
        router.push(to);
      };
        
      return{
        show,
        toggleNavbar,
        goto,
        query
      }
    }
  }
</script>
