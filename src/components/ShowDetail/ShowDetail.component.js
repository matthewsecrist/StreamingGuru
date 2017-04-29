import axios from 'axios';
import { formatDetailRequest } from '../../utilities';

export default {
  name: 'show-detail',
  props: [],
  mounted() {
    this.getShowDetails();
  },
  data() {
    return {
      showData: {},
    };
  },
  methods: {
    getShowDetails() {
      const url = formatDetailRequest('shows', this.$route.params.id);
      axios.get(url)
        .then((res) => {
          console.log(res.data)
          this.showData = res.data;
        });
    },
  },
  computed: {

  },
};
