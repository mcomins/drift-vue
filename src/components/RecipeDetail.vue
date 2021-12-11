<template>
  <article class="recipe-detail">
    <div class="recipe-detail__image-container">
      <img class="recipe-detail__image" :alt="recipe.imageDescription" :src="`images/${recipe.imageName}`" />
    </div>
    <div class="recipe-detail__text-container">
      <h1 class="recipe-detail__title">{{ recipe.name }}</h1>
      <p class="recipe-detail__description">{{ recipe.description }}</p>
      <section class="recipe-detail__section">
        <h2 class="recipe-detail__section-title">Ingredients</h2>
        <ingredient-list :ingredients="recipe.ingredients" class="recipe-detail__ingredients"/>
      </section>
      
    </div>
    
  </article>
</template>

<script>
import IngredientList from './IngredientList';

export default {
  name: 'recipe-detail',
  components: {
    IngredientList
  },
  props: {
    recipe: {
      type: Object,
      default: () => ({})
    }
  }
};
</script>

<style lang="scss">
.recipe-detail {
  &__image {
    display: block;
    height: 100px;
    width: 100px;
  }
}
</style>
