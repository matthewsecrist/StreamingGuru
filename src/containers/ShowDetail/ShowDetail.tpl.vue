<section class="show-detail" v-if="showData.title">
  <section class="hero is-primary is-medium is-bold">
    <div class="hero-body">
      <div class="container">
        <div class="columns">
          <div class="column is-two-thirds">
            <h1 class="title">
              {{ showData.title }}
            </h1>
            <h2 class="subtitle">
              {{ showData.overview }}
            </h2>
            <!-- Start Sources Section -->
            <div class="columns">
              <div class="column auto">
                <p>Where to Watch</p>
                <source-link
                  v-for="source in showContent.web.episodes.all_sources"
                  v-bind:name="source.display_name"
                  v-bind:key="source.id">
                </source-link>
              </div>
            </div>
            <div class="columns">
              <div class="column is-one-quarter">
                <h2 class="subtitle">Starring</h2>
                <ul>
                  <li v-for="member in showData.cast.slice(0, 10)">
                    <a href="http://www.imdb.com/name/" target="_blank">{{ member.name }}</a>
                  </li>
                </ul>
              </div>
              <div class="column is-one-quarter">
                <h2 class="subtitle"><br /></h2>
                <ul>
                  <li v-for="member in showData.cast.slice(10, 20)">
                    <a href="http://www.imdb.com/name/" target="_blank">{{ member.name }}</a>
                  </li>
                </ul>
              </div>
              <div class="column is-one-quarter">
                <h2 class="subtitle"><br /></h2>
                <ul>
                  <li v-for="member in showData.cast.slice(20, 30)">
                    <a href="http://www.imdb.com/name/" target="_blank">{{ member.name }}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <!-- End Left Side -->
          <div class="auto">
            <img v-bind:src="showData.poster" class="is-fluid" />
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="main">
    <div class="container">
      <h1 class="title is-white">Related Shows</h1>
      <h2 class="subtitle is-white">Not what you're looking for? Find something like it.</h2>
      <div class="columns is-multiline">
        <div v-for="show in relatedShows.slice(0, 24)" class="column is-one-quarter">
          <router-link :to="{ name: 'ShowDetail', params: { id: show.id }}">
            <img v-bind:src="show.artwork_608x342" class="is-fluid" />
          </router-link>
        </div>
      </div>
    </div>
  </section>
</section>
