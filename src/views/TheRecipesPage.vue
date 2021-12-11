<template>
  <main class="the-recipes-page">
    <h1>The Recipes Page</h1>
    <recipe-list v-if="getRecipesResponse.data.length" :recipes="getRecipesResponse.data" />
  </main>
</template>

<script>
import { get } from 'lodash';
import { getRecipes } from '../../mocks/recipes';
import RecipeList from '../components/RecipeList';

export default {
  name: 'the-recipes-page',
  components: {
    RecipeList
  },
  data () {
    return {
      getRecipesResponse: {
        data: [],
        status: 'Default'
      }
    };
  },
  computed: {
    recipeCount() {
      return get(this.getRecipesResponse, 'data', []).length;
    }
  },
  created() {
    this.getRecipes();
  },
  methods: {
    async getRecipes () {
      const response = await getRecipes();
      this.getRecipesResponse.data = response;
      this.getRecipesResponse.status = 'Success';
    }
  }
};
</script>