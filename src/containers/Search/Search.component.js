import axios from 'axios';

export default {
  name: 'search',
  props: [],
  mounted() {

  },
  data() {
    return {
      results: [],
      type: 'movie',
      typeOptions: ['movie', 'show'],
      searchfield: '',
    };
  },
  methods: {
    onSubmit() {
      if (this.searchfield && this.searchfield !== '') {
        const url = `http://api-public.guidebox.com/v2/search?api_key=515ce266b75ac765a709d1cede86ace60bb4be3f&type=${this.type}&field=title&query=${this.searchfield}`;
        axios.get(url)
          .then((res) => {
            this.results = res.data.results;
          });
      }
    },
  },
  computed: {

  },
};
