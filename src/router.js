import Vue from 'vue'
import Router from 'vue-router'
import AuthorList from './components/AuthorList.vue'
import BookList from './components/BookList.vue'
import AuthorDetail from './components/AuthorDetail.vue'
import BookDetail from './components/BookDetail.vue'
import BookEdit from './components/BookEdit.vue'
import BookCreate from './components/BookCreate.vue'

Vue.use(Router)

const routes = [
    {
        path: '/book',
        name: 'books',
        component: BookList,
    },
    {
        path: "/book/view/:id",
        name: "book-detail",
        component: BookDetail,
    },
    {
        path: "/book/new",
        name: "book-create",
        component: BookCreate,
    },
    {
        path: "/book/edit/:id",
        name: "book-edit",
        component: BookEdit,
    },
    {
        path: '/author',
        component: AuthorList,
    },
    {
        path: "/author/:id",
        name: "author-detail",
        component: AuthorDetail
    }
]

export default new Router({
    mode: "history",
    routes: routes
})