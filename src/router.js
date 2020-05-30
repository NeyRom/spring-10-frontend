import Vue from 'vue'
import Router from 'vue-router'
import AuthorList from './components/AuthorList.vue'
import BookView from './components/BookView.vue'

Vue.use(Router)

const routes = [
    { path: '/book', component: BookView },
    { path: '/author', component: AuthorList }
]

export default new Router({
    mode: "history",
    routes: routes
})