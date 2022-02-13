import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipesListComponent } from '../core/recipes-list/recipes-list.component';
import { AboutComponent } from '../core/about/about.component';
import { HomePageComponent } from './page/home-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CoreModule } from '../core/core.module';



@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    CoreModule
  ],
  exports:[
    HomePageComponent
  ]
})
export class LandingModule { }
