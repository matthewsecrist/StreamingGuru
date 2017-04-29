import axios from 'axios';
import formatRequest from '../../utilities';

export default {
  name: 'movies',
  props: [],
  mounted() {
    this.getAllMovies();
  },
  data() {
    return {
      moviesData: [],
      loading: false,
      error: null,
    };
  },
  methods: {
    getAllMovies() {
      this.loading = true;
      const url = formatRequest('movies', this.$route.params.source);
      axios.get(url)
        .then((res) => {
          this.moviesData = res.data.results;
        }).then(() => {
          this.loading = false;
        })
        .catch((err) => {
          this.loading = false;
          this.error = err.toString();
        });
    },
  },
  updated() {
  },
};
