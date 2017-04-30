import axios from 'axios';
import ScaleLoader from 'vue-spinner/src/ScaleLoader';
import { formatRequest } from '../../utilities';

export default {
  name: 'shows',
  components: {
    'scale-loader': ScaleLoader,
  },
  props: [],
  mounted() {
    this.getAllShows();
  },
  data() {
    return {
      showsData: [],
      error: null,
      loading: true,
    };
  },
  methods: {
    getAllShows() {
      const url = formatRequest('shows', this.$route.params.source);
      axios.get(url)
        .then((res) => {
          this.showsData = res.data.results;
        })
        .then(() => {
          this.loading = false;
        })
        .catch((err) => {
          this.error = err.toString();
        });
    },
  },
};
