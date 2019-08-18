<template>
  <div id="app">
    <NavBar/>
    <router-view />
    <Footer/>
  </div>
</template>

<style>
</style>

<script>
  import NavBar from "./components/NavBar";
  import Footer from "./components/Footer"

  export default {
    components:{
      NavBar,
      Footer
    }
  }
</script>

