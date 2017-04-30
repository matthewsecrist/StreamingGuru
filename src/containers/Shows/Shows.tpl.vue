<div>
  <section class="hero is-medium is-primary is-bold">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
            Shows
          </h1>
        <h2 class="subtitle">
            Start a series. Find a perfect one.
          </h2>
      </div>
    </div>
    <div class="hero-foot">
      <nav class="tabs">
        <div class="container is-fullwidth">
          <ul>
            <li><router-link to="/shows">All shows</router-link></li>
            <li><router-link to="/shows/amazon_prime">Amazon Prime</router-link></li>
            <li><router-link to="/shows/starz_amazon_prime">Starz</router-link></li>
            <li><router-link to="/shows/hbo_now">HBO</router-link></li>
            <li><router-link to="/shows/netflix">Netflix</router-link></li>
            <li><router-link to="/shows/hulu_plus">Hulu</router-link></li>
            <li><router-link to="/shows/showtime">Showtime</router-link></li>
            <li><router-link to="/shows/free">All Free Sources</router-link></li>
            <li><router-link to="/shows/crackle">Crackle</router-link></li>
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
        <div v-for="show in showsData" class="column is-one-quarter">
          <router-link :to="{ name: 'ShowDetail', params: { id: show.id }}">
            <img v-bind:src="show.artwork_608x342" />
          </router-link>
        </div>
      </div>
    </div>
  </section>
</div>
