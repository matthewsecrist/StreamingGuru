import axios from 'axios';
import { formatDetailRequest, formatRelatedRequest } from '../../utilities';
import SourceLink from '../../components/SourceLink';

export default {
  name: 'show-detail',
  props: [],
  components: {
    'source-link': SourceLink,
  },
  mounted() {
    this.getShowDetails();
  },
  data() {
    return {
      showData: {},
      relatedShows: [],
    };
  },
  methods: {
    getShowDetails() {
      const url = formatDetailRequest('shows', this.$route.params.id);
      const related = formatRelatedRequest('shows', this.$route.params.id);
      axios.all([axios.get(url), axios.get(related)])
        .then(axios.spread((show, relatedShows) => {
          this.relatedShows = relatedShows.data.results;
          this.showData = show.data;
        }));
    },
  },
};
