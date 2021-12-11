const recipes = [
  {
    id: 'saturn',
    name: 'Saturn',
    imageName: 'saturn.png',
    imageDescription: '',
    sourceName: 'Liber & Co',
    sourceLink: 'https://www.liberandcompany.com/collections/recipes/products/saturn',
    ingredients: [
      {
        name: 'gin',
        quantity: 2,
        unit: 'oz'
      },
      {
        name: 'falernum',
        quantity: 0.25,
        unit: 'oz'
      },
      {
        name: 'orgeat',
        quantity: 0.25,
        unit: 'oz'
      },
      {
        name: 'passionfruit syrup',
        quantity: 0.5,
        unit: 'oz'
      },
      {
        name: 'lemon juice',
        quantity: 0.75,
        unit: 'oz'
      }
    ],
    garnish: ''
  },
  {
    id: 'gold-rush',
    name: 'Gold Rush',
    imageName: 'gold-rush.png',
    imageDescription: '',
    sourceName: 'Liber & Co',
    sourceLink: 'https://www.liberandcompany.com/collections/recipes/products/saturn',
    ingredients: [
      {
        name: 'gin',
        quantity: 2,
        unit: 'oz'
      },
      {
        name: 'falernum',
        quantity: 0.25,
        unit: 'oz'
      },
      {
        name: 'orgeat',
        quantity: 0.25,
        unit: 'oz'
      },
      {
        name: 'passionfruit syrup',
        quantity: 0.5,
        unit: 'oz'
      },
      {
        name: 'lemon juice',
        quantity: 0.75,
        unit: 'oz'
      }
    ],
    garnish: ''
  }
];

const getRecipes = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(recipes);
    }, 1000);
  });
};

const getRecipeById = (recipeId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(recipes.find(recipe => recipe.id === recipeId));
    }, 1000);
  });
};

export {
  getRecipes,
  getRecipeById
};
