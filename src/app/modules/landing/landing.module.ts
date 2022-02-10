import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



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
