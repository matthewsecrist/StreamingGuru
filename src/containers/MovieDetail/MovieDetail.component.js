import axios from 'axios';
import { formatDetailRequest, formatRelatedRequest } from '../../utilities';
import SourceLink from '../../components/SourceLink';

export default {
  name: 'movie-detail',
  components: {
    'source-link': SourceLink,
  },
  props: [],
  mounted() {
    this.getMovieDetails();
  },
  data() {
    return {
      movieData: {},
      relatedMovies: [],
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
        }));
    },
  },
  updated() {

  },
};
