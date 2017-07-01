import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Chart from '../Chart/index.vue'

Vue.use(VueAxios, axios);

export default {
  name: 'Chart',

  components: {
    'chart': Chart,
  },

  props: ['data'],

  // methods: {
  //   fetchData() {
  //     axios.get('https://affiliates-staging.plny.it/products/stats/?ig=491023&start_date=2017-05-20&end_date=2017-05-27').then(response => {
  //       console.log("response");
  //       this.responseData = response.data;
  //     }).catch(error => {
  //       console.error("error");
  //     });
  //   }
  // },

  methods: {
    fetchData() {
      axios.get('https://affiliates-staging.plny.it/products/stats/?ig=491023&start_date=2017-05-20&end_date=2017-05-27')
      .then(response => {
        this.status = response.data;
      })
      .catch(error => {
        console.error("error");
      });
    }
  },

  created() {
    this.fetchData();
  },

  data() {
    return {
      status: [
        {clicks: ''},
        {commission: ''},
        {dateRange: ''}
      ]
    }
  }
}
