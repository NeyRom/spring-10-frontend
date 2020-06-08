<template>
    <b-container>
        <b-row class="justify-content-md-center">
            <div class="col-sm-6">
                <b-card 
                header="Автор:"
                header-tag="header"
                :title="author.firstName + ' ' + author.middleName + ' ' + author.lastName">

                </b-card>
            </div>
        </b-row>
    </b-container>
</template>

<script>
import axios from 'axios'

export default {
    data: () => ({
        author: []
    }),

    created() {
        axios.get('/author/' + this.$route.params.id)
        .then(response => {
            this.author = response.data
        })
        .catch(e => {
            console.log(e)
        })
    }
}
</script>