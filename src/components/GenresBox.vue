<template>
  <div>
    <div class="genre-list">
      <ul>
        <li><router-link :to="{name: 'ByGenre' , params:{genres: 'accion'}}" title="Animes de Accion">Accion</router-link></li>
        <li><router-link :to="{name: 'ByGenre' , params:{genres: 'artes-marciales'}}" title="Animes de Artes Marciales">Artes Marciales</router-link></li>
        <li><router-link :to="{name: 'ByGenre' , params:{genres: 'autos'}}" title="Animes de Autos">Autos</router-link></li>
        <li><router-link :to="{name: 'ByGenre' , params:{genres: 'aventura'}}" title="Animes de Aventura">Aventura</router-link></li>
        <li><router-link :to="{name: 'ByGenre' , params:{genres: 'colegial'}}" title="Animes de Colegial">Colegial</router-link></li>
        <li><router-link :to="{name: 'ByGenre' , params:{genres: 'comedia'}}" title="Animes de Comedia">Comedia</router-link></li>
        <li><router-link :to="{name: 'ByGenre' , params:{genres: 'cosas-de-la-vida'}}" title="Animes de Cosas de la vida">Cosas de la vida</router-link></li>
        <li><router-link :to="{name: 'ByGenre' , params:{genres: 'dementia'}}" title="Animes de Dementia">Dementia</router-link></li>
        <li><router-link :to="{name: 'ByGenre' , params:{genres: 'demonios'}}" title="Animes de Demonios">Demonios</router-link></li>
        <li><router-link :to="{name: 'ByGenre' , params:{genres: 'deportes'}}" title="Animes de Deportes">Deportes</router-link></li>
        <li><router-link :to="{name: 'ByGenre' , params:{genres: 'drama'}}" title="Animes de Drama">Drama</router-link></li>
        <li><router-link :to="{name: 'ByGenre' , params:{genres: 'ecchi'}}" title="Animes de Ecchi">Ecchi</router-link></li>
        <li><router-link :to="{name: 'ByGenre' , params:{genres: 'fantasa'}}" title="Animes de Fantasia">Fantasia</router-link></li>
        <li><router-link :to="{name: 'ByGenre' , params:{genres: 'harem'}}" title="Animes de Harem">Harem</router-link></li>
        <li><router-link :to="{name: 'ByGenre' , params:{genres: 'historico'}}" title="Animes de Historico">Historico</router-link></li>
        <li><router-link :to="{name: 'ByGenre' , params:{genres: 'josei'}}" title="Animes de Josei">Josei</router-link></li>
        <li><router-link :to="{name: 'ByGenre' , params:{genres: 'juegos'}}" title="Animes de Juegos">Juegos</router-link></li>
        <li><router-link :to="{name: 'ByGenre' , params:{genres: 'magia'}}" title="Animes de Magia">Magia</router-link></li>
        <li><router-link :to="{name: 'ByGenre' , params:{genres: 'mecha'}}" title="Animes de Mecha">Mecha</router-link></li>
        <li><router-link :to="{name: 'ByGenre' , params:{genres: 'militar'}}" title="Animes de Militar">Militar</router-link></li>
        <li><router-link :to="{name: 'ByGenre' , params:{genres: 'misterio'}}" title="Animes de Misterio">Misterio</router-link></li>
        <li><router-link :to="{name: 'ByGenre' , params:{genres: 'musica'}}" title="Animes de Musica">Musica</router-link></li>
        <li><router-link :to="{name: 'ByGenre' , params:{genres: 'nios'}}" title="Animes de Niños">Niños</router-link></li>
        <li><router-link :to="{name: 'ByGenre' , params:{genres: 'parodia'}}" title="Animes de Parodia">Parodia</router-link></li>
        <li><router-link :to="{name: 'ByGenre' , params:{genres: 'policial'}}" title="Animes de Policial">Policial</router-link></li>
        <li><router-link :to="{name: 'ByGenre' , params:{genres: 'psicologico'}}" title="Animes de Psicologico">Psicologico</router-link></li>
        <li><router-link :to="{name: 'ByGenre' , params:{genres: 'romance'}}" title="Animes de Romance">Romance</router-link></li>
        <li><router-link :to="{name: 'ByGenre' , params:{genres: 'samurai'}}" title="Animes de Samurai">Samurai</router-link></li>
        <li><router-link :to="{name: 'ByGenre' , params:{genres: 'sci-fi'}}" title="Animes de Sci-fi">Sci-fi</router-link></li>
        <li><router-link :to="{name: 'ByGenre' , params:{genres: 'seinen'}}" title="Animes de Seinen">Seinen</router-link></li>
        <li><router-link :to="{name: 'ByGenre' , params:{genres: 'shoujo'}}" title="Animes de Shoujo">Shoujo</router-link></li>
        <li><router-link :to="{name: 'ByGenre' , params:{genres: 'shoujo-ai'}}" title="Animes de Shoujo ai">Shoujo ai</router-link></li>
        <li><router-link :to="{name: 'ByGenre' , params:{genres: 'shounen'}}" title="Animes de Shounen">Shounen</router-link></li>
        <li><router-link :to="{name: 'ByGenre' , params:{genres: 'shounen-ai'}}" title="Animes de Shounen ai">Shounen ai</router-link></li>
        <li><router-link :to="{name: 'ByGenre' , params:{genres: 'sobrenatural'}}" title="Animes de Sobrenatural">Sobrenatural</router-link></li>
        <li><router-link :to="{name: 'ByGenre' , params:{genres: 'space'}}" title="Animes de Space">Space</router-link></li>
        <li><router-link :to="{name: 'ByGenre' , params:{genres: 'super-poderes'}}" title="Animes de Super poderes">Super poderes</router-link></li>
        <li><router-link :to="{name: 'ByGenre' , params:{genres: 'terror'}}" title="Animes de Terror">Terror</router-link></li>
        <li><router-link :to="{name: 'ByGenre' , params:{genres: 'thriller'}}" title="Animes de Thriller">Thriller</router-link></li>
        <li><router-link :to="{name: 'ByGenre' , params:{genres: 'vampiros'}}" title="Animes de Vampiros">Vampiros</router-link></li>
        <li><router-link :to="{name: 'ByGenre' , params:{genres: 'yaoi'}}" title="Animes de Yaoi">Yaoi</router-link></li>
        <li><router-link :to="{name: 'ByGenre' , params:{genres: 'yuri'}}" title="Animes de Yuri">Yuri</router-link></li>
      </ul>
    </div>
  </div>
</template>
