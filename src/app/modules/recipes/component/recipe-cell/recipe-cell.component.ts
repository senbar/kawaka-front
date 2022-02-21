import { Component, Input, OnInit } from '@angular/core';
import { RecipeDTO } from '../../model/recipe.dto';

@Component({
  selector: 'recipes-recipe-cell',
  templateUrl: './recipe-cell.component.html',
  styleUrls: ['./recipe-cell.component.scss']
})
export class RecipeCellComponent implements OnInit {

  @Input()
  model: RecipeDTO | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
