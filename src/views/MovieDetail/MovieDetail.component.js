import axios from 'axios';
import ScaleLoader from 'vue-spinner/src/ScaleLoader';
import { formatDetailRequest, formatRelatedRequest } from '../../utilities';
import SourceLink from '../../components/SourceLink';

export default {
  name: 'movie-detail',
  components: {
    'source-link': SourceLink,
    'scale-loader': ScaleLoader,
  },
  props: [],
  mounted() {
    this.getMovieDetails();
  },
  data() {
    return {
      movieData: {},
      relatedMovies: [],
      loading: true,
      error: null,
    };
  },
  methods: {
    getMovieDetails() {
      const url = formatDetailRequest('movies', this.$route.params.id);
      const related = formatRelatedRequest('movies', this.$route.params.id);
      axios.all([axios.get(url), axios.get(related)])
        .then(axios.spread((movie, relatedMovies) => {
          this.relatedMovies = relatedMovies.data.results;
          this.movieData = movie.data;
        }))
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
