<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/recipes">Recipes</router-link>
      <router-link to="/create">Create</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>
