import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipesListComponent } from './component/recipes-list/recipes-list.component';
import { RecipeCellComponent } from './component/recipe-cell/recipe-cell.component';



@NgModule({
  declarations: [RecipesListComponent, RecipeCellComponent],
  imports: [ CommonModule ],
  exports:[RecipesListComponent]
})
export class RecipesModule { }
