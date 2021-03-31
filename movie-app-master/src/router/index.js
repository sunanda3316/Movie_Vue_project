import Vue from 'vue'
import VueRouter from 'vue-router'
import LatestMovie from '@/components/LatestMovie'
import Movie from '@/components/Movie'
import TopRatedMovie from '@/components/TopRatedMovie'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'TopRatedMovie',
      component: TopRatedMovie
    },
    {
      path: '/movie/:id',
      name: 'Movie',
      props: true,
      component: Movie
    },
    {
      path: '/LatestMovies',
      name: 'LatestMovies',
      props: true,
      component: LatestMovie
    }
  ],
  mode: 'history'
})
