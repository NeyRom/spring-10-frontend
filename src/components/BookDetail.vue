<template>
    <b-container>
        <b-row class="justify-content-md-center">
            <div class="col-sm-6">
                <b-card 
                header="Книга:"
                header-tag="header"
                :title="book.title">
                <b-card-text>
                    <p><b v-if="book.author != null">{{book.author.firstName}} {{book.author.lastName}}</b></p>
                    <p>ISBN: {{book.isbn}}</p>
                    <p>Дата выхода: {{book.releaseDate}}</p>
                    <div v-if="book.comments.length != 0">Комментарии:
                        <ul class="list-style">
                            <li v-for="comment in book.comments" :key="comment.content">
                                {{comment.content}} <i>({{comment.time}})</i>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <b-button variant="light" :to="{
                            name: 'book-edit',
                            params: { book: book, id: book.id }
                        }">Редактировать</b-button>
                        <b-button v-on:click="deleteBook()" variant="danger">Удалить</b-button>
                    </div>
                </b-card-text>
                </b-card>
                <b-form @submit="addComment()">
                    <b-form-group id="add-comment" label="Комментарий" label-for="comment">
                        <b-form-input id="comment" name="content" v-model="comment.content"></b-form-input>
                    </b-form-group>
                    <b-button type="submit" variant="light">Добавить комментарий</b-button>
                </b-form>
            </div>
        </b-row>
    </b-container>
</template>

<script>
import axios from 'axios'

export default {
    data: () => ({
        book: {},
        comment: {
            content: ''
        }
    }),

    created() {
        axios.get('/book/' + this.$route.params.id)
        .then(response => {
            this.book = response.data
        })
        .catch(e => {
            console.log(e)
        })
    },

    methods: {
        deleteBook() {
            axios.delete('/book/' + this.$route.params.id + '/delete')
            .then(() => {
                this.$router.push({ name: 'books' })
            }).catch(e => {
                console.log(e)
            })
        },
        addComment() {
            axios.post('/book/' + this.$route.params.id + '/comment', this.comment)
            .then(() => {
                console.log(this.content)
            })
            .catch(e => {
                console.log(e)
            })
        }
    }
}
</script>