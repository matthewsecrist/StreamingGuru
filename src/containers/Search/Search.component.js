import axios from 'axios';
import ScaleLoader from 'vue-spinner/src/ScaleLoader';

export default {
  name: 'search',
  components: {
    'scale-loader': ScaleLoader,
  },
  props: [],
  mounted() {

  },
  data() {
    return {
      results: [],
      type: 'movie',
      typeOptions: ['movie', 'show'],
      searchfield: '',
      searchComplete: false,
      loading: false,
      error: false,
    };
  },
  methods: {
    onSubmit() {
      if (this.searchfield && this.searchfield !== '') {
        this.loading = true;
        const url = `http://api-public.guidebox.com/v2/search?api_key=515ce266b75ac765a709d1cede86ace60bb4be3f&type=${this.type}&field=title&query=${this.searchfield}`;
        axios.get(url)
          .then((res) => {
            this.results = res.data.results;
          })
          .then(() => {
            this.loading = false;
            this.searchComplete = true;
          })
          .catch((err) => {
            this.loading = false;
            this.error = err.toString();
          });
      }
    },
  },
};
