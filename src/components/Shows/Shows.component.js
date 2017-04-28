import axios from 'axios';

export default {
  name: 'shows',
  props: [],
  mounted() {
    this.getAllShows();
  },
  data() {
    return {
      showsData: [],
    };
  },
  methods: {
    getAllShows() {
      const url = 'http://api-public.guidebox.com/v2/shows?api_key=515ce266b75ac765a709d1cede86ace60bb4be3f&limit=100';
      axios.get(url)
        .then((res) => {
          console.log(res.data);
          this.showsData = res.data.results;
        });
    },
  },
  computed: {

  },
};
