import GithubInput from '../GithubInput/index.vue'
import GithubOutput from  '../GithubOutput/index.vue'
import Chart from  '../Chart/index.vue'
import CommitChart from '../CommitChart/index.vue'
// import LineExample from '../LineChart/index.vue'

export default {
  name: 'App',

  components: {
    'github-input': GithubInput,
    'github-output': GithubOutput,
    'chart': Chart,
    'commit-chart': CommitChart,
    // 'line-example': LineExample,
  },

  data() {
    return {}
  }
}
