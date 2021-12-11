import Vue from 'vue';
import VueRouter from 'vue-router';
import TheHomePage from '../views/TheHomePage';
import TheCreatePage from '../views/TheCreatePage';
import TheRecipeDetailPage from '../views/TheRecipeDetailPage';
import TheRecipesPage from '../views/TheRecipesPage';

Vue.use(VueRouter);

const routes = [
  { path: '/', name: 'Home', component: TheHomePage },
  { path: '/recipes', name: 'Recipes', component: TheRecipesPage },
  { path: '/recipes/:recipeId', name: 'Recipe Detail', component: TheRecipeDetailPage },
  { path: '/create', name: 'Create', component: TheCreatePage }
];

export default new VueRouter({ mode: 'history', routes });
