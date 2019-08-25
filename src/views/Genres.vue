<template>
   <div class="container">
    <GenresBox/>
  </div>
</template>

<script>
  import GenresBox from "../components/GenresBox.vue";

  export default {
    name: "Genres",
    components: {
      GenresBox
    },
  };
</script>