<template>
    <b-container>
        <b-row class="justify-content-md-center">
            <h4 class="text-center">Книги:</h4>
        </b-row>
        <b-row class="justify-content-md-center">
            <b-table-simple>
                <b-thead head-variant="dark">
                    <b-th>№</b-th>
                    <b-th>Название</b-th>
                    <b-th>Автор</b-th>
                    <b-th>ISBN</b-th>
                    <b-th>Дата выхода</b-th>
                    <b-th>Жанры</b-th>
                    <b-th>Подробности</b-th>
                </b-thead>
                <b-tbody>
                    <b-tr v-for="(book, index) in books" :key="index">
                        <b-td>{{index + 1}}</b-td>
                        <b-td>{{book.title}}</b-td>
                        <b-td><span v-if="book.author != null">{{book.author.firstName}} {{book.author.lastName}}</span></b-td>
                        <b-td>{{book.isbn}}</b-td>
                        <b-td>{{book.releaseDate}}</b-td>
                        <b-td>
                            <span v-for="genre in book.genres" :key="genre.title">{{genre.title}} </span>
                        </b-td>
                        <b-td><router-link :to="{
                            name: 'book-detail',
                            params: { book: book, id: book.id }
                        }">Подробности
                        </router-link></b-td>
                    </b-tr>
                </b-tbody>
            </b-table-simple>
        </b-row>
    </b-container>
</template>

<script>
import axios from 'axios'

export default {
    data: () => ({
        books: []
    }),

    created() {
        axios.get('/book')
        .then(response => {
            this.books = response.data
        })
        .catch(e => {
            console.log(e)
        })
    }
}
</script>