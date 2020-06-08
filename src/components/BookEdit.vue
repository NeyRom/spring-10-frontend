<template>
    <b-container>
        <b-row class="justify-content-md-center">
            <div class="col-sm-6">
                <h4 class="text-center">Редактировать книгу:</h4>
        
            <b-form @submit="editBook()">
                <b-form-group label="Название" label-for="title">
                    <b-form-input id="title" v-model="book.title"></b-form-input>
                </b-form-group>
                <b-form-group label="ISBN" label-for="isbn">
                    <b-form-input id="isbn" v-model="book.isbn"></b-form-input>
                </b-form-group>
                <b-form-group label="Дата выхода" label-for="releaseDate">
                    <b-form-datepicker id="releaseDate" v-model="book.releaseDate"></b-form-datepicker>
                </b-form-group>
                <b-button type="submit" variant="primary">Отправить</b-button>
            </b-form>
            </div>
        </b-row>
    </b-container>
</template>

<script>
import axios from 'axios'

export default {
    data: () => ({
        book: {}
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
        editBook() {
            axios.put('/book/' + this.$route.params.id + '/edit', this.book)
            .then((response) => {
                this.book = response.data
                this.$router.push({ name: 'book-detail', params: { id: this.book.id } })
            }).catch(e => {
                console.log(e)
            })
        }
    }
}
</script>