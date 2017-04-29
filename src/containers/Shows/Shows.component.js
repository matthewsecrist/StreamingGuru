import axios from 'axios';
import { formatRequest } from '../../utilities';

export default {
  name: 'shows',
  props: [],
  mounted() {
    this.getAllShows();
  },
  data() {
    return {
      showsData: [],
      error: null,
    };
  },
  methods: {
    getAllShows() {
      const url = formatRequest('shows', this.$route.params.source);
      axios.get(url)
        .then((res) => {
          this.showsData = res.data.results;
        })
        .catch((err) => {
          this.error = err.toString();
        });
    },
  },
};
