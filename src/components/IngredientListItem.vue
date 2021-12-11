<template>
  <div class="ingredient-list-item">
    <span class="ingredient-list-item__quantity">{{ ingredient.quantity }}</span>
    <span class="ingredient-list-item__unit">{{ ingredient.unit }} </span>
    <span class="ingredient-list-item__name">{{ ingredient.name }}</span>
  </div>
</template>

<script>
export default {
  name: 'ingredient-list-item',
  props: {
    ingredient: {
      type: Object,
      default: () => ({})
    }
  }
};
</script>

<style lang="scss" scoped>
.ingredient-list-item {
  color: #aaa;
}
</style>
