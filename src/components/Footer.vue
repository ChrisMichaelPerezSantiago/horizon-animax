<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-md-6 text-center">
          
        </div>
        <div class="col-md-6 text-center">   
         
        </div>
      </div>
      <div class="text-center bottom">
        <span>© {{year}} Horizon Animax , Todos los derechos reservados</span>
      </div>
    </div>
  </footer>
</template>


<script>
  import { value } from 'vue-function-api';

  export default {
    setup(){
      const values = {
        year: new Date().getFullYear()
      };

      return{
        ...values
      }
    }
  }
</script>
