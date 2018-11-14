import { Recipe } from "./recipe.model";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'Authentic German Schnitzel', 
      'Best Schnitzel!', 
      'https://www.daringgourmet.com/wp-content/uploads/2014/03/Schnitzel-8-edited-6.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('Potato', 2)
      ]
      ),
    new Recipe(
      'Burger', 
      'classic Burger', 
      'https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fcdn-image.myrecipes.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2Fclassic-burgers-u.jpg%3Fitok%3DNwtAcM-7&w=800&c=sc&poi=face&q=85',
      [
        new Ingredient('Beef', 1),
        new Ingredient('Onion', 2)
      ]
      ),
  ];

  constructor(private shoppingService: ShoppingListService){}

  getRecipes(){
    return this.recipes.slice();
  }

  addIngredientsToList(ingredients: Ingredient[]){
    this.shoppingService.addIngredients(ingredients)
  }

}