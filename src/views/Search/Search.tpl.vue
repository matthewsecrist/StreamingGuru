<div>
  <section class="hero is-primary is-medium is-bold">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          Search
        </h1>
        <h2 class="subtitle">
          Looking for something specific? Find it here.
        </h2>
      </div>
    </div>
  </section>
  <section class="main">
    <div class="container">
      <div>
        <form
          class="field has-addons has-addons-centered"
          v-on:submit.prevent="onSubmit"
        >
        <p class="control">
          <span class="select">
            <select v-model="type">
              <option v-for="option in typeOptions" v-bind:value="option">
                {{ option }}
              </option>
            </select>
          </span>
        </p>
          <p class="control is-expanded">
            <input
              class="input"
              type="text"
              v-model="searchfield"
              placeholder="Movie or Show title"
            />
          </p>
          <p class="control">
            <button class="button is-primary" type="submit">
              Search
            </button>
          </p>
        </form>
      </div>
      <section class="main">
        <div v-if="loading">
          <scale-loader color="#ffffff"></scale-loader>
        </div>
        <div v-if="error">
          <div class="notification is-danger">
            Oh no! Something seems to have gone wrong. Try again later.
          </div>
        </div>
        <div v-if="results.length < 1 && searchComplete">
          <div class="notification is-danger">
            We didn't find any results. :(
          </div>
        </div>
        <div class="columns is-multiline">
          <div v-for="result in results" class="column is-one-quarter">
            <div v-if="type === 'movie'">
              <router-link :to="{ name: 'MovieDetail', params: { id: result.id }}">
                <img v-bind:src="result.poster_400x570" class="is-fluid" />
              </router-link>
            </div>
            <div v-if="type === 'show'">
              <router-link :to="{ name: 'ShowDetail', params: { id: result.id }}">
                <img v-bind:src="result.artwork_608x342" />
              </router-link>
            </div>
          </div>
        </div>
      </section>
    </div>
  </section>
</div>
