import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { AboutComponent } from './about/about.component';



@NgModule({
  declarations: [
    RecipesListComponent,
    AboutComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    RecipesListComponent,
    AboutComponent
  ]

})
export class CoreModule { }
