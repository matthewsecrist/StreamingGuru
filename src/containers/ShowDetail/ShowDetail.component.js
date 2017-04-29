import axios from 'axios';
import { formatDetailRequest, formatRelatedRequest, formatContentRequest } from '../../utilities';
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
      showContent: {},
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
        }));
    },
  },
};
