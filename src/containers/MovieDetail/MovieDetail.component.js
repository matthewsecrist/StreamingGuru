import axios from 'axios';
import { formatDetailRequest } from '../../utilities';

export default {
  name: 'movie-detail',
  props: [],
  mounted() {
    this.getMovieDetails();
  },
  data() {
    return {
      movieData: {},
    };
  },
  methods: {
    getMovieDetails() {
      const url = formatDetailRequest('movies', this.$route.params.id);
      axios.get(url)
        .then((res) => {
          console.log(res.data)
          this.movieData = res.data;
        });
    },
  },
  computed: {

  },
};
