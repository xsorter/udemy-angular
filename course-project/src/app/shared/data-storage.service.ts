import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import { RecipeService } from "../recipes/recipe.service";
import { Recipe } from "../recipes/recipe.model";
import { map } from 'rxjs/operators';
import { AuthService } from "../auth/auth.service";

@Injectable()
export class DataStorageService {
  constructor(private http: HttpClient, private recipeService: RecipeService, private authService: AuthService){}
  
  storeRecipes(){
    const req = new HttpRequest(
      'PUT', 
      'https://ng-recipe-book-f3d23.firebaseio.com/recipes.json', 
      this.recipeService.getRecipes(), {reportProgress: true, /*params: new HttpParams().set('auth', token)*/}
    )  
    return this.http.request(req)
  }

  getRecipes(){
    return this.http.get<Recipe[]>('https://ng-recipe-book-f3d23.firebaseio.com/recipes.json', {
      observe: 'body',
      responseType: 'json'
    })
      .pipe(
        map(
          (recipes) => {
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