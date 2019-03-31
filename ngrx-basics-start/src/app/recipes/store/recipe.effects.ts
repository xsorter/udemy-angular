import { Effect, Actions } from "@ngrx/effects";
import * as RecipeActions from "../store/recipe.actions";
import { HttpClient } from "@angular/common/http";
import { Recipe } from "../recipe.model";

export class RecipeEffects {
  @Effect()
  recipeFetch = this.actions$
    .ofType(RecipeActions.FETCH_RECIPES)
    .switchMap(
      (action: RecipeActions.FetchRecipes) => {
        return this.httpClient.get<Recipe[]>('https://ng-recipe-book-f3d23.firebaseio.com/recipes.json', {
          observe: 'body',
          responseType: 'json'
        })
      }
    )
    .map(
        (recipes) => {
          console.log(recipes);
          for (let recipe of recipes) {
            if (!recipe['ingredients']) {
              recipe['ingredients'] = [];
            }
          }
        return {
          type: RecipeActions.SET_RECIPES,
          payload: recipes
        };
      }
    )
  
  constructor(private actions$: Actions, private httpClient: HttpClient){} 
}