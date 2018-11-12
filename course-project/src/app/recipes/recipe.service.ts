import { Recipe } from "./recipe.model";


export class RecipeService {
  recipes: Recipe[] = [
    new Recipe(
      'Pizza recipe', 
      'this is test recipe', 
      'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/frying-pan-pizza-easy-recipe-collection.jpg'
      ),
    new Recipe(
      'Pizza recipe 2', 
      'this is test recipe 2', 
      'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/frying-pan-pizza-easy-recipe-collection.jpg'
      ),
  ];

  getRecipes(){
    return this.recipes.slice();
  }
}