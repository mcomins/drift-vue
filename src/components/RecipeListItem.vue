<template>
  <div class="recipe-list-item">
    <img class="recipe-list-item__image" :alt="recipe.imageDescription" :src="`images/${recipe.imageName}`" />
    <h2 class="recipe-list-item__title" className="recipe-list-item__title">{{ recipe.name }}</h2>
  </div>
</template>

<script>
export default {
  name: 'recipe-list-item',
  props: {
    recipe: {
      type: Object,
      default: () => ({})
    }
  }
};
</script>

<style lang="scss">
.recipe-list-item {
  &__image {
    display: block;
    height: 100px;
    width: 100px;
  }
}
</style>
