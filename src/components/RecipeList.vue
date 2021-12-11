<template>
  <ul class="recipe-list">
    <li
      v-for="recipe in recipes"
      :key="recipe.id"
      class="recipe-list__item"
    >
      <recipe-list-item :recipe="recipe" />
    </li>
  </ul>
</template>

<script>
import RecipeListItem from './RecipeListItem';

export default {
  name: 'recipe-list',
  components: {
    RecipeListItem
  },
  props: {
    recipes: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style lang="scss" scoped>
.recipe-list {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
