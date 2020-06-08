<template>
  <b-container id="app">
    <b-navbar type="light" variant="light">
      <b-navbar-brand href="#">BookStore</b-navbar-brand>
      <b-navbar-nav>
        <b-nav-item to="/book">Книги</b-nav-item>  
        <b-nav-item to="/author">Авторы</b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
        <b-button size="sm" to="/book/new" type="submit">Добавить книгу</b-button>
      </b-navbar-nav>
    </b-navbar>
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
