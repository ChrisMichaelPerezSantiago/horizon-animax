<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-md-6 text-center">
          
        </div>
        <div class="col-md-6 text-center">   
         
        </div>
      </div>
      <div class="justify-content-center text-center bottom">
        <span>© {{year}} Horizon Animax , Todos los derechos reservados</span>
        <p class="font-italic">Ningúno de los vídeo se encuentra alojado en servidores.</p>
        <a href="https://github.com/ChrisMichaelPerezSantiago/horizon-animax" class="btn btn-dark">
          <i class="fab fa-github"></i> 
          View code on Github
        </a>
      </div>
    </div>
  </footer>
</template>


<script>
  import { value } from 'vue-function-api';

  export default {
    setup(){
      const values = {
        year: new Date().getFullYear(),
      };

      return{
        ...values
      }
    }
  }
</script>
