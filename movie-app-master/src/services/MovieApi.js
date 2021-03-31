import axios from 'axios'

export default {

  fetchMovieCollection () {
    return axios.get()
      .then(response => {
        return response.data
      })
  },
  fetchLatestMovieCollection () {
    return axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=d4aad4d8341ffc22815084ec2e55fa11&language=en-US&page=1')
      .then(response => {
        return response.data
      })
  },
  fetchSingleMovie (id) {
    return axios.get('&i=' + id)
      .then(response => {
        return response.data
      })
  }
}
