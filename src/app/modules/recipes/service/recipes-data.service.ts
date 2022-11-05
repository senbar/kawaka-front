import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { RecipeDTO } from '../../core/model/recipe.dto';
import { GetRecipesMock } from '../../core/model/recipes.mock';

@Injectable({
  providedIn: 'root'
})
export class RecipesDataService {

  constructor() { }

  GetRecipes():Observable<RecipeDTO[]>{
    return of(GetRecipesMock()).pipe(delay(200));
  }
}
