<template>
  <b-container id="app">
    <b-row class="justify-content-md-center">
      <router-link class="btn btn-primary" to="/book">Книги</router-link>
      <router-link class="btn btn-primary" to="/author">Авторы</router-link>
    </b-row>
    <b-row>
      <router-view/>
    </b-row>
  </b-container>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>

</style>
