import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RecipeDTO } from '../../../core/model/recipe.dto';
import { RecipesDataService } from '../../service/recipes-data.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent implements OnInit {

  constructor(private recipesDataService: RecipesDataService) {
    this.recipes$ = this.recipesDataService.GetRecipes();
  }

  recipes$: Observable<RecipeDTO[]>;

  ngOnInit(): void {
  }

}
