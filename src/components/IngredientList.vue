<template>
  <ul class="ingredient-list">
    <li
      v-for="ingredient in ingredients"
      :key="ingredient.name"
      class="ingredient-list__item"
    >
      <ingredient-list-item :ingredient="ingredient" />
    </li>
  </ul>
</template>

<script>
import IngredientListItem from './IngredientListItem';

export default {
  name: 'ingredient-list',
  components: {
    IngredientListItem
  },
  props: {
    ingredients: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style lang="scss" scoped>
.ingredient-list {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
