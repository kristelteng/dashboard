import bus from '../../bus'

export default {
  name: 'GithubInput',

  methods: {
    onSubmit(event) {
      if (this.username && this.username !== '') {
        // import bus module and use it by emitting an event when the username changes
        bus.$emit('new-username', this.username)
      }
    }
  },

  data() {
    return {
      username: '',
    }
  }
}
