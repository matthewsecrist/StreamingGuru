<section class="show-detail" v-if="movieData.title">
  <section class="hero is-primary is-medium is-bold">
    <div class="hero-body">
      <div class="container">
        <div class="columns">
          <div class="column is-two-thirds">
            <h1 class="title">
              {{ movieData.title }}
            </h1>
            <h2 class="subtitle">
              {{ movieData.overview }}
            </h2>
            <!-- Start Sources Section -->
            <div class="columns">
              <div class="column is-4">
                <p>Purchase</p>
                <source-link
                  v-for="source in movieData.purchase_web_sources"
                  v-bind:name="source.display_name"
                  v-bind:link="source.link"
                  v-bind:key="source.id">
                </source-link>
              </div>
              <div class="column is-4">
                <p>Watch With Subscription</p>
                <source-link
                  v-for="source in movieData.subscription_web_sources"
                  v-bind:name="source.display_name"
                  v-bind:link="source.link"
                  v-bind:key="source.id">
                </source-link>
              </div>
              <div class="column is-4">
                <p>Watch for Free</p>
                <source-link
                  v-for="source in movieData.free_web_sources"
                  v-bind:name="source.display_name"
                  v-bind:link="source.link"
                  v-bind:key="source.id">
                </source-link>
              </div>
            </div>
            <div class="columns">
              <div class="column is-one-quarter">
                <h2 class="subtitle">Directed by</h2>
                <ul>
                  <li v-for="director in movieData.directors">
                    <a href="http://www.imdb.com/name/" target="_blank">{{ director.name }}</a>
                  </li>
                </ul>
              </div>
              <div class="column is-one-quarter">
                <h2 class="subtitle">Written by</h2>
                <ul>
                  <li v-for="writer in movieData.writers">
                    <a href="http://www.imdb.com/name/" target="_blank">{{ writer.name }}</a>
                  </li>
                </ul>
              </div>
              <div class="column is-one-quarter">
                <h2 class="subtitle">Starring</h2>
                <ul>
                  <li v-for="member in movieData.cast.slice(0, 10)">
                    <a href="http://www.imdb.com/name/" target="_blank">{{ member.name }}</a>
                  </li>
                </ul>
              </div>
              <div class="column is-one-quarter">
                <h2 class="subtitle"><br /></h2>
                <ul>
                  <li v-for="member in movieData.cast.slice(10, 20)">
                    <a href="http://www.imdb.com/name/" target="_blank">{{ member.name }}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <!-- End Left Side -->
          <div class="auto">
            <img v-bind:src="movieData.poster_400x570" class="is-fluid" />
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- End header section -->
  <!-- Related Movies Section -->
  <section class="main">
    <div class="container">
      <h1 class="title is-white">Related Movies</h1>
      <h2 class="subtitle is-white">Not what you're looking for? Find something like it.</h2>
      <div class="columns is-multiline">
        <div v-for="movie in relatedMovies.slice(0, 8)" class="column is-one-quarter">
          <router-link :to="{ name: 'MovieDetail', params: { id: movie.id }}">
            <img v-bind:src="movie.poster_400x570" class="is-fluid" />
          </router-link>
        </div>
      </div>
    </div>
  </section>
</section>
