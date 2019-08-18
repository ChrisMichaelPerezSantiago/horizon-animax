<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-nav">
    <div class="container">
      <a class="navbar-brand" href="#">
        
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link" href="#"><i class="fas fa-home"></i> Reciente</a>
          </li>
           <li class="nav-item">
            <a class="nav-link" href="#"><i class="fas fa-ticket-alt"></i> películas</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"><i class="fas fa-ticket-alt"></i> Ovas</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"><i class="fas fa-sort-alpha-down"></i> por Alfabeto</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"><i class="fas fa-ellipsis-h"></i> por géneros</a>
          </li>
        </ul>
        <div class="search-bar">
          <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Buscar Anime ..." aria-label="Search">
            <button class="btn btn-main my-2 my-sm-0" type="submit"><i class="fas fa-search"></i></button>
          </form>
        </div>
      </div>
    </div>
  </nav>
</template>
