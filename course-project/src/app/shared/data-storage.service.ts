import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { RecipeService } from "../recipes/recipe.service";
import { Recipe } from "../recipes/recipe.model";
import { map } from 'rxjs/operators';

@Injectable()
export class DataStorageService {
  constructor(private http: HttpClient, private recipeService: RecipeService){}
  
  storeRecipes(){
    return this.http.put('https://ng-recipe-book-f3d23.firebaseio.com/recipes.json', this.recipeService.getRecipes())
  }

  getRecipes(){
    return this.http.get('https://ng-recipe-book-f3d23.firebaseio.com/recipes.json')
      .pipe(
        map(
          (response: Recipe[]) => {
            const recipes: Recipe[] = response;
            for(let recipe of recipes){
              if(!recipe['ingredients']){
                recipe['ingredients'] = [];
              }
            }
            return recipes;
          }
        )
      )
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipeService.setRecipes(recipes);
        }
      )
  }
}