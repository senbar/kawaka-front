import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { RecipeDTO } from '../model/recipe.dto';
import { GetRecipesMock } from '../model/recipes.mock';

@Injectable({
  providedIn: 'root'
})
export class RecipesDataService {

  constructor() { }

  GetRecipes():Observable<RecipeDTO[]>{
    return of(GetRecipesMock()).pipe(delay(200));
  }
}
