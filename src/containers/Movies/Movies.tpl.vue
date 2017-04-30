<div>
  <section class="hero is-medium is-primary is-bold">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
            Movies
          </h1>
        <h2 class="subtitle">
            We love movies. Find a perfect one.
          </h2>
      </div>
    </div>
    <div class="hero-foot">
      <nav class="tabs">
        <div class="container is-fullwidth">
          <ul>
            <li><router-link to="/movies">All Movies</router-link></li>
            <li><router-link to="/movies/amazon_prime">Amazon Prime</router-link></li>
            <li><router-link to="/movies/starz_amazon_prime">Starz</router-link></li>
            <li><router-link to="/movies/hbo_now">HBO</router-link></li>
            <li><router-link to="/movies/netflix">Netflix</router-link></li>
            <li><router-link to="/movies/hulu_plus">Hulu</router-link></li>
            <li><router-link to="/movies/showtime">Showtime</router-link></li>
            <li><router-link to="/movies/free">All Free Sources</router-link></li>
            <li><router-link to="/movies/crackle">Crackle</router-link></li>
            <li><router-link to="/movies/popcornflix">PopcornFlix</router-link></li>
            <li><router-link to="/movies/vudu_free">Vudu</router-link></li>
          </ul>
        </div>
      </nav>
    </div>
  </section>

  <section class="main">
    <div class="container">
      <div v-if="loading">
        <scale-loader color="#ffffff"></scale-loader>
      </div>
      <div v-if="error">
        <div class="notification is-danger">
          Oh no! Something seems to have gone wrong. Try again later.
        </div>
      </div>
      <div class="columns is-multiline">
        <div v-for="movie in moviesData" class="column is-one-quarter">
          <router-link :to="{ name: 'MovieDetail', params: { id: movie.id }}">
            <img v-bind:src="movie.poster_400x570" class="is-fluid" />
          </router-link>
        </div>
      </div>
    </div>
  </section>

</div>
