import axios from 'axios';
import ScaleLoader from 'vue-spinner/src/ScaleLoader';
import { formatRequest } from '../../utilities';

export default {
  name: 'movies',
  components: {
    'scale-loader': ScaleLoader,
  },
  props: [],
  mounted() {
    this.getAllMovies();
  },
  data() {
    return {
      moviesData: [],
      error: null,
      loading: true,
    };
  },
  methods: {
    getAllMovies() {
      const url = formatRequest('movies', this.$route.params.source);
      axios.get(url)
        .then((res) => {
          this.moviesData = res.data.results;
        })
        .then(() => {
          this.loading = false;
        })
        .catch((err) => {
          this.loading = false;
          this.error = err.toString();
        });
    },
  },
};
