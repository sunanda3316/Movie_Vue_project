 <template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <router-link
        to='/'
        tag='span'
        style='cursor: pointer'>
          TOP RATED MOVIES
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-title class="headline text-uppercase">
        <router-link
        to='/LatestMovies'
        tag='span'
        style='cursor: pointer'>
          Latest MOVIES
        </router-link>
      </v-toolbar-title>      
      
    </v-toolbar>

    <v-content>
    <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  data () {
    return {
      searchString: ''
    }
  },
  methods: {
    searchMovie () {
      //axios.defaults.baseURL='https://api.themoviedb.org/3/movie/upcoming?api_key=d4aad4d8341ffc22815084ec2e55fa11&language=en-US&page=1&Content-Type=application/json'
      this.$router.push('/upcoming/' + this.searchString)
      this.searchString = ''
    }
  },
  computed: {
    dataAvailable () {
      return this.searchString !== null && this.searchString !== ''
    }
  }
}
</script>
