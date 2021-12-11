<template>
  <main class="the-recipe-detail-page">
    <h1>The Recipe Detail Page</h1>
    <recipe-detail v-if="getRecipeByIdResponse.data" :recipe="getRecipeByIdResponse.data"/>
  </main>
</template>

<script>
import RecipeDetail from '../components/RecipeDetail';
import { getRecipeById } from '../../mocks/recipes';

export default {
  name: 'the-recipe-detail-page',
  components: {
    RecipeDetail
  },
  data () {
    return {
      getRecipeByIdResponse: {
        data: undefined,
        status: 'Default'
      }
    };
  },
  created() {
    this.getRecipeById(this.$route.params.recipeId);
  },
  methods: {
    async getRecipeById (recipeId) {
      const response = await getRecipeById(recipeId);
      this.getRecipeByIdResponse.data = response;
      this.getRecipeByIdResponse.status = 'Success';
    }
  }
};
</script>
