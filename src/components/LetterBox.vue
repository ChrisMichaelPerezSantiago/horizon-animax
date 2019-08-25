<template>
  <div>
    <div id="letrasbg"></div>
    <div id="letrasint" class="letras-int">
      <div class="letras-box">
        <ul>
          <li><router-link class="letra-link" :to="{name: 'ByLetter' , params:{letter: 'A'}}" title="Animes por letra A">A</router-link></li>
          <li><router-link class="letra-link" :to="{name: 'ByLetter' , params:{letter: 'B'}}" title="Animes por letra B">B</router-link></li>
          <li><router-link class="letra-link" :to="{name: 'ByLetter' , params:{letter: 'C'}}" title="Animes por letra C">C</router-link></li>
          <li><router-link class="letra-link" :to="{name: 'ByLetter' , params:{letter: 'D'}}" title="Animes por letra D">D</router-link></li>
          <li><router-link class="letra-link" :to="{name: 'ByLetter' , params:{letter: 'E'}}" title="Animes por letra E">E</router-link></li>
          <li><router-link class="letra-link" :to="{name: 'ByLetter' , params:{letter: 'F'}}" title="Animes por letra F">F</router-link></li>
          <li><router-link class="letra-link" :to="{name: 'ByLetter' , params:{letter: 'G'}}" title="Animes por letra G">G</router-link></li>
          <li><router-link class="letra-link" :to="{name: 'ByLetter' , params:{letter: 'H'}}" title="Animes por letra H">H</router-link></li>
          <li><router-link class="letra-link" :to="{name: 'ByLetter' , params:{letter: 'I'}}" title="Animes por letra I">I</router-link></li>
          <li><router-link class="letra-link" :to="{name: 'ByLetter' , params:{letter: 'J'}}" title="Animes por letra J">J</router-link></li>
          <li><router-link class="letra-link" :to="{name: 'ByLetter' , params:{letter: 'K'}}" title="Animes por letra K">K</router-link></li>
          <li><router-link class="letra-link" :to="{name: 'ByLetter' , params:{letter: 'L'}}" title="Animes por letra L">L</router-link></li>
          <li><router-link class="letra-link" :to="{name: 'ByLetter' , params:{letter: 'M'}}" title="Animes por letra M">M</router-link></li>
          <li><router-link class="letra-link" :to="{name: 'ByLetter' , params:{letter: 'N'}}" title="Animes por letra N">N</router-link></li>
          <li><router-link class="letra-link" :to="{name: 'ByLetter' , params:{letter: 'O'}}" title="Animes por letra O">O</router-link></li>
          <li><router-link class="letra-link" :to="{name: 'ByLetter' , params:{letter: 'P'}}" title="Animes por letra P">P</router-link></li>
          <li><router-link class="letra-link" :to="{name: 'ByLetter' , params:{letter: 'Q'}}" title="Animes por letra Q">Q</router-link></li>
          <li><router-link class="letra-link" :to="{name: 'ByLetter' , params:{letter: 'R'}}" title="Animes por letra R">R</router-link></li>
          <li><router-link class="letra-link" :to="{name: 'ByLetter' , params:{letter: 'S'}}" title="Animes por letra S">S</router-link></li>
          <li><router-link class="letra-link" :to="{name: 'ByLetter' , params:{letter: 'T'}}" title="Animes por letra T">T</router-link></li>
          <li><router-link class="letra-link" :to="{name: 'ByLetter' , params:{letter: 'U'}}" title="Animes por letra U">U</router-link></li>
          <li><router-link class="letra-link" :to="{name: 'ByLetter' , params:{letter: 'V'}}" title="Animes por letra V">V</router-link></li>
          <li><router-link class="letra-link" :to="{name: 'ByLetter' , params:{letter: 'W'}}" title="Animes por letra W">W</router-link></li>
          <li><router-link class="letra-link" :to="{name: 'ByLetter' , params:{letter: 'X'}}" title="Animes por letra X">X</router-link></li>
          <li><router-link class="letra-link" :to="{name: 'ByLetter' , params:{letter: 'Y'}}" title="Animes por letra Y">Y</router-link></li>
          <li><router-link class="letra-link" :to="{name: 'ByLetter' , params:{letter: 'Z'}}" title="Animes por letra Z">Z</router-link></li>
          <li class="box-link tp"><router-link :to="{name: 'ByType'}" title="Animes por Tipo">Por Tipo &darr;</router-link></li>
          <li class="box-link lt"><router-link to="#letrasint" title="Animes por Genero">Por Genero &darr;</router-link></li>
        </ul>
      </div>
    </div>
  </div>
</template>

