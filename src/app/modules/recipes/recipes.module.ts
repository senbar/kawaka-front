import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipesListComponent } from './component/recipes-list/recipes-list.component';
import { RecipeCellComponent } from './component/recipe-cell/recipe-cell.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RecipeEditorComponent } from './component/recipe-editor/recipe-editor.component';



@NgModule({
  declarations: [RecipesListComponent, RecipeCellComponent, RecipeEditorComponent],
  imports: [CommonModule, SharedModule],
  exports: [RecipesListComponent, RecipeEditorComponent]
})
export class RecipesModule { }
