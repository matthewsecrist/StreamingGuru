import axios from 'axios';
import { formatRequest } from '../../utilities';

export default {
  name: 'movies',
  props: [],
  mounted() {
    this.getAllMovies();
  },
  data() {
    return {
      moviesData: [],
      error: null,
    };
  },
  methods: {
    getAllMovies() {
      const url = formatRequest('movies', this.$route.params.source);
      axios.get(url)
        .then((res) => {
          this.moviesData = res.data.results;
        })
        .catch((err) => {
          this.loading = false;
          this.error = err.toString();
        });
    },
  },
  updated() {
    this.getAllMovies();
  },
};
