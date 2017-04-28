import axios from 'axios';

export default {
  name: 'movies',
  props: [],
  mounted() {
    this.getAllMovies();
  },
  data() {
    return {
      moviesData: [],
    };
  },
  methods: {
    getAllMovies() {
      const url = 'http://api-public.guidebox.com/v2/movies?api_key=515ce266b75ac765a709d1cede86ace60bb4be3f&limit=100';
      axios.get(url)
        .then((res) => {
          this.moviesData = res.data.results;
        });
    },
  },
  computed: {

  },
};
