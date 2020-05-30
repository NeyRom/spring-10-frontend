<template>
    <b-container>
        <b-row class="justify-content-md-center">
            <h4 class="text-center">Авторы:</h4>
        </b-row>
        <b-row class="justify-content-md-center">
            <b-table-simple>
                <b-thead head-variant="dark">
                    <b-th>№</b-th>
                    <b-th>Автор</b-th>
                    <b-th>Подробности</b-th>
                </b-thead>
                <b-tbody>
                    <b-tr v-for="(author, index) in authors" :key="index">
                        <b-td>{{index + 1}}</b-td>
                        <b-td>{{author.firstName}} {{author.lastName}}</b-td>
                        <b-td><router-link to="/author/">{{author.id}}</router-link></b-td>
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
        authors: []
    }),

    created() {
        axios.get('/author')
        .then(response => {
            this.authors = response.data
        })
        .catch(e => {
            console.log(e)
        })
    }
}
</script>