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
      loading: false,
      error: null,
    };
  },
  methods: {
    getAllShows() {
      this.loading = true;
      const url = formatRequest('shows', this.$route.params.source);
      axios.get(url)
        .then((res) => {
          this.showsData = res.data.results;
        }).then(() => {
          this.loading = false;
        })
        .catch((err) => {
          this.loading = false;
          this.error = err.toString();
        });
    },
  },
  computed: {

  },
};
