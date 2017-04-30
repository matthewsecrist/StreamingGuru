import axios from 'axios';
import ScaleLoader from 'vue-spinner/src/ScaleLoader';
import { formatDetailRequest, formatRelatedRequest, formatContentRequest } from '../../utilities';
import SourceLink from '../../components/SourceLink';

export default {
  name: 'show-detail',
  props: [],
  components: {
    'source-link': SourceLink,
    'scale-loader': ScaleLoader,
  },
  mounted() {
    this.getShowDetails();
  },
  data() {
    return {
      showData: {},
      relatedShows: [],
      showContent: {},
      loading: true,
      error: null,
    };
  },
  methods: {
    getShowDetails() {
      const url = formatDetailRequest('shows', this.$route.params.id);
      const related = formatRelatedRequest('shows', this.$route.params.id);
      const content = formatContentRequest('shows', this.$route.params.id);
      axios.all([axios.get(url), axios.get(related), axios.get(content)])
        .then(axios.spread((show, relatedShows, showContent) => {
          this.relatedShows = relatedShows.data.results;
          this.showContent = showContent.data.results;
          this.showData = show.data;
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
